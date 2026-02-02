import { useState, useMemo } from 'react';
import { Compass, ChevronDown, RefreshCw } from 'lucide-react';
import { ExploreCard } from './ExploreCard';
import { GlitchIntro } from './GlitchIntro';
import { useRefreshExploreModels } from '../hooks/useQueries';

interface ExploreViewProps {
    activeModels: any[];
    ownedApiIds?: Set<string>;
    onHideModel: (id: string) => void;
    onImportModel: (model: any) => void;
}

export function ExploreView({ activeModels, ownedApiIds = new Set(), onHideModel, onImportModel }: ExploreViewProps) {
    const [expandedVendors, setExpandedVendors] = useState<Set<string>>(new Set());
    const [expandedModelId, setExpandedModelId] = useState<string | null>(null);
    const [showIntro, setShowIntro] = useState(true);

    const refreshMutation = useRefreshExploreModels();

    const groupedModels = useMemo(() => {
        const groups: Record<string, typeof activeModels> = {};

        // Sort by created desc first
        const sorted = [...activeModels].sort((a, b) => b.created - a.created);

        sorted.forEach(model => {
            const vendor = model.id.split('/')[0];
            if (!groups[vendor]) {
                groups[vendor] = [];
            }
            groups[vendor].push(model);
        });

        return groups;
    }, [activeModels]);

    const sortedVendors = useMemo(() => {
        return Object.keys(groupedModels).sort();
    }, [groupedModels]);

    const toggleVendor = (vendor: string) => {
        setExpandedVendors(prev => {
            const next = new Set(prev);
            if (next.has(vendor)) next.delete(vendor);
            else next.add(vendor);
            return next;
        });
    };

    if (showIntro) {
        return <GlitchIntro onComplete={() => setShowIntro(false)} />;
    }

    return (
        <div className="w-full h-full overflow-y-auto cyber-scroll p-8 space-y-8">
            <header className="flex items-start justify-between">
                <div className="space-y-2">
                    <div className="flex items-center gap-3 text-accent-tertiary">
                        <Compass size={32} />
                        <h1 className="font-display text-3xl tracking-wide">EXPLORE_MODELS</h1>
                    </div>
                    <p className="font-mono text-white/50 max-w-2xl">
                        Discover available models from OpenRouter endpoint. ({Object.values(groupedModels).reduce((acc, curr) => acc + curr.length, 0)} shown)
                    </p>
                </div>

                <button
                    onClick={() => refreshMutation.mutate()}
                    disabled={refreshMutation.isPending}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-white/60 hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                    <RefreshCw size={16} className={`transition-transform duration-700 ${refreshMutation.isPending ? 'animate-spin' : 'group-hover:rotate-180'}`} />
                    <span className="font-mono text-xs tracking-wider font-bold">
                        {refreshMutation.isPending ? 'REFRESHING...' : 'REFRESH CACHE'}
                    </span>
                </button>
            </header>

            <div className="space-y-4">
                {sortedVendors.map(vendor => (
                    <div key={vendor} className="border border-white/10 rounded-xl bg-black/20 overflow-hidden">
                        <button
                            onClick={() => toggleVendor(vendor)}
                            className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <span className={`font-display text-lg tracking-wide ${expandedVendors.has(vendor) ? 'text-accent-tertiary' : 'text-white'}`}>
                                    {vendor.toUpperCase()}
                                </span>
                                <span className="px-2 py-0.5 rounded bg-white/5 text-xs font-mono text-white/40">
                                    {groupedModels[vendor].length}
                                </span>
                            </div>
                            <ChevronDown
                                className={`text-white/40 transition-transform duration-300 ${expandedVendors.has(vendor) ? 'rotate-180' : ''}`}
                            />
                        </button>

                        <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4 border-t border-white/10 bg-black/40 transition-all duration-300 ${expandedVendors.has(vendor) ? 'opacity-100' : 'hidden opacity-0'}`}>
                            {groupedModels[vendor].map(model => {
                                const isOwned = ownedApiIds.has(model.id);
                                const isExpanded = expandedModelId === model.id;
                                return (
                                    <div
                                        key={model.id}
                                        className={`transition-all duration-300 ${isOwned ? 'opacity-50 grayscale-[0.5] hover:opacity-100 hover:grayscale-0' : ''} ${isExpanded ? 'col-span-1 md:col-span-2 xl:col-span-3 z-10' : ''}`}
                                    >
                                        <ExploreCard
                                            model={model}
                                            isExpanded={isExpanded}
                                            onToggleExpand={() => setExpandedModelId(isExpanded ? null : model.id)}
                                            onHide={() => onHideModel(model.id)}
                                            onImport={() => onImportModel(model)}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
