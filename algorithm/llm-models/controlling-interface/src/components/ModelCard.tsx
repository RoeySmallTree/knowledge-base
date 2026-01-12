import { Pencil, Trash2, Cpu, Brain, Layers, Box, Info } from 'lucide-react';
import { LLMModel } from '../types';

interface ModelCardProps {
    model: LLMModel;
    onEdit: (model: LLMModel) => void;
    onArchive: (model: LLMModel) => void;
    maxPrice: number;
}

export function ModelCard({ model, onEdit, onArchive, maxPrice }: ModelCardProps) {
    return (
        <div className="group relative flex flex-col h-full bg-[#000000a1] shadow-[inset_0px_0px_3px_1px_#ffffff26] rounded-[40px] overflow-hidden backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">

            {/* Header / Top Section */}
            <div className="p-5 border-b border-white/5 space-y-4">
                <div className="flex justify-between items-start gap-4">
                    <div className="space-y-1 flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                            <div className="text-sm font-bold text-muted-foreground/60 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded flex items-center gap-1.5">
                                {model.vendor}
                            </div>
                            {model.id && <span className="text-xs font-mono text-muted-foreground/40">#{model.id}</span>}
                        </div>
                        <h3 className="text-2xl font-bold text-white leading-tight truncate pr-2">{model.modelName}</h3>

                        {/* New Description Field */}
                        {model.description && (
                            <p className="text-sm text-muted-foreground/80 leading-relaxed mt-1">
                                {model.description}
                            </p>
                        )}
                        {!model.description && (
                            <p className="text-sm text-primary/80 font-medium">{model.modelFamily} Series</p>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                            onClick={(e) => { e.stopPropagation(); onEdit(model); }}
                            className="p-2 rounded-lg bg-black/20 hover:bg-black/40 text-muted-foreground hover:text-white transition-colors"
                        >
                            <Pencil size={14} />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); if (confirm(`Archive ${model.modelName}?`)) onArchive(model); }}
                            className="p-2 rounded-lg bg-black/20 hover:bg-red-500/20 text-muted-foreground hover:text-red-400 transition-colors"
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>
                </div>

                {/* Pricing & Fallback Row */}
                {(model.pricing || model.fallback_model_id) && (
                    <div className="grid grid-cols-2 gap-2 text-xs bg-black/20 rounded-lg p-2 border border-white/5">
                        {model.pricing ? (
                            <div className="flex items-center gap-2">
                                <PriceScoreDoughnut price={model.pricing.completion} maxPrice={maxPrice} size={32} />
                                <div className="space-y-0.5">
                                    <div className="text-muted-foreground/50 uppercase tracking-wider">Pricing / 1M</div>
                                    <div className="font-mono text-white/80">
                                        In: ${(model.pricing.prompt / 1000000).toFixed(2)}
                                        <span className="mx-1 text-white/20">|</span>
                                        Out: ${(model.pricing.completion / 1000000).toFixed(2)}
                                    </div>
                                </div>
                            </div>
                        ) : <div />}
                        {model.fallback_model_id && (
                            <div className="space-y-0.5 text-right">
                                <div className="text-muted-foreground/50 uppercase tracking-wider">Fallback</div>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        // Simple scroll to functionality if possible, or just display ID
                                        // For now just display ID, implementing proper scroll requires parent context or ID lookup
                                        const el = document.getElementById(`model-${model.fallback_model_id}`);
                                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                    }}
                                    className="font-mono text-sky-400 hover:underline cursor-pointer"
                                >
                                    #{model.fallback_model_id}
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Specs Section */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 border border-white/5">
                        <div className="p-2 rounded-md bg-secondary/40 text-white/70">
                            <Box size={18} />
                        </div>
                        <div>
                            <span className="block text-base font-bold text-white">{model.parametersB}B</span>
                            <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Params</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 border border-white/5">
                        <div className="p-2 rounded-md bg-secondary/40 text-white/70">
                            <Layers size={18} />
                        </div>
                        <div>
                            <span className="block text-base font-bold text-white">{model.contextK}K</span>
                            <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Context</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scores Section */}
            <div className="grid grid-cols-2 divide-x divide-white/5 border-b border-white/5 bg-black/10">
                <div className="p-4 flex items-center justify-between gap-3">
                    <span className="text-sm font-bold text-muted-foreground/60 uppercase tracking-wider">Creativity</span>
                    <ScoreDoughnut score={model.creativeScore} size={42} />
                </div>
                <div className="p-4 flex items-center justify-between gap-3">
                    <span className="text-sm font-bold text-muted-foreground/60 uppercase tracking-wider">Deductive</span>
                    <ScoreDoughnut score={model.deductiveScore} size={42} />
                </div>
            </div>

            {/* Content / Traits */}
            <div className="flex-1 p-5 space-y-5">
                <div className="space-y-4">
                    <TraitSection label="Personality" traits={model.personalityTraits} color="blue" icon={Brain} />
                    <TraitSection label="Analytical" traits={model.analyticalTraits} color="purple" icon={Cpu} />
                </div>

                <div className="space-y-2 pt-2 border-t border-white/5">
                    <p className="text-sm font-bold text-muted-foreground/40 uppercase tracking-widest">Best For</p>
                    <p className="text-base text-muted-foreground/90 leading-relaxed line-clamp-4 hover:line-clamp-none transition-all duration-300">
                        {model.bestFor}
                    </p>
                </div>
            </div>

            {/* Special Properties / Notes & Footer */}
            <div className="bg-black/20 border-t border-white/5 text-[11px] text-muted-foreground/60">
                {model.specialPropertiesNotes && (
                    <div className="px-5 py-3 border-b border-white/5">
                        <div className="flex items-start gap-2 text-primary/70 mb-1">
                            <Info size={12} className="mt-0.5" />
                            <span className="font-semibold uppercase tracking-wider text-sm">Notes</span>
                        </div>
                        <p className="leading-relaxed opacity-80 text-sm">{model.specialPropertiesNotes}</p>
                    </div>
                )}

                {model.optimalTeamExamples && (
                    <div className="px-5 py-3 space-y-1">
                        <div className="flex gap-2">
                            <span className="font-semibold text-muted-foreground/40 shrink-0">Teams:</span>
                            <span className="truncate block">{model.optimalTeamExamples}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

function TraitSection({ label, traits, color, icon: Icon }: { label: string, traits: string, color: 'blue' | 'purple', icon: any }) {
    if (!traits) return null;
    const items = traits.split(',').map(t => t.trim()).filter(Boolean);

    // Color variants
    const style = color === 'blue'
        ? "bg-sky-500/10 text-sky-300 border-sky-500/20"
        : "bg-indigo-500/10 text-indigo-300 border-indigo-500/20";

    return (
        <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-sm font-bold text-muted-foreground/40 uppercase tracking-widest">
                <Icon size={12} /> {label}
            </div>
            <div className="flex flex-wrap gap-1.5">
                {items.map((item, i) => (
                    <span key={i} className={`text-sm font-medium px-2 py-0.5 rounded border ${style}`}>
                        {item}
                    </span>
                ))}
            </div>
        </div>
    )
}

function ScoreDoughnut({ score, size = 42 }: { score: number | null, size?: number }) {
    if (score === null) return <span className="text-muted-foreground/20 font-mono">-</span>;

    const strokeWidth = 3.5;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const progress = (score / 10) * circumference;

    let color = "#ef4444";
    if (score >= 8) color = "#10b981";
    else if (score > 5) color = "#f59e0b";

    return (
        <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
            <svg width={size} height={size} className="transform -rotate-90">
                <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="currentColor" strokeWidth={strokeWidth} className="text-white/5" />
                <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth={strokeWidth} strokeDasharray={circumference} strokeDashoffset={circumference - progress} strokeLinecap="round" className="transition-all duration-1000 ease-out" />
            </svg>
            <span className="absolute text-xs font-bold text-white/90">{score}</span>
        </div>
    );
}

function PriceScoreDoughnut({ price, maxPrice, size = 32 }: { price: number, maxPrice: number, size?: number }) {
    const strokeWidth = 3;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    // Normalize price to 0-10 scale relative to maxPrice
    const ratio = maxPrice > 0 ? (price / maxPrice) : 0;
    const scoreVal = Math.min(ratio * 10, 10);
    const score = scoreVal.toFixed(1); // Show decimal for price score precision
    const progress = (scoreVal / 10) * circumference;

    // Color logic: High price (Red), Low price (Green)
    let color = "#10b981"; // Low price (Green)
    if (scoreVal > 7) color = "#ef4444"; // High price (Red)
    else if (scoreVal > 4) color = "#f59e0b"; // Med price (Orange)

    return (
        <div className="relative flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
            <svg width={size} height={size} className="transform -rotate-90">
                <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="currentColor" strokeWidth={strokeWidth} className="text-white/5" />
                <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth={strokeWidth} strokeDasharray={circumference} strokeDashoffset={circumference - progress} strokeLinecap="round" className="transition-all duration-1000 ease-out" />
            </svg>
            <span className="absolute text-[9px] font-bold text-white/90">{score}</span>
        </div>
    );
}
