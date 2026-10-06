import React from "react";
import { HIGHLIGHTS, SIZES, eur, ACAI_CUP } from "../data/menu";
import { useReveal } from "../hooks/useReveal";
import { ArrowRight } from "lucide-react";

export default function Highlights() {
    const ref = useReveal();

    return (
        <section className="section hi-sec" id="destaques" ref={ref}>
            <div className="sec-head reveal">
                <span className="kicker">05 — Destaques</span>
                <h2>Três formas de entrar.</h2>
                <p>Não há combos inventados. São tamanhos reais do cardápio, só em plano grande.</p>
            </div>

            <div className="hi-grid">
                {HIGHLIGHTS.map((h, i) => {
                    const size = SIZES.find((s) => s.id === h.sizeId);
                    return (
                        <article className={`hi-card reveal${i === 1 ? " hi-wide" : ""}`} key={h.sizeId}>
                            <div className="hi-img">
                                <img src={ACAI_CUP} alt="" loading="lazy" />
                            </div>
                            <div className="hi-body">
                                <span className="kicker">{h.kicker}</span>
                                <h3>{h.title}</h3>
                                <p>{h.blurb}</p>
                                <div className="hi-foot">
                                    <b>{eur(size.price)}</b>
                                    <span>{size.detail}</span>
                                    <a className="btn btn-mini" href="#/pedido">
                                        Montar <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
