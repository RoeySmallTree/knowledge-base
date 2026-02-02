import { useState } from 'react';
import { Calendar, EyeOff, Box, Download, Layers, Radio } from 'lucide-react';
import { OpenRouterModel } from '../types';
import { ConfirmationModal } from './ConfirmationModal';

interface ExploreCardProps {
    model: OpenRouterModel;
    onHide: () => void;
    onImport: () => void;
    isExpanded: boolean;
    onToggleExpand: () => void;
}

export function ExploreCard({ model, onHide, onImport, isExpanded, onToggleExpand }: ExploreCardProps) {
    const [showConfirm, setShowConfirm] = useState(false);
    const createdDate = new Date(model.created * 1000).toLocaleDateString();

    // Parse pricing
    const promptPrice = parseFloat(model.pricing.prompt) * 1000000;
    const completionPrice = parseFloat(model.pricing.completion) * 1000000;

    const formatPrice = (price: number) => {
        if (isNaN(price)) return '0.00';
        return price.toFixed(2);
    };

    return (
        <>
            <div
                onClick={onToggleExpand}
                className={`group relative overflow-hidden rounded-xl border bg-black/40 backdrop-blur-md transition-all duration-300 cursor-pointer 
                    ${isExpanded
                        ? 'border-accent-tertiary/50 bg-black/80 shadow-[0_0_50px_rgba(0,0,0,0.7)] ring-1 ring-accent-tertiary/20'
                        : 'border-white/10 hover:border-accent-tertiary/50 hover:shadow-lg hover:shadow-accent-tertiary/5'
                    }`}
            >
                {/* Background Gradient/Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent transition-opacity duration-500 ${isExpanded ? 'opacity-10' : 'opacity-0 group-hover:opacity-100'}`} />

                {isExpanded && (
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none" />
                )}

                <div className="relative z-10 p-6">
                    {/* Collapsed View logic handled by conditional layout or just expand in place */}
                    {isExpanded ? (
                        <div className="space-y-8">
                            {/* Top Row: 3 Columns */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Column 1: Identity & Architecture */}
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3">
                                            <h3 className="font-display transition-all duration-300 text-3xl text-accent-tertiary tracking-wide">
                                                {model.name.toUpperCase()}
                                            </h3>
                                        </div>
                                        <div className="flex items-center gap-4 text-xs text-white/40 font-mono">
                                            <div className="flex items-center gap-2">
                                                <Calendar size={12} className="text-primary/50" />
                                                <span>{createdDate}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Box size={12} className="text-primary/50" />
                                                <span className="truncate max-w-[200px]">{model.id}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Architecture/Status Box */}
                                    <div className="grid grid-cols-2 gap-2 pt-4">
                                        <div className="p-2.5 rounded-lg border border-white/10 bg-white/5 space-y-1 min-w-0">
                                            <div className="text-[10px] text-white/30 tracking-widest font-label uppercase">ARCH</div>
                                            <div className="text-white font-display flex items-center gap-1.5 text-xs">
                                                <Layers size={12} className="text-primary shrink-0" />
                                                <span>TRANS</span>
                                            </div>
                                        </div>
                                        <div className="p-2.5 rounded-lg border border-white/10 bg-white/5 space-y-1 min-w-0">
                                            <div className="text-[10px] text-white/30 tracking-widest font-label uppercase">STATUS</div>
                                            <div className="text-emerald-400 font-display flex items-center gap-1.5 text-xs">
                                                <Radio size={12} className="animate-pulse shrink-0" />
                                                <span>LIVE</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Col 2: Pricing */}
                                <div className="space-y-4 p-5 rounded-xl border border-white/10 bg-white/5 h-fit">
                                    <div className="text-xs text-accent-secondary tracking-widest font-label border-b border-white/10 pb-2 mb-2">
                                        PRICING (PER 1M)
                                    </div>
                                    <div className="space-y-6">
                                        <div className="space-y-1">
                                            <div className="text-[10px] text-white/40 font-mono text-right">PROMPT</div>
                                            <div className="text-4xl font-display text-white text-right tracking-tight">
                                                {formatPrice(promptPrice)}
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="text-[10px] text-white/40 font-mono text-right">COMPLETION</div>
                                            <div className="text-4xl font-display text-white text-right tracking-tight">
                                                {formatPrice(completionPrice)}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Col 3: Context & Actions */}
                                <div className="flex flex-col gap-6 h-fit">
                                    <div className="p-5 rounded-xl border border-white/10 bg-white/5 space-y-4">
                                        <div className="text-xs text-primary tracking-widest font-label border-b border-white/10 pb-2">
                                            CONTEXT WINDOW
                                        </div>
                                        <div>
                                            <div className="text-5xl font-display text-white tracking-tighter">
                                                {(model.context_length / 1024).toFixed(0)}K
                                            </div>
                                            <div className="text-xs text-white/30 font-mono tracking-[0.2em] mt-1">TOKENS</div>
                                        </div>
                                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mt-4">
                                            <div className="h-full bg-primary shadow-[0_0_10px_rgba(0,255,136,0.5)] w-3/4 rounded-full" />
                                        </div>
                                    </div>

                                    {/* Action Buttons Large */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onImport();
                                            }}
                                            className="flex items-center justify-center gap-2 py-3 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 hover:scale-[1.02] transition-all font-mono text-xs font-bold"
                                        >
                                            <Download size={16} />
                                            IMPORT
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setShowConfirm(true);
                                            }}
                                            className="flex items-center justify-center gap-2 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 hover:bg-red-500/20 hover:scale-[1.02] transition-all font-mono text-xs font-bold"
                                        >
                                            <EyeOff size={16} />
                                            HIDE
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Row: Description */}
                            <div className="p-6 rounded-xl border border-white/5 bg-white/5">
                                <h4 className="text-xs text-white/50 font-label mb-3 uppercase tracking-widest">Description</h4>
                                <p className="text-sm text-white/70 leading-relaxed font-mono">
                                    {model.description || "No description available for this model."}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {/* Collapsed View: Ident & Desc */}
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <h3 className="font-display transition-all duration-300 text-lg text-white group-hover:text-accent-tertiary">
                                            {model.name.toUpperCase()}
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-4 text-xs text-white/40 font-mono">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={12} className="text-primary/50" />
                                            <span>{createdDate}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Box size={12} className="text-primary/50" />
                                            <span className="truncate max-w-[200px]">{model.id}</span>
                                        </div>
                                    </div>
                                </div>
                                {model.description && (
                                    <div className="text-sm text-white/60 leading-relaxed font-mono line-clamp-2">
                                        {model.description}
                                    </div>
                                )}
                            </div>

                            {/* Collapsed Actions and Context Pill */}
                            <div className="flex justify-between items-center pt-2 border-t border-white/5">
                                <div className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-accent-tertiary">
                                    {(model.context_length / 1024).toFixed(0)}k ctx
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onImport();
                                        }}
                                        className="p-1.5 rounded bg-white/5 border border-white/10 text-white/40 hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all"
                                        title="Import Model"
                                    >
                                        <Download size={14} />
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setShowConfirm(true);
                                        }}
                                        className="p-1.5 rounded bg-white/5 border border-white/10 text-white/40 hover:text-red-400 hover:border-red-400/50 hover:bg-red-400/10 transition-all"
                                        title="Mark as Irrelevant"
                                    >
                                        <EyeOff size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Confirmation Modal */}
            <ConfirmationModal
                isOpen={showConfirm}
                onClose={() => setShowConfirm(false)}
                onConfirm={() => {
                    setShowConfirm(false);
                    onHide();
                }}
                title="MARK_IRRELEVANT?"
                message={
                    <>
                        This will hide <span className="text-white font-bold">{model.name}</span> from the explore list. You can undo this by toggling "Hide Irrelevant" in the filters.
                    </>
                }
                confirmLabel="CONFIRM_HIDE"
                variant="danger"
            />
        </>
    );
}
