/**
 * Application-wide font size constants.
 * These values reflect the variety of typographic scales used throughout the CABAL interface,
 * from micro-status indicators to large display headers.
 */

export const FONT_SIZE = {
    MICRO: 'text-[7px]',
    TINY: 'text-[9px]',
    XXS: 'text-[10px]',
    XS: 'text-xs',
    SM: 'text-sm',
    MD: 'text-base',
    LG: 'text-lg',
    XL: 'text-xl',
    XXL: 'text-2xl',
    XXXL: 'text-3xl',
    HUGE: 'text-4xl',
    GIGA: 'text-5xl',
    TITAN: 'text-6xl',
    DISPLAY: 'text-[32px]',
} as const;

export type FontSize = keyof typeof FONT_SIZE;
