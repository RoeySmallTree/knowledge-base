import { useState } from 'react';
import { LLMModel } from '../types';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { ModelCard } from './ModelCard';

interface ModelTableProps {
    models: LLMModel[];
    onEdit: (model: LLMModel) => void;
    onArchive: (model: LLMModel) => void;
    maxPrice: number;
}

export function ModelTable({ models, onEdit, onArchive, maxPrice }: ModelTableProps) {
    // Group models by vendor, then by family
    const groupedData = models.reduce((acc, model) => {
        if (!acc[model.vendor]) {
            acc[model.vendor] = {};
        }
        if (!acc[model.vendor][model.modelFamily]) {
            acc[model.vendor][model.modelFamily] = [];
        }
        acc[model.vendor][model.modelFamily].push(model);
        return acc;
    }, {} as Record<string, Record<string, LLMModel[]>>);

    // Sort vendors alphabetically
    const sortedVendors = Object.keys(groupedData).sort();

    return (
        <div className="w-full space-y-8">
            {sortedVendors.map((vendor) => (
                <VendorGroup
                    key={vendor}
                    vendor={vendor}
                    families={groupedData[vendor]}
                    onEdit={onEdit}
                    onArchive={onArchive}
                    maxPrice={maxPrice}
                />
            ))}
        </div>
    );
}

function VendorGroup({ vendor, families, onEdit, onArchive, maxPrice }: {
    vendor: string,
    families: Record<string, LLMModel[]>,
    onEdit: (model: LLMModel) => void,
    onArchive: (model: LLMModel) => void,
    maxPrice: number;
}) {
    const [isOpen, setIsOpen] = useState(true);

    // Calculate total models for vendor
    const totalModels = Object.values(families).reduce((acc, family) => acc + family.length, 0);
    const sortedFamilies = Object.keys(families).sort();

    return (
        <div id={`vendor-${vendor.replace(/\s+/g, '-').toLowerCase()}`} className="w-full scroll-mt-6">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="group flex items-center gap-4 mb-4 cursor-pointer select-none"
            >
                <div className={`p-1 rounded-md transition-colors ${isOpen ? 'bg-primary/20 text-primary' : 'bg-secondary/50 text-muted-foreground group-hover:bg-secondary/80'}`}>
                    {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </div>
                <h3 className="font-bold text-3xl text-white tracking-tight">{vendor}</h3>
                <span className="text-sm font-medium text-muted-foreground bg-secondary/30 px-3 py-1 rounded-full border border-white/5">{totalModels} models</span>
                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent ml-4" />
            </div>

            {isOpen && (
                <div className="space-y-8 pl-2 md:pl-0 animate-in fade-in slide-in-from-top-2 duration-300">
                    {sortedFamilies.map(family => (
                        <div
                            key={family}
                            id={`family-${vendor.replace(/\s+/g, '-').toLowerCase()}-${family.replace(/\s+/g, '-').toLowerCase()}`}
                            className="space-y-4 scroll-mt-24"
                        >
                            {/* Family Header */}
                            <div className="flex items-center gap-3 pl-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary/60"></span>
                                <h4 className="font-semibold text-lg text-primary/80">{family} Series</h4>
                                <span className="text-xs text-muted-foreground/60">{families[family].length} variants</span>
                            </div>

                            {/* Horizontal Scroll Layout */}
                            <div className="flex overflow-x-auto py-6 gap-6 scrollbar-hide snap-x snap-mandatory -mx-2 px-2">
                                {families[family].map((model, idx) => (
                                    <div key={`${model.vendor}-${model.modelName}-${idx}`} className="flex-none w-[400px] md:w-[500px] snap-center">
                                        <ModelCard
                                            model={model}
                                            onEdit={onEdit}
                                            onArchive={onArchive}
                                            maxPrice={maxPrice}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
