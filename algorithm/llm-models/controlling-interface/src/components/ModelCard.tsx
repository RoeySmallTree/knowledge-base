import { useState, type MouseEvent } from 'react';
import {
    Brain,
    Cpu,
    Archive,
    Trash2,
    Edit2,
    Copy,
    AlertTriangle,
    Sparkles,
    Calendar,
    Layers,
    DollarSign,
    Box,
    Radio,
    Zap,
    Target
} from 'lucide-react';
import { LLMModel, Vendor } from '../types';
import { FallbackPicker } from './FallbackPicker';
import { getVendorIcon } from '../utils/getVendorIcon';
import { ConfirmationModal } from './ConfirmationModal';

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

    // New props for expansion logic
    isExpanded: boolean;
    isActive?: boolean;
    onToggleExpand: () => void;
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
    maxContext,
    isExpanded,
    isActive,
    onToggleExpand
}: ModelCardProps) {
    const [confirmAction, setConfirmAction] = useState<'archive' | 'delete' | null>(null);

    // Calculate metrics
    const hasPricing = !!model.pricing && model.pricing.prompt !== undefined && model.pricing.completion !== undefined;
    const isFree = hasPricing && model.pricing?.prompt === 0 && model.pricing?.completion === 0;
    const totalPrice = hasPricing ? (model.pricing?.prompt ?? 0) + (model.pricing?.completion ?? 0) : 0;

    const paramsValue = typeof model.parameter_count_b === 'number' ? model.parameter_count_b : Number.parseFloat(String(model.parameter_count_b || '0'));
    const hasParamsValue = Number.isFinite(paramsValue);

    const activeParamsValue = typeof model.active_parameter_count_b === 'number' ? model.active_parameter_count_b : Number.parseFloat(String(model.active_parameter_count_b || '0'));
    const hasActiveParamsValue = Number.isFinite(activeParamsValue) && activeParamsValue > 0;

    const contextValue = (model.contextK === null || model.contextK === undefined || model.contextK === '')
        ? Number.NaN
        : Number(model.contextK);
    const hasContextValue = Number.isFinite(contextValue);

    const hasCreativeScore = model.creativeScore !== null && model.creativeScore !== undefined && Number.isFinite(model.creativeScore);
    const hasLogicScore = model.deductiveScore !== null && model.deductiveScore !== undefined && Number.isFinite(model.deductiveScore);
    const hasEfficiencyScore = model.efficiencyScore !== null && model.efficiencyScore !== undefined && Number.isFinite(model.efficiencyScore);

    const displayName = model.name_within_family?.trim() || model.modelName;

    const handleCardClick = (event: MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement;
        if (target.closest('[data-model-action]')) return;
        onToggleExpand();
    };

    // If Expanded: Full Width Layout (Gallery View)
    if (isExpanded) {
        return (
            <div className="relative overflow-hidden rounded-xl border border-accent-tertiary/50 bg-black/80 backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.5)] ring-1 ring-accent-tertiary/20 animate-in fade-in zoom-in-95 duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none opacity-20" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />

                <div className="relative z-10 p-8 space-y-8">
                    {/* Header: Identity */}
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-5">
                            <div className="h-16 w-16 rounded-xl bg-black/50 border border-white/10 p-2 shadow-lg">
                                <img
                                    src={getVendorIcon(vendorName, model.modelFamily)}
                                    alt={vendorName}
                                    className="w-full h-full object-contain opacity-90"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = '/llm-icons/ai-placeholder.png';
                                    }}
                                />
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-1">
                                    <h2 className="text-4xl font-display text-white tracking-wide">{displayName.toUpperCase()}</h2>
                                    <span className="px-3 py-1 rounded-full bg-accent-tertiary/10 border border-accent-tertiary/20 text-xs font-mono text-accent-tertiary tracking-widest">
                                        {model.modelFamily} SERIES
                                    </span>
                                </div>
                                <div className="flex items-center gap-4 text-xs text-white/40 font-mono">
                                    <div className="flex items-center gap-2">
                                        <Box size={14} className="text-primary/50" />
                                        <span className="tracking-widest">{vendorName.toUpperCase()}</span>
                                    </div>
                                    <span className="text-white/20">|</span>
                                    <span>#{model.id}</span>
                                </div>
                            </div>
                        </div>

                        {/* Top Actions */}
                        <div className="flex items-center gap-2">
                            <ActionButton icon={Edit2} onClick={() => onEdit(model)} color="hover:bg-primary/20 hover:text-primary hover:border-primary/50" />
                            <ActionButton icon={Copy} onClick={() => onDuplicate(model)} color="hover:bg-blue-500/20 hover:text-blue-500 hover:border-blue-500/50" />
                            <div className="w-px h-8 bg-white/10 mx-2" />
                            <ActionButton icon={Archive} onClick={() => setConfirmAction('archive')} color="hover:bg-orange-500/20 hover:text-orange-500 hover:border-orange-500/50" />
                            <ActionButton icon={Trash2} onClick={() => setConfirmAction('delete')} color="hover:bg-red-500/20 hover:text-red-500 hover:border-red-500/50" />
                        </div>
                    </div>

                    {/* Main Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Column 1: Description & Traits */}
                        <div className="space-y-6">
                            <div className="p-6 rounded-xl border border-white/10 bg-white/5 space-y-4 h-full">
                                <h4 className="text-xs text-white/50 font-label uppercase tracking-widest border-b border-white/10 pb-2">Overview</h4>
                                <p className="text-sm text-white/70 leading-relaxed font-mono">
                                    {model.description || "No description available for this model."}
                                </p>
                                <div className="pt-6 space-y-5">
                                    {model.bestFor && <TraitGroup label="BEST FOR" traits={model.bestFor} icon={Target} accent="text-primary" delay={0} size="text-xs" />}
                                    <TraitGroup label="PERSONALITY" traits={model.personalityTraits} icon={Brain} accent="text-accent-tertiary" delay={1} size="text-xs" />
                                    <TraitGroup label="ANALYTICAL" traits={model.analyticalTraits} icon={Cpu} accent="text-accent-secondary" delay={2} size="text-xs" />
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Metrics Visualization */}
                        <div className="space-y-4 p-6 rounded-xl border border-white/10 bg-white/5 h-fit">
                            <div className="text-xs text-accent-secondary tracking-widest font-label border-b border-white/10 pb-2 mb-4">
                                KEY METRICS
                            </div>

                            {/* Price */}
                            <div className="space-y-2">
                                <div className="flex justify-between text-xs font-mono text-white/60">
                                    <span>PRICING (1M)</span>
                                    <span className="text-white">${totalPrice > 0 ? (totalPrice / 1000000).toFixed(2) : '0.00'}</span>
                                </div>
                                <MetricBar value={totalPrice} maxValue={maxPrice} useLog={false} colorInvert heightClass="h-2" />
                            </div>

                            {/* Context */}
                            <div className="space-y-2 pt-2">
                                <div className="flex justify-between text-xs font-mono text-white/60">
                                    <span>CONTEXT</span>
                                    <span className="text-white">{hasContextValue ? `${contextValue}K` : 'N/A'}</span>
                                </div>
                                <MetricBar value={contextValue} maxValue={maxContext} highClass="bg-accent-tertiary" heightClass="h-2" />
                            </div>

                            {/* Params */}
                            <div className="grid grid-cols-2 gap-4 pt-2">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs font-mono text-white/60">
                                        <span>TOTAL PARAMS</span>
                                        <span className="text-white text-right">{hasParamsValue ? `${paramsValue}B` : 'N/A'}</span>
                                    </div>
                                    {hasParamsValue && <MetricBar value={paramsValue} maxValue={maxParams} highClass="bg-primary" heightClass="h-1.5" />}
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs font-mono text-white/60">
                                        <span>ACTIVE PARAMS</span>
                                        <span className="text-white text-right">{hasActiveParamsValue ? `${activeParamsValue}B` : 'N/A'}</span>
                                    </div>
                                    {hasActiveParamsValue && <MetricBar value={activeParamsValue} maxValue={maxParams} highClass="bg-emerald-400" heightClass="h-1.5" />}
                                </div>
                            </div>
                        </div>

                        {/* Column 3: Scores & Control */}
                        <div className="flex flex-col gap-6 h-fit">
                            {/* Scores */}
                            <div className="p-6 rounded-xl border border-white/10 bg-white/5 space-y-5">
                                <div className="text-xs text-primary tracking-widest font-label border-b border-white/10 pb-2">PERFORMANCE SCORES</div>
                                <ScoreBar label="EFFICIENCY" value={model.efficiencyScore} colorClass="bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.4)]" />
                                <ScoreBar label="CREATIVITY" value={model.creativeScore} colorClass="bg-primary shadow-[0_0_10px_rgba(0,255,136,0.4)]" />
                                <ScoreBar label="LOGIC" value={model.deductiveScore} colorClass="bg-accent-tertiary shadow-[0_0_10px_rgba(6,182,212,0.4)]" />
                            </div>

                            {/* Fallback */}
                            <div className="p-6 rounded-xl border border-white/10 bg-white/5 space-y-3">
                                <div className="flex items-center gap-2 font-label text-xs text-white/50 border-b border-white/10 pb-2 mb-2">
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
                    </div>
                </div>

                {/* Confirmation Modal Logic (Repeated) */}
                <ConfirmationModal
                    isOpen={confirmAction !== null}
                    onClose={() => setConfirmAction(null)}
                    onConfirm={() => {
                        if (confirmAction === 'archive') onArchive(model);
                        if (confirmAction === 'delete') onDelete(model);
                    }}
                    title={confirmAction === 'archive' ? 'ARCHIVE_MODEL?' : 'DELETE_MODEL?'}
                    message={
                        confirmAction === 'archive' ? (
                            <>
                                Are you sure you want to archive <span className="text-white font-bold">{displayName}</span>? It will be moved to the archive list and can be restored later.
                            </>
                        ) : (
                            <>
                                Are you sure you want to delete <span className="text-white font-bold">{displayName}</span>? <br /><br />
                                <span className="text-red-400 font-bold">WARNING: This action cannot be undone.</span>
                            </>
                        )
                    }
                    confirmLabel={confirmAction === 'archive' ? 'ARCHIVE' : 'DELETE'}
                    variant={confirmAction === 'archive' ? 'warning' : 'danger'}
                />
            </div>
        );
    }

    // Default: Collapsed Visual (Thumbnail)
    return (
        <div
            className={`group relative overflow-hidden rounded-xl border bg-black/40 backdrop-blur-md p-5 transition-all duration-300 cursor-pointer
                ${isActive
                    ? 'border-accent-tertiary/80 ring-1 ring-accent-tertiary/30 shadow-[0_0_20px_rgba(6,182,212,0.15)]'
                    : 'border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_-5px_rgba(0,255,136,0.3)]'
                }`}
            onClick={handleCardClick}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onToggleExpand();
                }
            }}
        >
            {/* Background Gradient Effect */}
            <div className={`absolute -inset-1 bg-gradient-to-r from-primary/10 via-transparent to-accent-secondary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-xl pointer-events-none ${isActive ? 'opacity-20' : ''}`} />

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

                        <span className="font-label text-sm bg-primary/10 text-primary border border-primary/20 px-2 py-1 rounded tracking-wider font-bold">
                            {model.modelFamily}
                        </span>
                    </div>

                    {/* Quick Expand Hint Icon or Actions if not active */}
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity" data-model-action>
                        <ActionButton icon={Edit2} onClick={() => onEdit(model)} color="hover:bg-primary/20 hover:text-primary hover:border-primary/50" />
                    </div>
                </div>

                {/* Row 2: Display Name */}
                <div className="w-full pt-1">
                    <div className={`font-display text-xl tracking-wide bg-clip-text text-transparent break-words leading-tight transition-colors duration-300
                        ${isActive
                            ? 'bg-gradient-to-r from-accent-tertiary to-white'
                            : 'bg-gradient-to-r from-white to-white/70'}`}
                    >
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

            <div className="mt-3 text-xs text-white/50 leading-relaxed line-clamp-2">
                {model.description || `${model.modelFamily} SERIES`}
            </div>

            {/* Quick Stats Grid */}
            <div className="mt-5 space-y-4">
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

            {/* Confirmation Modal */}
            <ConfirmationModal
                isOpen={confirmAction !== null}
                onClose={() => setConfirmAction(null)}
                onConfirm={() => {
                    if (confirmAction === 'archive') onArchive(model);
                    if (confirmAction === 'delete') onDelete(model);
                }}
                title={confirmAction === 'archive' ? 'ARCHIVE_MODEL?' : 'DELETE_MODEL?'}
                message={
                    confirmAction === 'archive' ? (
                        <>
                            Are you sure you want to archive <span className="text-white font-bold">{displayName}</span>? It will be moved to the archive list and can be restored later.
                        </>
                    ) : (
                        <>
                            Are you sure you want to delete <span className="text-white font-bold">{displayName}</span>? <br /><br />
                            <span className="text-red-400 font-bold">WARNING: This action cannot be undone.</span>
                        </>
                    )
                }
                confirmLabel={confirmAction === 'archive' ? 'ARCHIVE' : 'DELETE'}
                variant={confirmAction === 'archive' ? 'warning' : 'danger'}
            />
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
            title="Action"
        >
            <Icon size={14} />
        </button>
    )
}

function QuickStat({ label, value, max, isCurrency, suffix = '', color = 'bg-primary' }: { label: string, value: number, max: number, isCurrency?: boolean, suffix?: string, color?: string }) {
    const safeMax = max > 0 ? max : 1;
    const ratio = Math.min(100, Math.max(5, (value / safeMax) * 100)); // Min 5% so it shows
    const displayValue = isCurrency ? `$${(value / 1000000).toFixed(4)}` : `${value}${suffix}`;

    return (
        <div className="space-y-1">
            <div className="flex justify-between items-center text-[10px] uppercase tracking-wider font-medium text-white/50">
                <span>{label}</span>
                <span className="text-white/80 font-mono">
                    {displayValue}
                </span>
            </div>
            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div className={`h-full ${color} shadow-[0_0_8px_currentColor] transition-all duration-500`} style={{ width: `${ratio}%` }} />
            </div>
        </div>
    )
}

function MetricBar({
    value,
    maxValue,
    invert = false,
    colorInvert,
    useLog = true,
    highClass = 'bg-primary',
    heightClass = 'h-1'
}: {
    value: number;
    maxValue: number;
    invert?: boolean;
    colorInvert?: boolean;
    useLog?: boolean;
    highClass?: string;
    heightClass?: string;
}) {
    const ratio = normalizeValue(value, maxValue, useLog);
    const adjusted = invert ? 1 - ratio : ratio;
    const colorRatio = (colorInvert ?? invert) ? 1 - ratio : ratio;
    return <IndicatorBar ratio={adjusted} colorRatio={colorRatio} highClass={highClass} heightClass={heightClass} />;
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
    if (highClass.includes('emerald-400') && !isRed && !isOrange) glowColor = 'rgba(52, 211, 153, 0.4)';

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
    delay,
    size = 'text-[10px]'
}: {
    label: string;
    traits: string;
    icon: any;
    accent: string;
    delay: number;
    size?: string;
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
                        className={`px-2.5 py-1 ${size} font-mono border border-white/10 rounded-md bg-white/5 text-white/80 hover:bg-white/10 hover:border-white/20 transition-colors`}
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}
