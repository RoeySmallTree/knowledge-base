import React, { useState, useEffect, useRef } from 'react';
import { LLMModel, Vendor } from '../types';
import { X, Save, ChevronDown, Search } from 'lucide-react';
import { StringArrayInput } from './StringArrayInput';
import { FallbackPicker } from './FallbackPicker';
import { FONT_SIZE } from '../constants';

interface EditModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (model: LLMModel) => void;
    model: LLMModel | null;
    models: LLMModel[];
    vendorsById: Record<string, Vendor>;
    vendors: Vendor[];
    modelsById: Record<string, LLMModel>;
}

function VendorSelect({
    vendors,
    value,
    onChange,
    vendorsById
}: {
    vendors: Vendor[],
    value: number | string | null,
    onChange: (id: number | string) => void,
    vendorsById: Record<string, Vendor>
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const wrapperRef = useRef<HTMLDivElement>(null);

    const activeVendor = value !== null ? vendorsById[String(value)] : undefined;
    const displayName = activeVendor?.display_name || 'Unknown Vendor';

    // Filter vendors
    const filtered = vendors.filter(v =>
        v.display_name.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="space-y-1.5" ref={wrapperRef}>
            <label className={`font-label ${FONT_SIZE.XS} tracking-widest text-white/40 uppercase`}>VENDOR</label>
            <div className="relative">
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 ${FONT_SIZE.SM} text-white flex items-center justify-between hover:bg-white/5 transition-colors focus:ring-1 focus:ring-primary/50`}
                >
                    <span className="font-mono truncate">{displayName}</span>
                    <ChevronDown size={14} className={`text-white/40 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 z-50 bg-black/90 border border-white/10 rounded-lg shadow-2xl max-h-60 flex flex-col backdrop-blur-xl">
                        <div className="p-2 border-b border-white/10">
                            <div className="relative">
                                <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-white/40" />
                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search vendors..."
                                    className={`w-full bg-white/5 border border-white/10 rounded px-2 py-1.5 pl-8 ${FONT_SIZE.XS} text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50`}
                                    autoFocus
                                />
                            </div>
                        </div>
                        <div className="overflow-y-auto cyber-scroll flex-1 p-1">
                            {filtered.map(vendor => (
                                <button
                                    key={vendor.id}
                                    type="button"
                                    onClick={() => {
                                        onChange(vendor.id);
                                        setIsOpen(false);
                                        setSearch('');
                                    }}
                                    className={`w-full text-left px-3 py-2 rounded ${FONT_SIZE.XS} font-mono transition-colors flex items-center justify-between group
                                        ${String(vendor.id) === String(value) ? 'bg-primary/20 text-primary' : 'text-white/80 hover:bg-white/5 hover:text-white'}
                                    `}
                                >
                                    <span>{vendor.display_name}</span>
                                    {String(vendor.id) === String(value) && <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(0,255,136,0.5)]" />}
                                </button>
                            ))}
                            {filtered.length === 0 && (
                                <div className={`px-3 py-4 text-center text-white/30 ${FONT_SIZE.XS} font-mono`}>
                                    NO_MATCHES_FOUND
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export function EditModal({ isOpen, onClose, onSave, model, models, vendorsById, modelsById, vendors }: EditModalProps) {
    const [formData, setFormData] = useState<LLMModel | null>(null);

    useEffect(() => {
        if (!model) {
            setFormData(null);
            return;
        }
        setFormData({
            ...model,
            // Keep null values as null, don't convert to 0
            creativeScore: model.creativeScore ?? null,
            deductiveScore: model.deductiveScore ?? null,
            efficiencyScore: model.efficiencyScore ?? null,
            // Ensure numeric conversions if they come in as strings/undefined
            parameter_count_b: model.parameter_count_b ?? null,
            active_parameter_count_b: model.active_parameter_count_b ?? null
        });
    }, [model]);

    if (!isOpen || !formData) return null;
    const displayName = formData.name_within_family?.trim() || formData.modelName;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { name: string, value: string | string[] } }) => {
        const { name, value } = e.target;
        setFormData(prev => {
            if (!prev) return null;
            // Handle array values directly if needed, or ensure they are strings for specific fields
            const finalValue = Array.isArray(value) ? value.join(', ') : value;

            return {
                ...prev,
                pricing: (name === 'prompt' || name === 'completion' || name === 'tier')
                    ? { ...prev.pricing, [name]: parseFloat(finalValue) || 0 } as any
                    : prev.pricing,
                [name]: (name.includes('Score') || name.includes('count_b') || name === 'contextK' || name === 'display_order' || name === 'fallback_model_id')
                    ? (finalValue === '' ? undefined : (name === 'contextK' ? finalValue : parseFloat(finalValue)))
                    : (name === 'prompt' || name === 'completion' || name === 'tier') ? undefined : finalValue // Don't set flat pricing fields
            };
        });
    };

    const handleScoreChange = (name: 'creativeScore' | 'deductiveScore' | 'efficiencyScore', value: number) => {
        setFormData(prev => (prev ? { ...prev, [name]: value } : prev));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData) {
            onSave(formData);
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
            onClick={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <div className="cyber-panel cyber-chamfer w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col border border-white/10 bg-black/80 backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-6 py-4">
                    <div>
                        <div className={`font-label ${FONT_SIZE.XS} text-primary/80 tracking-widest mb-1`}>
                            {formData.id ? 'EDIT_MODEL' : 'CREATE_MODEL'}
                        </div>
                        <h2 className={`font-display ${FONT_SIZE.XL} text-white tracking-wide flex items-center gap-2`}>
                            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(0,255,136,0.6)]" />
                            {displayName || <span className="text-white/30 italic">NEW_MODEL</span>}
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="group p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 hover:text-white text-white/60 transition-all duration-300"
                    >
                        <X size={18} className="group-hover:rotate-90 transition-transform duration-300" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-h-0">
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto cyber-scroll flex-1 min-h-0">
                        <div className="space-y-4">
                            <VendorSelect
                                vendors={vendors}
                                vendorsById={vendorsById}
                                value={formData.vendor_id}
                                onChange={(id) => setFormData(prev => prev ? { ...prev, vendor_id: id as any } : null)}
                            />
                            <Input label="MODEL_FAMILY" name="modelFamily" value={formData.modelFamily} onChange={handleChange} />
                            <Input label="FULL_NAME" name="modelName" value={formData.modelName} onChange={handleChange} />
                            <Input label="DISPLAY_NAME" name="name_within_family" value={formData.name_within_family ?? ''} onChange={handleChange} placeholder="Optional - Overrides Full Name" />

                            <div className="grid grid-cols-2 gap-4">
                                <Input label="API_ID" name="api_id" value={formData.api_id ?? ''} onChange={handleChange} placeholder="provider/model-name" />
                                <Input label="SLUG" name="slug" value={formData.slug ?? ''} onChange={handleChange} placeholder="model-slug" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <Input label="PARAMS (B)" name="parameter_count_b" value={formData.parameter_count_b ?? ''} onChange={handleChange} placeholder="Total" type="number" step="0.1" />
                                <Input label="ACTIVE (B)" name="active_parameter_count_b" value={formData.active_parameter_count_b ?? ''} onChange={handleChange} placeholder="Active" type="number" step="0.1" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <Input label="CONTEXT (K)" name="contextK" value={formData.contextK} onChange={handleChange} />
                                <Input label="DISPLAY_ORDER" name="display_order" value={formData.display_order ?? 0} onChange={handleChange} type="number" />
                            </div>

                            <div className="p-4 rounded-lg bg-white/5 border border-white/5 space-y-3">
                                <div className={`font-label ${FONT_SIZE.XS} text-white/40 tracking-widest`}>$ PER 1M TOKENS</div>
                                <div className="grid grid-cols-3 gap-3">
                                    <Input
                                        label="PROMPT"
                                        name="prompt"
                                        value={(formData.pricing?.prompt ?? 0) / 1000000}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            const displayValue = parseFloat(e.target.value) || 0;
                                            const microValue = Math.round(displayValue * 1000000);
                                            handleChange({ target: { name: 'prompt', value: microValue.toString() } });
                                        }}
                                        type="number"
                                        step="0.01"
                                    />
                                    <Input
                                        label="COMPL."
                                        name="completion"
                                        value={(formData.pricing?.completion ?? 0) / 1000000}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            const displayValue = parseFloat(e.target.value) || 0;
                                            const microValue = Math.round(displayValue * 1000000);
                                            handleChange({ target: { name: 'completion', value: microValue.toString() } });
                                        }}
                                        type="number"
                                        step="0.01"
                                    />
                                    <Input label="TIER" name="tier" value={formData.pricing?.tier ?? 1} onChange={handleChange} type="number" step="1" max="5" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="grid grid-cols-1 gap-6 p-5 rounded-xl bg-white/5 border border-white/5">
                                <h3 className={`font-label ${FONT_SIZE.XS} text-white/40 tracking-widest mb-2`}>PERFORMANCE_METRICS</h3>
                                <ScoreSlider
                                    label="CREATIVITY"
                                    name="creativeScore"
                                    value={formData.creativeScore ?? null}
                                    onChange={handleScoreChange}
                                    variant="creativity"
                                />
                                <ScoreSlider
                                    label="DEDUCTIVE"
                                    name="deductiveScore"
                                    value={formData.deductiveScore ?? null}
                                    onChange={handleScoreChange}
                                    variant="deductive"
                                />
                                <ScoreSlider
                                    label="EFFICIENCY"
                                    name="efficiencyScore"
                                    value={formData.efficiencyScore ?? null}
                                    onChange={handleScoreChange}
                                    variant="efficiency"
                                />
                            </div>
                            <TextArea label="DESCRIPTION" name="description" value={formData.description ?? ''} onChange={handleChange} />
                            <StringArrayInput label="BEST_FOR" name="bestFor" value={formData.bestFor} onChange={handleChange} />
                            <StringArrayInput label="PERSONALITY" name="personalityTraits" value={formData.personalityTraits} onChange={handleChange} />
                            <StringArrayInput label="ANALYTICAL_TRAITS" name="analyticalTraits" value={formData.analyticalTraits} onChange={handleChange} />
                        </div>

                        <div className="col-span-1 md:col-span-2 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <StringArrayInput label="CAPABILITIES" name="capabilities" value={formData.capabilities} onChange={handleChange} />
                                <div className="space-y-4">
                                    {/* Fallback Picker */}
                                    <div className="space-y-1.5">
                                        <label className={`font-label ${FONT_SIZE.XS} tracking-widest text-white/40 uppercase`}>FALLBACK_MODEL</label>
                                        <FallbackPicker
                                            models={models}
                                            vendorsById={vendorsById}
                                            modelsById={modelsById}
                                            value={formData.fallback_model_id ?? undefined}
                                            favorModel={formData}
                                            onChange={(fallbackId) => {
                                                setFormData(prev => prev ? { ...prev, fallback_model_id: fallbackId ? Number(fallbackId) : null } : null);
                                            }}
                                        />
                                    </div>

                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 mt-auto">
                                        <input
                                            type="checkbox"
                                            id="is_active"
                                            checked={formData.active ?? true}
                                            onChange={(e) => setFormData(prev => prev ? ({ ...prev, active: e.target.checked }) : null)}
                                            className="w-5 h-5 rounded border-white/20 bg-black/40 text-primary focus:ring-primary/50"
                                        />
                                        <label htmlFor="is_active" className={`font-label ${FONT_SIZE.XS} tracking-widest text-white/80 cursor-pointer select-none`}>IS_ACTIVE_MODEL</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-6 pb-6 pt-4 flex justify-end gap-3 border-t border-white/10 bg-black/40">
                        <button
                            type="button"
                            onClick={onClose}
                            className={`px-6 py-2.5 rounded-lg border border-white/10 ${FONT_SIZE.XS} font-bold tracking-widest text-white/60 hover:text-white hover:bg-white/5 transition-all`}
                        >
                            CANCEL
                        </button>
                        <button
                            type="submit"
                            className={`px-6 py-2.5 rounded-lg bg-primary/20 border border-primary/50 text-primary ${FONT_SIZE.XS} font-bold tracking-widest hover:bg-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(0,255,136,0.2)]`}
                        >
                            <Save size={14} />
                            SAVE_CHANGES
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

function Input({ label, name, value, onChange, type = "text", step, disabled = false, placeholder }: any) {
    return (
        <div className="space-y-1.5">
            <label className={`font-label ${FONT_SIZE.XS} tracking-widest text-white/40 uppercase`}>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                step={step}
                disabled={disabled}
                placeholder={placeholder}
                className={`w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 ${FONT_SIZE.SM} text-white placeholder:text-white/20 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-mono disabled:opacity-50 disabled:cursor-not-allowed`}
            />
        </div>
    );
}

function TextArea({ label, name, value, onChange }: any) {
    return (
        <div className="space-y-1.5">
            <label className={`font-label ${FONT_SIZE.XS} tracking-widest text-white/40 uppercase`}>{label}</label>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                rows={3}
                className={`w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 ${FONT_SIZE.SM} text-white placeholder:text-white/20 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-mono resize-none`}
            />
        </div>
    );
}

interface ScoreSliderProps {
    label: string;
    name: 'creativeScore' | 'deductiveScore' | 'efficiencyScore';
    value: number | null;
    onChange: (name: 'creativeScore' | 'deductiveScore' | 'efficiencyScore', value: number) => void;
    variant?: 'default' | 'creativity' | 'deductive' | 'efficiency';
}

function ScoreSlider({
    label,
    name,
    value,
    onChange,
    variant = 'default'
}: ScoreSliderProps) {
    const numericValue = value ?? 0;
    const clamped = Math.min(100, Math.max(0, numericValue));

    const getColor = (val: number) => {
        if (val === 0) return 'from-white/10 to-white/20'; // Neutral

        switch (variant) {
            case 'creativity':
                // Blue (Stable) -> Purple (Creative)
                if (val < 30) return 'from-sky-500/50 to-sky-500';
                if (val < 70) return 'from-indigo-400/50 to-indigo-400';
                return 'from-violet-500/50 to-violet-500';

            case 'deductive':
                // Cyan/Blue (Logic)
                if (val < 30) return 'from-cyan-900/50 to-cyan-700';
                if (val < 70) return 'from-cyan-600/50 to-cyan-500';
                return 'from-cyan-400/50 to-cyan-300';

            case 'efficiency':
            default:
                // Red (Inefficient) -> Green (Efficient)
                if (val < 30) return 'from-red-500/50 to-red-500';
                if (val < 50) return 'from-orange-500/50 to-orange-500';
                if (val < 70) return 'from-yellow-400/50 to-yellow-400';
                return 'from-emerald-500/50 to-emerald-400';
        }
    };

    const gradientClass = getColor(clamped);
    const percentage = clamped;

    return (
        <div className="space-y-2">
            <div className={`flex items-center justify-between ${FONT_SIZE.SM}`}>
                <label className={`font-label ${FONT_SIZE.XS} tracking-widest text-white/60`}>{label}</label>
                <span className={`text-white font-mono ${FONT_SIZE.SM} font-bold`}>{value === null ? '-' : clamped} <span className={`text-white/30 ${FONT_SIZE.XS} font-normal`}>/ 100</span></span>
            </div>
            <div className="relative h-6 flex items-center group touch-none select-none">
                <input
                    type="range"
                    min={0}
                    max={100}
                    step={1}
                    value={clamped}
                    onChange={(e) => onChange(name, Number(e.target.value))}
                    className="w-full h-full opacity-0 cursor-pointer absolute z-20 inset-0"
                />

                {/* Track Background */}
                <div className="absolute inset-x-0 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    {/* Tick marks - every 10 */}
                    <div className="absolute inset-0 flex justify-between px-[6px]">
                        {[...Array(11)].map((_, i) => (
                            <div key={i} className={`w-px h-full ${i === 0 || i === 10 ? 'bg-transparent' : 'bg-black/20'}`} />
                        ))}
                    </div>
                </div>

                {/* Filled Track */}
                <div className="absolute left-0 h-1.5 rounded-full overflow-hidden pointer-events-none z-10"
                    style={{ width: `${percentage}%` }}>
                    <div className={`h-full w-full bg-gradient-to-r ${gradientClass} transition-all duration-300`} />
                </div>


                <div
                    className={`absolute h-4 w-4 bg-white rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] border border-black pointer-events-none transition-all duration-75 z-20 ${value === null ? 'opacity-50 grayscale' : ''}`}
                    style={{ left: `calc(${percentage}% - 8px)` }}
                />
            </div>
        </div>
    );
}



// ... in EditModal render:
// <StringArrayInput label="PERSONALITY" name="personalityTraits" value={formData.personalityTraits} onChange={handleChange} />
// <StringArrayInput label="ANALYTICAL_TRAITS" name="analyticalTraits" value={formData.analyticalTraits} onChange={handleChange} />
