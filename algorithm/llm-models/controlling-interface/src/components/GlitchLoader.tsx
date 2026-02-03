import { FONT_SIZE } from '../constants';

// import { useEffect, useState } from 'react';

export function GlitchLoader() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 cyber-shell">
            <div className="absolute inset-0 scanlines opacity-20 pointer-events-none" />
            <div className="loader-scanline pointer-events-none" />

            <div className="relative z-10 glitch-wrapper scale-[3]">
                <div className="glitch-image" />
                <div className="glitch-image" />
                <div className="glitch-image" />
            </div>

            <div className={`absolute bottom-20 left-1/2 -translate-x-1/2 font-label ${FONT_SIZE.XS} tracking-[0.5em] text-primary/70 animate-pulse`}>
                INITIALIZING...
            </div>
        </div>
    );
}
