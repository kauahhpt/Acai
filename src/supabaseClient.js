import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

// PKCE: o login com Google volta com ?code=... na query (e não com tokens no #),
// para não bater de frente com as rotas do site, que usam #/pedido e #/admin.
export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { flowType: "pkce" },
});