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
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Pencil, Trash2, Copy, AlertTriangle, Plus, GripVertical } from 'lucide-react';

import { LLMModel, Team, TeamMember, Vendor } from '../types';
import { FONT_SIZE } from '../constants';
import { getVendorIcon } from '../utils/getVendorIcon';
import { useUpdateMemberOrders } from '../hooks/useQueries';
import { FallbackPicker } from './FallbackPicker';
import { ExpandedMemberCard } from './ExpandedMemberCard';
import { IdBadge } from './IdBadge';
import {
    splitMembersByRole,
    getMissingTeamFields,
    getMissingMemberFields,
    shortenTeamRole,
    normalizeList
} from '../utils/teamUtils';

export function TeamCard({
    team,
    members,
    modelsById,
    vendorsById,
    isExpanded,
    expandedMembers,
    onToggle,
    onToggleMember,
    onEdit,
    onDelete,
    onDuplicate,
    onMemberEdit,
    onMemberAdd,
    onMemberDelete,
    onMemberUpdate,
    onFilterByModel
}: {
    team: Team;
    members: TeamMember[];
    modelsById: Record<string, LLMModel>;
    vendorsById: Record<string, Vendor>;
    isExpanded: boolean;
    expandedMembers: Set<string>;
    onToggle: () => void;
    onToggleMember: (memberId: string) => void;
    onEdit: () => void;
    onDelete: () => void;
    onDuplicate: () => Promise<Team | undefined>;
    onMemberEdit: (member: TeamMember) => void;
    onMemberAdd: () => void;
    onMemberDelete: (memberId: string) => void;
    onMemberUpdate: (updatedMember: TeamMember, originalId: string) => void;
    onFilterByModel?: (modelId: number) => void;
}) {
    const sortedMembers = [...members].sort((a, b) => {
        const orderA = a.display_order ?? Number.MAX_SAFE_INTEGER;
        const orderB = b.display_order ?? Number.MAX_SAFE_INTEGER;
        if (orderA !== orderB) return orderA - orderB;
        const nameA = a.name ?? a.team_role ?? 'Member';
        const nameB = b.name ?? b.team_role ?? 'Member';
        return nameA.localeCompare(nameB);
    });
    const missingFields = getMissingTeamFields(team);
    const membersCount = sortedMembers.length;

    const hasChair = sortedMembers.some(m => m.role?.toLowerCase() === 'chair');
    const hasEnvoy = sortedMembers.some(m => m.role?.toLowerCase() === 'envoy');
    const hasWatchdog = sortedMembers.some(m => m.role?.toLowerCase() === 'watchdog');
    const hasOperatives = sortedMembers.some(m => m.role?.toLowerCase() === 'operative');

    const missingRoles: string[] = [];
    if (!hasChair) missingRoles.push('Chair');
    if (!hasEnvoy) missingRoles.push('Envoy');
    if (!hasWatchdog) missingRoles.push('Watchdog');
    if (!hasOperatives) missingRoles.push('Operatives');

    const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement;
        if (target.closest('[data-team-action]')) return;
        onToggle();
    };
    const handleCardKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement;
        if (target.closest('[data-team-action]')) return;
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onToggle();
        }
    };

    return (
        <div
            id={`team-${team.id}`}
            className={`group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-300 cursor-pointer ${isExpanded
                ? 'bg-black/60 shadow-[3px_1px_8px_0px_#02fd874f,-1px_0px_10px_-3px_#cf3bff5c] border-primary/30'
                : 'hover:border-primary/50 hover:shadow-[0_0_30px_-5px_rgba(0,255,136,0.3)]'
                }`}
            onClick={handleCardClick}
            role="button"
            tabIndex={0}
            onKeyDown={handleCardKeyDown}
        >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-transparent to-accent-secondary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-xl pointer-events-none" />

            <div className="relative p-5 flex items-start justify-between gap-4">
                <div className="space-y-1 flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                        <span className={`font-label ${FONT_SIZE.XXS} bg-primary/10 text-primary border border-primary/20 px-1.5 py-0.5 rounded tracking-wider`}>
                            {team.category}
                        </span>
                        {isExpanded && (
                            <div data-team-action className="opacity-50 hover:opacity-100 transition-opacity">
                                <IdBadge id={team.id} />
                            </div>
                        )}
                    </div>

                    <h3 className={`font-display ${FONT_SIZE.XL} tracking-wide break-words leading-tight bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent`}>
                        {team.name}
                    </h3>

                    <p className={`${FONT_SIZE.SM} font-medium text-primary/90 leading-snug`}>{team.catch_phrase}</p>

                    {!isExpanded && (
                        <div className={`${FONT_SIZE.XS} text-white/50 leading-relaxed max-w-3xl line-clamp-2 mt-2`}>
                            {team.description || 'No description provided.'}
                        </div>
                    )}

                    {!isExpanded && (
                        <div className="pt-3 flex items-center gap-3 flex-wrap">
                            <div className="flex items-center gap-2 px-2 py-1 rounded bg-white/5 border border-white/5">
                                <span className={`font-label ${FONT_SIZE.XXS} tracking-widest text-white/40`}>MEMBERS</span>
                                <span className={`text-primary font-mono ${FONT_SIZE.XS}`}>{membersCount}</span>
                            </div>
                            {missingRoles.length > 0 && (
                                <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-amber-500/10 border border-amber-500/20">
                                    <AlertTriangle size={11} className="text-amber-500" />
                                    <span className={`font-label ${FONT_SIZE.TINY} tracking-wider text-amber-500/90`}>
                                        MISSING: {missingRoles.join(', ')}
                                    </span>
                                </div>
                            )}
                            {missingFields.length > 0 && (
                                <div className={`${FONT_SIZE.XS} text-amber-500 font-mono flex items-center gap-1`}>
                                    <AlertTriangle size={12} />
                                    {missingFields.length} MISSING
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {isExpanded && (
                    <div className="flex flex-col items-end gap-2 shrink-0 z-10" data-team-action>
                        <div className="flex items-center gap-1">
                            <button
                                onClick={(event) => {
                                    event.stopPropagation();
                                    onEdit();
                                }}
                                className="p-2 rounded-lg border border-white/10 bg-white/5 text-white/40 hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all"
                            >
                                <Pencil size={14} />
                            </button>
                            <button
                                onClick={(event) => {
                                    event.stopPropagation();
                                    if (confirm('Are you sure you want to delete this team? This will also delete all associated sessions.')) {
                                        onDelete();
                                    }
                                }}
                                className="p-2 rounded-lg border border-white/10 bg-white/5 text-white/40 hover:text-destructive hover:border-destructive/30 hover:bg-destructive/10 transition-all"
                            >
                                <Trash2 size={14} />
                            </button>
                            <button
                                onClick={async (event) => {
                                    event.stopPropagation();
                                    if (confirm('Duplicate this team?')) {
                                        await onDuplicate();
                                    }
                                }}
                                className="p-2 rounded-lg border border-white/10 bg-white/5 text-white/40 hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all"
                                title="Duplicate Team"
                            >
                                <Copy size={14} />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {!isExpanded && sortedMembers.length > 0 && (
                <div className="relative px-5 pb-4">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />
                    <CollapsedMembersRow
                        members={sortedMembers}
                        modelsById={modelsById}
                        vendorsById={vendorsById}
                        expandedMembers={expandedMembers}
                        onToggleMember={onToggleMember}
                        onFilterByModel={onFilterByModel}
                    />
                </div>
            )}

            {isExpanded && (
                <div className="relative px-5 pb-5 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    <div className="bg-white/5 border border-white/5 rounded-lg p-4">
                        <div className={`font-label ${FONT_SIZE.XXS} tracking-widest text-white/40 mb-2`}>DESCRIPTION</div>
                        <p className={`${FONT_SIZE.MD} text-white/80 leading-relaxed whitespace-pre-line`}>
                            {team.description || 'No description provided.'}
                        </p>
                    </div>

                    <div className="grid gap-4 lg:grid-cols-3">
                        <div className="bg-white/5 border border-white/5 rounded-lg p-4">
                            <div className={`font-label ${FONT_SIZE.XXS} tracking-widest text-white/40 mb-1`}>DEFAULT_ROUNDS</div>
                            <div className={`font-display ${FONT_SIZE.XL} text-white`}>{team.default_starting_rounds ?? '—'}</div>
                        </div>
                        <div className="bg-white/5 border border-white/5 rounded-lg p-4 lg:col-span-2">
                            <div className={`font-label ${FONT_SIZE.XXS} tracking-widest text-white/40 mb-2`}>BOOTSTRAP_PROMPT</div>
                            <p className={`${FONT_SIZE.XS} text-white/70 leading-relaxed whitespace-pre-line font-mono`}>
                                {team.bootstrap_prompt || 'NO BOOTSTRAP PROMPT PROVIDED.'}
                            </p>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/5 rounded-lg p-4">
                        <div className={`font-label ${FONT_SIZE.XXS} tracking-widest text-white/40 mb-3`}>QUICK_STARTS</div>
                        <div className="flex flex-wrap gap-2">
                            {team.quick_starts?.length ? (
                                team.quick_starts.map((item, index) => (
                                    <span key={`${item}-${index}`} className={`px-2 py-1 ${FONT_SIZE.XS} border border-white/10 bg-black/20 rounded text-white/80 font-mono`}>
                                        {item}
                                    </span>
                                ))
                            ) : (
                                <span className={`${FONT_SIZE.XS} text-white/30 font-mono`}>NO QUICK STARTS.</span>
                            )}
                        </div>
                    </div>

                    <div className="space-y-4 border-t border-white/10 pt-4">
                        <div className="flex items-center justify-between">
                            <div className={`font-label ${FONT_SIZE.XS} text-white/60 tracking-widest`}>TEAM_MEMBERS</div>
                            <div className="flex items-center gap-3">
                                <span className={`${FONT_SIZE.XXS} font-mono text-white/40`}>{sortedMembers.length} ACTIVE</span>
                                <button
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        onMemberAdd();
                                    }}
                                    className={`border border-primary/30 bg-primary/10 rounded px-2 py-1 ${FONT_SIZE.XXS} font-bold tracking-wider text-primary hover:bg-primary/20 flex items-center gap-1 transition-all`}
                                    data-team-action
                                >
                                    <Plus size={10} />
                                    ADD_MEMBER
                                </button>
                            </div>
                        </div>
                        <MembersRow
                            members={sortedMembers}
                            modelsById={modelsById}
                            vendorsById={vendorsById}
                            expandedMembers={expandedMembers}
                            onToggleMember={onToggleMember}
                            onMemberEdit={onMemberEdit}
                            onMemberDelete={onMemberDelete}
                            onMemberUpdate={onMemberUpdate}
                            onFilterByModel={onFilterByModel}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

function MembersRow({
    members,
    modelsById,
    vendorsById,
    expandedMembers,
    onToggleMember,
    onMemberEdit,
    onMemberDelete,
    onMemberUpdate,
    onFilterByModel
}: {
    members: TeamMember[];
    modelsById: Record<string, LLMModel>;
    vendorsById: Record<string, Vendor>;
    expandedMembers: Set<string>;
    onToggleMember: (memberId: string) => void;
    onMemberEdit: (member: TeamMember) => void;
    onMemberDelete: (memberId: string) => void;
    onMemberUpdate: (updatedMember: TeamMember, originalId: string) => void;
    onFilterByModel?: (modelId: number) => void;
}) {
    const updateMemberOrdersMutation = useUpdateMemberOrders();

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: { distance: 8 },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const { leaders, operatives } = splitMembersByRole(members);

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (!over || active.id === over.id) return;

        const oldIndex = operatives.findIndex(m => m.id === active.id);
        const newIndex = operatives.findIndex(m => m.id === over.id);

        // Only allow reorder within operatives to preserve leader rank grouping.
        if (oldIndex === -1 || newIndex === -1) return;

        const reorderedOperatives = arrayMove(operatives, oldIndex, newIndex);
        const orderedMembers = [...leaders, ...reorderedOperatives];
        const orders = orderedMembers.map((member, index) => ({
            id: member.id,
            display_order: index * 10
        }));

        updateMemberOrdersMutation.mutate(orders);
    };

    if (members.length === 0) {
        return (
            <div className={`cyber-panel cyber-chamfer-sm p-4 ${FONT_SIZE.SM} text-muted-foreground`} data-team-action>
                NO TEAM MEMBERS YET.
            </div>
        );
    }

    return (
        <div data-team-action>
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext
                    items={operatives.map(m => m.id)}
                    strategy={horizontalListSortingStrategy}
                >
                    <div className="flex overflow-x-auto gap-6 pb-2 pt-1 scrollbar-hide">
                        {leaders.map(member => {
                            const isExpanded = expandedMembers.has(member.id);
                            return (
                                <div key={member.id} className="transition-all duration-300">
                                    <MemberCard
                                        member={member}
                                        modelsById={modelsById}
                                        vendorsById={vendorsById}
                                        isExpanded={false}
                                        isActive={isExpanded}
                                        onToggleExpand={() => onToggleMember(member.id)}
                                        onEdit={() => onMemberEdit(member)}
                                        onDelete={() => onMemberDelete(member.id)}
                                        onModelChange={(modelId) => {
                                            onMemberUpdate({ ...member, model_id: modelId ? Number(modelId) : 0 }, member.id);
                                        }}
                                        onFilterByModel={onFilterByModel}
                                    />
                                </div>
                            );
                        })}
                        {leaders.length > 0 && operatives.length > 0 && (
                            <OperativesDivider />
                        )}
                        {operatives.map(member => {
                            const isExpanded = expandedMembers.has(member.id);
                            return (
                                <div key={member.id} className="transition-all duration-300">
                                    <SortableMemberCard
                                        member={member}
                                        modelsById={modelsById}
                                        vendorsById={vendorsById}
                                        isExpanded={false}
                                        isActive={isExpanded}
                                        onToggleExpand={() => onToggleMember(member.id)}
                                        onEdit={() => onMemberEdit(member)}
                                        onDelete={() => onMemberDelete(member.id)}
                                        onModelChange={(modelId) => {
                                            onMemberUpdate({ ...member, model_id: modelId ? Number(modelId) : 0 }, member.id);
                                        }}
                                        onFilterByModel={onFilterByModel}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </SortableContext>
            </DndContext>

            <div className="space-y-6">
                {members.filter(m => expandedMembers.has(m.id)).map(member => (
                    <div key={member.id} className="mt-6 w-full animate-in fade-in zoom-in-95 duration-300">
                        <ExpandedMemberCard
                            member={member}
                            modelsById={modelsById}
                            vendorsById={vendorsById}
                            onFilterByModel={onFilterByModel}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

function CollapsedMembersRow({
    members,
    modelsById,
    vendorsById,
    expandedMembers,
    onToggleMember,
    onFilterByModel
}: {
    members: TeamMember[];
    modelsById: Record<string, LLMModel>;
    vendorsById: Record<string, Vendor>;
    expandedMembers: Set<string>;
    onToggleMember: (memberId: string) => void;
    onFilterByModel?: (modelId: number) => void;
}) {
    if (members.length === 0) {
        return (
            <div className={`cyber-panel cyber-chamfer-sm p-4 ${FONT_SIZE.SM} text-muted-foreground`} data-team-action>
                NO TEAM MEMBERS YET.
            </div>
        );
    }

    const { leaders, operatives } = splitMembersByRole(members);

    return (
        <div className="collapsed-operatives-strip cyber-chamfer-sm p-3" data-team-action>
            <div className="flex overflow-x-auto gap-3 scrollbar-hide">
                {leaders.map(member => {
                    const isExpanded = expandedMembers.has(member.id);
                    return (
                        <div key={member.id} className="transition-all duration-300">
                            <StripMemberCard
                                member={member}
                                modelsById={modelsById}
                                vendorsById={vendorsById}
                                isExpanded={false}
                                isActive={isExpanded}
                                onToggleExpand={() => onToggleMember(member.id)}
                                onFilterByModel={onFilterByModel}
                            />
                        </div>
                    );
                })}
                {leaders.length > 0 && operatives.length > 0 && (
                    <OperativesDivider />
                )}
                {operatives.map(member => {
                    const isExpanded = expandedMembers.has(member.id);
                    return (
                        <div key={member.id} className="transition-all duration-300">
                            <StripMemberCard
                                member={member}
                                modelsById={modelsById}
                                vendorsById={vendorsById}
                                isExpanded={false}
                                isActive={isExpanded}
                                onToggleExpand={() => onToggleMember(member.id)}
                                onFilterByModel={onFilterByModel}
                            />
                        </div>
                    );
                })}
            </div>

            <div className="space-y-6">
                {members.filter(m => expandedMembers.has(m.id)).map(member => (
                    <div key={member.id} className="mt-6 w-full animate-in fade-in zoom-in-95 duration-300">
                        <ExpandedMemberCard
                            member={member}
                            modelsById={modelsById}
                            vendorsById={vendorsById}
                            onFilterByModel={onFilterByModel}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

function StripMemberCard({
    member,
    modelsById,
    vendorsById,
    isExpanded,
    onToggleExpand,
    isActive = false,
    onFilterByModel
}: {
    member: TeamMember;
    modelsById: Record<string, LLMModel>;
    vendorsById: Record<string, Vendor>;
    isExpanded: boolean;
    onToggleExpand: () => void;
    isActive?: boolean;
    onFilterByModel?: (modelId: number) => void;
}) {
    const shortRole = shortenTeamRole(member.team_role);
    const displayName = member.name || shortRole || 'Team Member';
    const isLeader = member.role !== 'Operative';
    const model = member.model_id ? modelsById[String(member.model_id)] : undefined;
    const vendor = model ? vendorsById[String(model.vendor_id)] : undefined;
    const vendorName = vendor?.display_name || 'Unknown';
    const modelName = model ? (model.name_within_family?.trim() || model.modelName) : undefined;

    if (isExpanded) {
        return (
            <div onClick={onToggleExpand} className="w-full cursor-pointer transition-all duration-300">
                <ExpandedMemberCard member={member} modelsById={modelsById} vendorsById={vendorsById} onFilterByModel={onFilterByModel} />
            </div>
        );
    }

    return (
        <div
            onClick={onToggleExpand}
            className={`cyber-strip-card cyber-chamfer-sm min-w-[220px] max-w-[260px] px-3.5 py-3 flex flex-col justify-between min-h-[84px] h-auto transition-all hover:scale-[1.02] cursor-pointer
                ${isActive ? 'ring-1 ring-primary shadow-[0_0_20px_rgba(0,255,136,0.15)] bg-black/60' : ''}`}
            style={{ '--border-color': member.color || 'var(--primary)' } as React.CSSProperties}
        >
            <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className={`font-label ${FONT_SIZE.XS} font-bold tracking-widest ${isLeader ? 'text-accent-secondary' : 'text-white/40'}`}>
                    {member.role}
                </span>
                {model && (
                    <div className="flex items-center gap-1.5 bg-white/5 rounded-full px-1.5 py-0.5 border border-white/5 shrink-0 max-w-[160px]">
                        <div className="w-3 h-3 rounded-sm overflow-hidden opacity-80 shrink-0">
                            <img
                                src={getVendorIcon(vendorName, '')}
                                alt={vendorName}
                                className="w-full h-full object-contain"
                                onError={(e) => { (e.target as HTMLImageElement).src = '/llm-icons/ai-placeholder.png'; }}
                            />
                        </div>
                        <span className={`${FONT_SIZE.TINY} text-white/50 font-mono truncate leading-none`} title={modelName}>
                            {modelName}
                        </span>
                    </div>
                )}
            </div>
            <div className={`font-display ${FONT_SIZE.SM} text-white/90 leading-tight mb-1.5`} title={displayName}>
                {displayName}
            </div>
            <div className={`${FONT_SIZE.XXS} text-primary/70 font-mono leading-tight`} title={member.team_role ?? ''}>
                {member.team_role || 'No Role Assigned'}
            </div>
        </div>
    );
}

function OperativesDivider() {
    return (
        <div className="flex items-center gap-2 px-4 text-primary/80 flex-shrink-0" aria-hidden="true">
            <div className="h-12 w-px bg-primary/30" />
            <span className={`font-label ${FONT_SIZE.XS} font-bold tracking-widest text-primary/60`}>OPERATIVES</span>
            <div className="h-12 w-px bg-primary/30" />
        </div>
    );
}

interface SortableMemberCardProps {
    member: TeamMember;
    modelsById: Record<string, LLMModel>;
    vendorsById: Record<string, Vendor>;
    isExpanded: boolean;
    onToggleExpand: () => void;
    onEdit: () => void;
    onDelete: () => void;
    onModelChange: (modelId: string | null) => void;
    isActive?: boolean;
    onFilterByModel?: (modelId: number) => void;
}

function SortableMemberCard({
    member,
    modelsById,
    vendorsById,
    isExpanded,
    onToggleExpand,
    onEdit,
    onDelete,
    onModelChange,
    isActive,
    onFilterByModel
}: SortableMemberCardProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({ id: member.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.7 : 1,
    };

    return (
        <div ref={setNodeRef} style={style} className="relative">
            <div
                {...attributes}
                {...listeners}
                className="absolute top-2 left-2 z-10 cursor-grab active:cursor-grabbing text-white/20 hover:text-primary/70 transition-colors p-1 rounded bg-black/60 backdrop-blur-sm"
                onClick={(e) => e.stopPropagation()}
            >
                <GripVertical size={14} />
            </div>

            <MemberCard
                member={member}
                modelsById={modelsById}
                vendorsById={vendorsById}
                isExpanded={isExpanded}
                onToggleExpand={onToggleExpand}
                onEdit={onEdit}
                onDelete={onDelete}
                onModelChange={onModelChange}
                isActive={isActive}
                onFilterByModel={onFilterByModel}
            />
        </div>
    );
}

function MemberCard({
    member,
    modelsById,
    vendorsById,
    isExpanded,
    onToggleExpand,
    onEdit,
    onDelete,
    onModelChange,
    isActive = false,
    onFilterByModel
}: {
    member: TeamMember;
    modelsById: Record<string, LLMModel>;
    vendorsById: Record<string, Vendor>;
    isExpanded: boolean;
    onToggleExpand: () => void;
    onEdit: () => void;
    onDelete: () => void;
    onModelChange: (modelId: string | null) => void;
    isActive?: boolean;
    onFilterByModel?: (modelId: number) => void;
}) {
    const shortRole = shortenTeamRole(member.team_role);
    const displayName = member.name || shortRole || 'Team Member';
    const model = member.model_id ? modelsById[String(member.model_id)] : undefined;
    const characteristics = normalizeList(member.characteristics);
    const isLeader = member.role !== 'Operative';
    const missingFields = getMissingMemberFields(member);

    if (isExpanded) {
        return (
            <div onClick={onToggleExpand} className="w-full cursor-pointer transition-all duration-300">
                <ExpandedMemberCard member={member} modelsById={modelsById} vendorsById={vendorsById} onFilterByModel={onFilterByModel} />
            </div>
        );
    }

    return (
        <div
            onClick={onToggleExpand}
            className={`group relative w-72 flex-shrink-0 cyber-chamfer-sm transition-all duration-300 cursor-pointer
                ${isActive
                    ? 'bg-black/60 border-primary shadow-[0_0_30px_rgba(0,255,136,0.15)] ring-1 ring-primary/50'
                    : isLeader
                        ? 'bg-primary/5 border-primary/20 hover:bg-primary/10 hover:border-primary/40'
                        : 'bg-black/40 border-white/10 hover:bg-black/60 hover:border-primary/50'
                } 
                ${!isActive && 'hover:shadow-[0_0_20px_rgba(0,255,136,0.1)]'} 
                border`}
        >
            <div className="p-4 space-y-4">
                <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1 pl-5">
                            <span className={`font-label ${FONT_SIZE.XS} font-bold tracking-widest uppercase ${isLeader ? 'text-primary' : 'text-white/40'}`}>
                                {member.role}
                            </span>
                            {member.color && (
                                <div className="w-1.5 h-1.5 rounded-full shadow-[0_0_5px_currentColor]" style={{ backgroundColor: member.color, color: member.color }} />
                            )}
                        </div>
                        <div className={`font-display ${FONT_SIZE.LG} text-white truncate`} title={displayName}>
                            {displayName}
                        </div>
                        <div className={`${FONT_SIZE.XS} text-primary/80 font-medium truncate`}>{shortRole}</div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                        <div className="opacity-50 hover:opacity-100 transition-opacity">
                            <IdBadge id={member.id} />
                        </div>
                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onEdit();
                                }}
                                className="p-1.5 rounded bg-white/5 border border-white/10 text-white/60 hover:text-primary hover:border-primary/30 transition-all"
                            >
                                <Pencil size={12} />
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (confirm('Remove this member from the team?')) onDelete();
                                }}
                                className="p-1.5 rounded bg-white/5 border border-white/10 text-white/60 hover:text-red-400 hover:border-red-400/30 transition-all"
                            >
                                <Trash2 size={12} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-white/5 border border-white/5 rounded-lg p-2 space-y-2">
                    <div className={`font-label ${FONT_SIZE.TINY} tracking-widest text-white/40`}>MODEL_ASSIGNMENT</div>
                    <FallbackPicker
                        models={Object.values(modelsById)}
                        vendorsById={vendorsById}
                        modelsById={modelsById}
                        value={member.model_id ? String(member.model_id) : undefined}
                        favorModel={model}
                        onChange={(id) => onModelChange(id ?? null)}
                    />
                </div>

                {characteristics.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                        {characteristics.slice(0, 3).map((char, i) => (
                            <span key={i} className={`px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 ${FONT_SIZE.TINY} text-primary/70 font-mono truncate max-w-[90px]`}>
                                {char.toUpperCase()}
                            </span>
                        ))}
                        {characteristics.length > 3 && (
                            <span className={`px-2 py-0.5 rounded-full bg-white/5 border border-white/10 ${FONT_SIZE.TINY} text-white/40 font-mono`}>
                                +{characteristics.length - 3}
                            </span>
                        )}
                    </div>
                )}
            </div>

            {missingFields.length > 0 && (
                <div className="absolute bottom-2 right-2">
                    <AlertTriangle size={12} className="text-amber-500/80" />
                </div>
            )}
        </div>
    );
}
