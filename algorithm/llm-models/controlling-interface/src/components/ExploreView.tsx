import { Compass } from 'lucide-react';

export function ExploreView() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-20 opacity-50 space-y-6">
            <div className="p-8 rounded-full bg-white/5 border border-white/10 animate-pulse">
                <Compass size={64} className="text-primary" />
            </div>
            <div className="text-center space-y-2">
                <h2 className="font-display text-2xl text-white tracking-widest">EXPLORE_MODELS</h2>
                <p className="font-mono text-sm text-white/50 max-w-md mx-auto">
                    Discover new models from external repositories and broaden your AI capabilities.
                    <br />
                    <span className="text-xs text-primary/70 block mt-2">[ MODULE_UNDER_CONSTRUCTION ]</span>
                </p>
            </div>
        </div>
    );
}
