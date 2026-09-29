import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import * as THREE from "three";
import { ArrowDown, ArrowRight, Check, Menu, Phone, X } from "lucide-react";
import "./styles.css";

const phone = "923352241";

const toppings = [
    { name: "Morango", emoji: "🍓", group: "Fruta" },
    { name: "Banana", emoji: "🍌", group: "Fruta" },
    { name: "Kiwi", emoji: "🥝", group: "Fruta" },
    { name: "Mirtilo", emoji: "🫐", group: "Fruta" },
    { name: "Coco", emoji: "🥥", group: "Toppings" },
    { name: "Chocolate", emoji: "🍫", group: "Toppings" },
    { name: "Granola", emoji: "🌾", group: "Toppings" },
    { name: "Crocantes", emoji: "🥜", group: "Toppings" },
    { name: "Calda de chocolate", emoji: "🍫", group: "Molhos" },
    { name: "Calda de morango", emoji: "🍓", group: "Molhos" },
    { name: "Leite condensado", emoji: "🥛", group: "Molhos" },
    { name: "Mel", emoji: "🍯", group: "Molhos" }
];

/* ---------- Ambientação: floresta ao amanhecer, com camadas em paralaxe ---------- */

const treeline = (seed, base, amp) => {
    let d = `M0 ${base + 400} L0 ${base}`;
    for (let x = 0; x <= 1440; x += 12) {
        const y = base - amp * (0.55 + 0.45 * Math.sin(x * 0.021 + seed) * Math.sin(x * 0.047 + seed * 2.3)) - amp * 0.25 * Math.abs(Math.sin(x * 0.13 + seed));
        d += ` L${x} ${y.toFixed(1)}`;
    }
    return `${d} L1440 ${base + 400} Z`;
};
const FAR = treeline(1.3, 250, 70);
const MID = treeline(4.1, 290, 80);

function Palm({ x, y, h, lean }) {
    const tx = x + lean, ty = y - h, L = h * 0.55;
    const fronds = [-165, -140, -115, -90, -65, -40, -15].map((a) => {
        const r = (a * Math.PI) / 180;
        const ex = tx + Math.cos(r) * L, ey = ty + Math.sin(r) * L * 0.35 + L * 0.45;
        const cx = tx + Math.cos(r) * L * 0.55, cy = ty + Math.sin(r) * L * 0.9;
        return `M${tx} ${ty} Q${cx} ${cy} ${ex} ${ey}`;
    });
    return (
        <g>
            <path d={`M${x} ${y} Q${x + lean * 0.1} ${y - h * 0.55} ${tx} ${ty}`} strokeWidth="7" />
            {fronds.map((d, i) => <path key={i} d={d} strokeWidth="4" />)}
        </g>
    );
}

const LEAF = "M0 0 C60 -70 200 -90 300 -20 C210 -10 90 30 0 0Z";
const VEIN = "M8 0 C100 -32 200 -42 290 -22";
const leaves = [
    { a: -95, s: 0.9, c: "#143423" }, { a: -70, s: 1.1, c: "#173d27" },
    { a: -45, s: 1.25, c: "#1f5233" }, { a: -20, s: 1.3, c: "#276a3f" }, { a: 5, s: 1.1, c: "#1d4a2e" }
];
const Cluster = ({ transform }) => (
    <g transform={transform}>
        {leaves.map((l, i) => (
            <g key={i} transform={`rotate(${l.a}) scale(${l.s})`}>
                <path d={LEAF} fill={l.c} />
                <path d={VEIN} fill="none" stroke="rgba(255,255,255,.16)" strokeWidth="2" />
            </g>
        ))}
    </g>
);

function Ambience() {
    return (
        <div className="ambience" aria-hidden="true">
            <div className="sun" />
            <div className="cloud c1" /><div className="cloud c2" /><div className="cloud c3" /><div className="cloud c4" />
            <svg className="layer far" viewBox="0 0 1440 400" preserveAspectRatio="xMidYMax slice"><path d={FAR} /></svg>
            <svg className="layer mid" viewBox="0 0 1440 400" preserveAspectRatio="xMidYMax slice">
                <path className="canopy" d={MID} />
                <g className="palms">
                    <Palm x={170} y={340} h={215} lean={40} />
                    <Palm x={470} y={335} h={165} lean={-30} />
                    <Palm x={990} y={335} h={205} lean={-45} />
                    <Palm x={1270} y={340} h={170} lean={35} />
                </g>
            </svg>
            <div className="mist" />
            <svg className="layer fore" viewBox="0 0 1440 500" preserveAspectRatio="xMidYMax slice">
                <Cluster transform="translate(-40 520)" />
                <Cluster transform="translate(1480 520) scale(-1 1)" />
            </svg>
        </div>
    );
}

/* ---------- Copo 3D (foto real dobrada em cilindro) ---------- */

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
const easeOutBack = (t) => {
    const c1 = 1.70158, c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};
const smoothstep = (t) => t * t * (3 - 2 * t);

// Percurso do copo ao longo do scroll: [início, fruta, toppings, molhos, saída, fim]
const KP = [0, 0.31, 0.53, 0.75, 0.93, 1];
const keyed = (p, vals) => {
    for (let i = 0; i < KP.length - 1; i++) {
        if (p <= KP[i + 1]) {
            const t = (p - KP[i]) / (KP[i + 1] - KP[i]);
            return vals[i] + (vals[i + 1] - vals[i]) * smoothstep(t);
        }
    }
    return vals[vals.length - 1];
};
const K_X = [0, 1, -1, 1, 0, 0];
const K_S = [0.78, 0.95, 1, 0.95, 0.85, 0.55];
const K_Y = [0, 0, 0, 0, 0, 3.2];
const K_RZ = [0, 0.2, -0.22, 0.2, 0, 0];
const K_RY = [0, -0.5, 0.5, -0.5, 0, 0];

function softTexture(inner, outer) {
    const c = document.createElement("canvas");
    c.width = c.height = 128;
    const g = c.getContext("2d");
    const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    grad.addColorStop(0, inner);
    grad.addColorStop(1, outer);
    g.fillStyle = grad;
    g.fillRect(0, 0, 128, 128);
    return new THREE.CanvasTexture(c);
}

function AcaiCup({ progressRef, image = "/images/acai-cup.png" }) {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        const root = document.documentElement;
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
        camera.position.set(0, 0.2, 10);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        mount.appendChild(renderer.domElement);

        const glow = new THREE.Sprite(new THREE.SpriteMaterial({
            map: softTexture("rgba(255,255,255,.7)", "rgba(255,255,255,0)"), transparent: true, depthWrite: false
        }));
        glow.scale.set(6.5, 6.5, 1);
        glow.position.z = -1.5;
        scene.add(glow);

        const cup = new THREE.Group();
        scene.add(cup);

        new THREE.TextureLoader().load(image, (tex) => {
            tex.colorSpace = THREE.SRGBColorSpace;
            tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
            const H = 3.7;
            const W = H * (tex.image.width / tex.image.height);
            const geo = new THREE.PlaneGeometry(W, H, 48, 1);
            const R = W * 0.6;
            const pos = geo.attributes.position;
            for (let i = 0; i < pos.count; i++) {
                const x = Math.max(-R * 0.99, Math.min(R * 0.99, pos.getX(i)));
                pos.setZ(i, Math.sqrt(R * R - x * x) - R);
            }
            geo.computeVertexNormals();
            cup.add(new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: tex, transparent: true, alphaTest: 0.02, side: THREE.DoubleSide })));
        });

        let wide = true;
        const resize = () => {
            const w = mount.clientWidth || window.innerWidth;
            const h = mount.clientHeight || window.innerHeight;
            renderer.setSize(w, h);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            wide = w / h > 1.1;
        };
        resize();
        window.addEventListener("resize", resize);

        const pointer = { x: 0, y: 0, sx: 0, sy: 0 };
        const onMove = (e) => {
            pointer.x = (e.clientX / window.innerWidth - 0.5) * 2;
            pointer.y = (e.clientY / window.innerHeight - 0.5) * 2;
        };
        window.addEventListener("pointermove", onMove, { passive: true });

        const clock = new THREE.Clock();
        let smooth = progressRef.current;
        let frame;
        const tick = () => {
            const t = clock.getElapsedTime();
            smooth += (progressRef.current - smooth) * (reduced ? 1 : 1 - Math.exp(-0.016 / 0.16));
            pointer.sx += (pointer.x - pointer.sx) * 0.05;
            pointer.sy += (pointer.y - pointer.sy) * 0.05;
            root.style.setProperty("--sp", smooth.toFixed(4)); // move o cenário

            const k = reduced ? 1 : clamp01((t - 0.2) / 1.6);
            const rise = 1 - easeOutBack(k);
            const float = Math.sin(t * 0.9) * 0.09;
            const amp = Math.min(2, camera.aspect * 1.05);
            const wobble = reduced ? 0 : Math.sin(t * 0.6) * 0.05;

            const x = wide ? keyed(smooth, K_X) * amp : 0;
            const s = keyed(smooth, K_S) * (wide ? 1 : 0.78) * (0.75 + 0.25 * easeOutCubic(k));
            const baseY = (wide ? 0 : -0.7) + keyed(smooth, K_Y);

            cup.position.set(x + pointer.sx * 0.12, baseY + rise * -4 + float, 0);
            cup.scale.setScalar(s);
            cup.rotation.y = keyed(smooth, K_RY) * (wide ? 1 : 0.4) + wobble + pointer.sx * 0.22 + (1 - easeOutCubic(k)) * -1.1;
            cup.rotation.z = keyed(smooth, K_RZ) + wobble * 0.5;
            cup.rotation.x = pointer.sy * 0.08;
            glow.position.set(cup.position.x, cup.position.y, -1.5);
            glow.material.opacity = 0.55;

            mount.style.opacity = 1 - clamp01((smooth - 0.9) / 0.1);

            renderer.render(scene, camera);
            frame = requestAnimationFrame(tick);
        };
        tick();

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("resize", resize);
            window.removeEventListener("pointermove", onMove);
            scene.traverse((o) => {
                if (o.geometry) o.geometry.dispose();
                if (o.material) [].concat(o.material).forEach((m) => { m.map?.dispose(); m.dispose(); });
            });
            renderer.dispose();
            mount.removeChild(renderer.domElement);
        };
    }, [progressRef, image]);

    return <div className="cup-canvas" ref={mountRef} aria-hidden="true" />;
}

/* ---------- Página ---------- */

const sceneFor = (p) => (p < 0.2 ? "intro" : p < 0.42 ? "fruta" : p < 0.64 ? "toppings" : p < 0.86 ? "molhos" : "exit");

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selected, setSelected] = useState([]);
    const progress = useRef(0);

    useEffect(() => {
        const root = document.documentElement;
        root.dataset.scene = "intro";
        const onScroll = () => {
            const section = document.getElementById("scroll-story");
            if (!section) return;
            const bounds = section.getBoundingClientRect();
            const range = bounds.height - window.innerHeight;
            progress.current = range > 0 ? Math.min(1, Math.max(0, -bounds.top / range)) : 0;
            const scene = sceneFor(progress.current);
            if (root.dataset.scene !== scene) root.dataset.scene = scene;
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const toggleTopping = (name) => {
        setSelected((current) => current.includes(name)
            ? current.filter((item) => item !== name)
            : [...current, name]);
    };

    const closeMenu = () => setMenuOpen(false);
    const groups = [...new Set(toppings.map((topping) => topping.group))];

    return (
        <div className="app">
            <Ambience />
            <AcaiCup progressRef={progress} />

            <header className="navbar">
                <a className="logo" href="#inicio" onClick={closeMenu}>
                    <span className="logo-mark">P</span>
                    <span>Pé de <b>Açaí</b></span>
                </a>
                <nav className={menuOpen ? "nav-links open" : "nav-links"}>
                    <a href="#inicio" onClick={closeMenu}>Início</a>
                    <a href="#monta" onClick={closeMenu}>Como funciona</a>
                    <a href="#contacto" onClick={closeMenu}>Contacto</a>
                </nav>
                <a className="nav-cta" href={`tel:${phone}`}><Phone size={17} /> Ligar</a>
                <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>
                    {menuOpen ? <X /> : <Menu />}
                </button>
            </header>

            <main>
                <section className="story" id="scroll-story">
                    <div className="stage" id="inicio">
                        <div className="hero-top">
                            <h1><span className="line"><span>O teu açaí.</span></span></h1>
                        </div>
                        <div className="hero-bottom">
                            <p className="hero-copy">Escolhe, monta e pesa. Junta fruta, toppings e molhos para criar uma taça só tua.</p>
                            <div className="hero-actions">
                                <a className="primary-button" href="#monta">Experimentar combinações <ArrowRight size={18} /></a>
                                <a className="scroll-cue" href="#monta"><ArrowDown size={15} /> Desce para ver</a>
                            </div>
                        </div>

                        <div className="panel panel-fruta left">
                            <h2>Começa pela fruta.</h2>
                            <p>Morango, banana, kiwi e mirtilo. Fresca e cortada na hora.</p>
                        </div>
                        <div className="panel panel-toppings right">
                            <h2>Depois, o crocante.</h2>
                            <p>Coco, chocolate, granola e crocantes para dar textura a cada colherada.</p>
                        </div>
                        <div className="panel panel-molhos left">
                            <h2>Fecha com um molho.</h2>
                            <p>Calda de chocolate ou de morango, leite condensado ou mel.</p>
                        </div>
                    </div>
                </section>

                <section className="builder" id="monta">
                    <div className="builder-copy">
                        <h2>Escolhe.<br />Monta.<br />Pesa.</h2>
                        <p>Começa pela base de açaí, escolhe o que vai por cima e paga pelo peso da tua taça.</p>
                        <div className="steps-inline">
                            <span><b>1</b> Escolhe a base</span>
                            <span><b>2</b> Junta os toppings</span>
                            <span><b>3</b> Pesa e aproveita</span>
                        </div>
                        <p className="builder-note">Esta é uma pequena experiência para combinares sabores. As opções reais podem variar.</p>
                    </div>

                    <div className="topping-picker">
                        <div className="picker-heading">
                            <h3>O que vai na tua taça?</h3>
                            <span className="selection-count">{selected.length} escolhido{selected.length === 1 ? "" : "s"}</span>
                        </div>
                        {groups.map((group) => (
                            <div className="topping-group" key={group}>
                                <h4>{group}</h4>
                                <div className="topping-options">
                                    {toppings.filter((topping) => topping.group === group).map((topping) => {
                                        const isSelected = selected.includes(topping.name);
                                        return (
                                            <button className={`topping-option ${isSelected ? "selected" : ""}`} type="button" key={topping.name} aria-pressed={isSelected} onClick={() => toggleTopping(topping.name)}>
                                                <span className="topping-emoji">{topping.emoji}</span>
                                                <span>{topping.name}</span>
                                                <span className="topping-check">{isSelected && <Check size={14} />}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                        <div className="selection-summary" aria-live="polite">
                            <span>{selected.length ? selected.join(", ") : "Escolhe alguns toppings para começar"}</span>
                            {selected.length > 0 && <button type="button" onClick={() => setSelected([])}>Limpar</button>}
                        </div>
                    </div>
                </section>

                <section className="contact" id="contacto">
                    <div className="contact-copy">
                        <h2>Liga-nos.</h2>
                        <p>Queres saber quais são os toppings disponíveis hoje? Liga-nos.</p>
                    </div>
                    <a className="contact-phone" href={`tel:${phone}`}>
                        <span className="phone-icon"><Phone /></span>
                        <span><small>Telefone</small><b>923 352 241</b></span>
                        <ArrowRight className="phone-arrow" />
                    </a>
                </section>
            </main>

            <footer>
                <a className="logo footer-logo" href="#inicio"><span className="logo-mark">P</span><span>Pé de <b>Açaí</b></span></a>
                <span>© 2026 Pé de Açaí</span>
                <a href="#inicio" className="back-top">Voltar ao início</a>
            </footer>
        </div>
    );
}

createRoot(document.getElementById("root")).render(<App />);