import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

const LINKS = [
    { href: "#inicio", label: "Início" },
    { href: "#cardapio", label: "Cardápio" },
    { href: "#como", label: "Como funciona" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contacto", label: "Contacto" }
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const { user, loading, signOut } = useAuth();
    const isAdmin = user?.app_metadata?.role === "admin";

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const close = () => setOpen(false);

    const goToLogin = () => {
        sessionStorage.setItem(
            "login-return-to",
            window.location.hash || "#inicio"
        );
        close();
    };

    const handleSignOut = async () => {
        close();
        await signOut();
        window.location.hash = "#inicio";
    };

    return (
        <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
            <a className="brand" href="#inicio" onClick={close}>
                <span className="brand-mark">P</span>
                <span className="brand-name">PÉ DE <b>AÇAÍ</b></span>
            </a>

            <nav className="nav-desk" aria-label="Principal">
                {LINKS.map((link) => (
                    <a key={link.href} href={link.href}>
                        {link.label}
                    </a>
                ))}

                {isAdmin && <a href="#/admin">Área administrativa</a>}
            </nav>

            <div className="header-actions">
                {!loading &&
                    (user ? (
                        <button
                            className="btn btn-solid header-login"
                            type="button"
                            onClick={handleSignOut}
                        >
                            Sair
                        </button>
                    ) : (
                        <a
                            className="btn btn-solid header-login"
                            href="#/login"
                            onClick={goToLogin}
                        >
                            Entrar
                        </a>
                    ))}

                <a className="btn btn-solid header-cta" href="#/pedido">
                    Pedir agora
                </a>
            </div>

            <button
                className="menu-toggle"
                type="button"
                aria-expanded={open}
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                onClick={() => setOpen((value) => !value)}
            >
                {open ? <X size={22} /> : <Menu size={22} />}
            </button>

            <div className={`nav-sheet${open ? " open" : ""}`}>
                <nav aria-label="Mobile">
                    {LINKS.map((link, index) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={close}
                            style={{ "--i": index }}
                        >
                            <span>0{index + 1}</span>
                            {link.label}
                        </a>
                    ))}

                    {isAdmin && (
                        <a
                            href="#/admin"
                            onClick={close}
                            style={{ "--i": LINKS.length }}
                        >
                            <span>0{LINKS.length + 1}</span>
                            Área administrativa
                        </a>
                    )}

                    {!loading &&
                        (user ? (
                            <button
                                className="btn btn-solid"
                                type="button"
                                onClick={handleSignOut}
                            >
                                Sair
                            </button>
                        ) : (
                            <a
                                className="btn btn-solid"
                                href="#/login"
                                onClick={goToLogin}
                            >
                                Entrar
                            </a>
                        ))}

                    <a
                        className="btn btn-solid"
                        href="#/pedido"
                        onClick={close}
                    >
                        Pedir agora
                    </a>
                </nav>
            </div>
        </header>
    );
}