import React from "react";
import { ArrowUpRight } from "lucide-react";
import { SIZES, eur } from "../data/menu";
import { useReveal } from "../hooks/useReveal";

export default function Menu() {
    const ref = useReveal();

    return (
        <section className="section menu-sec" id="cardapio" ref={ref}>
            <div className="sec-head reveal">
                <span className="kicker">02 — Cardápio</span>
                <h2>Tamanhos. Preços. Sem letra pequena inventada.</h2>
                <p>Os volumes e valores são os da loja. O que vês aqui é o que pagas na montagem.</p>
            </div>

            <div className="size-grid">
                {SIZES.map((s) => (
                    <article className="size-card reveal" key={s.id}>
                        <div className="size-card-media">
                            <img src="/images/acai-cup.png" alt="" loading="lazy" />
                        </div>
                        <div className="size-card-body">
                            <span className="size-vol">{s.detail}</span>
                            <h3>{s.name}</h3>
                            <p className="size-note">{s.note}</p>
                            <div className="size-foot">
                                <b>{eur(s.price)}</b>
                                <a className="btn btn-mini" href="#/pedido">
                                    Montar <ArrowUpRight size={16} />
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
