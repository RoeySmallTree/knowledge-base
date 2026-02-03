import { useState, useMemo } from 'react';
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
    horizontalListSortingStrategy,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { ChevronDown, ChevronRight, GripVertical } from 'lucide-react';
import { LLMModel, Vendor, Team, Member, TeamMember } from '../types';
import { getVendorIcon } from '../utils/getVendorIcon';
import { ModelCard } from './ModelCard';
import { FONT_SIZE } from '../constants';
import { useUpdateModelsOrder, useUpdateVendorsOrder } from '../hooks/useMutations';

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
    maxContext: number;
    teams: Team[];
    members: Member[];
    onNavigateToTeam: (teamId: string) => void;
    onFilterTeamsByModel: (modelId: number) => void;
    onTeamUpdate: (updatedTeam: Team, originalId: string) => void;
    onTeamDelete: (teamId: string) => void;
    onTeamDuplicate: (teamId: string) => Promise<Team | undefined>;
    onMemberUpdate: (updatedMember: TeamMember, originalId: string) => void;
    onMemberDelete: (memberId: string) => void;
    onMemberCreate: (member: TeamMember) => void;
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
    maxContext,
    teams,
    members,
    onNavigateToTeam,
    onFilterTeamsByModel,
    onTeamUpdate,
    onTeamDelete,
    onTeamDuplicate,
    onMemberUpdate,
    onMemberDelete,
    onMemberCreate,
}: ModelTableProps) {
    const updateVendorsOrderMutation = useUpdateVendorsOrder();

    // Calculate Usage Map: Dict<ModelID, { count: number, teams: Array<{ id, name, members: [] }> }>
    const usageMap = useMemo(() => {
        const map: Record<string, { count: number; teams: (Team & { members: Member[] })[] }> = {};

        // Initialize map for all models
        models.forEach(m => {
            if (m.id) {
                map[String(m.id)] = { count: 0, teams: [] };
            }
        });

        // Create a lookup for members by team for efficiency
        const membersByTeam: Record<string, Member[]> = {};
        members.forEach(m => {
            if (!membersByTeam[m.team_id]) membersByTeam[m.team_id] = [];
            membersByTeam[m.team_id].push(m);
        });

        // Iterate through members to identify teams using the model
        members.forEach(member => {
            if (!member.model_id) return;
            const modelId = String(member.model_id);

            // Just in case we didn't init this model
            if (!map[modelId]) {
                map[modelId] = { count: 0, teams: [] };
            }

            map[modelId].count++;

            const team = teams.find(t => t.id === member.team_id);
            if (team) {
                const existing = map[modelId].teams.find(t => t.id === team.id);
                // Only add team if not already added for this model
                if (!existing) {
                    // Include ALL members of the team, not just the one using it
                    const teamMembers = membersByTeam[team.id] || [];
                    const newEntry = { ...team, members: teamMembers };
                    map[modelId].teams.push(newEntry);
                }
            }
        });

        return map;
    }, [models, teams, members]);

    // Group models by vendor, then by family
    const groupedData = models.reduce((acc, model) => {
        const vendorId = String(model.vendor_id);
        if (!acc[vendorId]) {
            acc[vendorId] = {};
        }
        const family = model.modelFamily ?? 'Unknown';
        if (!acc[vendorId][family]) {
            acc[vendorId][family] = [];
        }
        acc[vendorId][family].push(model);
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

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8,
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleVendorDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (!over || active.id === over.id) return;

        const oldIndex = sortedVendors.findIndex(id => id === active.id);
        const newIndex = sortedVendors.findIndex(id => id === over.id);

        if (oldIndex === -1 || newIndex === -1) return;

        const reorderedVendors = arrayMove(sortedVendors, oldIndex, newIndex);

        const orders = reorderedVendors.map((vendorId, index) => ({
            id: Number(vendorId),
            display_order: index * 10
        }));

        updateVendorsOrderMutation.mutate(orders);
    };

    return (
        <div className="w-full space-y-10">
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleVendorDragEnd}
            >
                <SortableContext
                    items={sortedVendors}
                    strategy={verticalListSortingStrategy}
                >
                    {sortedVendors.map((vendorId) => (
                        <SortableVendorGroup
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
                            maxContext={maxContext}
                            usageMap={usageMap}
                            onNavigateToTeam={onNavigateToTeam}
                            onFilterTeamsByModel={onFilterTeamsByModel}
                            onTeamUpdate={onTeamUpdate}
                            onTeamDelete={onTeamDelete}
                            onTeamDuplicate={onTeamDuplicate}
                            onMemberUpdate={onMemberUpdate}
                            onMemberDelete={onMemberDelete}
                            onMemberCreate={onMemberCreate}
                        />
                    ))}
                </SortableContext>
            </DndContext>
        </div>
    );
}

function SortableVendorGroup({
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
    maxContext,
    usageMap,
    onNavigateToTeam,
    onFilterTeamsByModel,
    onTeamUpdate,
    onTeamDelete,
    onTeamDuplicate,
    onMemberUpdate,
    onMemberDelete,
    onMemberCreate,
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
    maxContext: number;
    usageMap: Record<string, { count: number; teams: (Team & { members: Member[] })[] }>;
    onNavigateToTeam: (teamId: string) => void;
    onFilterTeamsByModel: (modelId: number) => void;
    onTeamUpdate: (updatedTeam: Team, originalId: string) => void;
    onTeamDelete: (teamId: string) => void;
    onTeamDuplicate: (teamId: string) => Promise<Team | undefined>;
    onMemberUpdate: (updatedMember: TeamMember, originalId: string) => void;
    onMemberDelete: (memberId: string) => void;
    onMemberCreate: (member: TeamMember) => void;
}) {
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
        opacity: isDragging ? 0.7 : 1,
    };

    return (
        <div ref={setNodeRef} style={style}>
            <VendorGroup
                vendorId={vendorId}
                vendorName={vendorName}
                families={families}
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
                maxContext={maxContext}
                usageMap={usageMap}
                dragHandleProps={{ attributes, listeners }}
                onNavigateToTeam={onNavigateToTeam}
                onFilterTeamsByModel={onFilterTeamsByModel}
                onTeamUpdate={onTeamUpdate}
                onTeamDelete={onTeamDelete}
                onTeamDuplicate={onTeamDuplicate}
                onMemberUpdate={onMemberUpdate}
                onMemberDelete={onMemberDelete}
                onMemberCreate={onMemberCreate}
            />
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
    maxContext,
    usageMap,
    dragHandleProps,
    onNavigateToTeam,
    onFilterTeamsByModel,
    onTeamUpdate,
    onTeamDelete,
    onTeamDuplicate,
    onMemberUpdate,
    onMemberDelete,
    onMemberCreate,
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
    maxContext: number;
    usageMap: Record<string, { count: number; teams: (Team & { members: Member[] })[] }>;
    onNavigateToTeam: (teamId: string) => void;
    onFilterTeamsByModel: (modelId: number) => void;
    onTeamUpdate: (updatedTeam: Team, originalId: string) => void;
    onTeamDelete: (teamId: string) => void;
    onTeamDuplicate: (teamId: string) => Promise<Team | undefined>;
    onMemberUpdate: (updatedMember: TeamMember, originalId: string) => void;
    onMemberDelete: (memberId: string) => void;
    onMemberCreate: (member: TeamMember) => void;
    dragHandleProps?: {
        attributes: any;
        listeners: any;
    };
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
                {/* Drag Handle */}
                {dragHandleProps && (
                    <div
                        {...dragHandleProps.attributes}
                        {...dragHandleProps.listeners}
                        className="cursor-grab active:cursor-grabbing text-white/20 hover:text-primary/70 transition-colors p-1.5 rounded bg-black/60 backdrop-blur-sm border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <GripVertical size={18} />
                    </div>
                )}
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
                <h3 className={`font-display ${FONT_SIZE.XXL} text-foreground tracking-widest`}>{vendorName}</h3>
                <span className={`font-label ${FONT_SIZE.SM} text-muted-foreground`}>{totalModels} UNITS</span>
                <div className="h-px flex-1 bg-border/60" />
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onAdd(vendorId);
                    }}
                    className="p-1 px-2 rounded hover:bg-white/10 text-primary transition-colors flex items-center justify-center border border-transparent hover:border-primary/30"
                >
                    <span className={`${FONT_SIZE.LG} leading-none`}>+</span>
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
                            maxContext={maxContext}
                            usageMap={usageMap}
                            onNavigateToTeam={onNavigateToTeam}
                            onFilterTeamsByModel={onFilterTeamsByModel}
                            onTeamUpdate={onTeamUpdate}
                            onTeamDelete={onTeamDelete}
                            onTeamDuplicate={onTeamDuplicate}
                            onMemberUpdate={onMemberUpdate}
                            onMemberDelete={onMemberDelete}
                            onMemberCreate={onMemberCreate}
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
    maxContext,
    usageMap,
    onNavigateToTeam,
    onFilterTeamsByModel,
    onTeamUpdate,
    onTeamDelete,
    onTeamDuplicate,
    onMemberUpdate,
    onMemberDelete,
    onMemberCreate,
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
    maxContext: number;
    usageMap: Record<string, { count: number; teams: (Team & { members: Member[] })[] }>;
    onNavigateToTeam: (teamId: string) => void;
    onFilterTeamsByModel: (modelId: number) => void;
    onTeamUpdate: (updatedTeam: Team, originalId: string) => void;
    onTeamDelete: (teamId: string) => void;
    onTeamDuplicate: (teamId: string) => Promise<Team | undefined>;
    onMemberUpdate: (updatedMember: TeamMember, originalId: string) => void;
    onMemberDelete: (memberId: string) => void;
    onMemberCreate: (member: TeamMember) => void;
}) {
    const [isOpen, setIsOpen] = useState(true);
    const [expandedModelId, setExpandedModelId] = useState<string | null>(null);
    const updateModelsOrderMutation = useUpdateModelsOrder();

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

    const expandedModel = expandedModelId ? models.find(m => getModelKey(m) === expandedModelId) : null;

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8,
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (!over || active.id === over.id) return;

        const oldIndex = sortedModels.findIndex(m => getModelKey(m) === active.id);
        const newIndex = sortedModels.findIndex(m => getModelKey(m) === over.id);

        if (oldIndex === -1 || newIndex === -1) return;

        const reorderedModels = arrayMove(sortedModels, oldIndex, newIndex);

        const orders = reorderedModels.map((model, index) => ({
            id: model.id ? String(model.id) : undefined,
            api_id: model.api_id,
            display_order: index * 10
        }));

        updateModelsOrderMutation.mutate(orders);
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
                <h4 className={`font-display ${FONT_SIZE.LG} text-accent-tertiary`}>{family}</h4>
                <span className={`font-label ${FONT_SIZE.SM} text-muted-foreground`}>{models.length} MODELS</span>
                <div className="h-px flex-1 bg-border/60" />
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onAdd(vendorId, family);
                    }}
                    className="p-1 px-1.5 rounded hover:bg-white/10 text-accent-tertiary transition-colors flex items-center justify-center border border-transparent hover:border-accent-tertiary/30"
                >
                    <span className={`${FONT_SIZE.SM} leading-none`}>+</span>
                </button>
            </div>

            {isOpen && (
                <div className="space-y-6 animate-in fade-in slide-in-from-top-2 duration-200">
                    <DndContext
                        sensors={sensors}
                        collisionDetection={closestCenter}
                        onDragEnd={handleDragEnd}
                    >
                        <SortableContext
                            items={sortedModels.map(m => getModelKey(m))}
                            strategy={horizontalListSortingStrategy}
                        >
                            <div className="flex overflow-x-auto py-6 gap-6 scrollbar-hide snap-x snap-mandatory">
                                {sortedModels.map((model) => {
                                    const modelKey = getModelKey(model);
                                    const isActive = expandedModelId === modelKey;
                                    const usage = model.id ? usageMap[String(model.id)] : undefined;
                                    return (
                                        <SortableModelCard
                                            key={modelKey}
                                            model={model}
                                            modelKey={modelKey}
                                            vendorName={vendorName}
                                            vendorsById={vendorsById}
                                            modelsById={modelsById}
                                            allModels={allModels}
                                            onFallbackChange={onFallbackChange}
                                            onEdit={onEdit}
                                            onDuplicate={onDuplicate}
                                            onArchive={onArchive}
                                            onDelete={onDelete}
                                            maxPrice={maxPrice}
                                            maxContext={maxContext}
                                            isActive={isActive}
                                            usage={usage}
                                            onToggleExpand={() => setExpandedModelId(isActive ? null : modelKey)}
                                            onNavigateToTeam={onNavigateToTeam}
                                            onFilterTeamsByModel={onFilterTeamsByModel}
                                            onTeamUpdate={onTeamUpdate}
                                            onTeamDelete={onTeamDelete}
                                            onTeamDuplicate={onTeamDuplicate}
                                            onMemberUpdate={onMemberUpdate}
                                            onMemberDelete={onMemberDelete}
                                            onMemberCreate={onMemberCreate}
                                        />
                                    );
                                })}
                            </div>
                        </SortableContext>
                    </DndContext>

                    {/* Full Width Expanded View */}
                    {expandedModel && (
                        <div className="w-full animate-in fade-in zoom-in-95 duration-300">
                            <ModelCard
                                model={expandedModel}
                                vendorName={vendorName}
                                vendorsById={vendorsById}
                                modelsById={modelsById}
                                allModels={allModels}
                                onFallbackChange={onFallbackChange}
                                modelKey={getModelKey(expandedModel)}
                                onEdit={onEdit}
                                onDuplicate={onDuplicate}
                                onArchive={onArchive}
                                onDelete={onDelete}
                                maxPrice={maxPrice}
                                maxContext={maxContext}
                                isExpanded={true}
                                isActive={true}
                                usage={expandedModel.id ? usageMap[String(expandedModel.id)] : undefined}
                                onToggleExpand={() => setExpandedModelId(null)}
                                onNavigateToTeam={onNavigateToTeam}
                                onFilterTeamsByModel={onFilterTeamsByModel}
                                onTeamUpdate={onTeamUpdate}
                                onTeamDelete={onTeamDelete}
                                onTeamDuplicate={onTeamDuplicate}
                                onMemberUpdate={onMemberUpdate}
                                onMemberDelete={onMemberDelete}
                                onMemberCreate={onMemberCreate}
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

function SortableModelCard({
    model,
    modelKey,
    vendorName,
    vendorsById,
    modelsById,
    allModels,
    onFallbackChange,
    onEdit,
    onDuplicate,
    onArchive,
    onDelete,
    maxPrice,
    maxContext,
    isActive,
    usage,
    onToggleExpand,
    onNavigateToTeam,
    onFilterTeamsByModel,
    onTeamUpdate,
    onTeamDelete,
    onTeamDuplicate,
    onMemberUpdate,
    onMemberDelete,
    onMemberCreate,
}: {
    model: LLMModel;
    modelKey: string;
    vendorName: string;
    vendorsById: Record<string, Vendor>;
    modelsById: Record<string, LLMModel>;
    allModels: LLMModel[];
    onFallbackChange: (modelKey: string, fallbackId: string | null) => void;
    onEdit: (model: LLMModel) => void;
    onDuplicate: (model: LLMModel) => void;
    onArchive: (model: LLMModel) => void;
    onDelete: (model: LLMModel) => void;
    maxPrice: number;
    maxContext: number;
    isActive: boolean;
    usage?: { count: number; teams: (Team & { members: Member[] })[] };
    onToggleExpand: () => void;
    onNavigateToTeam: (teamId: string) => void;
    onFilterTeamsByModel: (modelId: number) => void;
    onTeamUpdate: (updatedTeam: Team, originalId: string) => void;
    onTeamDelete: (teamId: string) => void;
    onTeamDuplicate: (teamId: string) => Promise<Team | undefined>;
    onMemberUpdate: (updatedMember: TeamMember, originalId: string) => void;
    onMemberDelete: (memberId: string) => void;
    onMemberCreate: (member: TeamMember) => void;
}) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({ id: modelKey });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.7 : 1,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className="flex-none w-[320px] md:w-[360px] lg:w-[420px] snap-center transition-transform relative"
        >
            {/* Drag Handle */}
            <div
                {...attributes}
                {...listeners}
                className="absolute top-2 left-2 z-20 cursor-grab active:cursor-grabbing text-white/20 hover:text-primary/70 transition-colors p-1 rounded bg-black/60 backdrop-blur-sm"
                onClick={(e) => e.stopPropagation()}
            >
                <GripVertical size={14} />
            </div>

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
                maxContext={maxContext}
                isExpanded={false}
                isActive={isActive}
                usage={usage}
                onToggleExpand={onToggleExpand}
                onNavigateToTeam={onNavigateToTeam}
                onFilterTeamsByModel={onFilterTeamsByModel}
                onTeamUpdate={onTeamUpdate}
                onTeamDelete={onTeamDelete}
                onTeamDuplicate={onTeamDuplicate}
                onMemberUpdate={onMemberUpdate}
                onMemberDelete={onMemberDelete}
                onMemberCreate={onMemberCreate}
            />
        </div>
    );
}
