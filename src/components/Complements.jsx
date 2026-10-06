import React from "react";
import { CREME_EXTRA, EXTRAS } from "../data/menu";
import { eur } from "../data/menu";
import { useReveal } from "../hooks/useReveal";

export default function Complements() {
    const ref = useReveal();
    const cremes = CREME_EXTRA.map(([name, price]) => ({ name, price, kind: "Creme extra" }));
    const extras = EXTRAS.map(([name, price]) => ({ name, price, kind: "Item extra" }));
    const items = [...cremes, ...extras];

    return (
        <section className="section comp-sec" id="complementos" ref={ref}>
            <div className="sec-head reveal">
                <span className="kicker">04 — Complementos</span>
                <h2>Cremes e extras. Com o preço à vista.</h2>
                <p>
                    Incluídos no tamanho, os acompanhamentos vêm no pedido. Aqui estão só os extras
                    pagos à parte — os mesmos da página de montagem.
                </p>
            </div>

            <div className="comp-cloud">
                {items.map((it, i) => (
                    <span
                        className="comp-chip reveal"
                        key={`${it.kind}-${it.name}`}
                        style={{ "--i": i }}
                    >
                        <small>{it.kind}</small>
                        {it.name}
                        <b>+{eur(it.price)}</b>
                    </span>
                ))}
            </div>
        </section>
    );
}
