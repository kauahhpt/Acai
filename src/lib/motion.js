export const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
export const lerp = (a, b, t) => a + (b - a) * t;

export const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export const damp = (current, target, lambda, dt) =>
    lerp(current, target, 1 - Math.exp(-lambda * dt));

export function keyed(progress, frames) {
    const first = frames[0];
    const last = frames[frames.length - 1];
    if (progress <= first.p) return { ...first };
    if (progress >= last.p) return { ...last };

    for (let i = 0; i < frames.length - 1; i++) {
        const a = frames[i];
        const b = frames[i + 1];
        if (progress <= b.p) {
            const t = easeInOutCubic((progress - a.p) / (b.p - a.p));
            const out = { p: progress };
            for (const key of Object.keys(a)) {
                if (key === "p") continue;
                out[key] = lerp(a[key], b[key], t);
            }
            return out;
        }
    }
    return { ...last };
}

export const prefersReducedMotion = () =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
