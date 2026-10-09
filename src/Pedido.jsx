import React, { useEffect, useMemo, useState } from "react";
import { ArrowLeft, MessageCircle, Minus, Plus, Trash2 } from "lucide-react";
import {
    ACOMP, CALDAS, CREME_EXTRA, CREMES, EXTRAS, SIZES, eur
} from "./data/menu";
import { supabase } from "./supabaseClient";
import { Usesettings} from "./hooks/Usesettings";
import "./pedido.css";

export { SIZES, eur };

/* ---------- Lógica ---------- */

const EMPTY = { size: "g", calda: "", creme: "", acomp: [], cremeExtra: [], extras: [], colher: null };
const STORAGE = "pe-de-acai-pedido";

const load = () => {
    try { return JSON.parse(localStorage.getItem(STORAGE)) || {}; } catch { return {}; }
};

const sum = (names, table) =>
    names.reduce((t, n) => t + (table.find((row) => row[0] === n)?.[1] || 0), 0);

// ["Banana","Banana","Chia"] -> "Banana x2, Chia"
const grouped = (list) => {
    const counts = new Map();
    list.forEach((n) => counts.set(n, (counts.get(n) || 0) + 1));
    return [...counts].map(([n, c]) => (c > 1 ? `${n} x${c}` : n)).join(", ");
};

const countOf = (list, name) => list.filter((x) => x === name).length;

const describe = (it) => {
    const lines = [];
    if (it.calda) lines.push(`Calda: ${it.calda}`);
    if (it.creme) lines.push(`Creme: ${it.creme}`);
    if (it.acomp.length) lines.push(`Acompanhamentos: ${grouped(it.acomp)}`);
    if (it.cremeExtra.length) lines.push(`Creme extra: ${grouped(it.cremeExtra)}`);
    if (it.extras.length) lines.push(`Extras: ${grouped(it.extras)}`);
    lines.push(`Colher: ${it.colher ? "Sim" : "Não"}`);
    return lines;
};

/* ---------- Dados do Supabase ---------- */

// Normaliza o texto para comparar nomes: sem acentos, sem espaços e em minúsculas.
// Assim "Bowl 540 ml", "bowl 540ml" e "Bowl  540 ML" são a mesma chave.
const normalize = (s) =>
    String(s ?? "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "")
        .toLowerCase();

// Nomes possíveis de um tamanho na tabela products (category = "tamanho").
// Ex.: { name: "Bowl", detail: "540 ml" } -> "bowl", "bowl540ml"
//      { name: "Copo", detail: "M" }      -> "copo", "copom"
const sizeKeys = (s) => [
    normalize(s.name),
    normalize(`${s.name} ${s.detail ?? ""}`)
];

/* ---------- Componentes pequenos ---------- */

function Step({ n, title, hint, badge, children }) {
    return (
        <section className="pd-step">
            <header>
                <span className="pd-n">{n}</span>
                <div><h3>{title}</h3>{hint && <p>{hint}</p>}</div>
                {badge && <span className="pd-badge">{badge}</span>}
            </header>
            {children}
        </section>
    );
}

function Chip({ label, price, on, disabled, onClick }) {
    return (
        <button
            type="button"
            className={`pd-chip ${on ? "on" : ""}`}
            aria-pressed={on}
            disabled={disabled && !on}
            onClick={onClick}
        >
            <span>{label}</span>
            {price != null && <small>+{eur(price)}</small>}
        </button>
    );
}

// Item que se pode escolher mais do que uma vez (até ao máximo da lista)
function CountChip({ label, price, count, canAdd, onAdd, onRemove }) {
    const priceTag = price != null && <small>+{eur(price)}</small>;

    if (count === 0) {
        return (
            <div className="pd-chip pd-count">
                <button type="button" className="pd-count-main" disabled={!canAdd} onClick={onAdd}>
                    <span>{label}</span>
                    {priceTag}
                </button>
            </div>
        );
    }

    return (
        <div className="pd-chip pd-count on">
            <span className="pd-count-label">
                <span>{label}</span>
                {priceTag}
            </span>
            <span className="pd-count-ctrl">
                <button type="button" aria-label={`Menos ${label}`} onClick={onRemove}>
                    <Minus size={14} />
                </button>
                <b aria-live="polite">{count}</b>
                <button type="button" aria-label={`Mais ${label}`} disabled={!canAdd} onClick={onAdd}>
                    <Plus size={14} />
                </button>
            </span>
        </div>
    );
}

/* ---------- Página ---------- */

export default function Pedido() {
    const saved = useMemo(load, []);
    const { settings } = Usesettings();
    const [item, setItem] = useState(EMPTY);
    const [cart, setCart] = useState(saved.cart || []);
    const [customer, setCustomer] = useState(
        saved.customer || { name: "", mode: "entrega", address: "", notes: "" }
    );
    const [added, setAdded] = useState("");
    const [feedback, setFeedback] = useState("");

    // Tamanhos vindos do Supabase: chave normalizada -> { price, available }
    const [dbSizes, setDbSizes] = useState({});
    // Restantes listas (caldas, cremes, ...): categoria -> linhas
    const [dbMenu, setDbMenu] = useState({});
    // Linhas completas da categoria "tamanho" (para tamanhos criados no admin)
    const [dbSizeRows, setDbSizeRows] = useState([]);

    useEffect(() => {
        const loadMenu = async () => {
            const { data, error } = await supabase.from("products").select("*");

            if (error) {
                console.error("Erro ao buscar produtos:", error);
                return;
            }

            const sizes = {};
            const lists = {};
            const sizeRows = [];

            data.forEach((product) => {
                if (product.category === "tamanho") {
                    sizeRows.push(product);
                    const value = Number(product.price);

                    sizes[normalize(product.name)] = {
                        price: Number.isFinite(value) ? value : undefined,
                        available: product.available !== false,
                        description: product.description,
                        alergenios: product.alergenios ?? []
                    };
                } else {
                    (lists[product.category] ||= []).push(product);
                }
            });

            Object.values(lists).forEach((rows) =>
                rows.sort((x, y) => (x.ordem ?? 0) - (y.ordem ?? 0))
            );

            setDbSizes(sizes);
            setDbMenu(lists);
            setDbSizeRows(sizeRows);
        };

        loadMenu();
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem(
                STORAGE,
                JSON.stringify({ cart, customer })
            );
        } catch {
            /* sem armazenamento */
        }
    }, [cart, customer]);

    // Tamanhos: os do menu.js + os criados no admin (que ainda não existem no menu.js).
    const knownKeys = new Set(SIZES.flatMap(sizeKeys));
    const extraSizes = dbSizeRows
        .filter((r) => !knownKeys.has(normalize(r.name)))
        .sort((a, b) => (a.ordem ?? 0) - (b.ordem ?? 0) || Number(a.price) - Number(b.price))
        .map((r) => ({
            id: `db-${r.id}`,
            name: r.name,
            detail: "",
            price: Number(r.price) || 0,
            acomp: r.acomp_max ?? 0,
            calda: !!r.tem_calda,
            creme: !!r.tem_creme,
            extras: !!r.tem_extras,
            note: r.description ?? ""
        }));
    const baseSizes = SIZES.map((s) => {
        const key = sizeKeys(s).find((k) => dbSizes[k]);
        const description = key ? dbSizes[key].description : null;
        return description ? { ...s, note: description } : s;
    });
    const allSizes = [...baseSizes, ...extraSizes];
    const sizeOf = (id) => allSizes.find((s) => s.id === id);

    // Listas do menu: Supabase primeiro; se a categoria não existir lá, usa o menu.js.
    // "Disponíveis" é o que o cliente vê; "todas" serve para calcular preços
    // (uma taça já no carrinho continua a ter o preço certo).
    const rowsOf = (cat) => dbMenu[cat] || [];
    const availableRows = (cat) => rowsOf(cat).filter((r) => r.available !== false);

    const caldas = rowsOf("calda").length ? availableRows("calda").map((r) => r.name) : CALDAS;
    const cremes = rowsOf("creme").length ? availableRows("creme").map((r) => r.name) : CREMES;

    let acompGroups = ACOMP;
    if (rowsOf("acompanhamento").length) {
        const byGroup = new Map();
        availableRows("acompanhamento").forEach((r) => {
            const g = r.grupo || "Outros";
            if (!byGroup.has(g)) byGroup.set(g, []);
            byGroup.get(g).push(r.name);
        });
        acompGroups = [...byGroup].map(([group, items]) => ({ group, items }));
    }

    const toPairs = (rows) => rows.map((r) => [r.name, Number(r.price) || 0]);
    const cremeExtraList = rowsOf("creme_extra").length ? toPairs(availableRows("creme_extra")) : CREME_EXTRA;
    const cremeExtraAll = rowsOf("creme_extra").length ? toPairs(rowsOf("creme_extra")) : CREME_EXTRA;
    const extrasList = rowsOf("extra").length ? toPairs(availableRows("extra")) : EXTRAS;
    const extrasAll = rowsOf("extra").length ? toPairs(rowsOf("extra")) : EXTRAS;

    // Alergénios (vêm do Supabase, campo "alergenios" de cada produto)
    const allergenLookup = (cat) =>
        new Map(rowsOf(cat).map((r) => [r.name, r.alergenios || []]));

    const itemAllergens = (it) => {
        const found = new Set();
        const add = (list) => list?.forEach((a) => found.add(a));
        const base = sizeOf(it.size);

        if (base) add(dbEntryOf(base)?.alergenios);
        add(allergenLookup("calda").get(it.calda));
        add(allergenLookup("creme").get(it.creme));
        it.acomp.forEach((n) => add(allergenLookup("acompanhamento").get(n)));
        it.cremeExtra.forEach((n) => add(allergenLookup("creme_extra").get(n)));
        it.extras.forEach((n) => add(allergenLookup("extra").get(n)));

        return [...found];
    };

    const allergenSections = [
        ["Tamanhos", dbSizeRows],
        ["Caldas", rowsOf("calda")],
        ["Cremes", rowsOf("creme")],
        ["Acompanhamentos", rowsOf("acompanhamento")],
        ["Cremes extra", rowsOf("creme_extra")],
        ["Extras", rowsOf("extra")]
    ]
        .map(([title, rows]) => [title, rows.filter((r) => r.alergenios?.length)])
        .filter(([, rows]) => rows.length > 0);

    const size = sizeOf(item.size);

    // Entrada do Supabase para um tamanho (ou undefined se não existir lá)
    const dbEntryOf = (s) => {
        for (const key of sizeKeys(s)) {
            if (dbSizes[key] !== undefined) return dbSizes[key];
        }
        return undefined;
    };

    // Preço: Supabase primeiro, menu.js como alternativa.
    const sizePriceOf = (s) => dbEntryOf(s)?.price ?? s.price;

    // Disponível: se o Supabase não tiver o tamanho, considera-se disponível.
    const isAvailable = (s) => dbEntryOf(s)?.available !== false;

    const priceOf = (it) => {
        const currentSize = sizeOf(it.size);

        if (!currentSize) return 0;

        return Math.round(
            (
                sizePriceOf(currentSize) +
                sum(it.cremeExtra, cremeExtraAll) +
                sum(it.extras, extrasAll) +
                (it.colher ? 0.1 : 0)
            ) * 100
        ) / 100;
    };

    const setSize = (id) => setItem((cur) => {
        const s = sizeOf(id);

        return {
            ...cur,
            size: id,
            calda: s.calda ? cur.calda : "",
            creme: s.creme ? cur.creme : "",
            acomp: cur.acomp.slice(0, s.acomp),
            cremeExtra: s.extras ? cur.cremeExtra : [],
            extras: s.extras ? cur.extras : []
        };
    });

    // Se o tamanho escolhido ficar esgotado, passa para o primeiro disponível.
    useEffect(() => {
        const current = sizeOf(item.size);
        if (!current || isAvailable(current)) return;

        const firstOk = allSizes.find((s) => isAvailable(s));
        if (firstOk) setSize(firstOk.id);
    }, [dbSizes, item.size]); // eslint-disable-line react-hooks/exhaustive-deps

    const pickOne = (key, name) =>
        setItem((cur) => ({
            ...cur,
            [key]: cur[key] === name ? "" : name
        }));

    // Acrescenta uma unidade (o mesmo item pode repetir-se até ao máximo)
    const addMany = (key, name, max) =>
        setItem((cur) =>
            cur[key].length >= max ? cur : { ...cur, [key]: [...cur[key], name] }
        );

    // Tira uma unidade
    const removeOne = (key, name) =>
        setItem((cur) => {
            const i = cur[key].lastIndexOf(name);
            if (i < 0) return cur;
            return { ...cur, [key]: cur[key].filter((_, idx) => idx !== i) };
        });

    const missing = [];

    if (!isAvailable(size)) {
        missing.push("um tamanho disponível");
    }

    if (item.colher === null) {
        missing.push("colher");
    }

    const itemPrice = priceOf(item);

    const addItem = () => {
        if (missing.length) return;

        setCart((c) => [
            ...c,
            {
                ...item,
                uid: `${Date.now()}-${Math.random()}`,
                qty: 1
            }
        ]);

        setItem({
            ...EMPTY,
            size: item.size
        });

        setAdded("Adicionada ao pedido. Podes montar outra ou enviar o pedido.");
    };

    const changeQty = (uid, d) =>
        setCart((c) =>
            c.map((it) =>
                it.uid === uid
                    ? { ...it, qty: Math.min(10, Math.max(1, it.qty + d)) }
                    : it
            )
        );

    const removeItem = (uid) =>
        setCart((c) => c.filter((it) => it.uid !== uid));

    const setField = (key, value) =>
        setCustomer((cur) => ({
            ...cur,
            [key]: value
        }));

    const total = Math.round(
        cart.reduce((t, it) => t + priceOf(it) * it.qty, 0) * 100
    ) / 100;

    // Taças no carrinho cujo tamanho entretanto ficou esgotado
    const soldOutInCart = cart.filter((it) => {
        const s = sizeOf(it.size);
        return s && !isAvailable(s);
    });

    const canSend =
        cart.length > 0 &&
        soldOutInCart.length === 0 &&
        settings.orders_open &&
        customer.name.trim() &&
        (customer.mode === "levantar" || customer.address.trim());

    const orderText = (withContact) => {
        const lines = withContact
            ? ["Olá! Quero fazer um pedido pelo site:", ""]
            : [];

        cart.forEach((it) => {
            const s = sizeOf(it.size);
            if (!s) return;

            lines.push(
                `${it.qty}x ${s.name} ${s.detail} - ${eur(priceOf(it) * it.qty)}`
            );

            describe(it).forEach((l) =>
                lines.push(`   ${l}`)
            );

            const allergens = itemAllergens(it);
            if (allergens.length) lines.push(`   Alergénios: ${allergens.join(", ")}`);

            lines.push("");
        });

        lines.push(
            `Total: ${eur(total)}${withContact && customer.mode === "entrega"
                ? " (sem taxa de entrega)"
                : ""
            }`
        );

        if (withContact) {
            lines.push("", `Nome: ${customer.name.trim()}`);

            lines.push(
                customer.mode === "entrega"
                    ? `Entrega em: ${customer.address.trim()}`
                    : "Levanto na loja"
            );

            if (customer.notes.trim()) {
                lines.push(`Notas: ${customer.notes.trim()}`);
            }
        }

        return lines.join("\n");
    };

    const sendWhatsApp = () => {
        if (!canSend) return;

        window.open(
            `https://wa.me/${settings.whatsapp}?text=${encodeURIComponent(orderText(true))}`,
            "_blank",
            "noopener"
        );

        setFeedback(
            "Abrimos o WhatsApp com o teu pedido. É só enviares a mensagem."
        );
    };

    // As plataformas não aceitam pedidos pré-preenchidos:
    // copiamos o pedido para consulta
    const openPlatform = (url, name) => {
        if (cart.length > 0) {
            navigator.clipboard
                ?.writeText(orderText(false))
                .then(() =>
                    setFeedback(
                        `Pedido copiado. No ${name}, escolhe os mesmos itens e cola-o nas notas.`
                    )
                )
                .catch(() =>
                    setFeedback(
                        `Abre o ${name} e escolhe os mesmos itens.`
                    )
                );
        }

        window.open(url, "_blank", "noopener");
    };

    const goCart = () =>
        document
            .getElementById("carrinho")
            ?.scrollIntoView({ behavior: "smooth" });

    let n = 0;

    const next = () => ++n;

    return (
        <div className="pd">
            <header className="pd-header">
                <a className="logo" href="#inicio">
                    <span className="logo-mark">P</span>
                    <span>Pé de <b>Açaí</b></span>
                </a>

                <a className="pd-back" href="#inicio">
                    <ArrowLeft size={16} /> Voltar ao site
                </a>
            </header>

            <div className="pd-hero">
                <h1>Faz o teu pedido</h1>

                <p>
                    Escolhe o tamanho, monta a tua taça e envia o pedido.
                    Podes juntar várias taças.
                </p>

                <div className="pd-alt">
                    <span>
                        Preferes pedir por uma plataforma de entrega?
                    </span>

                    <div>
                        <button
                            type="button"
                            className="ghost-button"
                            onClick={() =>
                                openPlatform(settings.glovo_url, "Glovo")
                            }
                        >
                            Pedir na Glovo
                        </button>

                        <button
                            type="button"
                            className="ghost-button"
                            onClick={() =>
                                openPlatform(settings.uber_url, "Uber Eats")
                            }
                        >
                            Pedir na Uber Eats
                        </button>
                    </div>
                </div>
            </div>

            {(!settings.orders_open || settings.schedule || allergenSections.length > 0) && (
                <div className="pd-info">
                    {!settings.orders_open && (
                        <p className="pd-closed" role="status">
                            <b>De momento não estamos a aceitar pedidos.</b>{" "}
                            {settings.closed_message}
                        </p>
                    )}

                    {settings.schedule && (
                        <p className="pd-schedule">Horário: {settings.schedule}</p>
                    )}

                    {allergenSections.length > 0 && (
                        <details className="pd-allergens">
                            <summary>Informação sobre alergénios</summary>

                            {allergenSections.map(([title, rows]) => (
                                <div key={title}>
                                    <h4>{title}</h4>
                                    <ul>
                                        {rows.map((r) => (
                                            <li key={r.id}>
                                                <b>{r.name}</b>: {r.alergenios.join(", ")}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            <p>
                                Se tens alergias ou intolerâncias, fala connosco antes de fazeres o pedido.
                            </p>
                        </details>
                    )}
                </div>
            )}

            <div className="pd-layout">
                <div className="pd-steps">
                    <Step n={next()} title="Tamanho">
                        <div className="pd-sizes">
                            {allSizes.map((s) => {
                                const ok = isAvailable(s);
                                const selected = item.size === s.id && ok;

                                return (
                                    <button
                                        type="button"
                                        key={s.id}
                                        className={`pd-size ${selected ? "on" : ""}`}
                                        aria-pressed={selected}
                                        disabled={!ok}
                                        onClick={() => setSize(s.id)}
                                    >
                                        <span className="pd-size-top">
                                            <b>
                                                {s.name} <em>{s.detail}</em>
                                            </b>

                                            {ok ? (
                                                <span>{eur(sizePriceOf(s))}</span>
                                            ) : (
                                                <span className="pd-soldout">Esgotado</span>
                                            )}
                                        </span>

                                        <small>{s.note}</small>
                                    </button>
                                );
                            })}
                        </div>
                    </Step>

                    {size.calda && (
                        <Step
                            n={next()}
                            title="Calda"
                            hint="Escolhe 1. Vai no fundo e nas laterais do copo."
                            badge="Opcional"
                        >
                            <div className="pd-chips">
                                {caldas.map((c) => (
                                    <Chip
                                        key={c}
                                        label={c}
                                        on={item.calda === c}
                                        onClick={() =>
                                            pickOne("calda", c)
                                        }
                                    />
                                ))}
                            </div>
                        </Step>
                    )}

                    {size.creme && (
                        <Step
                            n={next()}
                            title="Creme"
                            hint="Escolhe 1."
                            badge="Opcional"
                        >
                            <div className="pd-chips">
                                {cremes.map((c) => (
                                    <Chip
                                        key={c}
                                        label={c}
                                        on={item.creme === c}
                                        onClick={() =>
                                            pickOne("creme", c)
                                        }
                                    />
                                ))}
                            </div>
                        </Step>
                    )}

                    {size.acomp > 0 && (
                        <Step
                            n={next()}
                            title="Acompanhamentos"
                            hint={`Opcional. Escolhe até ${size.acomp} e podes repetir o mesmo.`}
                            badge={`${item.acomp.length} de ${size.acomp}`}
                        >
                            {acompGroups.map((g) => (
                                <div className="pd-group" key={g.group}>
                                    <h4>{g.group}</h4>

                                    <div className="pd-chips">
                                        {g.items.map((name) => (
                                            <CountChip
                                            key={name}
                                            label={name}
                                            count={countOf(item.acomp, name)}
                                            canAdd={item.acomp.length < size.acomp}
                                            onAdd={() => addMany("acomp", name, size.acomp)}
                                            onRemove={() => removeOne("acomp", name)}
                                        />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </Step>
                    )}

                    {size.extras && (
                        <Step
                            n={next()}
                            title="Extras"
                            hint="Opcional. Pagos à parte e postos dentro do copo. Podes repetir o mesmo."
                            badge={`${item.cremeExtra.length + item.extras.length} escolhidos`}
                        >
                            <div className="pd-group">
                                <h4>Creme extra (máximo 3)</h4>

                                <div className="pd-chips">
                                    {cremeExtraList.map(([name, price]) => (
                                        <CountChip
                                            key={name}
                                            label={name}
                                            price={price}
                                            count={countOf(item.cremeExtra, name)}
                                            canAdd={item.cremeExtra.length < 3}
                                            onAdd={() => addMany("cremeExtra", name, 3)}
                                            onRemove={() => removeOne("cremeExtra", name)}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="pd-group">
                                <h4>Itens extra (máximo 3)</h4>

                                <div className="pd-chips">
                                    {extrasList.map(([name, price]) => (
                                        <CountChip
                                            key={name}
                                            label={name}
                                            price={price}
                                            count={countOf(item.extras, name)}
                                            canAdd={item.extras.length < 3}
                                            onAdd={() => addMany("extras", name, 3)}
                                            onRemove={() => removeOne("extras", name)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </Step>
                    )}

                    <Step
                        n={next()}
                        title="Colher"
                        hint="Queres colher?"
                        badge="Obrigatório"
                    >
                        <div className="pd-chips">
                            <Chip
                                label="Sim, colher por favor"
                                price={0.1}
                                on={item.colher === true}
                                onClick={() =>
                                    setItem((c) => ({
                                        ...c,
                                        colher: true
                                    }))
                                }
                            />

                            <Chip
                                label="Não quero colher, obrigado"
                                on={item.colher === false}
                                onClick={() =>
                                    setItem((c) => ({
                                        ...c,
                                        colher: false
                                    }))
                                }
                            />
                        </div>
                    </Step>

                    <div className="pd-add">
                        <button
                            type="button"
                            className="primary-button"
                            disabled={missing.length > 0}
                            onClick={addItem}
                        >
                            Adicionar ao pedido · {eur(itemPrice)}
                        </button>

                        {missing.length > 0 ? (
                            <p className="pd-hint">
                                Falta escolher: {missing.join(" e ")}.
                            </p>
                        ) : (
                            added && (
                                <p
                                    className="pd-hint ok"
                                    role="status"
                                >
                                    {added}
                                </p>
                            )
                        )}
                    </div>
                </div>

                <aside className="pd-cart" id="carrinho">
                    <h2>O teu pedido</h2>

                    {cart.length === 0 ? (
                        <p className="pd-empty">
                            Ainda não adicionaste nenhuma taça.
                        </p>
                    ) : (
                        <ul className="pd-items">
                            {cart.map((it) => {
                                const s = sizeOf(it.size);

                                if (!s) return null;

                                return (
                                    <li key={it.uid}>
                                        <div className="pd-item-head">
                                            <b>
                                                {s.name} {s.detail}
                                            </b>

                                            <span>
                                                {eur(
                                                    priceOf(it) *
                                                    it.qty
                                                )}
                                            </span>
                                        </div>

                                        {!isAvailable(s) && (
                                            <p className="pd-warn">
                                                Este tamanho está esgotado. Remove esta taça.
                                            </p>
                                        )}

                                        <ul className="pd-lines">
                                            {describe(it).map((l) => (
                                                <li key={l}>{l}</li>
                                            ))}
                                        </ul>

                                        {itemAllergens(it).length > 0 && (
                                            <p className="pd-allergen-line">
                                                Alergénios: {itemAllergens(it).join(", ")}
                                            </p>
                                        )}

                                        <div className="pd-item-foot">
                                            <div className="pd-qty">
                                                <button
                                                    type="button"
                                                    aria-label="Menos uma"
                                                    onClick={() =>
                                                        changeQty(
                                                            it.uid,
                                                            -1
                                                        )
                                                    }
                                                >
                                                    <Minus size={14} />
                                                </button>

                                                <b>{it.qty}</b>

                                                <button
                                                    type="button"
                                                    aria-label="Mais uma"
                                                    onClick={() =>
                                                        changeQty(
                                                            it.uid,
                                                            1
                                                        )
                                                    }
                                                >
                                                    <Plus size={14} />
                                                </button>
                                            </div>

                                            <button
                                                type="button"
                                                className="pd-remove"
                                                onClick={() =>
                                                    removeItem(it.uid)
                                                }
                                            >
                                                <Trash2 size={15} /> Remover
                                            </button>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    )}

                    <div className="pd-total">
                        <span>Total</span>
                        <b>{eur(total)}</b>
                    </div>

                    <p className="pd-hint">
                        Sem taxa de entrega. Confirmamos o valor final
                        contigo no WhatsApp.
                    </p>

                    <div
                        className="pd-mode"
                        role="group"
                        aria-label="Como queres receber"
                    >
                        <button
                            type="button"
                            className={
                                customer.mode === "entrega" ? "on" : ""
                            }
                            aria-pressed={
                                customer.mode === "entrega"
                            }
                            onClick={() =>
                                setField("mode", "entrega")
                            }
                        >
                            Entrega
                        </button>

                        <button
                            type="button"
                            className={
                                customer.mode === "levantar" ? "on" : ""
                            }
                            aria-pressed={
                                customer.mode === "levantar"
                            }
                            onClick={() =>
                                setField("mode", "levantar")
                            }
                        >
                            Levantar na loja
                        </button>
                    </div>

                    <label className="pd-field">
                        Nome
                        <input
                            value={customer.name}
                            onChange={(e) =>
                                setField("name", e.target.value)
                            }
                            autoComplete="name"
                        />
                    </label>

                    {customer.mode === "entrega" && (
                        <label className="pd-field">
                            Morada de entrega
                            <input
                                value={customer.address}
                                onChange={(e) =>
                                    setField(
                                        "address",
                                        e.target.value
                                    )
                                }
                                autoComplete="street-address"
                            />
                        </label>
                    )}

                    <label className="pd-field">
                        Notas (opcional)
                        <input
                            value={customer.notes}
                            onChange={(e) =>
                                setField("notes", e.target.value)
                            }
                        />
                    </label>

                    <button
                        type="button"
                        className="primary-button pd-send"
                        disabled={!canSend}
                        onClick={sendWhatsApp}
                    >
                        <MessageCircle size={18} /> Enviar pedido por WhatsApp
                    </button>

                    {!settings.orders_open && (
                        <p className="pd-warn">
                            De momento não estamos a aceitar pedidos.
                        </p>
                    )}

                    {soldOutInCart.length > 0 && (
                        <p className="pd-warn">
                            Remove as taças esgotadas para poderes enviar o pedido.
                        </p>
                    )}

                    {feedback && (
                        <p className="pd-feedback" role="status">
                            {feedback}
                        </p>
                    )}

                    <div className="pd-platforms">
                        <span>
                            Preferes pedir numa plataforma?
                        </span>

                        <div>
                            <button
                                type="button"
                                className="ghost-button"
                                onClick={() =>
                                    openPlatform(
                                        settings.glovo_url,
                                        "Glovo"
                                    )
                                }
                            >
                                Glovo
                            </button>

                            <button
                                type="button"
                                className="ghost-button"
                                onClick={() =>
                                    openPlatform(
                                        settings.uber_url,
                                        "Uber Eats"
                                    )
                                }
                            >
                                Uber Eats
                            </button>
                        </div>
                    </div>
                </aside>
            </div>

            {cart.length > 0 && (
                <div className="pd-bar">
                    <div>
                        <small>Total</small>
                        <b>{eur(total)}</b>
                    </div>

                    <button
                        type="button"
                        className="primary-button"
                        onClick={goCart}
                    >
                        Ver pedido
                    </button>
                </div>
            )}
        </div>
    );
}