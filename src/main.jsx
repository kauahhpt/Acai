import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import * as THREE from "three";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import Pedido, { SIZES, eur } from "./Pedido";
import "./styles.css";

const phone = "923352241";

/* ---------- Ambientação: floresta ao amanhecer, com camadas em paralaxe ---------- */

const rng = (seed) => () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
// Copa da floresta: muitos círculos sobrepostos, como folhagem
const canopy = (seed, base, rMin, rMax, lift) => {
    const r = rng(seed);
    const out = [];
    for (let x = -30; x < 1470; ) {
        const rad = rMin + r() * (rMax - rMin);
        out.push({ cx: x, cy: base - lift * (0.5 + 0.5 * Math.sin(x * 0.005 + seed)) - r() * 14, r: rad });
        x += rad * (0.55 + r() * 0.3);
    }
    return out;
};
const FAR = canopy(7, 290, 26, 44, 40);
const MID = canopy(21, 320, 34, 56, 45);
const f = (n) => n.toFixed(1);

// Palmeira (versão original: folhas em arco)
function Palm({ x, y, h, lean }) {
    const tx = x + lean, ty = y - h, L = h * 0.55;
    const fronds = [-165, -140, -115, -90, -65, -40, -15].map((a) => {
        const r = (a * Math.PI) / 180;
        const ex = tx + Math.cos(r) * L, ey = ty + Math.sin(r) * L * 0.35 + L * 0.45;
        const cx = tx + Math.cos(r) * L * 0.55, cy = ty + Math.sin(r) * L * 0.9;
        return `M${f(tx)} ${f(ty)} Q${f(cx)} ${f(cy)} ${f(ex)} ${f(ey)}`;
    });
    return (
        <g>
            <path d={`M${x} ${y} Q${x + lean * 0.1} ${y - h * 0.55} ${tx} ${ty}`} strokeWidth="7" />
            {fronds.map((d, i) => <path key={i} d={d} strokeWidth="4" />)}
        </g>
    );
}

// Árvore alta com copa redonda
function Tree({ x, y, h, r }) {
    return (
        <g>
            <path d={`M${x} ${y}L${x} ${y - h}`} strokeWidth="6" />
            <circle cx={x} cy={y - h} r={r} />
            <circle cx={x - r * 0.6} cy={y - h + r * 0.4} r={r * 0.7} />
            <circle cx={x + r * 0.6} cy={y - h + r * 0.4} r={r * 0.7} />
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
            <svg className="layer far" viewBox="0 0 1440 400" preserveAspectRatio="xMidYMax slice">
                <g className="palms">
                    <Palm x={330} y={300} h={125} lean={15} />
                    <Palm x={1130} y={300} h={135} lean={-18} />
                </g>
                {FAR.map((c, i) => <circle key={i} cx={f(c.cx)} cy={f(c.cy)} r={f(c.r)} />)}
                <rect x="0" y="290" width="1440" height="200" />
            </svg>
            <svg className="layer mid" viewBox="0 0 1440 400" preserveAspectRatio="xMidYMax slice">
                <g className="palms">
                    <Palm x={170} y={345} h={215} lean={40} />
                    <Palm x={490} y={340} h={165} lean={-30} />
                    <Palm x={990} y={340} h={205} lean={-45} />
                    <Palm x={1270} y={345} h={175} lean={35} />
                    <Tree x={330} y={345} h={140} r={42} />
                    <Tree x={760} y={345} h={185} r={48} />
                    <Tree x={1140} y={345} h={135} r={40} />
                </g>
                {MID.map((c, i) => <circle key={i} cx={f(c.cx)} cy={f(c.cy)} r={f(c.r)} />)}
                <rect x="0" y="320" width="1440" height="200" />
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
            const s = keyed(smooth, K_S) * (wide ? 1 : 0.72) * (0.75 + 0.25 * easeOutCubic(k));
            // telemóvel: no início o copo fica entre o título e o texto; depois desce um pouco
            const baseY = (wide ? 0 : -0.17 - clamp01(smooth / 0.08) * 0.5) + keyed(smooth, K_Y);

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

/* ---------- Página inicial ---------- */

const sceneFor = (p) => (p < 0.2 ? "intro" : p < 0.42 ? "fruta" : p < 0.64 ? "toppings" : p < 0.86 ? "molhos" : "exit");

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
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

    // Ao voltar da página de pedidos, vai para a secção do link (ou para o topo)
    useEffect(() => {
        const id = window.location.hash.slice(1);
        requestAnimationFrame(() => {
            const el = id && !id.startsWith("/") ? document.getElementById(id) : null;
            if (el) el.scrollIntoView();
            else window.scrollTo(0, 0);
        });
    }, []);

    const closeMenu = () => setMenuOpen(false);

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
                    <a href="#/pedido" className="nav-order" onClick={closeMenu}>Fazer pedido</a>
                </nav>
                <a className="nav-cta" href="#/pedido">Fazer pedido</a>
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
                            <p className="hero-copy">Escolhe o tamanho, a calda, o creme e os acompanhamentos. A taça é toda tua.</p>
                            <div className="hero-actions">
                                <a className="primary-button" href="#/pedido">Fazer o meu pedido <ArrowRight size={18} /></a>
                            </div>
                        </div>

                        <div className="panel panel-fruta left">
                            <h2>Começa pela fruta.</h2>
                            <p>Banana, manga, kiwi, uva, morango e mais. Escolhe os teus acompanhamentos.</p>
                        </div>
                        <div className="panel panel-toppings right">
                            <h2>Depois, o crocante.</h2>
                            <p>Granola, amendoim, coco laminado, aveia e bolacha Oreo triturada para dar textura.</p>
                        </div>
                        <div className="panel panel-molhos left">
                            <h2>Fecha com calda e creme.</h2>
                            <p>Leite condensado, mel, caramelo ou chocolate, e cremes de Ovomaltine, banoffe, avelã, maracujá e mais.</p>
                        </div>
                    </div>
                </section>

                <section className="builder" id="monta">
                    <div className="builder-copy">
                        <h2>Escolhe.<br />Monta.<br />Pede.</h2>
                        <p>Começa pelo tamanho, monta a taça com os teus acompanhamentos e envia o pedido. Entregamos ou levantas na loja.</p>
                        <div className="steps-inline">
                            <span><b>1</b> Escolhe o tamanho</span>
                            <span><b>2</b> Monta a tua taça</span>
                            <span><b>3</b> Envia o pedido</span>
                        </div>
                        <a className="primary-button" href="#/pedido">Fazer o meu pedido <ArrowRight size={18} /></a>
                    </div>

                    <div className="menu-card">
                        <h3>Tamanhos e preços</h3>
                        <ul className="menu-list">
                            {SIZES.map((s) => (
                                <li key={s.id}>
                                    <div><b>{s.name} · {s.detail}</b><small>{s.note}</small></div>
                                    <span className="menu-price">{eur(s.price)}</span>
                                </li>
                            ))}
                        </ul>
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

/* ---------- Rotas: início e página de pedidos (#/pedido) ---------- */

const getRoute = () => (window.location.hash.startsWith("#/pedido") ? "pedido" : "home");

function Root() {
    const [route, setRoute] = useState(getRoute);
    useEffect(() => {
        const onHash = () => setRoute(getRoute());
        window.addEventListener("hashchange", onHash);
        return () => window.removeEventListener("hashchange", onHash);
    }, []);
    useEffect(() => {
        if (route === "pedido") window.scrollTo(0, 0);
    }, [route]);
    return route === "pedido" ? <Pedido /> : <App />;
}

createRoot(document.getElementById("root")).render(<Root />);