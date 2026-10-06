import { useEffect, useRef } from "react";
import { animate } from "animejs";
import { prefersReducedMotion } from "../lib/motion";

export function useReveal(selector = ".reveal", deps = []) {
    const rootRef = useRef(null);

    useEffect(() => {
        const root = rootRef.current;
        if (!root || prefersReducedMotion()) return;

        const nodes = [...root.querySelectorAll(selector)].filter((el) => !el.dataset.revealed);
        if (!nodes.length) return;

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    const el = entry.target;
                    el.dataset.revealed = "1";
                    io.unobserve(el);
                    animate(el, {
                        opacity: [0, 1],
                        translateY: [28, 0],
                        filter: ["blur(8px)", "blur(0px)"],
                        scale: [0.97, 1],
                        duration: 900,
                        ease: "out(3)"
                    });
                });
            },
            { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
        );

        nodes.forEach((el) => {
            el.style.opacity = "0";
            io.observe(el);
        });

        return () => io.disconnect();
    }, deps);

    return rootRef;
}
