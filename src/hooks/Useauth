
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

// Sessão do utilizador (cliente ou administrador)
export function useAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let alive = true;

        supabase.auth.getSession().then(({ data, error }) => {
            if (!alive) return;

            if (error) {
                console.error("Erro ao verificar sessão:", error);
            }

            setUser(data?.session?.user ?? null);
            setLoading(false);
        });

        const { data: listener } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setUser(session?.user ?? null);
                setLoading(false);
            }
        );

        return () => {
            alive = false;
            listener.subscription.unsubscribe();
        };
    }, []);

    
const signInWithGoogle = async (
    returnTarget = window.location.hash || "#inicio"
) => {
    sessionStorage.setItem(
        "after-login",
        returnTarget.startsWith("#") ? returnTarget : "#inicio"
    );

    const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: `${window.location.origin}/`,
        },
    });

    if (error) {
        console.error("Erro ao entrar com Google:", error);
    }

    return error;
};

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();

        if (error) {
            console.error("Erro ao terminar sessão:", error);
        }

        return { error };
    };

    return {
        user,
        loading,
        signInWithGoogle,
        signOut,
    };
}

// Perfil do cliente: nome e morada
export function useProfile(user) {
    const [profile, setProfile] = useState(null);
    const [loadingProfile, setLoadingProfile] = useState(false);

    useEffect(() => {
        if (!user) {
            setProfile(null);
            setLoadingProfile(false);
            return;
        }

        let alive = true;
        setLoadingProfile(true);

        const loadProfile = async () => {
            const { data, error } = await supabase
                .from("customers")
                .select("name, address")
                .eq("user_id", user.id)
                .maybeSingle();

            if (!alive) return;

            if (error) {
                console.error(
                    "Erro ao carregar perfil do cliente:",
                    error
                );
            } else {
                setProfile(data);
            }

            setLoadingProfile(false);
        };

        loadProfile();

        return () => {
            alive = false;
        };
    }, [user?.id]);

    const saveProfile = async ({ name, address }) => {
        if (!user) {
            return new Error("É necessário iniciar sessão.");
        }

        const { error } = await supabase
            .from("customers")
            .upsert({
                user_id: user.id,
                name,
                address,
                updated_at: new Date().toISOString(),
            });

        if (error) {
            console.error("Erro ao guardar perfil:", error);
        } else {
            setProfile({ name, address });
        }

        return error;
    };

    const deleteProfile = async () => {
        if (!user) {
            return new Error("É necessário iniciar sessão.");
        }

        const { error } = await supabase
            .from("customers")
            .delete()
            .eq("user_id", user.id);

        if (error) {
            console.error("Erro ao apagar perfil:", error);
        } else {
            setProfile(null);
        }

        return error;
    };

    return {
        profile,
        loadingProfile,
        saveProfile,
        deleteProfile,
    };
}