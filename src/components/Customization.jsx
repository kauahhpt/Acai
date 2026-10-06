import React, { useEffect, useRef } from "react";
import { useReveal } from "../hooks/useReveal";

const STEPS = [
    { n: "01", t: "Escolhe o tamanho", d: "Copo M ou G, bowl 540 ou 750, ou 750 g de açaí puro." },
    { n: "02", t: "Escolhe os complementos", d: "Fruta, crocantes, cremes e caldas. Cabe o que o tamanho permite." },
    { n: "03", t: "Finaliza o pedido", d: "Revisas, envias por WhatsApp — ou abres Glovo / Uber Eats." },
    { n: "04", t: "Recebe o açaí", d: "Entrega ou levantamento. A taça é tua." }
];

export default function Customization() {
    const ref = useReveal();
    const lineRef = useRef(null);

    useEffect(() => {
        const el = ref.current;
        const line = lineRef.current;
        if (!el || !line) return;

        const onScroll = () => {
            const r = el.getBoundingClientRect();
            const view = window.innerHeight;
            const t = 1 - Math.min(1, Math.max(0, (r.bottom - view * 0.2) / (r.height + view * 0.3)));
            line.style.transform = `scaleY(${t})`;
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, [ref]);

    return (
        <section className="section how-sec" id="como" ref={ref}>
            <div className="sec-head reveal">
                <span className="kicker">03 — Monta do teu jeito</span>
                <h2>Quatro gestos. Zero receita.</h2>
            </div>

            <div className="how-track">
                <div className="how-rail" aria-hidden="true">
                    <div className="how-rail-fill" ref={lineRef} />
                </div>
                {STEPS.map((s) => (
                    <article className="how-step reveal" key={s.n}>
                        <span className="how-n">{s.n}</span>
                        <div>
                            <h3>{s.t}</h3>
                            <p>{s.d}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
