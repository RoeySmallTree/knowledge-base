import type { ReactNode, RefObject } from 'react';

interface TabShellProps {
    left: ReactNode;
    main: ReactNode;
    right: ReactNode;
    leftPanelRef?: RefObject<HTMLDivElement>;
    scrollRootRef?: RefObject<HTMLDivElement>;
}

export function TabShell({ left, main, right, leftPanelRef, scrollRootRef }: TabShellProps) {
    return (
        <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)_320px] relative z-10">
            <aside className="hidden lg:flex flex-col min-h-0 border-r border-white/10 bg-black/40 backdrop-blur-sm">
                <div ref={leftPanelRef} className="flex-1 overflow-y-auto cyber-scroll p-4">
                    {left}
                </div>
            </aside>

            <main className="relative h-full min-h-0 bg-black/20">
                <div ref={scrollRootRef} data-scroll-root className="h-full min-h-0 overflow-y-auto cyber-scroll px-8 py-8">
                    {main}
                </div>
            </main>

            <aside className="hidden lg:flex flex-col min-h-0 border-l border-white/10 bg-black/40 backdrop-blur-sm">
                <div className="flex-1 overflow-y-auto cyber-scroll p-4">
                    {right}
                </div>
            </aside>
        </div>
    );
}
