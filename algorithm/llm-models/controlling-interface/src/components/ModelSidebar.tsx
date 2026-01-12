import { useState, useEffect, useMemo } from 'react';
import { LLMModel } from '../types';
import { ChevronRight, Search } from 'lucide-react';

interface ModelSidebarProps {
    models: LLMModel[];
    searchQuery: string;
    onSearchChange: (query: string) => void;
}

export function ModelSidebar({ models, searchQuery, onSearchChange }: ModelSidebarProps) {
    const [activeId, setActiveId] = useState<string>('');
    const [expandedVendors, setExpandedVendors] = useState<Set<string>>(new Set());

    // Group and count data
    const structure = useMemo(() => {
        const struct: Record<string, { count: number; families: Record<string, number> }> = {};

        models.forEach(model => {
            if (!struct[model.vendor]) {
                struct[model.vendor] = { count: 0, families: {} };
            }
            if (!struct[model.vendor].families[model.modelFamily]) {
                struct[model.vendor].families[model.modelFamily] = 0;
            }
            struct[model.vendor].count++;
            struct[model.vendor].families[model.modelFamily]++;
        });

        return struct;
    }, [models]);

    const sortedVendors = Object.keys(structure).sort();

    // Scroll Spy Logic
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            // Find the first intersecting entry
            const visibleEntry = entries.find(entry => entry.isIntersecting);
            if (visibleEntry) {
                const id = visibleEntry.target.id;
                setActiveId(id);
            }
        }, { rootMargin: '-10% 0px -80% 0px' }); // Trigger near top

        // Observe all vendor and family elements
        sortedVendors.forEach(vendor => {
            const vendorId = `vendor-${vendor.replace(/\s+/g, '-').toLowerCase()}`;
            const el = document.getElementById(vendorId);
            if (el) observer.observe(el);

            Object.keys(structure[vendor].families).forEach(family => {
                const familyId = `family-${vendor.replace(/\s+/g, '-').toLowerCase()}-${family.replace(/\s+/g, '-').toLowerCase()}`;
                const famEl = document.getElementById(familyId);
                if (famEl) observer.observe(famEl);
            });
        });

        return () => observer.disconnect();
    }, [models, sortedVendors, structure]);

    // Auto-expand based on activeId
    useEffect(() => {
        if (!activeId) return;

        // Find which vendor owns this activeId
        for (const vendor of sortedVendors) {
            const vendorSlug = vendor.replace(/\s+/g, '-').toLowerCase();
            const vendorId = `vendor-${vendorSlug}`;

            if (activeId === vendorId || activeId.startsWith(`family-${vendorSlug}-`)) {
                setExpandedVendors(prev => {
                    const next = new Set(prev);
                    next.add(vendor);
                    return next;
                });
                break;
            }
        }
    }, [activeId, sortedVendors]);


    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            // Offset for sticky header if any, or just spacing
            const y = el.getBoundingClientRect().top + window.scrollY - 32;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const toggleVendor = (vendor: string) => {
        setExpandedVendors(prev => {
            const next = new Set(prev);
            if (next.has(vendor)) next.delete(vendor);
            else next.add(vendor);
            return next;
        });
    };

    return (
        <div className="w-72 shrink-0 hidden lg:flex flex-col sticky top-8 h-[calc(100vh-4rem)]">

            {/* Search */}
            <div className="mb-6 relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                    <Search size={16} />
                </div>
                <input
                    type="text"
                    placeholder="Filter models..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full rounded-xl bg-secondary/30 border border-white/5 py-2.5 pl-9 pr-3 text-sm outline-none focus:ring-1 focus:ring-primary/50 focus:bg-secondary/50 transition-all placeholder:text-muted-foreground/50"
                />
            </div>

            {/* Navigation Tree */}
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-1">
                <h3 className="text-xs font-bold text-muted-foreground/50 uppercase tracking-widest mb-3 px-2">Directory</h3>

                {sortedVendors.map(vendor => {
                    const vendorSlug = vendor.replace(/\s+/g, '-').toLowerCase();
                    const vendorId = `vendor-${vendorSlug}`;
                    const isActiveVendor = activeId === vendorId;
                    const isChildActive = activeId.startsWith(`family-${vendorSlug}-`);
                    const isExpanded = expandedVendors.has(vendor);

                    return (
                        <div key={vendor} className="space-y-0.5">
                            <button
                                onClick={() => {
                                    toggleVendor(vendor);
                                    scrollTo(vendorId);
                                }}
                                className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-all group ${isActiveVendor ? 'bg-primary/20 text-primary' :
                                    isChildActive ? 'text-white' : 'text-muted-foreground hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <div className="flex items-center gap-2 truncate">
                                    <div className={`transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''} opacity-50`}>
                                        <ChevronRight size={14} />
                                    </div>
                                    <span className="truncate">{vendor}</span>
                                </div>
                                <span className={`text-[10px] py-0.5 px-1.5 rounded-md border ${isActiveVendor ? 'bg-primary/20 border-primary/20 text-primary' : 'bg-white/5 border-white/5 text-muted-foreground'
                                    }`}>
                                    {structure[vendor].count}
                                </span>
                            </button>

                            {/* Families */}
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="pl-4 space-y-0.5 border-l border-white/5 ml-3.5 my-1 py-1">
                                    {Object.keys(structure[vendor].families).sort().map(family => {
                                        const familyId = `family-${vendorSlug}-${family.replace(/\s+/g, '-').toLowerCase()}`;
                                        const isFamilyActive = activeId === familyId;

                                        return (
                                            <button
                                                key={family}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    scrollTo(familyId);
                                                }}
                                                className={`w-full flex items-center justify-between px-3 py-1.5 text-xs rounded-md transition-colors text-left ${isFamilyActive
                                                    ? 'bg-primary/10 text-primary font-semibold'
                                                    : 'text-muted-foreground hover:text-white hover:bg-white/5'
                                                    }`}
                                            >
                                                <span className="truncate">{family}</span>
                                                <span className="text-[10px] opacity-50">{structure[vendor].families[family]}</span>
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
