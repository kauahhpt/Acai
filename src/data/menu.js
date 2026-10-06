export const WHATSAPP_DISPLAY = "923 352 241";
export const WHATSAPP = "351923352241";
export const GLOVO_URL = "https://glovoapp.com/pt/pt/lisboa/stores/pe-de-acai-lis";
export const UBER_EATS_URL =
    "https://www.ubereats.com/pt/store/pe-de-acai/N3OKHhwBQ3mRqJP7KZxe5w?diningMode=DELIVERY";
export const ACAI_CUP = "/images/acai-cup.png";

export const eur = (n) => `${n.toFixed(2).replace(".", ",")} €`;

export const SIZES = [
    { id: "m", name: "Copo M", detail: "360 ml", price: 10.2, acomp: 3, calda: true, creme: true, extras: false, note: "3 acompanhamentos, 1 calda e 1 creme. Sem extras." },
    { id: "g", name: "Copo G", detail: "473 ml", price: 12.2, acomp: 3, calda: true, creme: true, extras: true, note: "3 acompanhamentos, 1 calda e 1 creme. Podes juntar extras." },
    { id: "b540", name: "Bowl", detail: "540 ml", price: 14.2, acomp: 5, calda: true, creme: true, extras: true, note: "5 acompanhamentos, 1 calda e 1 creme. Podes juntar extras." },
    { id: "b750", name: "Bowl", detail: "750 ml", price: 18.25, acomp: 5, calda: true, creme: true, extras: true, note: "5 acompanhamentos, 1 calda e 1 creme. Podes juntar extras." },
    { id: "puro", name: "Açaí puro", detail: "750 g", price: 23, acomp: 0, calda: false, creme: false, extras: false, note: "Só açaí, sem caldas, cremes nem toppings." }
];

export const CALDAS = ["Leite Condensado", "Calda de Morango", "Mel", "Calda de Chocolate", "Calda de Caramelo"];

export const CREMES = [
    "Creme Banoffe", "Creme Óreo", "Creme de Morango", "Creme de Nido", "Creme de Ovomaltine", "Doce de Leite",
    "Creme de Avelã", "Geleia Artesanal de Morango", "Creme de Maracujá", "Creme de Lima",
    "Creme de Chocolate Negro", "Creme de Chocolate Branco"
];

export const ACOMP = [
    { group: "Fruta", items: ["Banana", "Abacaxi (sem calda)", "Pêssego (sem calda)", "Pêra (sem calda)", "Manga", "Kiwi", "Uva", "Morango", "Papaia / mamão"] },
    { group: "Crocantes e cereais", items: ["Granola Tradicional", "Granola de Chocolate", "Granola de Frutos Vermelhos", "Aveia", "Nestum", "Cerelac", "Chia", "Amendoim", "Amendoim Granulado Crocante", "Amendoim Coberto com Chocolate", "Coco Laminado", "Paçoca de Amendoim"] },
    { group: "Doces e cremosos", items: ["Pintarolas", "Marshmallow", "Gomas", "Bolacha Triturada", "Bolacha Oreo Triturada", "Bolacha Lotus Triturada", "Leite em Pó", "Manteiga de Amendoim", "Iogurte Grego"] }
];

export const CREME_EXTRA = [
    ["Creme de Morango", 1], ["Creme de Nido", 1.5], ["Creme Banoffe", 1], ["Creme Oreo", 1], ["Creme de Avelã", 1],
    ["Creme de Ovomaltine", 1.5], ["Doce de Leite", 1], ["Brigadeiro Cremoso", 1.2], ["Geleia Artesanal de Morango", 1.2],
    ["Creme de Maracujá", 1.5], ["Creme de Lima", 1.2], ["Goiabada Cremosa", 1.2], ["Creme de Chocolate Negro", 1.5],
    ["Creme de Chocolate Branco", 1.5]
];

export const EXTRAS = [
    ["Manteiga de Amendoim", 1], ["Leite em Pó", 1], ["Bolacha Triturada", 1], ["Amendoim Granulado Crocante", 1],
    ["Granola Tradicional", 1], ["Granola de Chocolate", 1], ["Amendoim", 1], ["Aveia", 1], ["Pintarolas", 1.2],
    ["Marshmallow", 1], ["Gomas", 1], ["Banana", 1], ["Abacaxi (sem calda)", 1], ["Pêssego (sem calda)", 1],
    ["Manga", 1], ["Kiwi", 1], ["Uva", 1], ["Morango", 1], ["Iogurte Grego", 1], ["Cerelac", 1], ["Coco Laminado", 1],
    ["Paçoca de Amendoim", 1], ["Nestum", 1], ["Chia", 1], ["Brigadeiro Cremoso", 1.2], ["Geleia Artesanal de Morango", 1.2],
    ["Bolacha Oreo Triturada", 1], ["Bolacha Lotus Triturada", 1], ["Jaca (sem calda)", 1.5]
];

export const HIGHLIGHTS = [
    { sizeId: "g", kicker: "Copo", title: "Copo G", blurb: "O formato clássico. Três acompanhamentos, calda e creme — e podes ainda meter extras." },
    { sizeId: "b750", kicker: "Bowl", title: "Bowl 750 ml", blurb: "Mais volume, cinco acompanhamentos. Para quem monta a taça a sério." },
    { sizeId: "puro", kicker: "Puro", title: "750 g de açaí", blurb: "Sem complementos. Só açaí — o peso e o sabor sem ruído." }
];
