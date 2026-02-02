import { useEffect, useState } from 'react';

export function GlitchIntro({ onComplete }: { onComplete: () => void }) {
    const [phase, setPhase] = useState<'scan' | 'decode' | 'done'>('scan');

    useEffect(() => {
        const timer1 = setTimeout(() => setPhase('decode'), 800);
        const timer2 = setTimeout(() => {
            setPhase('done');
            onComplete();
        }, 1600);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [onComplete]);

    if (phase === 'done') return null;

    return (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/95">
            {/* Scanline Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="w-full h-1 bg-accent-tertiary/50 absolute top-0 shadow-[0_0_15px_rgba(0,212,255,0.8)] animate-[scanline_1.5s_linear_infinite]" />
            </div>

            {/* Central Glitch Text */}
            <div className="relative">
                <h1 className="font-display text-4xl md:text-6xl text-white tracking-widest cyber-glitch">
                    {phase === 'scan' ? 'INITIALIZING...' : 'EXPLORE_MODELS'}
                </h1>
                <div className="absolute -inset-2 bg-accent-tertiary/20 blur-xl opacity-50 animate-pulse" />
            </div>

            {/* Decoding Text Effect */}
            <div className="absolute bottom-10 left-10 font-mono text-xs text-accent-tertiary/60 space-y-1">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="animate-pulse" style={{ animationDelay: `${i * 100}ms` }}>
                        {`>> MODULE_LOAD_${Math.random().toString(16).slice(2, 8).toUpperCase()}`}
                    </div>
                ))}
            </div>
        </div>
    );
}
