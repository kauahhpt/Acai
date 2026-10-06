import React from "react";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { WHATSAPP, WHATSAPP_DISPLAY, GLOVO_URL, UBER_EATS_URL } from "../data/menu";
import { useReveal } from "../hooks/useReveal";

const wa = `https://wa.me/${WHATSAPP}`;

export default function Contact() {
    const ref = useReveal();

    return (
        <section className="section contact-sec" id="contacto" ref={ref}>
            <div className="sec-head reveal">
                <span className="kicker">06 — Contacto</span>
                <h2>Fala connosco.</h2>
                <p>WhatsApp directo. Pedidos também nas plataformas.</p>
            </div>

            <a className="wa-card reveal" href={wa} target="_blank" rel="noopener noreferrer">
                <span className="wa-icon"><MessageCircle size={28} /></span>
                <span>
                    <small>WhatsApp</small>
                    <b>{WHATSAPP_DISPLAY}</b>
                </span>
                <ArrowUpRight className="wa-arrow" />
            </a>

            <div className="contact-alts reveal">
                <a href={GLOVO_URL} target="_blank" rel="noopener noreferrer">Glovo <ArrowUpRight size={16} /></a>
                <a href={UBER_EATS_URL} target="_blank" rel="noopener noreferrer">Uber Eats <ArrowUpRight size={16} /></a>
            </div>
        </section>
    );
}
