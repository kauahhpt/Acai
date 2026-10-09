import React, { useState } from "react";
import { supabase } from "./supabaseClient";
import "./Login.css";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();

        if (loading) return;

        setError("");

        if (password.length < 6) {
            setError("A palavra-passe deve ter pelo menos 6 caracteres.");
            return;
        }

        if (password !== confirm) {
            setError("As palavras-passe não coincidem.");
            return;
        }

        setLoading(true);

        try {
            const { data, error: signUpError } = await supabase.auth.signUp({
                email: email.trim(),
                password,
                options: {
                    data: { name: name.trim() },
                    emailRedirectTo: `${window.location.origin}/`,
                },
            });

            if (signUpError) {
                if (signUpError.code === "user_already_exists") {
                    setError("Já existe uma conta com este email.");
                } else if (signUpError.code === "weak_password") {
                    setError("Escolhe uma palavra-passe mais forte.");
                } else if (signUpError.code === "over_email_send_rate_limit") {
                    setError("Demasiadas tentativas. Tenta novamente daqui a pouco.");
                } else {
                    setError("Não foi possível criar a conta. Tenta novamente.");
                }
                return;
            }

            // Email já registado: o Supabase devolve um utilizador sem identidades.
            if (data.user && data.user.identities?.length === 0) {
                setError("Já existe uma conta com este email.");
                return;
            }

            // Sem confirmação por email: a sessão já está ativa.
            if (data.session) {
                sessionStorage.removeItem("login-return-to");
                sessionStorage.removeItem("after-login");
                window.location.hash = "#inicio";
                return;
            }

            // Com confirmação por email: pedir ao utilizador para verificar.
            setDone(true);
        } catch (err) {
            console.error("Erro no registo:", err);
            setError("Não foi possível criar a conta. Tenta novamente.");
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignup = async () => {
        if (loading) return;

        setError("");
        setLoading(true);

        try {
            sessionStorage.removeItem("login-return-to");
            sessionStorage.setItem("after-login", "#inicio");

            const { error: googleError } = await supabase.auth.signInWithOAuth({
                provider: "google",
                options: {
                    redirectTo: `${window.location.origin}/`,
                },
            });

            if (googleError) {
                sessionStorage.removeItem("after-login");
                setError("Não foi possível entrar com Google. Tenta novamente.");
            }
        } catch (err) {
            console.error("Erro no registo com Google:", err);
            sessionStorage.removeItem("after-login");
            setError("Não foi possível entrar com Google. Tenta novamente.");
        } finally {
            setLoading(false);
        }
    };

    if (done) {
        return (
            <main className="auth-page">
                <section className="auth-card">
                    <a className="auth-brand" href="#inicio">
                        PÉ DE <b>AÇAÍ</b>
                    </a>

                    <p className="auth-eyebrow">QUASE LÁ</p>

                    <h1>Verifica o teu email.</h1>

                    <p className="auth-description">
                        Enviámos um link de confirmação para{" "}
                        <b>{email.trim()}</b>. Abre-o para ativares a conta e
                        depois entra.
                    </p>

                    <a className="auth-submit auth-link-button" href="#/login">
                        Ir para o login
                    </a>
                </section>
            </main>
        );
    }

    return (
        <main className="auth-page">
            <a className="auth-back" href="#inicio">
                ← Voltar ao site
            </a>

            <section className="auth-card">
                <a className="auth-brand" href="#inicio">
                    PÉ DE <b>AÇAÍ</b>
                </a>

                <p className="auth-eyebrow">NOVA CONTA</p>

                <h1>Cria a tua conta.</h1>

                <p className="auth-description">
                    Com conta, os teus próximos pedidos ficam mais rápidos.
                </p>

                <button
                    className="auth-google"
                    type="button"
                    onClick={handleGoogleSignup}
                    disabled={loading}
                >
                    <span className="auth-google-icon">G</span>
                    Continuar com Google
                </button>

                <div className="auth-divider">
                    <span>ou cria com email</span>
                </div>

                <form onSubmit={handleRegister}>
                    <label className="auth-field">
                        Nome
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="O teu nome"
                            autoComplete="name"
                            required
                        />
                    </label>

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
                            placeholder="Mínimo 6 caracteres"
                            autoComplete="new-password"
                            required
                        />
                    </label>

                    <label className="auth-field">
                        Confirmar palavra-passe
                        <input
                            type="password"
                            value={confirm}
                            onChange={(e) => setConfirm(e.target.value)}
                            placeholder="Repete a palavra-passe"
                            autoComplete="new-password"
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
                        {loading ? "A criar conta..." : "Criar conta"}
                    </button>
                </form>

                <p className="auth-register">
                    Já tens conta? <a href="#/login">Entrar</a>
                </p>
            </section>
        </main>
    );
}