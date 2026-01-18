import { useState, type MouseEvent } from 'react';
import {
    Brain,
    Cpu,
    Archive,
    Trash2,
    Edit2,
    Copy,
    AlertTriangle,
    Sparkles
} from 'lucide-react';
import { LLMModel, Vendor } from '../types';
import { FallbackPicker } from './FallbackPicker';
import { getVendorIcon } from '../utils/getVendorIcon';

interface ModelCardProps {
    model: LLMModel;
    vendorName: string;
    vendorsById: Record<string, Vendor>;
    modelsById: Record<string, LLMModel>;
    allModels: LLMModel[];
    onFallbackChange: (modelKey: string, fallbackId: string | null) => void;
    modelKey: string;
    onEdit: (model: LLMModel) => void;
    onDuplicate: (model: LLMModel) => void;
    onArchive: (model: LLMModel) => void;
    onDelete: (model: LLMModel) => void;
    maxPrice: number;
    maxParams: number;
    maxContext: number;
}

export function ModelCard({
    model,
    vendorName,
    vendorsById,
    modelsById,
    allModels,
    onFallbackChange,
    modelKey,
    onEdit,
    onDuplicate,
    onArchive,
    onDelete,
    maxPrice,
    maxParams,
    maxContext
}: ModelCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const hasPricing = !!model.pricing && model.pricing.prompt !== undefined && model.pricing.completion !== undefined;
    const isFree = hasPricing && model.pricing?.prompt === 0 && model.pricing?.completion === 0;
    const totalPrice = hasPricing ? (model.pricing?.prompt ?? 0) + (model.pricing?.completion ?? 0) : 0;
    const paramsValue = typeof model.parameter_count_b === 'number' ? model.parameter_count_b : Number.parseFloat(String(model.parameter_count_b || '0'));
    const hasParamsValue = Number.isFinite(paramsValue);
    const contextValue = (model.contextK === null || model.contextK === undefined || model.contextK === '')
        ? Number.NaN
        : Number(model.contextK);
    const hasContextValue = Number.isFinite(contextValue);
    const hasCreativeScore = model.creativeScore !== null && model.creativeScore !== undefined && Number.isFinite(model.creativeScore);
    const hasLogicScore = model.deductiveScore !== null && model.deductiveScore !== undefined && Number.isFinite(model.deductiveScore);

    const displayName = model.name_within_family?.trim() || model.modelName;

    const handleCardClick = (event: MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement;
        if (target.closest('[data-model-action]')) return;
        setIsExpanded(prev => !prev);
    };

    return (
        <div
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_-5px_rgba(0,255,136,0.3)] cursor-pointer"
            onClick={handleCardClick}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setIsExpanded(prev => !prev);
                }
            }}
        >
            {/* Background Gradient Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-transparent to-accent-secondary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-xl pointer-events-none" />

            <div className="relative flex flex-col gap-2">
                {/* Row 1: Image, Family, Actions */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="relative shrink-0">
                            <div className="h-10 w-10 rounded-lg bg-black/50 border border-white/10 p-1.5 shadow-[0_0_15px_-3px_rgba(0,0,0,0.5)] group-hover:border-primary/30 transition-colors">
                                <img
                                    src={getVendorIcon(vendorName, model.modelFamily)}
                                    alt={vendorName}
                                    className="w-full h-full object-contain opacity-90 group-hover:scale-110 transition-transform duration-300"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = '/llm-icons/ai-placeholder.png';
                                    }}
                                />
                            </div>
                            {/* Status Indicator Dot */}
                            <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-black flex items-center justify-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                            </div>
                        </div>

                        <span className="font-label text-xs bg-primary/10 text-primary border border-primary/20 px-2 py-1 rounded tracking-wider font-bold">
                            {model.modelFamily}
                        </span>
                    </div>

                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity" data-model-action>
                        <ActionButton icon={Edit2} onClick={() => onEdit(model)} color="hover:bg-primary/20 hover:text-primary hover:border-primary/50" />
                        <ActionButton icon={Copy} onClick={() => onDuplicate(model)} color="hover:bg-blue-500/20 hover:text-blue-500 hover:border-blue-500/50" />
                        <ActionButton icon={Archive} onClick={() => confirm(`Archive ${displayName}?`) && onArchive(model)} color="hover:bg-orange-500/20 hover:text-orange-500 hover:border-orange-500/50" />
                        <ActionButton icon={Trash2} onClick={() => confirm(`Delete ${displayName}? This cannot be undone.`) && onDelete(model)} color="hover:bg-red-500/20 hover:text-red-500 hover:border-red-500/50" />
                    </div>
                </div>

                {/* Row 2: Display Name */}
                <div className="w-full pt-1">
                    <div className="font-display text-xl tracking-wide bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent break-words leading-tight">
                        {displayName}
                    </div>
                </div>

                {/* Row 3: Vendor | ID */}
                <div className="flex items-center gap-2 text-white/40 font-mono text-xs">
                    <span className="uppercase tracking-wider text-[10px]">{vendorName}</span>
                    <span className="text-white/20">|</span>
                    {model.id && <span className="opacity-70 text-sm">#{model.id}</span>}
                </div>
            </div>

            <div className="mt-3 text-xs text-white/50 leading-relaxed">
                {model.description || `${model.modelFamily} SERIES`}
            </div>

            <div className={`mt-5 space-y-4 transition-all duration-500 ${isExpanded ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
                <div className="grid grid-cols-2 gap-4">
                    <QuickStat label="PRICE" value={hasPricing ? totalPrice : 0} max={maxPrice} isCurrency />
                    <QuickStat label="CTX" value={hasContextValue ? contextValue : 0} max={maxContext} suffix="K" />
                </div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="grid grid-cols-2 gap-4">
                    <QuickStat label="CREATIVITY" value={hasCreativeScore ? model.creativeScore ?? 0 : 0} max={100} color="bg-purple-500" />
                    <QuickStat label="LOGIC" value={hasLogicScore ? model.deductiveScore ?? 0 : 0} max={100} color="bg-blue-500" />
                </div>
            </div>

            {isExpanded && (
                <div className="mt-6 space-y-6 relative animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="grid grid-cols-2 gap-3">
                        <StatBox label="Pricing" delay={0}>
                            {hasPricing && model.pricing ? (
                                isFree ? (
                                    <div className="flex items-center gap-2 text-primary drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]">
                                        <Sparkles size={16} className="animate-pulse" />
                                        <span className="text-lg font-display tracking-widest">FREE</span>
                                    </div>
                                ) : (
                                    <div className="space-y-1.5 text-xs font-mono text-white/70">
                                        <div className="flex justify-between"><span>IN:</span> <span className="text-white">${(model.pricing.prompt / 1000000).toFixed(2)}</span></div>
                                        <div className="flex justify-between"><span>OUT:</span> <span className="text-white">${(model.pricing.completion / 1000000).toFixed(2)}</span></div>
                                        <div className="pt-1"><MetricBar value={totalPrice} maxValue={maxPrice} useLog={false} colorInvert /></div>
                                    </div>
                                )
                            ) : (
                                <span className="text-sm text-white/30">N/A</span>
                            )}
                        </StatBox>

                        <StatBox label="Params" delay={1}>
                            <div className="text-lg font-display text-white">{hasParamsValue ? `${model.parameter_count_b || paramsValue}B` : 'N/A'}</div>
                            {hasParamsValue && (
                                <MetricBar value={paramsValue} maxValue={maxParams} highClass="bg-primary" />
                            )}
                        </StatBox>

                        <StatBox label="Context" delay={2}>
                            <div className="text-lg font-display text-white">{hasContextValue ? `${model.contextK}K` : 'N/A'}</div>
                            {hasContextValue && (
                                <MetricBar value={contextValue} maxValue={maxContext} highClass="bg-accent-tertiary" />
                            )}
                        </StatBox>

                        <StatBox label="Family" delay={3}>
                            <div className="text-lg font-display text-white truncate" title={model.modelFamily}>{model.modelFamily}</div>
                            <div className="text-[10px] text-white/40 tracking-wider">SERIES</div>
                        </StatBox>
                    </div>

                    <div className="space-y-4 p-4 rounded-lg bg-white/5 border border-white/5">
                        <ScoreBar label="CREATIVITY" value={model.creativeScore} colorClass="bg-primary shadow-[0_0_10px_rgba(0,255,136,0.4)]" />
                        <ScoreBar label="LOGIC" value={model.deductiveScore} colorClass="bg-accent-tertiary shadow-[0_0_10px_rgba(6,182,212,0.4)]" />
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <TraitGroup label="PERSONALITY" traits={model.personalityTraits} icon={Brain} accent="text-accent-tertiary" delay={4} />
                        <TraitGroup label="ANALYTICAL" traits={model.analyticalTraits} icon={Cpu} accent="text-accent-secondary" delay={5} />
                    </div>

                    <div className="space-y-3">
                        {model.bestFor && <InfoBlock label="BEST_FOR" value={model.bestFor} border="border-l-2 border-primary" />}
                        {model.specialPropertiesNotes && <InfoBlock label="NOTES" value={model.specialPropertiesNotes} border="border-l-2 border-accent-secondary" />}
                    </div>

                    <div className="space-y-2 pt-2 border-t border-white/10" data-model-action>
                        <div className="flex items-center gap-2 font-label text-xs text-white/50">
                            <AlertTriangle size={12} />
                            FAILOVER_PROTOCOL
                        </div>
                        <FallbackPicker
                            models={allModels}
                            vendorsById={vendorsById}
                            modelsById={modelsById}
                            value={model.fallback_model_id}
                            favorModel={model}
                            onChange={(fallbackId) => onFallbackChange(modelKey, fallbackId)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

function ActionButton({ icon: Icon, onClick, color }: { icon: any, onClick: (e: any) => void, color: string }) {
    return (
        <button
            onClick={(e) => {
                e.stopPropagation();
                onClick(e);
            }}
            className={`p-2 rounded-lg border border-white/10 bg-black/40 text-white/50 transition-all duration-200 ${color}`}
            data-model-action
        >
            <Icon size={14} />
        </button>
    )
}

function QuickStat({ label, value, max, isCurrency, suffix = '', color = 'bg-primary' }: { label: string, value: number, max: number, isCurrency?: boolean, suffix?: string, color?: string }) {
    const ratio = Math.min(100, Math.max(5, (value / max) * 100)); // Min 5% so it shows
    return (
        <div className="space-y-1">
            <div className="flex justify-between items-center text-[10px] uppercase tracking-wider font-medium text-white/50">
                <span>{label}</span>
                <span className="text-white/80 font-mono">
                    {isCurrency ? `$${(value / 1000000).toFixed(4)}` : `${value}${suffix}`}
                </span>
            </div>
            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div className={`h-full ${color} shadow-[0_0_8px_currentColor]`} style={{ width: `${ratio}%` }} />
            </div>
        </div>
    )
}

function StatBox({ label, children, delay }: { label: string; children: React.ReactNode, delay: number }) {
    return (
        <div
            className="p-3 space-y-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors animate-in fade-in slide-in-from-left-4 duration-500 fill-mode-backwards"
            style={{ animationDelay: `${delay * 50}ms` }}
        >
            <div className="font-label text-[10px] text-white/40 tracking-widest">{label}</div>
            {children}
        </div>
    );
}

function MetricBar({
    value,
    maxValue,
    invert = false,
    colorInvert,
    useLog = true,
    highClass = 'bg-primary'
}: {
    value: number;
    maxValue: number;
    invert?: boolean;
    colorInvert?: boolean;
    useLog?: boolean;
    highClass?: string;
}) {
    const ratio = normalizeValue(value, maxValue, useLog);
    const adjusted = invert ? 1 - ratio : ratio;
    const colorRatio = (colorInvert ?? invert) ? 1 - ratio : ratio;
    return <IndicatorBar ratio={adjusted} colorRatio={colorRatio} highClass={highClass} heightClass="h-1" />;
}

function ScoreBar({
    label,
    value,
    colorClass
}: {
    label: string;
    value: number | null;
    colorClass: string;
}) {
    const hasValue = value !== null && value !== undefined && Number.isFinite(value);
    const score = hasValue ? value : 0;
    const ratio = hasValue ? normalizeValue(score, 100, false) : 0;

    return (
        <div className="space-y-2 group">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-label text-[10px] tracking-widest text-white/50">{label}</span>
                <span className="text-white font-mono">{hasValue ? score : 'N/A'}</span>
            </div>
            <IndicatorBar ratio={ratio} highClass={colorClass} heightClass="h-1.5" minPercent={hasValue ? 6 : 0} />
        </div>
    );
}

function IndicatorBar({
    ratio,
    colorRatio,
    highClass,
    heightClass,
    minPercent = 6
}: {
    ratio: number;
    colorRatio?: number;
    highClass: string;
    heightClass: string;
    minPercent?: number;
}) {
    const clamped = Math.min(1, Math.max(0, ratio));
    const colorClamped = Math.min(1, Math.max(0, colorRatio ?? ratio));
    const percent = Math.min(100, Math.max(minPercent, clamped * 100));
    const barClass = getIndicatorClass(colorClamped, highClass);

    // Custom dynamic glow based on color class logic
    const isRed = barClass.includes('red');
    const isOrange = barClass.includes('orange');

    // We can infer color from highClass if not red/orange, but let's stick to simple logic
    let glowColor = 'rgba(0, 255, 136, 0.4)'; // Primary default
    if (isRed) glowColor = 'rgba(239, 68, 68, 0.6)';
    if (isOrange) glowColor = 'rgba(251, 146, 60, 0.6)';
    if (highClass.includes('accent-tertiary') && !isRed && !isOrange) glowColor = 'rgba(6, 182, 212, 0.4)';
    if (highClass.includes('accent-secondary') && !isRed && !isOrange) glowColor = 'rgba(255, 0, 255, 0.4)';

    return (
        <div className={`${heightClass} w-full bg-white/5 rounded-full overflow-hidden`}>
            <div
                className={`${heightClass} ${barClass} rounded-full transition-all duration-500`}
                style={{ width: `${percent}%`, boxShadow: `0 0 10px ${glowColor}` }}
            />
        </div>
    );
}

function normalizeValue(value: number, maxValue: number, useLog: boolean) {
    if (!Number.isFinite(value) || value <= 0) return 0;
    if (!Number.isFinite(maxValue) || maxValue <= 0) return 0;
    const raw = useLog
        ? Math.log10(value + 1) / Math.log10(maxValue + 1)
        : value / maxValue;
    return Math.min(1, Math.max(0, raw));
}

function getIndicatorClass(ratio: number, highClass: string) {
    if (ratio < 0.3) return 'bg-red-500';
    if (ratio < 0.5) return 'bg-orange-500';
    if (ratio < 0.7) return 'bg-yellow-400';
    return highClass;
}

function TraitGroup({
    label,
    traits,
    icon: Icon,
    accent,
    delay
}: {
    label: string;
    traits: string;
    icon: any;
    accent: string;
    delay: number;
}) {
    if (!traits) return null;
    const items = traits.split(',').map(item => item.trim()).filter(Boolean);

    return (
        <div
            className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-backwards"
            style={{ animationDelay: `${delay * 100}ms` }}
        >
            <div className={`flex items-center gap-2 font-label text-[10px] tracking-widest ${accent} opacity-80`}>
                <Icon size={12} />
                {label}
            </div>
            <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                    <span
                        key={item}
                        className="px-2 py-0.5 text-[10px] font-mono border border-white/10 rounded-md bg-white/5 text-white/80 hover:bg-white/10 hover:border-white/20 transition-colors"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}

function InfoBlock({ label, value, border = 'border-l-2 border-white/20' }: { label: string; value: string, border?: string }) {
    return (
        <div className={`pl-3 space-y-1 ${border} bg-gradient-to-r from-white/5 to-transparent p-2 rounded-r-lg`}>
            <div className="font-label text-[10px] text-white/40 tracking-widest">{label}</div>
            <div className="text-xs text-white/80 leading-relaxed font-mono">{value}</div>
        </div>
    );
}




