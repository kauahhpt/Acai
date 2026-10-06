import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { prefersReducedMotion } from "../lib/motion";

export function useLenis() {
    const lenisRef = useRef(null);

    useEffect(() => {
        if (prefersReducedMotion()) return;

        const lenis = new Lenis({
            lerp: 0.075,
            smoothWheel: true,
            wheelMultiplier: 0.9
        });
        lenisRef.current = lenis;

        let rafId = 0;
        const loop = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(loop);
        };
        rafId = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    return lenisRef;
}
