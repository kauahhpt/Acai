import React, { useEffect, useRef } from "react";
import { ACAI_CUP } from "../data/menu";
import { clamp, damp, keyed, prefersReducedMotion } from "../lib/motion";

const DESKTOP = [
    { p: 0, x: 38, y: 6, s: 1.38, r: -11, o: 1, b: 0 },
    { p: 0.12, x: 34, y: 10, s: 1.18, r: -4, o: 1, b: 0 },
    { p: 0.22, x: -32, y: 14, s: 0.88, r: 8, o: 0.95, b: 0 },
    { p: 0.36, x: 30, y: 8, s: 0.98, r: -9, o: 1, b: 0 },
    { p: 0.5, x: -24, y: 18, s: 0.72, r: 10, o: 0.92, b: 1 },
    { p: 0.64, x: 22, y: 6, s: 0.9, r: -6, o: 1, b: 0 },
    { p: 0.78, x: -18, y: 12, s: 0.7, r: 7, o: 0.85, b: 2 },
    { p: 0.9, x: 42, y: 22, s: 0.55, r: 14, o: 0.45, b: 6 },
    { p: 1, x: 58, y: 36, s: 0.4, r: 18, o: 0.12, b: 10 }
];

const MOBILE = [
    { p: 0, x: 28, y: 22, s: 0.72, r: -8, o: 0.55, b: 0 },
    { p: 0.14, x: 36, y: 8, s: 0.55, r: -3, o: 0.28, b: 2 },
    { p: 0.3, x: -40, y: 30, s: 0.48, r: 6, o: 0.22, b: 3 },
    { p: 0.48, x: 38, y: 18, s: 0.5, r: -7, o: 0.2, b: 4 },
    { p: 0.68, x: -30, y: 24, s: 0.42, r: 8, o: 0.16, b: 6 },
    { p: 0.86, x: 20, y: 40, s: 0.36, r: 10, o: 0.1, b: 8 },
    { p: 1, x: 40, y: 50, s: 0.28, r: 12, o: 0, b: 12 }
];

export default function AnimatedAcai() {
    const wrapRef = useRef(null);
    const imgRef = useRef(null);
    const glowRef = useRef(null);

    useEffect(() => {
        const wrap = wrapRef.current;
        const img = imgRef.current;
        const glow = glowRef.current;
        if (!wrap || !img) return;

        const reduced = prefersReducedMotion();
        const isMobile = () => window.matchMedia("(max-width: 820px)").matches;

        const state = {
            x: 0,
            y: 0,
            s: 1,
            r: 0,
            o: 1,
            b: 0,
            vel: 0,
            lastY: window.scrollY,
            lastT: performance.now(),
            float: 0
        };

        const apply = () => {
            wrap.style.transform = `translate3d(${state.x}vw, ${state.y}vh, 0) rotate(${state.r}deg) scale(${state.s})`;
            wrap.style.opacity = String(state.o);
            img.style.filter = `blur(${state.b}px)`;
            if (glow) glow.style.opacity = String(0.35 + state.o * 0.4);
        };

        if (reduced) {
            const k = keyed(0, isMobile() ? MOBILE : DESKTOP);
            Object.assign(state, k);
            apply();
            return;
        }

        let raf = 0;
        const tick = (now) => {
            const dt = clamp((now - state.lastT) / 1000, 0.008, 0.04);
            state.lastT = now;

            const doc = document.documentElement;
            const max = Math.max(1, doc.scrollHeight - window.innerHeight);
            const y = window.scrollY;
            const progress = clamp(y / max, 0, 1);
            const dy = y - state.lastY;
            state.lastY = y;
            state.vel = damp(state.vel, dy, 8, dt);

            const frames = isMobile() ? MOBILE : DESKTOP;
            const k = keyed(progress, frames);
            const float = Math.sin(now * 0.0011) * 1.1;
            const tilt = clamp(state.vel * 0.035, -9, 9);

            state.x = damp(state.x, k.x, 5.2, dt);
            state.y = damp(state.y, k.y + float, 5.2, dt);
            state.s = damp(state.s, k.s, 4.6, dt);
            state.r = damp(state.r, k.r + tilt, 4.2, dt);
            state.o = damp(state.o, k.o, 6, dt);
            state.b = damp(state.b, k.b, 6, dt);
            apply();
            raf = requestAnimationFrame(tick);
        };

        const start = keyed(0, isMobile() ? MOBILE : DESKTOP);
        Object.assign(state, start);
        apply();
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, []);

    return (
        <div className="acai-stage" aria-hidden="true">
            <div className="acai-cup" ref={wrapRef}>
                <div className="acai-glow" ref={glowRef} />
                <img
                    ref={imgRef}
                    src={ACAI_CUP}
                    alt=""
                    className="acai-img"
                    width="720"
                    height="1280"
                    decoding="async"
                    draggable="false"
                />
            </div>
        </div>
    );
}
