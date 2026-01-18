import { useState, useEffect, useMemo, type RefObject } from 'react';

import { ChevronRight, Search, Compass } from 'lucide-react';
import { LLMModel, Vendor } from '../types';
import { getVendorIcon } from '../utils/getVendorIcon';

interface ModelSidebarProps {
    models: LLMModel[];
    vendorsById: Record<string, Vendor>;
    searchQuery: string;
    onSearchChange: (query: string) => void;

    totalModels: number;
    archivedCount: number;
    onOpenArchive: () => void;
    onExplore: () => void;
    scrollRootRef?: RefObject<HTMLDivElement>;
}

export function ModelSidebar({
    models,
    vendorsById,
    searchQuery,
    onSearchChange,

    totalModels,
    archivedCount,
    onOpenArchive,
    onExplore,
    scrollRootRef
}: ModelSidebarProps) {
    const [activeId, setActiveId] = useState<string>('');
    const [expandedVendors, setExpandedVendors] = useState<Set<string>>(new Set());
    const filteredCount = models.length;
    // Total models from props already excludes archived models in the data source
    const activeCount = totalModels;
    const getDisplayName = (model: LLMModel) => model.modelName;

    // Group and count data
    const structure = useMemo(() => {
        const struct: Record<string, { count: number; families: Record<string, { count: number; minOrder: number }> }> = {};

        models.forEach(model => {
            const vendorId = String(model.vendor_id);
            if (!struct[vendorId]) {
                struct[vendorId] = { count: 0, families: {} };
            }
            if (!struct[vendorId].families[model.modelFamily]) {
                struct[vendorId].families[model.modelFamily] = {
                    count: 0,
                    minOrder: model.display_order ?? 0
                };
            }
            struct[vendorId].count++;
            struct[vendorId].families[model.modelFamily].count++;
            struct[vendorId].families[model.modelFamily].minOrder = Math.min(
                struct[vendorId].families[model.modelFamily].minOrder,
                model.display_order ?? 0
            );
        });

        return struct;
    }, [models]);

    const sortedVendors = useMemo(() => {
        return Object.keys(structure).sort((a, b) => {
            const vendorA = vendorsById[a];
            const vendorB = vendorsById[b];
            const orderA = vendorA?.display_order ?? Number.MAX_SAFE_INTEGER;
            const orderB = vendorB?.display_order ?? Number.MAX_SAFE_INTEGER;
            if (orderA !== orderB) return orderA - orderB;
            const nameA = vendorA?.display_name ?? 'Unknown Vendor';
            const nameB = vendorB?.display_name ?? 'Unknown Vendor';
            return nameA.localeCompare(nameB);
        });
    }, [structure, vendorsById]);

    const handleCopyFiltered = () => {
        if (!models.length) return;
        const groupedText = sortedVendors.map(vendorId => {
            const vendorName = vendorsById[vendorId]?.display_name ?? 'Unknown Vendor';
            const vendorModels = models
                .filter(model => String(model.vendor_id) === vendorId)
                .sort((a, b) => {
                    const orderA = a.display_order ?? Number.MAX_SAFE_INTEGER;
                    const orderB = b.display_order ?? Number.MAX_SAFE_INTEGER;
                    if (orderA !== orderB) return orderA - orderB;
                    return getDisplayName(a).localeCompare(getDisplayName(b));
                });

            if (!vendorModels.length) return '';
            const lines = vendorModels.map(model => `- ${getDisplayName(model)} [#${model.id}]`);
            return `${vendorName}\n${lines.join('\n')}`;
        }).filter(Boolean).join('\n\n');

        if (!groupedText) return;
        if (navigator.clipboard?.writeText) {
            navigator.clipboard.writeText(groupedText).catch(() => undefined);
            return;
        }

        const textarea = document.createElement('textarea');
        textarea.value = groupedText;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    };



    // Scroll Spy Logic
    useEffect(() => {
        const rootEl = scrollRootRef?.current ?? null;
        const observer = new IntersectionObserver((entries) => {
            const visibleEntries = entries.filter(entry => entry.isIntersecting);
            if (!visibleEntries.length) return;
            visibleEntries.sort((a, b) => {
                if (b.intersectionRatio !== a.intersectionRatio) {
                    return b.intersectionRatio - a.intersectionRatio;
                }
                return a.boundingClientRect.top - b.boundingClientRect.top;
            });
            setActiveId(visibleEntries[0].target.id);
        }, { root: rootEl, rootMargin: '-10% 0px -80% 0px' });

        // Observe all vendor and family elements
        sortedVendors.forEach(vendorId => {
            const vendorAnchorId = `vendor-${vendorId}`;
            const el = document.getElementById(vendorAnchorId);
            if (el) observer.observe(el);

            Object.keys(structure[vendorId].families).forEach(family => {
                const familyId = `family-${vendorId}-${family.replace(/\s+/g, '-').toLowerCase()}`;
                const famEl = document.getElementById(familyId);
                if (famEl) observer.observe(famEl);
            });
        });

        return () => observer.disconnect();
    }, [sortedVendors, structure, scrollRootRef]);

    // Auto-expand based on activeId
    useEffect(() => {
        if (!activeId) return;

        // Find which vendor owns this activeId
        for (const vendorId of sortedVendors) {
            const vendorAnchorId = `vendor-${vendorId}`;

            if (activeId === vendorAnchorId || activeId.startsWith(`family-${vendorId}-`)) {
                setExpandedVendors(prev => {
                    if (prev.has(vendorId)) return prev;
                    const next = new Set(prev);
                    next.add(vendorId);
                    return next;
                });
                break;
            }
        }
    }, [activeId, sortedVendors]);

    useEffect(() => {
        if (!activeId) return;
        const targetId = `sidebar-${activeId}`;
        const targetEl = document.getElementById(targetId);
        if (!targetEl) return;

        // Use 'nearest' to only scroll if the element is out of view, avoiding "fighting" usage.
        // Add a small delay to ensure rendering is complete if needed, or just run it.
        targetEl.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }, [activeId, expandedVendors]);


    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rootEl = scrollRootRef?.current;
        if (rootEl) {
            const rootTop = rootEl.getBoundingClientRect().top;
            const elTop = el.getBoundingClientRect().top;
            const offset = elTop - rootTop;
            rootEl.scrollTo({ top: rootEl.scrollTop + offset - 24, behavior: 'smooth' });
            return;
        }
        const y = el.getBoundingClientRect().top + window.scrollY - 32;
        window.scrollTo({ top: y, behavior: 'smooth' });
    };

    const toggleVendor = (vendorId: string) => {
        setExpandedVendors(prev => {
            const next = new Set(prev);
            if (next.has(vendorId)) next.delete(vendorId);
            else next.add(vendorId);
            return next;
        });
    };

    return (
        <div className="space-y-6">
            <div className="space-y-3">
                <div className="font-label text-xs text-primary/80 tracking-widest">SYSTEM_OVERVIEW</div>
                <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-4 space-y-4">
                    <div className="grid grid-cols-2 gap-3 text-center">
                        <div className="space-y-1 p-2 rounded-lg bg-white/5 border border-white/5">
                            <div className="font-display text-2xl text-white">{activeCount}</div>
                            <div className="font-label text-[10px] text-white/40 tracking-widest">TOTAL</div>
                        </div>
                        <div className="space-y-1 p-2 rounded-lg bg-white/5 border border-white/5">
                            <div className="font-display text-2xl text-accent-tertiary">{filteredCount}</div>
                            <div className="font-label text-[10px] text-white/40 tracking-widest">SHOWN</div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={onOpenArchive}
                            className="flex-1 py-2 rounded-lg border border-white/10 bg-white/5 text-[10px] font-bold text-white/60 hover:text-white hover:border-white/30 transition-all font-label tracking-widest"
                        >
                            {archivedCount} ARCHIVED
                        </button>
                        <button
                            onClick={handleCopyFiltered}
                            className="flex-1 py-2 rounded-lg border border-primary/20 bg-primary/5 text-[10px] font-bold text-primary hover:bg-primary/10 transition-all font-label tracking-widest disabled:opacity-50"
                            disabled={!filteredCount}
                        >
                            COPY SHOWN
                        </button>
                    </div>
                    <button
                        onClick={onExplore}
                        className="w-full relative group overflow-hidden rounded-lg border border-accent-tertiary/30 bg-accent-tertiary/5 text-accent-tertiary hover:bg-accent-tertiary/10 transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-tertiary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        <div className="flex items-center justify-between px-4 py-3">
                            <span className="font-label text-[10px] font-bold tracking-[0.2em]">EXPLORE</span>
                            <div className="p-1.5 rounded-md bg-accent-tertiary/10 border border-accent-tertiary/20 group-hover:bg-accent-tertiary/20 group-hover:border-accent-tertiary/30 transition-all">
                                <Compass size={16} className="group-hover:rotate-90 transition-transform duration-500" />
                            </div>
                        </div>
                    </button>
                </div>
            </div>

            <div className="space-y-3">
                <div className="font-label text-xs text-primary/80 tracking-widest">SEARCH_DB</div>
                <div className="relative group">
                    <div className="absolute inset-y-0 left-3 flex items-center text-white/30 group-hover:text-primary transition-colors">
                        <Search size={14} />
                    </div>
                    <input
                        type="text"
                        placeholder="SEARCH MODELS..."
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="w-full bg-black/40 border border-white/10 rounded-xl py-2.5 pl-9 pr-4 text-sm text-white placeholder:text-white/20 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-mono"
                    />
                </div>
            </div>

            <div className="space-y-3">
                <h3 className="font-label text-xs text-primary/80 tracking-widest">MODEL_DIRECTORY</h3>

                <div className="space-y-2">
                    {sortedVendors.map(vendorId => {
                        const vendorAnchorId = `vendor-${vendorId}`;
                        const vendorName = vendorsById[vendorId]?.display_name ?? 'Unknown Vendor';
                        const isActiveVendor = activeId === vendorAnchorId;
                        const isChildActive = activeId.startsWith(`family-${vendorId}-`);
                        const isExpanded = expandedVendors.has(vendorId);
                        const vendorFamilies = structure[vendorId].families;
                        const sortedFamilies = Object.keys(vendorFamilies).sort((a, b) => {
                            const famA = vendorFamilies[a];
                            const famB = vendorFamilies[b];
                            if (famA.minOrder !== famB.minOrder) return famA.minOrder - famB.minOrder;
                            return a.localeCompare(b);
                        });

                        return (
                            <div key={vendorId} className="group/vendor">
                                <button
                                    onClick={() => {
                                        toggleVendor(vendorId);
                                        scrollTo(vendorAnchorId);
                                    }}
                                    id={`sidebar-${vendorAnchorId}`}
                                    className={`
                                        w-full flex items-center justify-between px-3 py-2.5 rounded-lg border transition-all
                                        ${isActiveVendor
                                            ? 'bg-primary/10 border-primary/50 text-white shadow-[0_0_15px_rgba(0,255,136,0.1)]'
                                            : isChildActive
                                                ? 'bg-white/5 border-primary/30 text-white'
                                                : 'bg-black/20 border-white/5 text-white/60 hover:bg-white/5 hover:text-white hover:border-white/20'
                                        }
                                    `}
                                >
                                    <div className="flex items-center gap-3 truncate">
                                        <div className={`transition-transform duration-200 ${isExpanded ? 'rotate-90 text-white' : 'text-white/30'}`}>
                                            <ChevronRight size={12} />
                                        </div>
                                        <div className="h-6 w-6 overflow-hidden rounded-md border border-white/10 bg-black/40 p-1">
                                            <img
                                                src={getVendorIcon(vendorName, '')}
                                                alt={vendorName}
                                                className="h-full w-full object-contain opacity-80 group-hover/vendor:opacity-100 transition-opacity"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = '/llm-icons/ai-placeholder.png';
                                                }}
                                            />
                                        </div>
                                        <span className={`text-sm font-medium tracking-wide truncate ${isActiveVendor ? 'text-primary' : ''}`}>{vendorName}</span>
                                    </div>
                                    <span className={`text-xs font-mono px-1.5 py-0.5 rounded ${isActiveVendor ? 'bg-primary/20 text-primary' : 'bg-white/5 text-white/30'}`}>
                                        {structure[vendorId].count}
                                    </span>
                                </button>

                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pl-4 space-y-1 my-2 ml-3 border-l border-white/10">
                                        {(vendorsById[vendorId]?.description || vendorsById[vendorId]?.link) && (
                                            <div className="mb-3 mr-2 p-3 rounded-lg bg-white/5 border border-white/10 space-y-2">
                                                {vendorsById[vendorId]?.description && (
                                                    <p className="text-xs text-white/70 leading-relaxed font-mono">
                                                        {vendorsById[vendorId].description}
                                                    </p>
                                                )}
                                                {vendorsById[vendorId]?.link && (
                                                    <a
                                                        href={vendorsById[vendorId].link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-1.5 text-[10px] text-primary hover:text-primary/80 transition-colors uppercase font-bold tracking-wider"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        Visit Provider <ChevronRight size={10} />
                                                    </a>
                                                )}
                                            </div>
                                        )}
                                        {isExpanded && (
                                            <FamilyList
                                                vendorId={vendorId}
                                                families={vendorFamilies}
                                                sortedFamilies={sortedFamilies}
                                                activeId={activeId}
                                                scrollTo={scrollTo}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

function FamilyList({
    vendorId,
    families,
    sortedFamilies,
    activeId,
    scrollTo
}: {
    vendorId: string;
    families: Record<string, { count: number; minOrder: number }>;
    sortedFamilies: string[];
    activeId: string;
    scrollTo: (id: string) => void;
}) {
    return (
        <div className="space-y-1">
            {sortedFamilies.map(family => {
                const familyId = `family-${vendorId}-${family.replace(/\s+/g, '-').toLowerCase()}`;
                const isFamilyActive = activeId === familyId;
                return (
                    <button
                        key={familyId}
                        onClick={(event) => {
                            event.stopPropagation();
                            scrollTo(familyId);
                        }}
                        id={`sidebar-${familyId}`}
                        className={`
                            w-full flex items-center justify-between px-3 py-1.5 text-xs rounded-md transition-all text-left border
                            ${isFamilyActive
                                ? 'bg-primary/10 border-primary/30 text-primary'
                                : 'bg-transparent border-transparent text-white/50 hover:text-white hover:bg-white/5'
                            }
                        `}
                    >
                        <span className="truncate tracking-wide">{family}</span>
                        <span className={`text-[10px] ${isFamilyActive ? 'text-primary/70' : 'opacity-30'}`}>{families[family].count}</span>
                    </button>
                );
            })}
        </div>
    );
}
