import React, { useEffect, useMemo, useState } from "react";
import { ArrowLeft, MessageCircle, Minus, Plus, Trash2 } from "lucide-react";
import "./pedido.css";

// Número de WhatsApp da loja (prefixo 351 + número)
const WHATSAPP = "351923352241";
const GLOVO_URL = "https://glovoapp.com/pt/pt/lisboa/stores/pe-de-acai-lis";
const UBER_EATS_URL = "https://www.ubereats.com/pt/store/pe-de-acai/N3OKHhwBQ3mRqJP7KZxe5w?diningMode=DELIVERY";

export const eur = (n) => `${n.toFixed(2).replace(".", ",")} €`;

/* ---------- Menu ---------- */

export const SIZES = [
    { id: "m", name: "Copo M", detail: "360 ml", price: 10.2, acomp: 3, calda: true, creme: true, extras: false, note: "3 acompanhamentos, 1 calda e 1 creme. Sem extras." },
    { id: "g", name: "Copo G", detail: "473 ml", price: 12.2, acomp: 3, calda: true, creme: true, extras: true, note: "3 acompanhamentos, 1 calda e 1 creme. Podes juntar extras." },
    { id: "b540", name: "Bowl", detail: "540 ml", price: 14.2, acomp: 5, calda: true, creme: true, extras: true, note: "5 acompanhamentos, 1 calda e 1 creme. Podes juntar extras." },
    { id: "b750", name: "Bowl", detail: "750 ml", price: 18.25, acomp: 5, calda: true, creme: true, extras: true, note: "5 acompanhamentos, 1 calda e 1 creme. Podes juntar extras." },
    { id: "puro", name: "Açaí puro", detail: "750 g", price: 23, acomp: 0, calda: false, creme: false, extras: false, note: "Só açaí, sem caldas, cremes nem toppings." }
];

const CALDAS = ["Leite Condensado", "Calda de Morango", "Mel", "Calda de Chocolate", "Calda de Caramelo"];

const CREMES = [
    "Creme Banoffe", "Creme Óreo", "Creme de Morango", "Creme de Nido", "Creme de Ovomaltine", "Doce de Leite",
    "Creme de Avelã", "Geleia Artesanal de Morango", "Creme de Maracujá", "Creme de Lima",
    "Creme de Chocolate Negro", "Creme de Chocolate Branco"
];

const ACOMP = [
    { group: "Fruta", items: ["Banana", "Abacaxi (sem calda)", "Pêssego (sem calda)", "Pêra (sem calda)", "Manga", "Kiwi", "Uva", "Morango", "Papaia / mamão"] },
    { group: "Crocantes e cereais", items: ["Granola Tradicional", "Granola de Chocolate", "Granola de Frutos Vermelhos", "Aveia", "Nestum", "Cerelac", "Chia", "Amendoim", "Amendoim Granulado Crocante", "Amendoim Coberto com Chocolate", "Coco Laminado", "Paçoca de Amendoim"] },
    { group: "Doces e cremosos", items: ["Pintarolas", "Marshmallow", "Gomas", "Bolacha Triturada", "Bolacha Oreo Triturada", "Bolacha Lotus Triturada", "Leite em Pó", "Manteiga de Amendoim", "Iogurte Grego"] }
];

const CREME_EXTRA = [
    ["Creme de Morango", 1], ["Creme de Nido", 1.5], ["Creme Banoffe", 1], ["Creme Oreo", 1], ["Creme de Avelã", 1],
    ["Creme de Ovomaltine", 1.5], ["Doce de Leite", 1], ["Brigadeiro Cremoso", 1.2], ["Geleia Artesanal de Morango", 1.2],
    ["Creme de Maracujá", 1.5], ["Creme de Lima", 1.2], ["Goiabada Cremosa", 1.2], ["Creme de Chocolate Negro", 1.5],
    ["Creme de Chocolate Branco", 1.5]
];

const EXTRAS = [
    ["Manteiga de Amendoim", 1], ["Leite em Pó", 1], ["Bolacha Triturada", 1], ["Amendoim Granulado Crocante", 1],
    ["Granola Tradicional", 1], ["Granola de Chocolate", 1], ["Amendoim", 1], ["Aveia", 1], ["Pintarolas", 1.2],
    ["Marshmallow", 1], ["Gomas", 1], ["Banana", 1], ["Abacaxi (sem calda)", 1], ["Pêssego (sem calda)", 1],
    ["Manga", 1], ["Kiwi", 1], ["Uva", 1], ["Morango", 1], ["Iogurte Grego", 1], ["Cerelac", 1], ["Coco Laminado", 1],
    ["Paçoca de Amendoim", 1], ["Nestum", 1], ["Chia", 1], ["Brigadeiro Cremoso", 1.2], ["Geleia Artesanal de Morango", 1.2],
    ["Bolacha Oreo Triturada", 1], ["Bolacha Lotus Triturada", 1], ["Jaca (sem calda)", 1.5]
];

/* ---------- Lógica ---------- */

const EMPTY = { size: "g", calda: "", creme: "", acomp: [], cremeExtra: [], extras: [], colher: null };
const STORAGE = "pe-de-acai-pedido";

const load = () => {
    try { return JSON.parse(localStorage.getItem(STORAGE)) || {}; } catch { return {}; }
};
const sizeOf = (id) => SIZES.find((s) => s.id === id);
const sum = (names, table) => names.reduce((t, n) => t + (table.find((row) => row[0] === n)?.[1] || 0), 0);
const priceOf = (it) => Math.round((sizeOf(it.size).price + sum(it.cremeExtra, CREME_EXTRA) + sum(it.extras, EXTRAS) + (it.colher ? 0.1 : 0)) * 100) / 100;

const describe = (it) => {
    const lines = [];
    if (it.calda) lines.push(`Calda: ${it.calda}`);
    if (it.creme) lines.push(`Creme: ${it.creme}`);
    if (it.acomp.length) lines.push(`Acompanhamentos: ${it.acomp.join(", ")}`);
    if (it.cremeExtra.length) lines.push(`Creme extra: ${it.cremeExtra.join(", ")}`);
    if (it.extras.length) lines.push(`Extras: ${it.extras.join(", ")}`);
    lines.push(`Colher: ${it.colher ? "Sim" : "Não"}`);
    return lines;
};

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
        <button type="button" className={`pd-chip ${on ? "on" : ""}`} aria-pressed={on} disabled={disabled && !on} onClick={onClick}>
            <span>{label}</span>
            {price != null && <small>+{eur(price)}</small>}
        </button>
    );
}

/* ---------- Página ---------- */

export default function Pedido() {
    const saved = useMemo(load, []);
    const [item, setItem] = useState(EMPTY);
    const [cart, setCart] = useState(saved.cart || []);
    const [customer, setCustomer] = useState(saved.customer || { name: "", mode: "entrega", address: "", notes: "" });
    const [added, setAdded] = useState("");
    const [feedback, setFeedback] = useState("");

    useEffect(() => {
        try { localStorage.setItem(STORAGE, JSON.stringify({ cart, customer })); } catch { /* sem armazenamento */ }
    }, [cart, customer]);

    const size = sizeOf(item.size);

    const setSize = (id) => setItem((cur) => {
        const s = sizeOf(id);
        return {
            ...cur, size: id,
            calda: s.calda ? cur.calda : "", creme: s.creme ? cur.creme : "",
            acomp: cur.acomp.slice(0, s.acomp),
            cremeExtra: s.extras ? cur.cremeExtra : [], extras: s.extras ? cur.extras : []
        };
    });
    const pickOne = (key, name) => setItem((cur) => ({ ...cur, [key]: cur[key] === name ? "" : name }));
    const pickMany = (key, name, max) => setItem((cur) => {
        const list = cur[key];
        if (list.includes(name)) return { ...cur, [key]: list.filter((x) => x !== name) };
        if (list.length >= max) return cur;
        return { ...cur, [key]: [...list, name] };
    });

    const missing = [];
    if (size.acomp > 0 && item.acomp.length === 0) missing.push("acompanhamentos");
    if (item.colher === null) missing.push("colher");
    const itemPrice = priceOf(item);

    const addItem = () => {
        if (missing.length) return;
        setCart((c) => [...c, { ...item, uid: `${Date.now()}-${Math.random()}`, qty: 1 }]);
        setItem({ ...EMPTY, size: item.size });
        setAdded("Adicionada ao pedido. Podes montar outra ou enviar o pedido.");
    };
    const changeQty = (uid, d) => setCart((c) => c.map((it) => (it.uid === uid ? { ...it, qty: Math.min(10, Math.max(1, it.qty + d)) } : it)));
    const removeItem = (uid) => setCart((c) => c.filter((it) => it.uid !== uid));
    const setField = (key, value) => setCustomer((cur) => ({ ...cur, [key]: value }));

    const total = Math.round(cart.reduce((t, it) => t + priceOf(it) * it.qty, 0) * 100) / 100;
    const canSend = cart.length > 0 && customer.name.trim() && (customer.mode === "levantar" || customer.address.trim());

    const orderText = (withContact) => {
        const lines = withContact ? ["Olá! Quero fazer um pedido pelo site:", ""] : [];
        cart.forEach((it) => {
            const s = sizeOf(it.size);
            lines.push(`${it.qty}x ${s.name} ${s.detail} - ${eur(priceOf(it) * it.qty)}`);
            describe(it).forEach((l) => lines.push(`   ${l}`));
            lines.push("");
        });
        lines.push(`Total: ${eur(total)}${withContact && customer.mode === "entrega" ? " (sem taxa de entrega)" : ""}`);
        if (withContact) {
            lines.push("", `Nome: ${customer.name.trim()}`);
            lines.push(customer.mode === "entrega" ? `Entrega em: ${customer.address.trim()}` : "Levanto na loja");
            if (customer.notes.trim()) lines.push(`Notas: ${customer.notes.trim()}`);
        }
        return lines.join("\n");
    };

    const sendWhatsApp = () => {
        if (!canSend) return;
        window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(orderText(true))}`, "_blank", "noopener");
        setFeedback("Abrimos o WhatsApp com o teu pedido. É só enviares a mensagem.");
    };
    // As plataformas não aceitam pedidos pré-preenchidos: copiamos o pedido para consulta
    // Sempre disponíveis. Se já há itens no pedido, copiamos o resumo para o cliente consultar
    const openPlatform = (url, name) => {
        if (cart.length > 0) {
            navigator.clipboard?.writeText(orderText(false))
                .then(() => setFeedback(`Pedido copiado. No ${name}, escolhe os mesmos itens e cola-o nas notas.`))
                .catch(() => setFeedback(`Abre o ${name} e escolhe os mesmos itens.`));
        }
        window.open(url, "_blank", "noopener");
    };
    const goCart = () => document.getElementById("carrinho")?.scrollIntoView({ behavior: "smooth" });

    let n = 0;
    const next = () => ++n;

    return (
        <div className="pd">
            <header className="pd-header">
                <a className="logo" href="#inicio"><span className="logo-mark">P</span><span>Pé de <b>Açaí</b></span></a>
                <a className="pd-back" href="#inicio"><ArrowLeft size={16} /> Voltar ao site</a>
            </header>

            <div className="pd-hero">
                <h1>Faz o teu pedido</h1>
                <p>Escolhe o tamanho, monta a tua taça e envia o pedido. Podes juntar várias taças.</p>
                <div className="pd-alt">
                    <span>Preferes pedir por uma plataforma de entrega?</span>
                    <div>
                        <button type="button" className="ghost-button" onClick={() => openPlatform(GLOVO_URL, "Glovo")}>Pedir na Glovo</button>
                        <button type="button" className="ghost-button" onClick={() => openPlatform(UBER_EATS_URL, "Uber Eats")}>Pedir na Uber Eats</button>
                    </div>
                </div>
            </div>

            <div className="pd-layout">
                <div className="pd-steps">
                    <Step n={next()} title="Tamanho">
                        <div className="pd-sizes">
                            {SIZES.map((s) => (
                                <button type="button" key={s.id} className={`pd-size ${item.size === s.id ? "on" : ""}`} aria-pressed={item.size === s.id} onClick={() => setSize(s.id)}>
                                    <span className="pd-size-top"><b>{s.name} <em>{s.detail}</em></b><span>{eur(s.price)}</span></span>
                                    <small>{s.note}</small>
                                </button>
                            ))}
                        </div>
                    </Step>

                    {size.calda && (
                        <Step n={next()} title="Calda" hint="Escolhe 1. Vai no fundo e nas laterais do copo." badge="Opcional">
                            <div className="pd-chips">
                                {CALDAS.map((c) => <Chip key={c} label={c} on={item.calda === c} onClick={() => pickOne("calda", c)} />)}
                            </div>
                        </Step>
                    )}

                    {size.creme && (
                        <Step n={next()} title="Creme" hint="Escolhe 1." badge="Opcional">
                            <div className="pd-chips">
                                {CREMES.map((c) => <Chip key={c} label={c} on={item.creme === c} onClick={() => pickOne("creme", c)} />)}
                            </div>
                        </Step>
                    )}

                    {size.acomp > 0 && (
                        <Step n={next()} title="Acompanhamentos" hint={`Escolhe até ${size.acomp}.`} badge={`${item.acomp.length} de ${size.acomp}`}>
                            {ACOMP.map((g) => (
                                <div className="pd-group" key={g.group}>
                                    <h4>{g.group}</h4>
                                    <div className="pd-chips">
                                        {g.items.map((name) => (
                                            <Chip key={name} label={name} on={item.acomp.includes(name)} disabled={item.acomp.length >= size.acomp} onClick={() => pickMany("acomp", name, size.acomp)} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </Step>
                    )}

                    {size.extras && (
                        <Step n={next()} title="Extras" hint="Opcional. Pagos à parte e postos dentro do copo." badge={`${item.cremeExtra.length + item.extras.length} escolhidos`}>
                            <div className="pd-group">
                                <h4>Creme extra (máximo 3)</h4>
                                <div className="pd-chips">
                                    {CREME_EXTRA.map(([name, price]) => (
                                        <Chip key={name} label={name} price={price} on={item.cremeExtra.includes(name)} disabled={item.cremeExtra.length >= 3} onClick={() => pickMany("cremeExtra", name, 3)} />
                                    ))}
                                </div>
                            </div>
                            <div className="pd-group">
                                <h4>Itens extra (máximo 3)</h4>
                                <div className="pd-chips">
                                    {EXTRAS.map(([name, price]) => (
                                        <Chip key={name} label={name} price={price} on={item.extras.includes(name)} disabled={item.extras.length >= 3} onClick={() => pickMany("extras", name, 3)} />
                                    ))}
                                </div>
                            </div>
                        </Step>
                    )}

                    <Step n={next()} title="Colher" hint="Queres colher?" badge="Obrigatório">
                        <div className="pd-chips">
                            <Chip label="Sim, colher por favor" price={0.1} on={item.colher === true} onClick={() => setItem((c) => ({ ...c, colher: true }))} />
                            <Chip label="Não quero colher, obrigado" on={item.colher === false} onClick={() => setItem((c) => ({ ...c, colher: false }))} />
                        </div>
                    </Step>

                    <div className="pd-add">
                        <button type="button" className="primary-button" disabled={missing.length > 0} onClick={addItem}>Adicionar ao pedido · {eur(itemPrice)}</button>
                        {missing.length > 0
                            ? <p className="pd-hint">Falta escolher: {missing.join(" e ")}.</p>
                            : added && <p className="pd-hint ok" role="status">{added}</p>}
                    </div>
                </div>

                <aside className="pd-cart" id="carrinho">
                    <h2>O teu pedido</h2>
                    {cart.length === 0 ? (
                        <p className="pd-empty">Ainda não adicionaste nenhuma taça.</p>
                    ) : (
                        <ul className="pd-items">
                            {cart.map((it) => {
                                const s = sizeOf(it.size);
                                return (
                                    <li key={it.uid}>
                                        <div className="pd-item-head">
                                            <b>{s.name} {s.detail}</b>
                                            <span>{eur(priceOf(it) * it.qty)}</span>
                                        </div>
                                        <ul className="pd-lines">{describe(it).map((l) => <li key={l}>{l}</li>)}</ul>
                                        <div className="pd-item-foot">
                                            <div className="pd-qty">
                                                <button type="button" aria-label="Menos uma" onClick={() => changeQty(it.uid, -1)}><Minus size={14} /></button>
                                                <b>{it.qty}</b>
                                                <button type="button" aria-label="Mais uma" onClick={() => changeQty(it.uid, 1)}><Plus size={14} /></button>
                                            </div>
                                            <button type="button" className="pd-remove" onClick={() => removeItem(it.uid)}><Trash2 size={15} /> Remover</button>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    )}

                    <div className="pd-total"><span>Total</span><b>{eur(total)}</b></div>
                    <p className="pd-hint">Sem taxa de entrega. Confirmamos o valor final contigo no WhatsApp.</p>

                    <div className="pd-mode" role="group" aria-label="Como queres receber">
                        <button type="button" className={customer.mode === "entrega" ? "on" : ""} aria-pressed={customer.mode === "entrega"} onClick={() => setField("mode", "entrega")}>Entrega</button>
                        <button type="button" className={customer.mode === "levantar" ? "on" : ""} aria-pressed={customer.mode === "levantar"} onClick={() => setField("mode", "levantar")}>Levantar na loja</button>
                    </div>
                    <label className="pd-field">Nome
                        <input value={customer.name} onChange={(e) => setField("name", e.target.value)} autoComplete="name" />
                    </label>
                    {customer.mode === "entrega" && (
                        <label className="pd-field">Morada de entrega
                            <input value={customer.address} onChange={(e) => setField("address", e.target.value)} autoComplete="street-address" />
                        </label>
                    )}
                    <label className="pd-field">Notas (opcional)
                        <input value={customer.notes} onChange={(e) => setField("notes", e.target.value)} />
                    </label>

                    <button type="button" className="primary-button pd-send" disabled={!canSend} onClick={sendWhatsApp}><MessageCircle size={18} /> Enviar pedido por WhatsApp</button>
                    {feedback && <p className="pd-feedback" role="status">{feedback}</p>}

                    <div className="pd-platforms">
                        <span>Preferes pedir numa plataforma?</span>
                        <div>
                            <button type="button" className="ghost-button" onClick={() => openPlatform(GLOVO_URL, "Glovo")}>Glovo</button>
                            <button type="button" className="ghost-button" onClick={() => openPlatform(UBER_EATS_URL, "Uber Eats")}>Uber Eats</button>
                        </div>
                    </div>
                </aside>
            </div>

            {cart.length > 0 && (
                <div className="pd-bar">
                    <div><small>Total</small><b>{eur(total)}</b></div>
                    <button type="button" className="primary-button" onClick={goCart}>Ver pedido</button>
                </div>
            )}
        </div>
    );
}