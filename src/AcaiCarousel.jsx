import React, {
    useEffect,
    useLayoutEffect,
    useRef,
    useState
} from "react";

import {
    ArrowLeft,
    ArrowRight
} from "lucide-react";

import "./acai-carousel.css";


const FLAVORS = [
    {
        id: "morango",
        name: "MORANGO",
        eyebrow: "DOCE • FRESCO • CREMOSO",

        description:
            "Açaí cremoso, creme de morango e pedaços de morango fresco.",

        cup: "/images/cup/morango.png",
        explosion: "/images/explosion/morango.png",

        background: "#D92F4B",
        foreground: "#FFF9E6",

        accent: "#FF91A4"
    },

    {
        id: "ninho",
        name: "NINHO",
        eyebrow: "SUAVE • LEITOSO • CREMOSO",

        description:
            "Açaí com creme de Ninho, leite em pó e uma finalização extremamente cremosa.",

        cup: "/images/cup/ninho.png",
        explosion: "/images/explosion/ninho.png",

        background: "#EFE0B9",
        foreground: "#3B0B59",

        accent: "#FFF9E6"
    },

    {
        id: "banoffee",
        name: "BANOFFEE",
        eyebrow: "BANANA • CREME • CARAMELO",

        description:
            "Açaí com banana, creme Banoffee e caramelo em uma combinação intensa.",

        cup: "/images/cup/banana-caramelo.png",
        explosion: "/images/explosion/banana.png",

        background: "#D98B2B",
        foreground: "#FFF9E6",

        accent: "#FFD567"
    },

    {
        id: "oreo",
        name: "OREO",
        eyebrow: "CREMOSO • CROCANTE • CHOCOLATE",

        description:
            "Açaí com creme de Oreo e pedaços crocantes de cookies de chocolate.",

        cup: "/images/cup/oreo.png",
        explosion: "/images/explosion/oreo.png",

        background: "#33201F",
        foreground: "#FFF9E6",

        accent: "#D8CBC0"
    },

    {
        id: "ovomaltine",
        name: "OVOMALTINE",
        eyebrow: "MALTADO • INTENSO • CROCANTE",

        description:
            "Açaí com creme de Ovomaltine e uma explosão de crocância de chocolate.",

        cup: "/images/cup/ovomaltine.png",
        explosion: "/images/explosion/ovomaltine.png",

        background: "#9C4C2D",
        foreground: "#FFF9E6",

        accent: "#D98A58"
    },

    {
        id: "granola",
        name: "GRANOLA",
        eyebrow: "CROCANTE • DOURADO • NATURAL",

        description:
            "Açaí cremoso com granola crocante e mel dourado.",

        cup: "/images/cup/granola-mel.png",
        explosion: "/images/explosion/granola.png",

        background: "#C68C27",
        foreground: "#FFF9E6",

        accent: "#F1C75B"
    },

    {
        id: "custom",
        name: "SEU COPO",
        eyebrow: "AGORA É A SUA VEZ",

        description:
            "Já conheceste algumas combinações. Agora cria o teu açaí exatamente do teu jeito.",

        cup: "/images/cup/vazio.png",

        explosion: null,

        background: "#3B0B59",
        foreground: "#FFF9E6",

        accent: "#00E676",

        custom: true
    }
];


const ANIMATION_TIME = 650;


export default function AcaiCarousel() {

    const [activeIndex, setActiveIndex] = useState(0);

    const [isAnimating, setIsAnimating] =
        useState(false);

    const [isMobile, setIsMobile] =
        useState(false);

    const pointerStart = useRef(null);

    const ghostRef = useRef(null);


    const active = FLAVORS[activeIndex];


    /* ------------------------------
       RESPONSIVIDADE
    ------------------------------ */

    useEffect(() => {

        const update = () => {
            setIsMobile(window.innerWidth < 640);
        };

        update();

        window.addEventListener("resize", update);

        return () => {
            window.removeEventListener(
                "resize",
                update
            );
        };

    }, []);


    /* ------------------------------
       NOME GIGANTE: ENCOLHE ATÉ CABER
    ------------------------------ */

    useLayoutEffect(() => {

        const span = ghostRef.current;

        if (!span) return;


        let cancelled = false;


        const fit = () => {

            if (cancelled || !span.parentElement) {
                return;
            }


            // volta ao tamanho definido no CSS
            span.style.fontSize = "";


            const max =
                span.parentElement.clientWidth * 0.92;

            const width = span.offsetWidth;


            if (width > max) {

                const size = parseFloat(
                    getComputedStyle(span).fontSize
                );

                span.style.fontSize =
                    `${(size * max) / width}px`;
            }

        };


        fit();

        // volta a medir quando a fonte (Anton) terminar de carregar
        document.fonts?.ready.then(fit);

        window.addEventListener("resize", fit);


        return () => {

            cancelled = true;

            window.removeEventListener("resize", fit);

        };

    }, [activeIndex]);


    /* ------------------------------
       PRELOAD DAS IMAGENS
    ------------------------------ */

    useEffect(() => {

        FLAVORS.forEach((flavor) => {

            const cup = new Image();

            cup.src = flavor.cup;


            if (flavor.explosion) {

                const explosion = new Image();

                explosion.src =
                    flavor.explosion;
            }

        });

    }, []);


    /* ------------------------------
       NAVEGAÇÃO
    ------------------------------ */

    const navigate = (direction) => {

        if (isAnimating) return;


        setIsAnimating(true);


        setActiveIndex((current) => {

            if (direction === "next") {

                return (
                    current + 1
                ) % FLAVORS.length;
            }

            return (
                current -
                1 +
                FLAVORS.length
            ) % FLAVORS.length;

        });


        window.setTimeout(() => {

            setIsAnimating(false);

        }, ANIMATION_TIME);

    };


    /* ------------------------------
       TECLADO
    ------------------------------ */

    useEffect(() => {

        const handleKey = (event) => {

            if (event.key === "ArrowRight") {
                navigate("next");
            }

            if (event.key === "ArrowLeft") {
                navigate("prev");
            }

        };


        window.addEventListener(
            "keydown",
            handleKey
        );


        return () => {

            window.removeEventListener(
                "keydown",
                handleKey
            );

        };

    }, [isAnimating]);


    /* ------------------------------
       SWIPE / DRAG
    ------------------------------ */

    const handlePointerDown = (event) => {

        pointerStart.current =
            event.clientX;

    };


    const handlePointerUp = (event) => {

        if (pointerStart.current == null) {
            return;
        }


        const difference =
            event.clientX -
            pointerStart.current;


        pointerStart.current = null;


        if (Math.abs(difference) < 45) {
            return;
        }


        if (difference < 0) {
            navigate("next");
        } else {
            navigate("prev");
        }

    };


    /* ------------------------------
       PAPEL DE CADA COPO
    ------------------------------ */

    const getRole = (index) => {

        const length =
            FLAVORS.length;


        const relative =
            (
                index -
                activeIndex +
                length
            ) % length;


        if (relative === 0) {
            return "center";
        }

        if (relative === 1) {
            return "right";
        }

        if (relative === 2) {
            return "far-right";
        }

        if (relative === length - 1) {
            return "left";
        }

        if (relative === length - 2) {
            return "far-left";
        }


        return "hidden";
    };


    const goToIndex = (index) => {

        if (
            index === activeIndex ||
            isAnimating
        ) {
            return;
        }


        const length =
            FLAVORS.length;


        const forward =
            (
                index -
                activeIndex +
                length
            ) % length;


        const backward =
            (
                activeIndex -
                index +
                length
            ) % length;


        if (forward <= backward) {
            navigate("next");
        } else {
            navigate("prev");
        }

    };


    return (

        <section
            id="inicio"
            className="acai-carousel"
            style={{
                "--carousel-bg":
                    active.background,

                "--carousel-fg":
                    active.foreground,

                "--carousel-accent":
                    active.accent
            }}

            onPointerDown={
                handlePointerDown
            }

            onPointerUp={
                handlePointerUp
            }
        >

            {/* camada de iluminação */}

            <div
                className="acai-carousel__light"
            />


            {/* grain */}

            <div
                className="acai-carousel__grain"
            />


            {/* TEXTO GIGANTE */}

            <div
                className="acai-carousel__ghost"
                aria-hidden="true"
            >
                <span
                    key={active.id}
                    ref={ghostRef}
                    style={{
                        "--len":
                            active.name.length
                    }}
                >
                    {active.name}
                </span>
            </div>


            {/* EXPLOSÕES */}

            <div
                className="acai-carousel__explosions"
                aria-hidden="true"
            >

                {FLAVORS.map(
                    (flavor, index) => {

                        if (
                            !flavor.explosion
                        ) {
                            return null;
                        }


                        const visible =
                            index ===
                            activeIndex;


                        return (

                            <img
                                key={
                                    flavor.id
                                }

                                src={
                                    flavor.explosion
                                }

                                alt=""

                                draggable="false"

                                className={
                                    `acai-carousel__explosion ${
                                        visible
                                            ? "is-active"
                                            : ""
                                    }`
                                }
                            />

                        );

                    }
                )}

            </div>


            {/* COPOS */}

            <div
                className="acai-carousel__cups"
            >

                {FLAVORS.map(
                    (flavor, index) => {

                        const role =
                            getRole(index);


                        return (

                            <button
                                key={
                                    flavor.id
                                }

                                type="button"

                                tabIndex={
                                    role ===
                                    "hidden"
                                        ? -1
                                        : 0
                                }

                                aria-label={
                                    `Ver ${flavor.name}`
                                }

                                className={
                                    `acai-carousel__cup acai-carousel__cup--${role}`
                                }

                                onClick={() => {

                                    if (
                                        role !==
                                        "center"
                                    ) {
                                        goToIndex(
                                            index
                                        );
                                    }

                                }}
                            >

                                <img
                                    src={
                                        flavor.cup
                                    }

                                    alt={
                                        flavor.custom
                                            ? "Copo vazio de açaí"
                                            : `Copo de açaí sabor ${flavor.name}`
                                    }

                                    draggable="false"
                                />

                            </button>

                        );

                    }
                )}

            </div>


            {/* INFORMAÇÕES */}

            <div
                className="acai-carousel__info"
            >

                <p
                    className="acai-carousel__eyebrow"
                    key={
                        `${active.id}-eyebrow`
                    }
                >
                    {active.eyebrow}
                </p>


                <h2
                    key={
                        `${active.id}-title`
                    }
                >
                    {active.custom
                        ? "CRIE O SEU."
                        : active.name}
                </h2>


                <p
                    className="acai-carousel__description"
                    key={
                        `${active.id}-description`
                    }
                >
                    {active.description}
                </p>


                <div
                    className="acai-carousel__controls"
                >

                    <button
                        type="button"
                        aria-label="Anterior"

                        onClick={(event) => {
                            event.stopPropagation();

                            navigate("prev");
                        }}
                    >
                        <ArrowLeft />
                    </button>


                    <button
                        type="button"
                        aria-label="Próximo"

                        onClick={(event) => {
                            event.stopPropagation();

                            navigate("next");
                        }}
                    >
                        <ArrowRight />
                    </button>

                </div>

            </div>


            {/* CONTADOR */}

            <div
                className="acai-carousel__counter"
            >
                <strong>
                    {String(
                        activeIndex + 1
                    ).padStart(2, "0")}
                </strong>

                <span>/</span>

                <span>
                    {String(
                        FLAVORS.length
                    ).padStart(2, "0")}
                </span>
            </div>


            {/* INDICADORES */}

            <div
                className="acai-carousel__dots"
            >

                {FLAVORS.map(
                    (flavor, index) => (

                        <button
                            key={
                                flavor.id
                            }

                            type="button"

                            aria-label={
                                `Ir para ${flavor.name}`
                            }

                            className={
                                index ===
                                activeIndex
                                    ? "is-active"
                                    : ""
                            }

                            onClick={() => {

                                if (
                                    index ===
                                    activeIndex
                                ) {
                                    return;
                                }


                                /*
                                    Para os dots,
                                    permitimos trocar
                                    diretamente.
                                */

                                if (
                                    isAnimating
                                ) {
                                    return;
                                }


                                setIsAnimating(
                                    true
                                );


                                setActiveIndex(
                                    index
                                );


                                window.setTimeout(
                                    () =>
                                        setIsAnimating(
                                            false
                                        ),
                                    ANIMATION_TIME
                                );

                            }}
                        />

                    )
                )}

            </div>


            {/* CTA */}

            <a
                href={
                    active.custom
                        ? "#/pedido"
                        : "#/pedido"
                }

                className={
                    `acai-carousel__cta ${
                        active.custom
                            ? "is-custom"
                            : ""
                    }`
                }
            >

                <span>

                    {active.custom
                        ? "COMEÇAR"
                        : "MONTE O SEU"}

                </span>


                <ArrowRight />

            </a>


            {/* dica */}

            {!isMobile && (

                <div
                    className="acai-carousel__drag-hint"
                >
                    ARRASTE PARA EXPLORAR
                </div>

            )}

        </section>

    );
    
}
