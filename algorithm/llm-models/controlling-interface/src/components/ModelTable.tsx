import { useState } from 'react';

import { ChevronDown, ChevronRight } from 'lucide-react';
import { LLMModel, Vendor } from '../types';
import { getVendorIcon } from '../utils/getVendorIcon';
import { ModelCard } from './ModelCard';

interface ModelTableProps {
    models: LLMModel[];
    allModels: LLMModel[];
    vendorsById: Record<string, Vendor>;
    modelsById: Record<string, LLMModel>;
    onEdit: (model: LLMModel) => void;
    onDuplicate: (model: LLMModel) => void;
    onAdd: (vendorId: string, family?: string) => void;
    onArchive: (model: LLMModel) => void;
    onDelete: (model: LLMModel) => void;

    onFallbackChange: (modelKey: string, fallbackId: string | null) => void;
    maxPrice: number;
    maxParams: number;
    maxContext: number;
}

export function ModelTable({
    models,
    allModels,
    vendorsById,
    modelsById,
    onEdit,
    onDuplicate,
    onAdd,
    onArchive,
    onDelete,

    onFallbackChange,
    maxPrice,
    maxParams,
    maxContext
}: ModelTableProps) {
    // Group models by vendor, then by family
    const groupedData = models.reduce((acc, model) => {
        const vendorId = String(model.vendor_id);
        if (!acc[vendorId]) {
            acc[vendorId] = {};
        }
        if (!acc[vendorId][model.modelFamily]) {
            acc[vendorId][model.modelFamily] = [];
        }
        acc[vendorId][model.modelFamily].push(model);
        return acc;
    }, {} as Record<string, Record<string, LLMModel[]>>);

    const sortedVendors = Object.keys(groupedData).sort((a, b) => {
        const vendorA = vendorsById[a];
        const vendorB = vendorsById[b];
        const orderA = vendorA?.display_order ?? Number.MAX_SAFE_INTEGER;
        const orderB = vendorB?.display_order ?? Number.MAX_SAFE_INTEGER;
        if (orderA !== orderB) return orderA - orderB;
        const nameA = vendorA?.display_name ?? 'Unknown Vendor';
        const nameB = vendorB?.display_name ?? 'Unknown Vendor';
        return nameA.localeCompare(nameB);
    });

    return (
        <div className="w-full space-y-10">
            {sortedVendors.map((vendorId) => (
                <VendorGroup
                    key={vendorId}
                    vendorId={vendorId}
                    vendorName={vendorsById[vendorId]?.display_name ?? 'Unknown Vendor'}
                    families={groupedData[vendorId]}
                    allModels={allModels}
                    vendorsById={vendorsById}
                    modelsById={modelsById}
                    onEdit={onEdit}
                    onDuplicate={onDuplicate}
                    onAdd={onAdd}
                    onArchive={onArchive}
                    onDelete={onDelete}

                    onFallbackChange={onFallbackChange}
                    maxPrice={maxPrice}
                    maxParams={maxParams}
                    maxContext={maxContext}
                />
            ))}
        </div>
    );
}

function VendorGroup({
    vendorId,
    vendorName,
    families,
    allModels,
    vendorsById,
    modelsById,
    onEdit,
    onDuplicate,
    onAdd,
    onArchive,
    onDelete,

    onFallbackChange,
    maxPrice,
    maxParams,
    maxContext
}: {
    vendorId: string,
    vendorName: string,
    families: Record<string, LLMModel[]>,
    allModels: LLMModel[],
    vendorsById: Record<string, Vendor>,
    modelsById: Record<string, LLMModel>,
    onEdit: (model: LLMModel) => void,
    onDuplicate: (model: LLMModel) => void,
    onAdd: (vendorId: string, family?: string) => void,
    onArchive: (model: LLMModel) => void,
    onDelete: (model: LLMModel) => void,

    onFallbackChange: (modelKey: string, fallbackId: string | null) => void,
    maxPrice: number;
    maxParams: number;
    maxContext: number;
}) {
    const [isOpen, setIsOpen] = useState(true);

    // Calculate total models for vendor
    const totalModels = Object.values(families).reduce((acc, family) => acc + family.length, 0);
    const sortedFamilies = Object.keys(families).sort((a, b) => {
        const minA = Math.min(...families[a].map(model => model.display_order ?? 0));
        const minB = Math.min(...families[b].map(model => model.display_order ?? 0));
        if (minA !== minB) return minA - minB;
        return a.localeCompare(b);
    });

    return (
        <div id={`vendor-${vendorId}`} className="w-full scroll-mt-8">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="group flex items-center gap-4 mb-4 cursor-pointer select-none"
            >
                <div className={`border border-border/70 cyber-chamfer-sm px-2 py-1 text-primary ${isOpen ? 'cyber-glow' : 'text-muted-foreground group-hover:text-primary'}`}>
                    {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </div>
                <div className="h-9 w-9 overflow-hidden rounded-sm border border-border/60 bg-white/5 p-1">
                    <img
                        src={getVendorIcon(vendorName, '')}
                        alt={vendorName}
                        className="h-full w-full object-contain opacity-90"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = '/llm-icons/ai-placeholder.png';
                        }}
                    />
                </div>
                <h3 className="font-display text-2xl text-foreground tracking-widest">{vendorName}</h3>
                <span className="font-label text-sm text-muted-foreground">{totalModels} UNITS</span>
                <div className="h-px flex-1 bg-border/60" />
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onAdd(vendorId);
                    }}
                    className="p-1 px-2 rounded hover:bg-white/10 text-primary transition-colors flex items-center justify-center border border-transparent hover:border-primary/30"
                >
                    <span className="text-lg leading-none">+</span>
                </button>
            </div>

            {isOpen && (
                <div className="space-y-10 animate-in fade-in slide-in-from-top-2 duration-300">
                    {sortedFamilies.map(family => (
                        <FamilyGroup
                            key={family}
                            vendorId={vendorId}
                            vendorName={vendorName}
                            family={family}
                            models={families[family]}
                            allModels={allModels}
                            vendorsById={vendorsById}
                            modelsById={modelsById}
                            onEdit={onEdit}
                            onDuplicate={onDuplicate}
                            onAdd={onAdd}
                            onArchive={onArchive}
                            onDelete={onDelete}

                            onFallbackChange={onFallbackChange}
                            maxPrice={maxPrice}
                            maxParams={maxParams}
                            maxContext={maxContext}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

function FamilyGroup({
    vendorId,
    vendorName,
    family,
    models,
    allModels,
    vendorsById,
    modelsById,
    onEdit,
    onDuplicate,
    onAdd,
    onArchive,
    onDelete,

    onFallbackChange,
    maxPrice,
    maxParams,
    maxContext
}: {
    vendorId: string,
    vendorName: string,
    family: string,
    models: LLMModel[],
    allModels: LLMModel[],
    vendorsById: Record<string, Vendor>,
    modelsById: Record<string, LLMModel>,
    onEdit: (model: LLMModel) => void,
    onDuplicate: (model: LLMModel) => void,
    onAdd: (vendorId: string, family?: string) => void,
    onArchive: (model: LLMModel) => void,
    onDelete: (model: LLMModel) => void,

    onFallbackChange: (modelKey: string, fallbackId: string | null) => void,
    maxPrice: number;
    maxParams: number;
    maxContext: number;
}) {
    const [isOpen, setIsOpen] = useState(true);
    const sortedModels = [...models].sort((a, b) => {
        const orderA = a.display_order ?? 0;
        const orderB = b.display_order ?? 0;
        if (orderA !== orderB) return orderA - orderB;
        return a.modelName.localeCompare(b.modelName);
    });
    const getModelKey = (model: LLMModel) => {
        const idPart = model.id ? String(model.id) : model.modelName;
        return `${model.vendor_id}-${idPart}-${model.modelFamily}`;
    };


    return (
        <div
            id={`family-${vendorId}-${family.replace(/\s+/g, '-').toLowerCase()}`}
            className="space-y-4 scroll-mt-24"
        >
            <div
                className="flex items-center gap-3 cursor-pointer group select-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className={`border border-border/70 cyber-chamfer-sm px-2 py-1 text-primary ${isOpen ? 'cyber-glow' : 'text-muted-foreground group-hover:text-primary'}`}>
                    {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                </div>
                <h4 className="font-display text-lg text-accent-tertiary">{family}</h4>
                <span className="font-label text-sm text-muted-foreground">{models.length} MODELS</span>
                <div className="h-px flex-1 bg-border/60" />
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onAdd(vendorId, family);
                    }}
                    className="p-1 px-1.5 rounded hover:bg-white/10 text-accent-tertiary transition-colors flex items-center justify-center border border-transparent hover:border-accent-tertiary/30"
                >
                    <span className="text-sm leading-none">+</span>
                </button>
            </div>

            {isOpen && (
                <div className="flex overflow-x-auto py-6 gap-6 scrollbar-hide snap-x snap-mandatory animate-in fade-in slide-in-from-top-2 duration-200">
                    {sortedModels.map((model) => {
                        const modelKey = getModelKey(model);
                        return (
                            <div
                                key={modelKey}
                                className="flex-none w-[320px] md:w-[360px] lg:w-[420px] snap-center transition-transform"
                            >
                                <ModelCard
                                    model={model}
                                    vendorName={vendorName}
                                    vendorsById={vendorsById}
                                    modelsById={modelsById}
                                    allModels={allModels}
                                    onFallbackChange={onFallbackChange}
                                    modelKey={modelKey}
                                    onEdit={onEdit}
                                    onDuplicate={onDuplicate}
                                    onArchive={onArchive}
                                    onDelete={onDelete}
                                    maxPrice={maxPrice}
                                    maxParams={maxParams}
                                    maxContext={maxContext}
                                />
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}


