import { useState } from 'react';
import { X, ChevronDown, Sparkles, Search } from 'lucide-react';
import { getVendorIcon } from '../utils/getVendorIcon';

export interface FilterState {
    creativity: [number, number];
    logic: [number, number];
    pricing: [number, number];
    freeOnly: boolean;
    missingCreative: boolean;
    missingLogic: boolean;
    missingPrice: boolean;
    traits: string[];
    vendorIds: string[];
    searchText: string;
}

interface FilterPanelProps {
    filters: FilterState;
    onFiltersChange: (filters: FilterState) => void;
    allTraits: string[];
    maxPrice: number;
    vendors: { id: number | string; display_name: string }[];
}

export function FilterPanel({ filters, onFiltersChange, allTraits, maxPrice, vendors }: FilterPanelProps) {
    const [expandedSections, setExpandedSections] = useState({
        scores: true,
        pricing: true,
        missing: true,
        traits: false,
        vendors: true,
        search: true
    });
    const [vendorSearch, setVendorSearch] = useState('');

    const toggleSection = (section: keyof typeof expandedSections) => {
        setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    const clearAllFilters = () => {
        onFiltersChange({
            creativity: [0, 100],
            logic: [0, 100],
            pricing: [0, maxPrice],
            freeOnly: false,
            missingCreative: false,
            missingLogic: false,
            missingPrice: false,
            traits: [],
            vendorIds: [],
            searchText: ''
        });
    };

    const hasActiveFilters =
        filters.creativity[0] !== 0 || filters.creativity[1] !== 100 ||
        filters.logic[0] !== 0 || filters.logic[1] !== 100 ||
        filters.pricing[0] !== 0 || filters.pricing[1] !== maxPrice ||
        filters.freeOnly ||
        filters.missingCreative ||
        filters.missingLogic ||
        filters.missingPrice ||
        filters.missingPrice ||
        filters.traits.length > 0 ||
        filters.vendorIds.length > 0 ||
        filters.searchText !== '';

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <div className="font-label text-xs text-primary/80 tracking-widest mb-0.5">FILTER_MATRIX</div>
                    <div className="font-display text-xl text-white tracking-wide">SYSTEM FILTERS</div>
                </div>
                {hasActiveFilters && (
                    <button
                        onClick={clearAllFilters}
                        className="flex items-center gap-1.5 text-[10px] text-accent-tertiary border border-accent-tertiary/30 px-2 py-1 rounded bg-accent-tertiary/10 hover:bg-accent-tertiary/20 transition-colors tracking-widest"
                    >
                        <X size={10} />
                        CLEAR_ALL
                    </button>
                )}
            </div>

            <div className="space-y-4">

                {/* Search */}
                <FilterSection
                    title="SEARCH_DB"
                    isExpanded={expandedSections.search}
                    onToggle={() => toggleSection('search')}
                >
                    <div className="relative group">
                        <input
                            type="text"
                            placeholder="NAME, DESCRIPTION..."
                            value={filters.searchText}
                            onChange={(e) => onFiltersChange({ ...filters, searchText: e.target.value })}
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/20 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-mono"
                        />
                        <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity" />
                    </div>
                </FilterSection>

                {/* Score Sliders */}
                <FilterSection
                    title="CORE_SCORES"
                    isExpanded={expandedSections.scores}
                    onToggle={() => toggleSection('scores')}
                >
                    <div className="space-y-6 pt-2">
                        <RangeSlider
                            label="CREATIVITY"
                            min={0}
                            max={100}
                            value={filters.creativity}
                            onChange={(value) => onFiltersChange({ ...filters, creativity: value })}
                            color="sky"
                            step={1}
                        />
                        <RangeSlider
                            label="LOGIC / DEDUCTIVE"
                            min={0}
                            max={100}
                            value={filters.logic}
                            onChange={(value) => onFiltersChange({ ...filters, logic: value })}
                            color="purple"
                            step={1}
                        />
                    </div>
                </FilterSection>

                {/* Pricing */}
                <FilterSection
                    title="PRICING_MODEL"
                    isExpanded={expandedSections.pricing}
                    onToggle={() => toggleSection('pricing')}
                >
                    <div className="space-y-4 pt-1">
                        <label className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg border border-white/5 bg-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all">
                            <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${filters.freeOnly ? 'border-primary bg-primary text-black' : 'border-white/30 bg-black/40'}`}>
                                {filters.freeOnly && <Sparkles size={10} />}
                            </div>
                            <input
                                type="checkbox"
                                checked={filters.freeOnly}
                                onChange={(e) => onFiltersChange({ ...filters, freeOnly: e.target.checked })}
                                className="hidden"
                            />
                            <div className="flex items-center gap-2">
                                <Sparkles size={14} className={filters.freeOnly ? 'text-primary' : 'text-white/40'} />
                                <span className={`text-xs tracking-wider transition-colors ${filters.freeOnly ? 'text-white font-medium' : 'text-white/60'}`}>
                                    FREE MODELS ONLY
                                </span>
                            </div>
                        </label>

                        {!filters.freeOnly && (
                            <div className="pt-2">
                                <RangeSlider
                                    label="COST_PER_1M"
                                    min={0}
                                    max={maxPrice}
                                    value={filters.pricing}
                                    onChange={(value) => onFiltersChange({ ...filters, pricing: value })}
                                    color="green"
                                    format={(val) => `$${(val / 1000000).toFixed(2)}`}
                                />
                            </div>
                        )}
                    </div>
                </FilterSection>

                {/* Missing Data */}
                <FilterSection
                    title="MISSING_DATA_EXCLUSION"
                    isExpanded={expandedSections.missing}
                    onToggle={() => toggleSection('missing')}
                    badge={
                        [filters.missingCreative, filters.missingLogic, filters.missingPrice].filter(Boolean).length || undefined
                    }
                >
                    <div className="grid grid-cols-1 gap-2">
                        <ToggleItem label="EXCLUDE NO CREATIVE SCORE" checked={filters.missingCreative} onChange={(v) => onFiltersChange({ ...filters, missingCreative: v })} />
                        <ToggleItem label="EXCLUDE NO LOGIC SCORE" checked={filters.missingLogic} onChange={(v) => onFiltersChange({ ...filters, missingLogic: v })} />
                        <ToggleItem label="EXCLUDE NO PRICE" checked={filters.missingPrice} onChange={(v) => onFiltersChange({ ...filters, missingPrice: v })} />
                    </div>
                </FilterSection>

                {/* Traits */}
                <FilterSection
                    title="TRAIT_TAGS"
                    isExpanded={expandedSections.traits}
                    onToggle={() => toggleSection('traits')}
                    badge={filters.traits.length > 0 ? filters.traits.length : undefined}
                >
                    <div className="flex flex-wrap gap-1.5 max-h-64 overflow-y-auto cyber-scroll p-1">
                        {allTraits.map((trait) => {
                            const isSelected = filters.traits.includes(trait);
                            return (
                                <button
                                    key={trait}
                                    onClick={() => {
                                        const newTraits = isSelected
                                            ? filters.traits.filter(t => t !== trait)
                                            : [...filters.traits, trait];
                                        onFiltersChange({ ...filters, traits: newTraits });
                                    }}
                                    className={`px-2 py-1 text-[10px] font-mono border rounded transition-all ${isSelected
                                        ? 'border-primary bg-primary/10 text-primary shadow-[0_0_10px_rgba(0,255,136,0.2)]'
                                        : 'border-white/10 bg-black/20 text-white/50 hover:text-white hover:border-white/30'
                                        }`}
                                >
                                    {trait}
                                </button>
                            );
                        })}
                    </div>
                </FilterSection>

                {/* Vendors */}
                <FilterSection
                    title="VENDORS"
                    isExpanded={expandedSections.vendors}
                    onToggle={() => toggleSection('vendors')}
                    badge={filters.vendorIds.length > 0 ? filters.vendorIds.length : undefined}
                >
                    <div className="space-y-3 pt-1">
                        {/* Vendor Search */}
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="SEARCH VENDORS..."
                                value={vendorSearch}
                                onChange={(e) => setVendorSearch(e.target.value)}
                                className="w-full bg-black/40 border border-white/10 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder:text-white/20 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-mono"
                            />
                            <Search size={12} className="absolute left-2.5 top-2 text-white/30 group-focus-within:text-primary transition-colors" />
                        </div>

                        <div className="space-y-1 overflow-y-auto max-h-[300px] cyber-scroll">
                            {vendors
                                .filter(v => v.display_name.toLowerCase().includes(vendorSearch.toLowerCase()))
                                .map((vendor) => {
                                    const isSelected = filters.vendorIds.includes(String(vendor.id));
                                    return (
                                        <ToggleItem
                                            key={vendor.id}
                                            label={vendor.display_name.toUpperCase()}
                                            checked={isSelected}
                                            icon={getVendorIcon(vendor.display_name, '')}
                                            onChange={() => {
                                                const newIds = isSelected
                                                    ? filters.vendorIds.filter(id => id !== String(vendor.id))
                                                    : [...filters.vendorIds, String(vendor.id)];
                                                onFiltersChange({ ...filters, vendorIds: newIds });
                                            }}
                                        />
                                    );
                                })}
                        </div>
                    </div>
                </FilterSection>

            </div>

        </div>
    );
}

function ToggleItem({
    label,
    checked,
    onChange,
    icon
}: {
    label: string,
    checked: boolean,
    onChange: (v: boolean) => void,
    icon?: string
}) {
    return (
        <label className="flex items-center gap-3 cursor-pointer group hover:bg-white/5 p-1.5 rounded transition-colors">
            <div className={`w-3 h-3 rounded-sm border flex items-center justify-center transition-colors ${checked ? 'border-destructive bg-destructive text-white' : 'border-white/20 bg-black/40'}`}>
                {checked && <X size={8} />}
            </div>
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="hidden"
            />
            {icon && (
                <img src={icon} alt="" className="w-5 h-5 object-contain" />
            )}
            <span className={`text-[10px] tracking-wider transition-colors ${checked ? 'text-destructive' : 'text-white/60 group-hover:text-white/80'} ${icon ? 'text-xs font-bold' : ''}`}>
                {label}
            </span>
        </label>
    );
}

function FilterSection({
    title,
    isExpanded,
    onToggle,
    children,
    badge
}: {
    title: string;
    isExpanded: boolean;
    onToggle: () => void;
    children: React.ReactNode;
    badge?: number;
}) {
    return (
        <div className={`rounded-xl border transition-all duration-300 ${isExpanded ? 'bg-black/40 border-white/10 backdrop-blur-md pb-4' : 'bg-transparent border-transparent'}`}>
            <button
                onClick={onToggle}
                className={`w-full flex items-center justify-between px-4 py-3 group ${!isExpanded && 'bg-black/20 border border-white/5 rounded-xl hover:border-white/20 hover:bg-black/30'}`}
            >
                <div className="flex items-center gap-3">
                    <span className="font-label text-xs tracking-widest text-white/60 group-hover:text-white transition-colors">{title}</span>
                    {badge !== undefined && (
                        <span className="text-[10px] bg-primary/20 text-primary px-1.5 py-0.5 rounded border border-primary/30">
                            {badge}
                        </span>
                    )}
                </div>
                <div className={`text-white/30 transition-all duration-300 ${isExpanded ? 'rotate-180 text-white/60' : ''}`}>
                    <ChevronDown size={14} />
                </div>
            </button>
            <div className={`overflow-hidden transition-all duration-300 px-4 ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                {children}
            </div>
        </div>
    );
}

function RangeSlider({
    label,
    min,
    max,
    value,
    onChange,
    color,
    format = (val) => val.toString(),
    step
}: {
    label: string;
    min: number;
    max: number;
    value: [number, number];
    onChange: (value: [number, number]) => void;
    color: 'sky' | 'purple' | 'green';
    format?: (val: number) => string;
    step?: number;
}) {
    const gradientStops = {
        sky: 'linear-gradient(90deg, #06b6d4, #2563eb)', // Cyan-500 to Blue-600
        purple: 'linear-gradient(90deg, #8b5cf6, #d946ef)', // Violet-500 to Fuchsia-500
        green: 'linear-gradient(90deg, #10b981, #0d9488)' // Emerald-500 to Teal-600
    };

    const minValue = Math.min(value[0], value[1]);
    const maxValue = Math.max(value[0], value[1]);
    const minPercent = ((minValue - min) / (max - min)) * 100;
    const maxPercent = ((maxValue - min) / (max - min)) * 100;

    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-widest text-white/50">{label}</span>
                <div className="flex items-center gap-2 font-mono text-[10px] text-white/90">
                    <span className="bg-white/10 px-1.5 py-0.5 rounded">{format(minValue)}</span>
                    <span className="text-white/20">-</span>
                    <span className="bg-white/10 px-1.5 py-0.5 rounded">{format(maxValue)}</span>
                </div>
            </div>
            <div className="relative h-6 flex items-center group">
                {/* Track */}
                <div className="absolute inset-x-0 h-1 bg-white/10 rounded-full overflow-hidden">
                    {/* Glow behind active area */}
                    <div
                        className="absolute h-full opacity-50 blur-[4px] transition-all duration-300"
                        style={{
                            left: `${minPercent}%`,
                            width: `${Math.max(maxPercent - minPercent, 0)}%`,
                            background: gradientStops[color],
                        }}
                    />
                </div>

                {/* Active Range */}
                <div
                    className="absolute h-1 rounded-full transition-all duration-150"
                    style={{
                        left: `${minPercent}%`,
                        width: `${Math.max(maxPercent - minPercent, 0)}%`,
                        background: gradientStops[color],
                        boxShadow: '0 0 10px rgba(255,255,255,0.2)'
                    }}
                />

                {/* Inputs - Stacked and interactive */}
                {/* Note: We use pointer-events-none on the input but enable it on the thumb via CSS if possible, 
                    OR simpler: just rely on z-index logic if we can't reliably do thumb-only events without external CSS.
                    However, overlaying IS standard. Let's try the z-index swap based on value.
                    If value[0] (min) is > 50%, bring it to front? No, usually if min is close to max, hiding occurs.
                    Let's use the pointer-events trick with Tailwind arbitrary values.
                */}
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step ?? (max > 100 ? 100000 : 0.1)}
                    value={value[0]}
                    onChange={(e) => {
                        const val = parseFloat(e.target.value);
                        onChange([Math.min(val, value[1]), value[1]]);
                    }}
                    className="absolute inset-0 w-full h-full appearance-none bg-transparent z-20 pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:appearance-none"
                    style={{ WebkitAppearance: 'none' }}
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step ?? (max > 100 ? 100000 : 0.1)}
                    value={value[1]}
                    onChange={(e) => {
                        const val = parseFloat(e.target.value);
                        onChange([value[0], Math.max(val, value[0])]);
                    }}
                    className="absolute inset-0 w-full h-full appearance-none bg-transparent z-20 pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:appearance-none"
                    style={{ WebkitAppearance: 'none' }}
                />

                {/* Visual Thumbs (Synced positions) */}
                <div
                    className="absolute h-3 w-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] border border-black pointer-events-none transition-transform duration-75 z-30"
                    style={{ left: `calc(${minPercent}% - 6px)` }}
                />
                <div
                    className="absolute h-3 w-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] border border-black pointer-events-none transition-transform duration-75 z-30"
                    style={{ left: `calc(${maxPercent}% - 6px)` }}
                />
            </div>
        </div>
    );
}
