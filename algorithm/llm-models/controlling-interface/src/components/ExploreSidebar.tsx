import { Database, Eye, Shield } from 'lucide-react';

interface ExploreSidebarProps {
    total: number;
    shown: number;
    owned: number;
}

export function ExploreSidebar({ total, shown, owned }: ExploreSidebarProps) {
    return (
        <div className="flex flex-col h-full gap-6">
            {/* Context Header */}
            <div className="space-y-3">
                <div className="font-label text-xs text-primary/50 tracking-widest pl-1">CONTEXT</div>

                {/* Total Models */}
                <div className="group relative overflow-hidden rounded-lg border border-accent-tertiary/20 bg-accent-tertiary/5 p-4 transition-all hover:border-accent-tertiary/40">
                    <div className="flex items-start justify-between">
                        <div>
                            <div className="font-display text-[10px] text-accent-tertiary/60 tracking-wider mb-1">TOTAL_MODELS</div>
                            <div className="font-mono text-3xl font-bold text-white group-hover:text-accent-tertiary transition-colors">{total}</div>
                        </div>
                        <Database size={16} className="text-accent-tertiary/40 group-hover:text-accent-tertiary transition-colors" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-accent-tertiary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Shown Models */}
                <div className="group relative overflow-hidden rounded-lg border border-primary/20 bg-primary/5 p-4 transition-all hover:border-primary/40">
                    <div className="flex items-start justify-between">
                        <div>
                            <div className="font-display text-[10px] text-primary/60 tracking-wider mb-1">CURRENTLY_SHOWN</div>
                            <div className="font-mono text-3xl font-bold text-white group-hover:text-primary transition-colors">{shown}</div>
                        </div>
                        <Eye size={16} className="text-primary/40 group-hover:text-primary transition-colors" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Owned Models */}
                <div className="group relative overflow-hidden rounded-lg border border-accent-secondary/20 bg-accent-secondary/5 p-4 transition-all hover:border-accent-secondary/40">
                    <div className="flex items-start justify-between">
                        <div>
                            <div className="font-display text-[10px] text-accent-secondary/60 tracking-wider mb-1">OWNED_BY_US</div>
                            <div className="font-mono text-3xl font-bold text-white group-hover:text-accent-secondary transition-colors">{owned}</div>
                        </div>
                        <Shield size={16} className="text-accent-secondary/40 group-hover:text-accent-secondary transition-colors" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-accent-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
            </div>

            <div className="mt-auto p-4 border border-white/5 rounded-lg bg-black/20 text-xs font-mono text-white/30">
                Data provided by OpenRouter API.
                <br />
                Updates live.
            </div>
        </div>
    );
}
