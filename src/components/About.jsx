import React from "react";
import { SIZES, ACOMP, CREMES, CALDAS } from "../data/menu";
import { useReveal } from "../hooks/useReveal";

const acompCount = ACOMP.reduce((n, g) => n + g.items.length, 0);

export default function About() {
    const ref = useReveal();

    return (
        <section className="section about-sec" id="sobre" ref={ref}>
            <div className="about-grid">
                <p className="about-lead reveal">
                    Não vendemos açaí genérico.<br />
                    Tu montas. Nós pesamos.
                </p>
                <p className="about-copy reveal">
                    Pé de Açaí é uma taça à tua medida: escolhes o volume, a fruta, o crocante e o creme.
                    Sem história corporativa. Sem “paixão por servir”. Só o copo, o peso e o que tu mandaste meter.
                </p>
            </div>

            <ul className="about-stats">
                <li className="reveal">
                    <b>{SIZES.length}</b>
                    <span>tamanhos no cardápio</span>
                </li>
                <li className="reveal">
                    <b>{acompCount}</b>
                    <span>acompanhamentos</span>
                </li>
                <li className="reveal">
                    <b>{CREMES.length}</b>
                    <span>cremes à escolha</span>
                </li>
                <li className="reveal">
                    <b>{CALDAS.length}</b>
                    <span>caldas</span>
                </li>
            </ul>
        </section>
    );
}
