import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
    { href: "#inicio", label: "Início" },
    { href: "#cardapio", label: "Cardápio" },
    { href: "#como", label: "Como funciona" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contacto", label: "Contacto" }
];

export default function Header() {
    const { 0: open, 1: setOpen } = useState(false);
    const { 0: scrolled, 1: setScrolled } = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    const close = () => setOpen(false);

    return (
        <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
            <a className="brand" href="#inicio" onClick={close}>
                <span className="brand-mark">P</span>
                <span className="brand-name">PÉ DE <b>AÇAÍ</b></span>
            </a>

            <nav className="nav-desk" aria-label="Principal">
                {LINKS.map((l) => (
                    <a key={l.href} href={l.href}>{l.label}</a>
                ))}
            </nav>

            <a className="btn btn-solid header-cta" href="#/pedido">Pedir agora</a>

            <button
                className="menu-toggle"
                type="button"
                aria-expanded={open}
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                onClick={() => setOpen((v) => !v)}
            >
                {open ? <X size={22} /> : <Menu size={22} />}
            </button>

            <div className={`nav-sheet${open ? " open" : ""}`}>
                <nav aria-label="Mobile">
                    {LINKS.map((l, i) => (
                        <a key={l.href} href={l.href} onClick={close} style={{ "--i": i }}>
                            <span>0{i + 1}</span>
                            {l.label}
                        </a>
                    ))}
                    <a className="btn btn-solid" href="#/pedido" onClick={close}>Pedir agora</a>
                </nav>
            </div>
        </header>
    );
}
