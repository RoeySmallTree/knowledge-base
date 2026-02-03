import { useState, useEffect, useMemo, type RefObject } from 'react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    useSortable,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { createPortal } from 'react-dom';

import { ChevronRight, Search, Compass, GripVertical, Copy, Check } from 'lucide-react';
import { LLMModel, Vendor } from '../types';
import { getVendorIcon } from '../utils/getVendorIcon';
import { useUpdateVendorOrders } from '../hooks/useQueries';
import { FONT_SIZE } from '../constants';

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

    // Copy State
    const [showCopyTooltip, setShowCopyTooltip] = useState(false);
    const [copyFormat, setCopyFormat] = useState<'json' | 'markdown'>('json');
    const [selectedFields, setSelectedFields] = useState<string[]>(['name', 'vendor', 'context', 'pricing']);
    const [copied, setCopied] = useState(false);
    const [tooltipPos, setTooltipPos] = useState<{ top: number; left: number; width: number } | null>(null);

    const filteredCount = models.length;
    // Total models from props already excludes archived models in the data source
    const activeCount = totalModels;

    // Drag-and-drop setup
    const updateVendorOrdersMutation = useUpdateVendorOrders();
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8, // Require 8px movement before drag starts
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    // Group and count data
    const structure = useMemo(() => {
        const struct: Record<string, { count: number; families: Record<string, { count: number; minOrder: number }> }> = {};

        models.forEach(model => {
            const vendorId = String(model.vendor_id);
            const family = model.modelFamily ?? 'Unknown';
            if (!struct[vendorId]) {
                struct[vendorId] = { count: 0, families: {} };
            }
            if (!struct[vendorId].families[family]) {
                struct[vendorId].families[family] = {
                    count: 0,
                    minOrder: model.display_order ?? 0
                };
            }
            struct[vendorId].count++;
            struct[vendorId].families[family].count++;
            struct[vendorId].families[family].minOrder = Math.min(
                struct[vendorId].families[family].minOrder,
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

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (!over || active.id === over.id) return;

        const oldIndex = sortedVendors.indexOf(String(active.id));
        const newIndex = sortedVendors.indexOf(String(over.id));

        if (oldIndex === -1 || newIndex === -1) return;

        // Reorder the vendors array
        const reorderedVendors = arrayMove(sortedVendors, oldIndex, newIndex);

        // Calculate new display_order values (increments of 10)
        const orders = reorderedVendors.map((vendorId, index) => ({
            id: parseInt(vendorId),
            display_order: index * 10
        }));

        // Update via mutation
        updateVendorOrdersMutation.mutate(orders);
    };


    const handleCopyModels = async () => {
        if (!models.length || selectedFields.length === 0) {
            if (selectedFields.length === 0) alert('Please select at least one field to copy');
            return;
        }

        const formatModelData = (model: LLMModel) => {
            const vendor = vendorsById[String(model.vendor_id)];
            const data: any = {};

            selectedFields.forEach(field => {
                switch (field) {
                    case 'id': data.id = model.id; break;
                    case 'name': data.name = model.modelName; break;
                    case 'vendor': data.vendor = vendor?.display_name || 'Unknown'; break;
                    case 'family': data.family = model.modelFamily; break;
                    case 'description': data.description = model.description; break;
                    case 'context': data.context = model.contextK; break;
                    case 'pricing': data.pricing = model.pricing; break;
                }
            });
            return data;
        };

        const exportData = models.map(formatModelData);

        let output = '';
        if (copyFormat === 'json') {
            output = JSON.stringify(exportData, null, 2);
        } else {
            // Markdown Format
            output = exportData.map(d => {
                let md = `### ${d.name || 'Model'}\n`;
                if (d.id) md += `- **ID:** ${d.id}\n`;
                if (d.vendor) md += `- **Vendor:** ${d.vendor}\n`;
                if (d.family) md += `- **Family:** ${d.family}\n`;
                if (d.context) md += `- **Context:** ${d.context}K\n`;
                if (d.pricing) md += `- **Pricing:** Input $${d.pricing.prompt}/M, Output $${d.pricing.completion}/M\n`;
                if (d.description) md += `\n> ${d.description}\n`;
                return md;
            }).join('\n---\n\n');
        }

        try {
            await navigator.clipboard.writeText(output);
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
                setShowCopyTooltip(false);
            }, 2000);
        } catch (err) {
            console.error('Failed to copy keys', err);
        }
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
                <div className={`font-label ${FONT_SIZE.XS} text-primary/80 tracking-widest`}>SYSTEM_OVERVIEW</div>
                <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-4 space-y-4">
                    <div className="grid grid-cols-2 gap-3 text-center">
                        <div className="space-y-1 p-2 rounded-lg bg-white/5 border border-white/5">
                            <div className={`font-display ${FONT_SIZE.XXL} text-white`}>{activeCount}</div>
                            <div className={`font-label ${FONT_SIZE.XXS} text-white/40 tracking-widest`}>TOTAL</div>
                        </div>
                        <div className="space-y-1 p-2 rounded-lg bg-white/5 border border-white/5">
                            <div className={`font-display ${FONT_SIZE.XXL} text-accent-tertiary`}>{filteredCount}</div>
                            <div className={`font-label ${FONT_SIZE.XXS} text-white/40 tracking-widest`}>SHOWN</div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={onOpenArchive}
                            className={`flex-1 py-2 rounded-lg border border-white/10 bg-white/5 ${FONT_SIZE.XXS} font-bold text-white/60 hover:text-white hover:border-white/30 transition-all font-label tracking-widest`}
                        >
                            {archivedCount} ARCHIVED
                        </button>
                        <div className="flex-1 relative">
                            <button
                                ref={(el) => {
                                    // Store ref for positioning
                                    if (el && !showCopyTooltip) {
                                        // Only update if closed or we need to recalibrate
                                    }
                                }}
                                onClick={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    // Set position and toggle
                                    if (showCopyTooltip) {
                                        setShowCopyTooltip(false);
                                    } else {
                                        setTooltipPos({ top: rect.bottom + 8, left: rect.left, width: 256 }); // w-64 is 256px
                                        setShowCopyTooltip(true);
                                    }
                                }}
                                className={`w-full py-2 rounded-lg border border-primary/20 bg-primary/5 ${FONT_SIZE.XXS} font-bold text-primary hover:bg-primary/10 transition-all font-label tracking-widest disabled:opacity-50 flex items-center justify-center gap-2`}
                                disabled={!filteredCount}
                            >
                                <Copy size={12} />
                                COPY ({filteredCount})
                            </button>

                            {showCopyTooltip && createPortal(
                                <>
                                    <div
                                        className="fixed inset-0 z-[100]"
                                        onClick={() => setShowCopyTooltip(false)}
                                    />
                                    <div
                                        className="fixed z-[101] cyber-panel cyber-chamfer-sm p-3 space-y-3 bg-black/95 border border-primary/30 shadow-[0_0_30px_rgba(0,0,0,0.8)]"
                                        style={{
                                            top: tooltipPos?.top ?? 0,
                                            left: tooltipPos?.left ?? 0,
                                            width: tooltipPos?.width ?? 256
                                        }}
                                    >
                                        <div className={`${FONT_SIZE.XS} text-white/40 font-bold tracking-wider`}>EXPORT FORMAT</div>
                                        <div className="flex gap-2">
                                            {(['json', 'markdown'] as const).map(fmt => (
                                                <button
                                                    key={fmt}
                                                    onClick={() => setCopyFormat(fmt)}
                                                    className={`flex-1 px-2 py-1 ${FONT_SIZE.XXS} rounded transition-colors font-bold tracking-wider uppercase ${copyFormat === fmt
                                                        ? 'bg-primary/20 text-primary border border-primary/50'
                                                        : 'bg-white/5 text-white/40 border border-white/10 hover:bg-white/10'
                                                        }`}
                                                >
                                                    {fmt}
                                                </button>
                                            ))}
                                        </div>

                                        <div className={`${FONT_SIZE.XS} text-white/40 font-bold tracking-wider`}>FIELDS</div>
                                        <div className="space-y-1.5 max-h-40 overflow-y-auto cyber-scroll pr-1">
                                            {[
                                                { id: 'id', label: 'ID' },
                                                { id: 'name', label: 'Name' },
                                                { id: 'vendor', label: 'Vendor' },
                                                { id: 'family', label: 'Family' },
                                                { id: 'description', label: 'Description' },
                                                { id: 'context', label: 'Context' },
                                                { id: 'pricing', label: 'Pricing' }
                                            ].map(field => (
                                                <label key={field.id} className="flex items-center gap-2 cursor-pointer group hover:bg-white/5 p-1 rounded transition-colors">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedFields.includes(field.id)}
                                                        onChange={(e) => {
                                                            if (e.target.checked) {
                                                                setSelectedFields([...selectedFields, field.id]);
                                                            } else {
                                                                setSelectedFields(selectedFields.filter(f => f !== field.id));
                                                            }
                                                        }}
                                                        className={`w-3 h-3 rounded border-white/20 bg-black/40 checked:bg-primary checked:border-primary transition-colors appearance-none border checked:after:content-['✓'] checked:after:text-black checked:after:${FONT_SIZE.XXS} checked:after:flex checked:after:justify-center checked:after:items-center`}
                                                    />
                                                    <span className={`${FONT_SIZE.XS} text-white/60 group-hover:text-white/90 transition-colors`}>{field.label}</span>
                                                </label>
                                            ))}
                                        </div>

                                        <button
                                            onClick={handleCopyModels}
                                            className={`w-full px-3 py-2 bg-primary/20 hover:bg-primary/30 text-primary ${FONT_SIZE.XXS} font-bold rounded border border-primary/50 transition-colors flex items-center justify-center gap-2 tracking-widest mt-2`}
                                        >
                                            {copied ? <Check size={12} /> : <Copy size={12} />}
                                            {copied ? 'COPIED!' : 'COPY TO CLIPBOARD'}
                                        </button>
                                    </div>
                                </>,
                                document.body
                            )}
                        </div>
                    </div>
                    <button
                        onClick={onExplore}
                        className="w-full relative group overflow-hidden rounded-lg border border-accent-tertiary/30 bg-accent-tertiary/5 text-accent-tertiary hover:bg-accent-tertiary/10 transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-tertiary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        <div className="flex items-center justify-between px-4 py-3">
                            <span className={`font-label ${FONT_SIZE.XXS} font-bold tracking-[0.2em]`}>EXPLORE</span>
                            <div className="p-1.5 rounded-md bg-accent-tertiary/10 border border-accent-tertiary/20 group-hover:bg-accent-tertiary/20 group-hover:border-accent-tertiary/30 transition-all">
                                <Compass size={16} className="group-hover:rotate-90 transition-transform duration-500" />
                            </div>
                        </div>
                    </button>
                </div>
            </div>

            <div className="space-y-3">
                <div className={`font-label ${FONT_SIZE.XS} text-primary/80 tracking-widest`}>SEARCH_DB</div>
                <div className="relative group">
                    <div className="absolute inset-y-0 left-3 flex items-center text-white/30 group-hover:text-primary transition-colors">
                        <Search size={14} />
                    </div>
                    <input
                        type="text"
                        placeholder="SEARCH MODELS..."
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className={`w-full bg-black/40 border border-white/10 rounded-xl py-2.5 pl-9 pr-4 ${FONT_SIZE.SM} text-white placeholder:text-white/20 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-mono`}
                    />
                </div>
            </div>

            <div className="space-y-3">
                <h3 className={`font-label ${FONT_SIZE.XS} text-primary/80 tracking-widest`}>MODEL_DIRECTORY</h3>

                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                >
                    <SortableContext
                        items={sortedVendors}
                        strategy={verticalListSortingStrategy}
                    >
                        <div className="space-y-2">
                            {sortedVendors.map(vendorId => (
                                <SortableVendorItem
                                    key={vendorId}
                                    vendorId={vendorId}
                                    vendorName={vendorsById[vendorId]?.display_name ?? 'Unknown Vendor'}
                                    vendorAnchorId={`vendor-${vendorId}`}
                                    isActiveVendor={activeId === `vendor-${vendorId}`}
                                    isChildActive={activeId.startsWith(`family-${vendorId}-`)}
                                    isExpanded={expandedVendors.has(vendorId)}
                                    vendorFamilies={structure[vendorId].families}
                                    vendorsById={vendorsById}
                                    activeId={activeId}
                                    count={structure[vendorId].count}
                                    toggleVendor={toggleVendor}
                                    scrollTo={scrollTo}
                                />
                            ))}
                        </div>
                    </SortableContext>
                </DndContext>
            </div>
        </div>
    );
}

interface SortableVendorItemProps {
    vendorId: string;
    vendorName: string;
    vendorAnchorId: string;
    isActiveVendor: boolean;
    isChildActive: boolean;
    isExpanded: boolean;
    vendorFamilies: Record<string, { count: number; minOrder: number }>;
    vendorsById: Record<string, Vendor>;
    activeId: string;
    count: number;
    toggleVendor: (vendorId: string) => void;
    scrollTo: (id: string) => void;
}

function SortableVendorItem({
    vendorId,
    vendorName,
    vendorAnchorId,
    isActiveVendor,
    isChildActive,
    isExpanded,
    vendorFamilies,
    vendorsById,
    activeId,
    count,
    toggleVendor,
    scrollTo
}: SortableVendorItemProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({ id: vendorId });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    };

    const sortedFamilies = Object.keys(vendorFamilies).sort((a, b) => {
        const famA = vendorFamilies[a];
        const famB = vendorFamilies[b];
        if (famA.minOrder !== famB.minOrder) return famA.minOrder - famB.minOrder;
        return a.localeCompare(b);
    });

    return (
        <div ref={setNodeRef} style={style} className="group/vendor">
            <button
                onClick={() => {
                    toggleVendor(vendorId);
                    scrollTo(vendorAnchorId);
                }}
                id={`sidebar-${vendorAnchorId}`}
                className={`
                    w-full flex items-center justify-between px-3 py-2.5 rounded-lg border transition-all
                    ${isDragging ? 'shadow-[0_0_30px_rgba(0,255,136,0.3)] border-primary/50' : ''}
                    ${isActiveVendor
                        ? 'bg-primary/10 border-primary/50 text-white shadow-[0_0_15px_rgba(0,255,136,0.1)]'
                        : isChildActive
                            ? 'bg-white/5 border-primary/30 text-white'
                            : 'bg-black/20 border-white/5 text-white/60 hover:bg-white/5 hover:text-white hover:border-white/20'
                    }
                `}
            >
                <div className="flex items-center gap-3 truncate flex-1">
                    {/* Drag Handle */}
                    <div
                        {...attributes}
                        {...listeners}
                        className="cursor-grab active:cursor-grabbing text-white/20 hover:text-primary/50 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <GripVertical size={14} />
                    </div>

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
                    <span className={`${FONT_SIZE.SM} font-medium tracking-wide truncate ${isActiveVendor ? 'text-primary' : ''}`}>{vendorName}</span>
                </div>
                <span className={`${FONT_SIZE.XS} font-mono px-1.5 py-0.5 rounded ${isActiveVendor ? 'bg-primary/20 text-primary' : 'bg-white/5 text-white/30'}`}>
                    {count}
                </span>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 space-y-1 my-2 ml-3 border-l border-white/10">
                    {(vendorsById[vendorId]?.description || vendorsById[vendorId]?.link) && (
                        <div className="mb-3 mr-2 p-3 rounded-lg bg-white/5 border border-white/10 space-y-2">
                            {vendorsById[vendorId]?.description && (
                                <p className={`${FONT_SIZE.XS} text-white/70 leading-relaxed font-mono`}>
                                    {vendorsById[vendorId].description}
                                </p>
                            )}
                            {vendorsById[vendorId]?.link && (
                                <a
                                    href={vendorsById[vendorId].link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-1.5 ${FONT_SIZE.XXS} text-primary hover:text-primary/80 transition-colors uppercase font-bold tracking-wider`}
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
                            w-full flex items-center justify-between px-3 py-1.5 ${FONT_SIZE.XS} rounded-md transition-all text-left border
                            ${isFamilyActive
                                ? 'bg-primary/10 border-primary/30 text-primary'
                                : 'bg-transparent border-transparent text-white/50 hover:text-white hover:bg-white/5'
                            }
                        `}
                    >
                        <span className="truncate tracking-wide">{family}</span>
                        <span className={`${FONT_SIZE.XXS} ${isFamilyActive ? 'text-primary/70' : 'opacity-30'}`}>{families[family].count}</span>
                    </button>
                );
            })}
        </div>
    );
}
