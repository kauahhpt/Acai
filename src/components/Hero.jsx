import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { animate, stagger } from "animejs";
import { prefersReducedMotion } from "../lib/motion";

export default function Hero() {
    const ref = useRef(null);

    useEffect(() => {
        if (prefersReducedMotion() || !ref.current) return;
        const words = ref.current.querySelectorAll(".hero-word");
        const rest = ref.current.querySelectorAll(".hero-late");
        animate(words, {
            opacity: [0, 1],
            translateY: ["1.1em", "0em"],
            rotateX: [-50, 0],
            delay: stagger(90, { start: 120 }),
            duration: 1100,
            ease: "out(3)"
        });
        animate(rest, {
            opacity: [0, 1],
            translateY: [16, 0],
            filter: ["blur(10px)", "blur(0px)"],
            delay: stagger(80, { start: 720 }),
            duration: 800,
            ease: "out(2)"
        });
    }, []);

    return (
        <section className="hero" id="inicio">
            <div className="hero-meta">
                <span>01 — HERO</span>
                <span>LIS · PT</span>
                <span>SYS / 01</span>
            </div>

            <h1 ref={ref} className="hero-title">
                <span className="hero-line"><span className="hero-word">ESCOLHE.</span></span>
                <span className="hero-line"><span className="hero-word">MONTA.</span></span>
                <span className="hero-line"><span className="hero-word">PESA.</span></span>
            </h1>

            <p className="hero-sub hero-late">O teu açaí, do teu jeito.</p>
            <p className="hero-copy hero-late">
                Escolhes o tamanho, adicionas os complementos e pagas o que montaste.
                Copos, bowls e açaí puro — sem receita fechada.
            </p>

            <div className="hero-actions hero-late">
                <a className="btn btn-solid" href="#/pedido">
                    Monta o teu açaí <ArrowRight size={18} />
                </a>
                <a className="btn btn-ghost" href="#cardapio">Ver cardápio</a>
            </div>

            <div className="hero-hud" aria-hidden="true">
                <span className="hud-dot" />
                <span>LIVE · SCROLL</span>
                <span className="hud-line" />
                <span>CUP / PNG</span>
            </div>
        </section>
    );
}
