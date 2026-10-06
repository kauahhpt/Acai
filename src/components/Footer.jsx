import React from "react";
import { WHATSAPP, WHATSAPP_DISPLAY } from "../data/menu";

export default function Footer() {
    return (
        <footer className="site-footer">
            <a className="brand" href="#inicio">
                <span className="brand-mark">P</span>
                <span className="brand-name">PÉ DE <b>AÇAÍ</b></span>
            </a>
            <nav>
                <a href="#cardapio">Cardápio</a>
                <a href="#como">Como funciona</a>
                <a href="#contacto">Contacto</a>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">
                    WhatsApp {WHATSAPP_DISPLAY}
                </a>
            </nav>
            <small>© {new Date().getFullYear()} Pé de Açaí</small>
        </footer>
    );
}
