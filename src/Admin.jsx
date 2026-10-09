import "./Admin.css";
import React, { useCallback, useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import { GLOVO_URL, SIZES, UBER_EATS_URL, WHATSAPP } from "./data/menu";
import { ALERGENIOS } from "./data/Alergenios";

/* ---------- Categorias do menu ---------- */
// priced: tem preço próprio (as outras estão incluídas no preço do tamanho)
const CATEGORIES = [
    { id: "tamanho", label: "Tamanhos", priced: true },
    { id: "calda", label: "Caldas", priced: false },
    { id: "creme", label: "Cremes", priced: false },
    { id: "acompanhamento", label: "Acompanhamentos", priced: false, grouped: true },
    { id: "creme_extra", label: "Cremes extra", priced: true },
    { id: "extra", label: "Extras", priced: true },
];

/* ---------- Helpers ---------- */

const formatPrice = (n) => Number(n).toFixed(2).replace(".", ",");

// Aceita "12,5", "12.50" ou "12" → número, ou null se inválido
const parsePrice = (value) => {
    const n = parseFloat(String(value).trim().replace(",", "."));
    return Number.isFinite(n) && n >= 0 ? Math.round(n * 100) / 100 : null;
};

// Tamanhos que vêm do menu.js: o nome não pode mudar (o site liga preço e regras por ele)
const normalize = (s) =>
    String(s ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "").toLowerCase();

const BUILTIN_SIZES = new Set(
    SIZES.flatMap((s) => [normalize(s.name), normalize(`${s.name} ${s.detail ?? ""}`)])
);

const Logo = () => (
    <span className="adm-logo">
        <span className="adm-logo-mark">P</span>
        Pé de <b>Açaí</b>
    </span>
);


/* ---------- Seletor de alergénios ---------- */

function AllergenPicker({ value, onChange }) {
    const toggle = (name) =>
        onChange(value.includes(name) ? value.filter((a) => a !== name) : [...value, name]);

    return (
        <fieldset className="adm-allergens">
            <legend>Alergénios (marca os que este produto contém)</legend>
            <div className="adm-allergen-grid">
                {ALERGENIOS.map((name) => (
                    <label key={name}>
                        <input
                            type="checkbox"
                            checked={value.includes(name)}
                            onChange={() => toggle(name)}
                        />
                        {name}
                    </label>
                ))}
            </div>
        </fieldset>
    );
}

/* ---------- Janela de edição ---------- */

function EditModal({ product, cat, locked, onSave, onClose }) {
    const [name, setName] = useState(product.name);
    const [grupo, setGrupo] = useState(product.grupo ?? "");
    const [descricao, setDescricao] = useState(product.description ?? "");
    const [acompMax, setAcompMax] = useState(String(product.acomp_max ?? 0));
    const [temCalda, setTemCalda] = useState(!!product.tem_calda);
    const [temCreme, setTemCreme] = useState(!!product.tem_creme);
    const [temExtras, setTemExtras] = useState(!!product.tem_extras);
    const [alergenios, setAlergenios] = useState(product.alergenios ?? []);
    const [saving, setSaving] = useState(false);

    const isSize = cat.id === "tamanho";
    const canSubmit = name.trim() && (!cat.grouped || grupo.trim());

    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && onClose();
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [onClose]);

    const submit = async (e) => {
        e.preventDefault();
        if (!canSubmit) return;

        const changes = { name: name.trim(), alergenios };
        if (cat.grouped) changes.grupo = grupo.trim();
        if (isSize) {
            changes.description = descricao.trim() || null;
            if (!locked) {
                changes.acomp_max = Math.max(0, parseInt(acompMax, 10) || 0);
                changes.tem_calda = temCalda;
                changes.tem_creme = temCreme;
                changes.tem_extras = temExtras;
            }
        }

        setSaving(true);
        const ok = await onSave(product.id, changes);
        setSaving(false);
        if (ok) onClose();
    };

    return (
        <div className="adm-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
            <form className="adm-modal" role="dialog" aria-modal="true" aria-labelledby="adm-edit-title" onSubmit={submit}>
                <h2 id="adm-edit-title">Editar produto</h2>

                <label className="adm-field">
                    Nome
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={locked}
                        autoFocus={!locked}
                        required
                    />
                </label>
                {locked && (
                    <p className="adm-note">
                        O nome deste tamanho é fixo, porque o site o usa para ligar o preço e as regras.
                    </p>
                )}

                {cat.grouped && (
                    <label className="adm-field">
                        Grupo
                        <input value={grupo} onChange={(e) => setGrupo(e.target.value)} required />
                    </label>
                )}

                {isSize && (
                    <label className="adm-field">
                        Descrição (aparece no site)
                        <input
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            autoFocus={locked}
                        />
                    </label>
                )}

                {isSize && !locked && (
                    <>
                        <label className="adm-field">
                            Nº de acompanhamentos
                            <input
                                type="number"
                                min="0"
                                max="10"
                                value={acompMax}
                                onChange={(e) => setAcompMax(e.target.value)}
                            />
                        </label>
                        <div className="adm-checks">
                            <label><input type="checkbox" checked={temCalda} onChange={(e) => setTemCalda(e.target.checked)} /> Tem calda</label>
                            <label><input type="checkbox" checked={temCreme} onChange={(e) => setTemCreme(e.target.checked)} /> Tem creme</label>
                            <label><input type="checkbox" checked={temExtras} onChange={(e) => setTemExtras(e.target.checked)} /> Permite extras</label>
                        </div>
                    </>
                )}
                {isSize && locked && (
                    <p className="adm-note">As regras deste tamanho (acompanhamentos, calda, creme, extras) estão no código do site.</p>
                )}

                <AllergenPicker value={alergenios} onChange={setAlergenios} />

                <div className="adm-modal-actions">
                    <button type="button" className="adm-ghost" onClick={onClose}>Cancelar</button>
                    <button className="adm-button adm-button--small" type="submit" disabled={!canSubmit || saving}>
                        {saving ? "A guardar..." : "Guardar"}
                    </button>
                </div>
            </form>
        </div>
    );
}

/* ---------- Linha de produto ---------- */

function ProductRow({ product, cat, onSave, onDelete }) {
    const priced = cat.priced;
    const [editing, setEditing] = useState(false);
    const locked = cat.id === "tamanho" && BUILTIN_SIZES.has(normalize(product.name));
    const [price, setPrice] = useState(formatPrice(product.price));
    const [available, setAvailable] = useState(product.available);
    const [saving, setSaving] = useState(false);

    const parsed = priced ? parsePrice(price) : Number(product.price);
    const invalid = parsed === null;
    const dirty = !invalid && (parsed !== Number(product.price) || available !== product.available);

    const save = async () => {
        setSaving(true);
        const changes = priced ? { price: parsed, available } : { available };
        const ok = await onSave(product.id, changes);
        setSaving(false);
        if (ok && priced) setPrice(formatPrice(parsed));
    };

    return (
        <li className={`adm-row ${priced ? "" : "no-price"} ${available ? "" : "off"}`}>
            <div className="adm-row-name">
                <b>{product.name}</b>
                {product.grupo && <small>{product.grupo}</small>}
                {product.description && <small>{product.description}</small>}
                {product.alergenios?.length > 0 && (
                    <small className="adm-allergen-tag">Alergénios: {product.alergenios.join(", ")}</small>
                )}
            </div>

            {priced && (
                <label className="adm-price">
                    <span className="sr-only">Preço de {product.name}</span>
                    <input
                        inputMode="decimal"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        aria-invalid={invalid}
                    />
                    <i>€</i>
                </label>
            )}

            <label className="adm-switch">
                <input
                    type="checkbox"
                    checked={available}
                    onChange={(e) => setAvailable(e.target.checked)}
                />
                <span className="adm-switch-track" aria-hidden="true" />
                <span>{available ? "Disponível" : "Esgotado"}</span>
            </label>

            <div className="adm-row-actions">
                <button
                    className="adm-button adm-button--small"
                    onClick={save}
                    disabled={!dirty || saving}
                >
                    {saving ? "A guardar..." : "Guardar"}
                </button>
                <button
                    className="adm-ghost adm-ghost--small"
                    onClick={() => setEditing(true)}
                    aria-label={`Editar ${product.name}`}
                >
                    Editar
                </button>
                <button
                    className="adm-link-danger"
                    onClick={() => onDelete(product)}
                    aria-label={`Remover ${product.name}`}
                >
                    Remover
                </button>
            </div>
            {editing && (
                <EditModal
                    product={product}
                    cat={cat}
                    locked={locked}
                    onSave={onSave}
                    onClose={() => setEditing(false)}
                />
            )}
        </li>
    );
}

/* ---------- Novo produto ---------- */

function NewProduct({ groups, onCreate }) {
    const [category, setCategory] = useState("calda");
    const [name, setName] = useState("");
    const [grupo, setGrupo] = useState("");
    const [price, setPrice] = useState("");
    const [acompMax, setAcompMax] = useState("0");
    const [temCalda, setTemCalda] = useState(false);
    const [temCreme, setTemCreme] = useState(false);
    const [temExtras, setTemExtras] = useState(false);
    const [descricao, setDescricao] = useState("");
    const [alergenios, setAlergenios] = useState([]);
    const [saving, setSaving] = useState(false);

    const cat = CATEGORIES.find((c) => c.id === category);
    const parsed = cat.priced ? parsePrice(price) : 0;
    const canSubmit = name.trim() && parsed !== null && (!cat.grouped || grupo.trim());

    const submit = async (e) => {
        e.preventDefault();
        if (!canSubmit) return;
        setSaving(true);
        const ok = await onCreate({
            name: name.trim(),
            category,
            price: parsed,
            available: true,
            grupo: cat.grouped ? grupo.trim() : null,
            alergenios,
            ...(category === "tamanho"
                ? {
                    acomp_max: Math.max(0, parseInt(acompMax, 10) || 0),
                    tem_calda: temCalda,
                    tem_creme: temCreme,
                    tem_extras: temExtras,
                    description: descricao.trim() || null,
                }
                : {}),
        });
        setSaving(false);
        if (ok) {
            setName("");
            setPrice("");
            setDescricao("");
            setAlergenios([]);
        }
    };

    return (
        <form className="adm-new" onSubmit={submit}>
            <h2>Adicionar produto</h2>
            <div className="adm-new-grid">
                <label className="adm-field">
                    Categoria
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        {CATEGORIES.map((c) => (
                            <option key={c.id} value={c.id}>{c.label}</option>
                        ))}
                    </select>
                </label>
                <label className="adm-field">
                    Nome{category === "tamanho" ? " (inclui o volume, ex.: Copo Kids 200 ml)" : ""}
                    <input value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                {cat.grouped && (
                    <label className="adm-field">
                        Grupo
                        <input
                            list="adm-grupos"
                            value={grupo}
                            onChange={(e) => setGrupo(e.target.value)}
                            required
                        />
                        <datalist id="adm-grupos">
                            {groups.map((g) => <option key={g} value={g} />)}
                        </datalist>
                    </label>
                )}
                {cat.priced && (
                    <label className="adm-field">
                        Preço (€)
                        <input
                            inputMode="decimal"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </label>
                )}
            </div>

            {category === "tamanho" && (
                <div className="adm-size-rules">
                    <div className="adm-new-grid">
                        <label className="adm-field">
                            Nº de acompanhamentos
                            <input
                                type="number"
                                min="0"
                                max="10"
                                value={acompMax}
                                onChange={(e) => setAcompMax(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="adm-checks">
                        <label><input type="checkbox" checked={temCalda} onChange={(e) => setTemCalda(e.target.checked)} /> Tem calda</label>
                        <label><input type="checkbox" checked={temCreme} onChange={(e) => setTemCreme(e.target.checked)} /> Tem creme</label>
                        <label><input type="checkbox" checked={temExtras} onChange={(e) => setTemExtras(e.target.checked)} /> Permite extras</label>
                    </div>
                    <label className="adm-field">
                        Descrição (aparece no site)
                        <input
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            placeholder="Ex.: Só açaí, sem calda, sem creme nem toppings"
                        />
                    </label>
                </div>
            )}

            <AllergenPicker value={alergenios} onChange={setAlergenios} />

            <button className="adm-button" type="submit" disabled={!canSubmit || saving}>
                {saving ? "A adicionar..." : "Adicionar"}
            </button>
        </form>
    );
}

/* ---------- Definições ---------- */

const isHttps = (v) => !v || /^https:\/\//i.test(v);

function Settings({ notify }) {
    const [form, setForm] = useState(null);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        supabase
            .from("settings")
            .select("key, value")
            .then(({ data, error }) => {
                if (error) {
                    console.error("Erro ao carregar definições:", error);
                    notify("Não foi possível carregar as definições. Corre o SQL das definições no Supabase.", "error");
                }
                const map = Object.fromEntries((data ?? []).map((r) => [r.key, r.value]));
                setForm({
                    orders_open: map.orders_open !== "false",
                    closed_message: map.closed_message ?? "",
                    schedule: map.schedule ?? "",
                    whatsapp: map.whatsapp || WHATSAPP,
                    glovo_url: map.glovo_url || GLOVO_URL,
                    uber_url: map.uber_url || UBER_EATS_URL,
                });
            });
    }, [notify]);

    const upsert = async (pairs) => {
        const { error } = await supabase
            .from("settings")
            .upsert(pairs.map(([key, value]) => ({ key, value: String(value) })), { onConflict: "key" });
        if (error) console.error("Erro ao guardar definições:", error);
        return !error;
    };

    const set = (key, value) => setForm((f) => ({ ...f, [key]: value }));

    // Abrir/fechar guarda logo, sem precisar de clicar em Guardar
    const toggleOpen = async (open) => {
        set("orders_open", open);
        const ok = await upsert([["orders_open", open]]);
        if (!ok) {
            set("orders_open", !open);
            notify("Não foi possível guardar. Verifica as permissões no Supabase.", "error");
            return;
        }
        notify(open ? "Pedidos abertos." : "Pedidos fechados.");
    };

    const save = async (e) => {
        e.preventDefault();

        const phone = form.whatsapp.replace(/\D/g, "");
        if (phone.length < 9) {
            notify("Número de WhatsApp inválido. Usa o indicativo, por exemplo 351923352241.", "error");
            return;
        }
        if (!isHttps(form.glovo_url.trim()) || !isHttps(form.uber_url.trim())) {
            notify("Os links da Glovo e da Uber Eats têm de começar por https://", "error");
            return;
        }

        setSaving(true);
        const ok = await upsert([
            ["closed_message", form.closed_message.trim()],
            ["schedule", form.schedule.trim()],
            ["whatsapp", phone],
            ["glovo_url", form.glovo_url.trim()],
            ["uber_url", form.uber_url.trim()],
        ]);
        setSaving(false);

        if (ok) {
            set("whatsapp", phone);
            notify("Definições guardadas.");
        } else {
            notify("Não foi possível guardar. Verifica as permissões no Supabase.", "error");
        }
    };

    if (!form) return <p className="adm-empty">A carregar definições...</p>;

    return (
        <form className="adm-settings" onSubmit={save}>
            <section className="adm-box">
                <h2>Pedidos</h2>

                <label className="adm-switch adm-switch--big">
                    <input
                        type="checkbox"
                        checked={form.orders_open}
                        onChange={(e) => toggleOpen(e.target.checked)}
                    />
                    <span className="adm-switch-track" aria-hidden="true" />
                    <span>{form.orders_open ? "A aceitar pedidos" : "Pedidos fechados"}</span>
                </label>
                <p className="adm-note">
                    Quando estiver fechado, o cliente ainda vê o menu, mas não consegue enviar o pedido.
                </p>

                <label className="adm-field">
                    Mensagem quando estiver fechado
                    <textarea
                        rows="2"
                        value={form.closed_message}
                        onChange={(e) => set("closed_message", e.target.value)}
                        placeholder="Ex.: Voltamos amanhã às 12h."
                    />
                </label>

                <label className="adm-field">
                    Horário (aparece na página de pedido)
                    <textarea
                        rows="2"
                        value={form.schedule}
                        onChange={(e) => set("schedule", e.target.value)}
                        placeholder="Ex.: Todos os dias, das 12h às 22h"
                    />
                </label>
            </section>

            <section className="adm-box">
                <h2>Contactos e plataformas</h2>

                <label className="adm-field">
                    WhatsApp (com indicativo, só números)
                    <input
                        inputMode="numeric"
                        value={form.whatsapp}
                        onChange={(e) => set("whatsapp", e.target.value)}
                        placeholder="351923352241"
                        required
                    />
                </label>
                <label className="adm-field">
                    Link da Glovo
                    <input
                        type="url"
                        value={form.glovo_url}
                        onChange={(e) => set("glovo_url", e.target.value)}
                    />
                </label>
                <label className="adm-field">
                    Link da Uber Eats
                    <input
                        type="url"
                        value={form.uber_url}
                        onChange={(e) => set("uber_url", e.target.value)}
                    />
                </label>
            </section>

            <button className="adm-button" type="submit" disabled={saving}>
                {saving ? "A guardar..." : "Guardar definições"}
            </button>
        </form>
    );
}

/* ---------- Painel ---------- */

function Panel({ session }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [toast, setToast] = useState(null); // { text, type }
    const [tab, setTab] = useState("menu"); // "menu" | "settings"

    const notify = useCallback((text, type = "ok") => {
        setToast({ text, type });
        setTimeout(() => setToast(null), 3500);
    }, []);

    const load = useCallback(async () => {
        const { data, error } = await supabase
            .from("products")
            .select("*")
            .order("category", { ascending: true })
            .order("ordem", { ascending: true })
            .order("price", { ascending: true });

        if (error) notify("Não foi possível carregar os produtos.", "error");
        else setProducts(data ?? []);
        setLoading(false);
    }, [notify]);

    useEffect(() => { load(); }, [load]);

    const saveProduct = async (id, changes) => {
        const { data, error } = await supabase
            .from("products")
            .update(changes)
            .eq("id", id)
            .select();

        // Com RLS, um update sem permissão devolve 0 linhas, sem erro.
        if (error || !data?.length) {
            notify("Não foi possível guardar. Verifica as permissões no Supabase.", "error");
            return false;
        }
        setProducts((list) => list.map((p) => (p.id === id ? data[0] : p)));
        notify("Alteração guardada.");
        return true;
    };

    const createProduct = async (product) => {
        // Novo produto vai para o fim da sua categoria
        const last = Math.max(
            0,
            ...products.filter((p) => p.category === product.category).map((p) => p.ordem ?? 0)
        );

        const { error } = await supabase.from("products").insert({ ...product, ordem: last + 1 });
        if (error) {
            console.error("Erro ao adicionar produto:", error);
            notify(`Não foi possível adicionar: ${error.message}`, "error");
            return false;
        }
        await load();
        notify("Produto adicionado.");
        return true;
    };

    const deleteProduct = async (product) => {
        if (!window.confirm(`Remover "${product.name}"? Esta ação não pode ser desfeita.`)) return;

        const { data, error } = await supabase
            .from("products")
            .delete()
            .eq("id", product.id)
            .select();

        if (error || !data?.length) {
            notify("Não foi possível remover o produto.", "error");
            return;
        }
        setProducts((list) => list.filter((p) => p.id !== product.id));
        notify("Produto removido.");
    };

    const logout = () => supabase.auth.signOut();

    // Agrupar por categoria, na ordem definida; categorias desconhecidas vão no fim
    const byCategory = products.reduce((acc, p) => {
        (acc[p.category] ||= []).push(p);
        return acc;
    }, {});
    const known = CATEGORIES.map((c) => c.id);
    const sections = [
        ...CATEGORIES,
        ...Object.keys(byCategory)
            .filter((id) => !known.includes(id))
            .map((id) => ({ id, label: id, priced: true })),
    ].filter((c) => byCategory[c.id]?.length);

    const groups = [...new Set(
        (byCategory.acompanhamento ?? []).map((p) => p.grupo).filter(Boolean)
    )];

    return (
        <div className="adm">
            <header className="adm-header">
                <Logo />
                <div className="adm-header-actions">
                    <a className="adm-ghost" href="#inicio">Ver site</a>
                    <button className="adm-ghost" onClick={logout}>Sair</button>
                </div>
            </header>

            <main className="adm-main">
                <div className="adm-title">
                    <h1>{tab === "menu" ? "Menu" : "Definições"}</h1>
                    <p>Sessão iniciada como {session.user.email}</p>
                </div>

                {toast && (
                    <p className={`adm-toast ${toast.type}`} role="status">{toast.text}</p>
                )}

                <nav className="adm-tabs" role="tablist" aria-label="Secções do painel">
                    <button
                        role="tab"
                        aria-selected={tab === "menu"}
                        className={tab === "menu" ? "on" : ""}
                        onClick={() => setTab("menu")}
                    >
                        Menu
                    </button>
                    <button
                        role="tab"
                        aria-selected={tab === "settings"}
                        className={tab === "settings" ? "on" : ""}
                        onClick={() => setTab("settings")}
                    >
                        Definições
                    </button>
                </nav>

                {tab === "settings" && <Settings notify={notify} />}

                {tab === "menu" && (<>
                {loading && <p className="adm-empty">A carregar produtos...</p>}

                {!loading && products.length === 0 && (
                    <p className="adm-empty">Ainda não há produtos. Adiciona o primeiro abaixo.</p>
                )}

                {sections.map((cat) => (
                    <details className="adm-group" key={cat.id} open={cat.id === "tamanho"}>
                        <summary>
                            <h2>{cat.label}</h2>
                            <span className="adm-count">{byCategory[cat.id].length}</span>
                        </summary>
                        <ul className="adm-list">
                            {byCategory[cat.id].map((p) => (
                                <ProductRow
                                    key={`${p.id}-${p.price}-${p.available}`}
                                    product={p}
                                    cat={cat}
                                    onSave={saveProduct}
                                    onDelete={deleteProduct}
                                />
                            ))}
                        </ul>
                    </details>
                ))}

                <NewProduct groups={groups} onCreate={createProduct} />
                </>)}
            </main>
        </div>
    );
}


/* ---------- Entrada: decide entre login e painel ---------- */

export default function Admin() {
    const [session, setSession] = useState(undefined);

    useEffect(() => {
        let active = true;

        supabase.auth.getSession().then(({ data, error }) => {
            if (!active) return;

            if (error) {
                console.error("Erro ao verificar sessão:", error);
            }

            setSession(data?.session ?? null);
        });

        const { data: listener } = supabase.auth.onAuthStateChange(
            (_event, currentSession) => {
                if (active) {
                    setSession(currentSession ?? null);
                }
            }
        );

        return () => {
            active = false;
            listener.subscription.unsubscribe();
        };
    }, []);

    useEffect(() => {
        if (session === null) {
            window.location.hash = "#/login";
        }
    }, [session]);

    if (session === undefined || session === null) {
        return (
            <div className="adm adm--center">
                <p className="adm-empty">A carregar...</p>
            </div>
        );
    }

    if (session.user?.app_metadata?.role !== "admin") {
        return (
            <div className="adm adm--center">
                <div className="adm-card">
                    <h1>Acesso não autorizado</h1>
                    <p>Esta área é exclusiva da administração.</p>

                    <button
                        className="adm-button"
                        onClick={async () => {
                            await supabase.auth.signOut();
                            window.location.hash = "#/login";
                        }}
                    >
                        Sair da conta
                    </button>

                    <a href="#inicio">Voltar ao site</a>
                </div>
            </div>
        );
    }

    return <Panel session={session} />;
}