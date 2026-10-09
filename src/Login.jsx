import React, { useState } from "react";
import { supabase } from "./supabaseClient";
import "./Login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleEmailLogin = async (e) => {
        e.preventDefault();

        if (loading) return;

        setError("");
        setLoading(true);

        try {
            const { data, error: loginError } =
                await supabase.auth.signInWithPassword({
                    email: email.trim(),
                    password,
                });

            if (loginError || !data.user) {
                setError("Email ou palavra-passe incorretos.");
                return;
            }

            // Todos (clientes e administrador) regressam à página principal.
            // O acesso ao painel é feito pelo menu «Área administrativa».
            sessionStorage.removeItem("login-return-to");
            sessionStorage.removeItem("after-login");

            window.location.hash = "#inicio";
        } catch (err) {
            console.error("Erro no login:", err);
            setError("Não foi possível iniciar sessão. Tenta novamente.");
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        if (loading) return;

        setError("");
        setLoading(true);

        try {
            // Após o login com Google, o destino é a página principal.
            sessionStorage.removeItem("login-return-to");
            sessionStorage.setItem("after-login", "#inicio");

            const { error: googleError } =
                await supabase.auth.signInWithOAuth({
                    provider: "google",
                    options: {
                        redirectTo: `${window.location.origin}/`,
                    },
                });

            if (googleError) {
                sessionStorage.removeItem("after-login");
                setError(
                    "Não foi possível entrar com Google. Tenta novamente."
                );
            }
        } catch (err) {
            console.error("Erro no login com Google:", err);
            sessionStorage.removeItem("after-login");
            setError(
                "Não foi possível entrar com Google. Tenta novamente."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="auth-page">
            <a className="auth-back" href="#inicio">
                ← Voltar ao site
            </a>

            <section className="auth-card">
                <a className="auth-brand" href="#inicio">
                    PÉ DE <b>AÇAÍ</b>
                </a>

                <p className="auth-eyebrow">BEM-VINDO DE VOLTA</p>

                <h1>Entra na tua conta.</h1>

                <p className="auth-description">
                    Entra para tornar os teus próximos pedidos mais simples.
                </p>

                <button
                    className="auth-google"
                    type="button"
                    onClick={handleGoogleLogin}
                    disabled={loading}
                >
                    <span className="auth-google-icon">G</span>
                    {loading ? "A entrar..." : "Continuar com Google"}
                </button>

                <div className="auth-divider">
                    <span>ou entra com email</span>
                </div>

                <form onSubmit={handleEmailLogin}>
                    <label className="auth-field">
                        Email
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="teu@email.com"
                            autoComplete="email"
                            required
                        />
                    </label>

                    <label className="auth-field">
                        Palavra-passe
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="A tua palavra-passe"
                            autoComplete="current-password"
                            required
                        />
                    </label>

                    {error && (
                        <p className="auth-error" role="alert">
                            {error}
                        </p>
                    )}

                    <button
                        className="auth-submit"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "A entrar..." : "Entrar"}
                    </button>
                </form>

                <p className="auth-register">
                    Ainda não tens conta?{" "}
                    <a href="#/inscricao">Criar conta</a>
                </p>
            </section>
        </main>
    );
}