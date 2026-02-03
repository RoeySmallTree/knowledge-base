import { useMemo, useState, useEffect, useLayoutEffect, useRef, type CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { FONT_SIZE } from '../constants';
import { LLMModel, Vendor } from '../types';
import { getVendorIcon } from '../utils/getVendorIcon';

interface FallbackPickerProps {
    models: LLMModel[];
    vendorsById: Record<string, Vendor>;
    modelsById: Record<string, LLMModel>;
    value?: number | string;
    favorModel?: LLMModel;
    onChange: (fallbackId: string | null) => void;
}

export function FallbackPicker({
    models,
    vendorsById,
    modelsById,
    value,
    favorModel,
    onChange
}: FallbackPickerProps) {
    const getDisplayName = (model: LLMModel) => model.name_within_family?.trim() || model.modelName;
    const [isOpen, setIsOpen] = useState(false);
    const [expandedVendors, setExpandedVendors] = useState<Set<string>>(new Set());
    const [expandedFamilies, setExpandedFamilies] = useState<Set<string>>(new Set());
    const menuRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const [menuStyle, setMenuStyle] = useState<CSSProperties>();
    const menuWidth = 320;
    const favorVendorId = favorModel?.vendor_id ? String(favorModel.vendor_id) : undefined;

    useLayoutEffect(() => {
        if (!isOpen) return;

        const updatePosition = () => {
            if (!triggerRef.current) return;
            const rect = triggerRef.current.getBoundingClientRect();
            const left = Math.min(Math.max(8, rect.right - menuWidth), window.innerWidth - menuWidth - 8);
            const top = Math.min(rect.bottom + 8, window.innerHeight - 16);
            setMenuStyle({
                position: 'fixed',
                top: Math.max(8, top),
                left,
                width: menuWidth,
                zIndex: 60
            });
        };

        updatePosition();
        window.addEventListener('resize', updatePosition);
        window.addEventListener('scroll', updatePosition, true);

        return () => {
            window.removeEventListener('resize', updatePosition);
            window.removeEventListener('scroll', updatePosition, true);
        };
    }, [isOpen, menuWidth]);

    // Click outside listener
    useEffect(() => {
        if (!isOpen) return;
        const handleClickOutside = (event: MouseEvent) => {
            if (
                triggerRef.current &&
                !triggerRef.current.contains(event.target as Node) &&
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        window.addEventListener('mousedown', handleClickOutside);
        return () => window.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    const fallbackModel = value !== undefined ? modelsById[String(value)] : undefined;
    const fallbackLabel = fallbackModel
        ? `${vendorsById[String(fallbackModel.vendor_id)]?.display_name ?? 'Unknown Vendor'} • ${getDisplayName(fallbackModel)}`
        : value !== undefined
            ? `Unknown model (#${value})`
            : 'Select core model';

    const grouped = useMemo(() => {
        const map: Record<string, Record<string, LLMModel[]>> = {};
        models.forEach(model => {
            const vendorId = String(model.vendor_id);
            const family = model.modelFamily ?? 'Unknown';
            if (!map[vendorId]) map[vendorId] = {};
            if (!map[vendorId][family]) map[vendorId][family] = [];
            map[vendorId][family].push(model);
        });
        return map;
    }, [models]);

    const vendorIds = useMemo(() => {
        const ids = Object.keys(grouped).sort((a, b) => {
            const vendorA = vendorsById[a];
            const vendorB = vendorsById[b];
            const orderA = vendorA?.display_order ?? Number.MAX_SAFE_INTEGER;
            const orderB = vendorB?.display_order ?? Number.MAX_SAFE_INTEGER;
            if (orderA !== orderB) return orderA - orderB;
            const nameA = vendorA?.display_name ?? 'Unknown Vendor';
            const nameB = vendorB?.display_name ?? 'Unknown Vendor';
            return nameA.localeCompare(nameB);
        });
        const favorIndex = favorVendorId ? ids.indexOf(favorVendorId) : -1;
        if (favorIndex > 0) {
            ids.splice(favorIndex, 1);
            ids.unshift(favorVendorId!);
        }
        return ids;
    }, [grouped, vendorsById, favorVendorId]);

    const toggleVendor = (e: React.MouseEvent, vendorId: string) => {
        e.preventDefault();
        e.stopPropagation();
        setExpandedVendors(prev => {
            const next = new Set(prev);
            if (next.has(vendorId)) next.delete(vendorId);
            else next.add(vendorId);
            return next;
        });
    };

    const toggleFamily = (e: React.MouseEvent, vendorId: string, family: string) => {
        e.preventDefault();
        e.stopPropagation();
        const key = `${vendorId}::${family}`;
        setExpandedFamilies(prev => {
            const next = new Set(prev);
            if (next.has(key)) next.delete(key);
            else next.add(key);
            return next;
        });
    };

    return (
        <div className="relative">
            <button
                type="button"
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsOpen(prev => !prev);
                }}
                ref={triggerRef}
                className={`flex w-full items-center justify-between gap-2 cyber-input cyber-chamfer-sm ${value ? 'text-primary' : 'text-foreground'}`}
            >
                <span className={`truncate ${FONT_SIZE.SM}`}>{fallbackLabel.toUpperCase()}</span>
                <ChevronDown size={14} className="text-muted-foreground" />
            </button>

            {isOpen && menuStyle
                ? createPortal(
                    <div
                        ref={menuRef}
                        style={menuStyle}
                        className="max-h-80 overflow-y-auto cyber-panel cyber-chamfer-sm p-2 shadow-xl"
                    >
                        {vendorIds.map(vendorId => {
                            const vendorName = vendorsById[vendorId]?.display_name ?? 'Unknown Vendor';
                            const families = grouped[vendorId] || {};
                            const familyNames = Object.keys(families).sort((a, b) => {
                                const minA = Math.min(...families[a].map(m => m.display_order ?? 0));
                                const minB = Math.min(...families[b].map(m => m.display_order ?? 0));
                                if (minA !== minB) return minA - minB;
                                return a.localeCompare(b);
                            });

                            const favorFamily = favorModel?.modelFamily;
                            const favorFamilyIndex = favorFamily && vendorId === favorVendorId
                                ? familyNames.indexOf(favorFamily)
                                : -1;
                            if (favorFamilyIndex > 0 && favorFamily) {
                                familyNames.splice(favorFamilyIndex, 1);
                                familyNames.unshift(favorFamily);
                            }

                            const vendorExpanded = expandedVendors.has(vendorId);

                            return (
                                <div key={vendorId} className="space-y-1">
                                    <button
                                        type="button"
                                        onClick={(e) => toggleVendor(e, vendorId)}
                                        className={`flex w-full items-center justify-between px-2 py-1 font-label ${FONT_SIZE.SM} text-foreground hover:text-primary`}
                                    >
                                        <span className="flex items-center gap-2">
                                            <ChevronRight size={14} className={`transition-transform ${vendorExpanded ? 'rotate-90' : ''}`} />
                                            <span className="h-4 w-4 overflow-hidden rounded-sm border border-border/60 bg-white/5 p-0.5">
                                                <img
                                                    src={getVendorIcon(vendorName, '')}
                                                    alt={vendorName}
                                                    className="h-full w-full object-contain opacity-90"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src = '/llm-icons/ai-placeholder.png';
                                                    }}
                                                />
                                            </span>
                                            {vendorName}
                                        </span>
                                        <span className={`${FONT_SIZE.SM} text-muted-foreground`}>{familyNames.length}</span>
                                    </button>

                                    {vendorExpanded && (
                                        <div className="ml-4 space-y-1">
                                            {familyNames.map(family => {
                                                const familyKey = `${vendorId}::${family}`;
                                                const familyExpanded = expandedFamilies.has(familyKey);
                                                const familyModels = [...families[family]].sort((a, b) => {
                                                    const orderA = a.display_order ?? 0;
                                                    const orderB = b.display_order ?? 0;
                                                    if (orderA !== orderB) return orderA - orderB;
                                                    return getDisplayName(a).localeCompare(getDisplayName(b));
                                                });
                                                return (
                                                    <div key={familyKey} className="space-y-1">
                                                        <button
                                                            type="button"
                                                            onClick={(e) => toggleFamily(e, vendorId, family)}
                                                            className={`flex w-full items-center justify-between px-2 py-1 ${FONT_SIZE.SM} text-muted-foreground hover:text-primary`}
                                                        >
                                                            <span className="flex items-center gap-2">
                                                                <ChevronRight size={12} className={`transition-transform ${familyExpanded ? 'rotate-90' : ''}`} />
                                                                {family}
                                                            </span>
                                                            <span>{familyModels.length}</span>
                                                        </button>

                                                        {familyExpanded && (
                                                            <div className="ml-5 space-y-1">
                                                                {familyModels.map(model => {
                                                                    const modelId = model.id ? String(model.id) : null;
                                                                    return (
                                                                        <button
                                                                            key={`${modelId ?? model.modelName}-${vendorId}`}
                                                                            type="button"
                                                                            onClick={(e) => {
                                                                                e.preventDefault();
                                                                                e.stopPropagation();
                                                                                if (modelId) {
                                                                                    onChange(modelId);
                                                                                    setIsOpen(false);
                                                                                }
                                                                            }}
                                                                            className={`flex w-full items-center justify-between px-2 py-1 ${FONT_SIZE.SM} text-foreground hover:text-primary`}
                                                                        >
                                                                            <span className="truncate">{getDisplayName(model)}</span>
                                                                        </button>
                                                                    );
                                                                })}
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>,
                    document.body
                )
                : null}
        </div>
    );
}
