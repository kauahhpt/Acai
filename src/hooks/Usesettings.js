    import { useEffect, useState } from "react";
    import { supabase } from "../supabaseClient";
    import { GLOVO_URL, UBER_EATS_URL, WHATSAPP } from "../data/menu";

    // Valores usados enquanto as definições carregam, ou se o Supabase falhar.
    export const DEFAULT_SETTINGS = {
        orders_open: true,
        closed_message: "",
        schedule: "",
        whatsapp: WHATSAPP,
        glovo_url: GLOVO_URL,
        uber_url: UBER_EATS_URL,
    };

    // Converte as linhas { key, value } da tabela settings no objeto de definições.
    export function parseSettings(rows = []) {
        const map = Object.fromEntries(rows.map((r) => [r.key, r.value]));
        return {
            orders_open: map.orders_open !== "false",
            closed_message: map.closed_message || DEFAULT_SETTINGS.closed_message,
            schedule: map.schedule || DEFAULT_SETTINGS.schedule,
            whatsapp: map.whatsapp || DEFAULT_SETTINGS.whatsapp,
            glovo_url: map.glovo_url || DEFAULT_SETTINGS.glovo_url,
            uber_url: map.uber_url || DEFAULT_SETTINGS.uber_url,
        };
    }

    export function Usesettings() {
        const [settings, setSettings] = useState(DEFAULT_SETTINGS);
        const [loaded, setLoaded] = useState(false);

        useEffect(() => {
            let alive = true;

            supabase
                .from("settings")
                .select("key, value")
                .then(({ data, error }) => {
                    if (!alive) return;
                    if (error) console.error("Erro ao buscar definições:", error);
                    else setSettings(parseSettings(data));
                    setLoaded(true);
                });

            return () => { alive = false; };
        }, []);

        return { settings, loaded };
    }