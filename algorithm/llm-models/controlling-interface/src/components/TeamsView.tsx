import { useMemo, useState, useEffect, type ReactNode } from 'react';
import { ChevronDown, ChevronRight, Pencil, Trash2, X, Clipboard, AlertTriangle, Plus, Save, Copy } from 'lucide-react';
import { MarkdownEditor } from './MarkdownEditor';
import { FallbackPicker } from './FallbackPicker';
import { getVendorIcon } from '../utils/getVendorIcon';
import { LLMModel, Team, TeamCategory, TeamMember, TeamRole, Vendor } from '../types';
import { StringArrayInput } from './StringArrayInput';

const CATEGORY_ORDER: TeamCategory[] = ['CORTEX', 'VITALS', 'OPS', 'ARCADE'];
const ROLE_OPTIONS: TeamRole[] = ['Chair', 'Envoy', 'Watchdog', 'Operative'];
const COLOR_OPTIONS = [
    '#FF6B9D',
    '#C77DFF',
    '#F38181',
    '#AA96DA',
    '#FCBAD3',
    '#FFFFD2',
    '#FFD93D',
    '#6BCB77',
    '#4D96FF',
    '#FF6B6B'
];

const normalizeCategory = (value: TeamCategory | null | undefined): TeamCategory =>
    CATEGORY_ORDER.includes(value as TeamCategory) ? (value as TeamCategory) : 'CORTEX';



interface TeamsViewProps {
    teams: Team[];
    members: TeamMember[];
    modelsById: Record<string, LLMModel>;
    vendorsById: Record<string, Vendor>;
    onTeamUpdate: (updatedTeam: Team, originalId: string) => void;
    onTeamCreate: (team: Team) => void;
    onMemberUpdate: (updatedMember: TeamMember, originalId: string) => void;
    onMemberDelete: (memberId: string) => void;
    onMemberCreate: (member: TeamMember) => void;
    onTeamDelete: (teamId: string) => void;
    onTeamDuplicate: (teamId: string) => Promise<Team | undefined>;
    createTeamSignal: number;
}

export function TeamsView({
    teams,
    members,
    modelsById,
    vendorsById,
    onTeamUpdate,
    onTeamCreate,
    onMemberUpdate,
    onMemberDelete,
    onMemberCreate,
    onTeamDelete,
    onTeamDuplicate,
    createTeamSignal
}: TeamsViewProps) {
    const [expandedCategories, setExpandedCategories] = useState<Set<TeamCategory>>(new Set());
    const [expandedTeams, setExpandedTeams] = useState<Set<string>>(new Set());
    const [editingTeam, setEditingTeam] = useState<Team | null>(null);
    const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
    const [isCreatingTeam, setIsCreatingTeam] = useState(false);
    const [isCreatingMember, setIsCreatingMember] = useState(false);

    const teamsByCategory = useMemo(() => {
        const map: Record<TeamCategory, Team[]> = {
            CORTEX: [],
            VITALS: [],
            OPS: [],
            ARCADE: []
        };
        teams.forEach(team => {
            const category = normalizeCategory(team.category);
            map[category].push(team);
        });
        return map;
    }, [teams]);

    const membersByTeam = useMemo(() => {
        const map: Record<string, TeamMember[]> = {};
        members.forEach(member => {
            const teamId = member.team_id;
            if (!map[teamId]) map[teamId] = [];
            map[teamId].push(member);
        });
        return map;
    }, [members]);

    const buildTeamDraft = () => {
        const category: TeamCategory = 'CORTEX';

        return {
            id: '',
            name: 'New Team',
            catch_phrase: '',
            description: '',
            category,
            quick_starts: [],
            default_starting_rounds: null,
            bootstrap_prompt: '',
            is_saved: false,
            is_public: false,
            originated_from_team: null
        } satisfies Team;
    };

    const buildMemberDraft = (teamId: string) => {


        return {
            id: '',
            team_id: teamId,
            name: '',
            role: 'Operative',
            team_role: '',
            color: null,
            characteristics: [],
            life_story: null,
            special_orders: null,
            model_id: 0 // Default placeholder, handled by UI selection
        } satisfies TeamMember;
    };

    useEffect(() => {
        if (!createTeamSignal) return;
        setEditingTeam(buildTeamDraft());
        setIsCreatingTeam(true);
    }, [createTeamSignal]);

    const toggleCategory = (category: TeamCategory) => {
        setExpandedCategories(prev => {
            const next = new Set(prev);
            if (next.has(category)) next.delete(category);
            else next.add(category);
            return next;
        });
    };

    const toggleTeam = (teamId: string) => {
        setExpandedTeams(prev => {
            const next = new Set(prev);
            if (next.has(teamId)) next.delete(teamId);
            else next.add(teamId);
            return next;
        });
    };

    return (
        <div className="space-y-12">
            {CATEGORY_ORDER.map(category => (
                <CategorySection
                    key={category}
                    category={category}
                    teams={teamsByCategory[category]}
                    membersByTeam={membersByTeam}
                    modelsById={modelsById}
                    vendorsById={vendorsById}
                    isExpanded={expandedCategories.has(category)}
                    expandedTeams={expandedTeams}
                    onToggleCategory={() => toggleCategory(category)}
                    onToggleTeam={toggleTeam}
                    onTeamEdit={(team) => {
                        setEditingTeam(team);
                        setIsCreatingTeam(false);
                    }}
                    onMemberEdit={(member) => {
                        setEditingMember(member);
                        setIsCreatingMember(false);
                    }}
                    onMemberAdd={(teamId) => {
                        setEditingMember(buildMemberDraft(teamId));
                        setIsCreatingMember(true);
                    }}
                    onMemberDelete={onMemberDelete}
                    onTeamDelete={onTeamDelete}
                    onTeamDuplicate={onTeamDuplicate}
                    onMemberUpdate={onMemberUpdate}
                />
            ))}

            <TeamEditModal
                isOpen={editingTeam !== null}
                team={editingTeam}
                isCreating={isCreatingTeam}
                onClose={() => {
                    setEditingTeam(null);
                    setIsCreatingTeam(false);
                }}
                onSave={(team) => {
                    if (!editingTeam) return;
                    if (isCreatingTeam) {
                        onTeamCreate(team);
                    } else {
                        onTeamUpdate(team, editingTeam.id);
                    }
                    setEditingTeam(null);
                    setIsCreatingTeam(false);
                }}
            />

            <MemberEditModal
                isOpen={editingMember !== null}
                member={editingMember}
                teams={teams}
                modelsById={modelsById}
                vendorsById={vendorsById}
                isCreating={isCreatingMember}
                onClose={() => {
                    setEditingMember(null);
                    setIsCreatingMember(false);
                }}
                onSave={(member) => {
                    if (!editingMember) return;
                    if (isCreatingMember) {
                        onMemberCreate(member);
                    } else {
                        onMemberUpdate(member, editingMember.id);
                    }
                    setEditingMember(null);
                    setIsCreatingMember(false);
                }}
            />
        </div>
    );
}

function CategorySection({
    category,
    teams,
    membersByTeam,
    modelsById,
    vendorsById,
    isExpanded,
    expandedTeams,
    onToggleCategory,
    onToggleTeam,
    onTeamEdit,
    onMemberEdit,
    onMemberAdd,
    onMemberDelete,
    onTeamDelete,
    onTeamDuplicate,
    onMemberUpdate
}: {
    category: TeamCategory;
    teams: Team[];
    membersByTeam: Record<string, TeamMember[]>;
    modelsById: Record<string, LLMModel>;
    vendorsById: Record<string, Vendor>;
    isExpanded: boolean;
    expandedTeams: Set<string>;
    onToggleCategory: () => void;
    onToggleTeam: (teamId: string) => void;
    onTeamEdit: (team: Team) => void;
    onMemberEdit: (member: TeamMember) => void;
    onMemberAdd: (teamId: string) => void;
    onMemberDelete: (memberId: string) => void;
    onTeamDelete: (teamId: string) => void;
    onTeamDuplicate: (teamId: string) => Promise<Team | undefined>;
    onMemberUpdate: (updatedMember: TeamMember, originalId: string) => void;
}) {
    const sortedTeams = [...teams].sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    return (
        <section id={`category-${category.toLowerCase()}`} className="space-y-6 scroll-mt-28">
            <button
                onClick={onToggleCategory}
                className={`cyber-panel cyber-chamfer-sm flex w-full items-center gap-4 px-4 py-3 text-left transition-all duration-300 ${isExpanded
                    ? 'bg-black/60 border-primary/30 shadow-[0_0_15px_rgba(0,255,136,0.1)]'
                    : 'bg-black/20 border-white/5 hover:bg-white/5 hover:border-white/10'
                    }`}
            >
                <div className={`border cyber-chamfer-sm px-2 py-1 transition-colors duration-300 ${isExpanded ? 'border-primary/50 text-primary bg-primary/10' : 'border-white/10 text-white/40'}`}>
                    {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </div>
                <div className="flex flex-1 items-center justify-between">
                    <div>
                        <div className={`font-display text-2xl tracking-wide transition-colors duration-300 ${isExpanded ? 'text-primary' : 'text-white/40'}`}>{category}</div>
                    </div>
                    <span className={`text-sm transition-colors duration-300 ${isExpanded ? 'text-white/60' : 'text-white/20'}`}>{sortedTeams.length} UNITS</span>
                </div>
            </button>

            {isExpanded && (
                <div className="space-y-8">
                    {sortedTeams.length === 0 ? (
                        <div className="cyber-panel cyber-chamfer-sm p-6 text-base text-muted-foreground">
                            NO TEAMS IN THIS CATEGORY.
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {sortedTeams.map(team => (
                                <TeamCard
                                    key={team.id}
                                    team={team}
                                    members={membersByTeam[team.id] ?? []}
                                    modelsById={modelsById}
                                    vendorsById={vendorsById}
                                    isExpanded={expandedTeams.has(team.id)}
                                    onToggle={() => onToggleTeam(team.id)}
                                    onEdit={() => onTeamEdit(team)}
                                    onDelete={() => onTeamDelete(team.id)}
                                    onDuplicate={async () => {
                                        const newTeam = await onTeamDuplicate(team.id);
                                        if (newTeam) onTeamEdit(newTeam);
                                        return newTeam;
                                    }}
                                    onMemberAdd={() => onMemberAdd(team.id)}
                                    onMemberEdit={onMemberEdit}
                                    onMemberUpdate={onMemberUpdate}
                                    onMemberDelete={onMemberDelete}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </section>
    );
}

function TeamCard({
    team,
    members,
    modelsById,
    vendorsById,
    isExpanded,
    onToggle,
    onEdit,
    onDelete,
    onDuplicate,
    onMemberEdit,
    onMemberAdd,
    onMemberDelete,
    onMemberUpdate
}: {
    team: Team;
    members: TeamMember[];
    modelsById: Record<string, LLMModel>;
    vendorsById: Record<string, Vendor>;
    isExpanded: boolean;
    onToggle: () => void;
    onEdit: () => void;
    onDelete: () => void;
    onDuplicate: () => Promise<Team | undefined>;
    onMemberEdit: (member: TeamMember) => void;
    onMemberAdd: () => void;
    onMemberDelete: (memberId: string) => void;
    onMemberUpdate: (updatedMember: TeamMember, originalId: string) => void;
}) {
    const sortedMembers = [...members].sort((a, b) => {
        const nameA = a.name ?? a.team_role ?? 'Member';
        const nameB = b.name ?? b.team_role ?? 'Member';
        return nameA.localeCompare(nameB);
    });
    const missingFields = getMissingTeamFields(team);
    const membersCount = sortedMembers.length;

    const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement;
        if (target.closest('[data-team-action]')) return;
        onToggle();
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
            onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onToggle();
                }
            }}
        >
            {/* Background Gradient Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-transparent to-accent-secondary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-xl pointer-events-none" />

            <div className="relative p-5 flex items-start justify-between gap-4">
                <div className="space-y-1 flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                        <span className="font-label text-[10px] bg-primary/10 text-primary border border-primary/20 px-1.5 py-0.5 rounded tracking-wider">
                            {team.category}
                        </span>
                        {isExpanded && (
                            <div data-team-action className="opacity-50 hover:opacity-100 transition-opacity">
                                <IdBadge id={team.id} />
                            </div>
                        )}
                    </div>

                    <h3 className={`font-display text-xl tracking-wide break-words leading-tight bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent`}>
                        {team.name}
                    </h3>

                    <p className="text-sm font-medium text-primary/90 leading-snug">{team.catch_phrase}</p>

                    <div className="text-xs text-white/50 leading-relaxed max-w-3xl line-clamp-2 mt-2">
                        {team.description || 'No description provided.'}
                    </div>

                    {!isExpanded && (
                        <div className="pt-3 flex items-center gap-3">
                            <div className="flex items-center gap-2 px-2 py-1 rounded bg-white/5 border border-white/5">
                                <span className="font-label text-[10px] tracking-widest text-white/40">MEMBERS</span>
                                <span className="text-primary font-mono text-xs">{membersCount}</span>
                            </div>
                            {missingFields.length > 0 && (
                                <div className="text-xs text-amber-500 font-mono flex items-center gap-1">
                                    <AlertTriangle size={12} />
                                    {missingFields.length} MISSING
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {isExpanded && (
                    <div className="flex flex-col items-end gap-2 shrink-0 z-10" data-team-action>
                        {/* MissingIndicator removed from expanded view as requested */}
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
                    />
                </div>
            )}

            {isExpanded && (
                <div className="relative px-5 pb-5 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    <div className="grid gap-4 lg:grid-cols-3">
                        <div className="bg-white/5 border border-white/5 rounded-lg p-4">
                            <div className="font-label text-[10px] tracking-widest text-white/40 mb-1">DEFAULT_ROUNDS</div>
                            <div className="font-display text-xl text-white">{team.default_starting_rounds ?? '—'}</div>
                        </div>
                        <div className="bg-white/5 border border-white/5 rounded-lg p-4 lg:col-span-2">
                            <div className="font-label text-[10px] tracking-widest text-white/40 mb-2">BOOTSTRAP_PROMPT</div>
                            <p className="text-xs text-white/70 leading-relaxed whitespace-pre-line font-mono">
                                {team.bootstrap_prompt || 'NO BOOTSTRAP PROMPT PROVIDED.'}
                            </p>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/5 rounded-lg p-4">
                        <div className="font-label text-[10px] tracking-widest text-white/40 mb-3">QUICK_STARTS</div>
                        <div className="flex flex-wrap gap-2">
                            {team.quick_starts?.length ? (
                                team.quick_starts.map((item, index) => (
                                    <span key={`${item}-${index}`} className="px-2 py-1 text-xs border border-white/10 bg-black/20 rounded text-white/80 font-mono">
                                        {item}
                                    </span>
                                ))
                            ) : (
                                <span className="text-xs text-white/30 font-mono">NO QUICK STARTS.</span>
                            )}
                        </div>
                    </div>

                    <div className="space-y-4 border-t border-white/10 pt-4">
                        <div className="flex items-center justify-between">
                            <div className="font-label text-xs text-white/60 tracking-widest">TEAM_MEMBERS</div>
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-mono text-white/40">{sortedMembers.length} ACTIVE</span>
                                <button
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        onMemberAdd();
                                    }}
                                    className="border border-primary/30 bg-primary/10 rounded px-2 py-1 text-[10px] font-bold tracking-wider text-primary hover:bg-primary/20 flex items-center gap-1 transition-all"
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
                            onMemberEdit={onMemberEdit}
                            onMemberDelete={onMemberDelete}
                            onMemberUpdate={onMemberUpdate}
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
    onMemberEdit,
    onMemberDelete,
    onMemberUpdate
}: {

    members: TeamMember[];
    modelsById: Record<string, LLMModel>;
    vendorsById: Record<string, Vendor>;
    onMemberEdit: (member: TeamMember) => void;
    onMemberDelete: (memberId: string) => void;
    onMemberUpdate: (updatedMember: TeamMember, originalId: string) => void;
}) {
    if (members.length === 0) {
        return (
            <div className="cyber-panel cyber-chamfer-sm p-4 text-sm text-muted-foreground" data-team-action>
                NO TEAM MEMBERS YET.
            </div>
        );
    }

    const { leaders, operatives } = splitMembersByRole(members);
    return (
        <div data-team-action>
            <div className="flex overflow-x-auto gap-6 pb-2 pt-1 scrollbar-hide">
                {leaders.map(member => (
                    <MemberCard
                        key={member.id}
                        member={member}
                        modelsById={modelsById}
                        vendorsById={vendorsById}
                        onEdit={() => onMemberEdit(member)}
                        onDelete={() => onMemberDelete(member.id)}
                        onModelChange={(modelId) => {
                            onMemberUpdate({ ...member, model_id: modelId ? Number(modelId) : 0 }, member.id);
                        }}
                    />
                ))}
                {leaders.length > 0 && operatives.length > 0 && (
                    <OperativesDivider />
                )}
                {operatives.map(member => (
                    <MemberCard
                        key={member.id}
                        member={member}
                        modelsById={modelsById}
                        vendorsById={vendorsById}
                        onEdit={() => onMemberEdit(member)}
                        onDelete={() => onMemberDelete(member.id)}
                        onModelChange={(modelId) => {
                            onMemberUpdate({ ...member, model_id: modelId ? Number(modelId) : 0 }, member.id);
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

function CollapsedMembersRow({
    members,
    modelsById,
    vendorsById
}: {
    members: TeamMember[];
    modelsById: Record<string, LLMModel>;
    vendorsById: Record<string, Vendor>;
}) {
    if (members.length === 0) {
        return (
            <div className="cyber-panel cyber-chamfer-sm p-4 text-sm text-muted-foreground" data-team-action>
                NO TEAM MEMBERS YET.
            </div>
        );
    }

    const { leaders, operatives } = splitMembersByRole(members);

    return (
        <div className="collapsed-operatives-strip cyber-chamfer-sm p-3" data-team-action>
            <div className="flex overflow-x-auto gap-3 scrollbar-hide">
                {leaders.map(member => (
                    <StripMemberCard
                        key={member.id}
                        member={member}
                        modelsById={modelsById}
                        vendorsById={vendorsById}
                    />
                ))}
                {leaders.length > 0 && operatives.length > 0 && (
                    <OperativesDivider />
                )}
                {operatives.map(member => (
                    <StripMemberCard
                        key={member.id}
                        member={member}
                        modelsById={modelsById}
                        vendorsById={vendorsById}
                    />
                ))}
            </div>
        </div>
    );
}

function StripMemberCard({
    member,
    modelsById,
    vendorsById
}: {
    member: TeamMember;
    modelsById: Record<string, LLMModel>;
    vendorsById: Record<string, Vendor>;
}) {
    const shortRole = shortenTeamRole(member.team_role);
    const displayName = member.name || shortRole || 'Team Member';
    const isLeader = member.role !== 'Operative';
    const model = member.model_id ? modelsById[String(member.model_id)] : undefined;
    const vendor = model ? vendorsById[String(model.vendor_id)] : undefined;
    const vendorName = vendor?.display_name || 'Unknown';
    const modelName = model ? (model.name_within_family?.trim() || model.modelName) : undefined;

    return (
        <div
            className="cyber-strip-card cyber-chamfer-sm min-w-[220px] max-w-[260px] px-3.5 py-3 flex flex-col justify-between h-[84px] transition-all hover:scale-[1.02]"
            style={{ '--border-color': member.color || 'var(--primary)' } as React.CSSProperties}
        >
            <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className={`font-label text-[9px] tracking-widest ${isLeader ? 'text-accent-secondary' : 'text-white/40'}`}>
                    {member.role}
                </span>
                {model && (
                    <div className="flex items-center gap-1.5 bg-white/5 rounded-full px-1.5 py-0.5 border border-white/5 shrink-0 max-w-[160px]">
                        <div className="w-3 h-3 rounded-sm overflow-hidden opacity-80 shrink-0">
                            <img
                                src={getVendorIcon(vendorName, '')}
                                alt={vendorName}
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = '/llm-icons/ai-placeholder.png';
                                }}
                            />
                        </div>
                        <span className="text-[9px] text-white/50 font-mono truncate leading-none" title={modelName}>
                            {modelName}
                        </span>
                    </div>
                )}
            </div>

            <div className="font-display text-sm text-white/90 truncate leading-none mb-1.5" title={displayName}>
                {displayName}
            </div>

            <div className="text-[10px] text-primary/70 font-mono truncate" title={member.team_role ?? ''}>
                {member.team_role || 'No Role Assigned'}
            </div>
        </div>
    );
}

function OperativesDivider() {
    return (
        <div className="flex items-center gap-2 px-2 text-muted-foreground flex-shrink-0" aria-hidden="true">
            <div className="h-10 w-px bg-border/70" />
            <span className="font-label text-xs">OPERATIVES</span>
            <div className="h-10 w-px bg-border/70" />
        </div>
    );
}

function splitMembersByRole(members: TeamMember[]) {
    return {
        leaders: members.filter(member => member.role !== 'Operative'),
        operatives: members.filter(member => member.role === 'Operative')
    };
}

function MemberCard({
    member,
    modelsById,
    vendorsById,
    onEdit,
    onDelete,
    onModelChange
}: {
    member: TeamMember;
    modelsById: Record<string, LLMModel>;
    vendorsById: Record<string, Vendor>;
    onEdit: () => void;
    onDelete: () => void;
    onModelChange: (modelId: string | null) => void;
}) {
    const shortRole = shortenTeamRole(member.team_role);
    const displayName = member.name || shortRole || 'Team Member';
    const model = member.model_id ? modelsById[String(member.model_id)] : undefined;
    const characteristics = normalizeList(member.characteristics);
    const isLeader = member.role !== 'Operative';
    const missingFields = getMissingMemberFields(member);

    return (
        <div className="group relative w-72 flex-shrink-0 bg-black/40 border border-white/10 cyber-chamfer-sm transition-all duration-300 hover:bg-black/60 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,255,136,0.1)]">
            <div className="p-4 space-y-4">
                <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                            <span className={`font-label text-[9px] tracking-widest uppercase ${isLeader ? 'text-primary' : 'text-white/40'}`}>
                                {member.role}
                            </span>
                            {member.color && (
                                <div className="w-1.5 h-1.5 rounded-full shadow-[0_0_5px_currentColor]" style={{ backgroundColor: member.color, color: member.color }} />
                            )}
                        </div>
                        <div className="font-display text-lg text-white truncate" title={displayName}>
                            {displayName}
                        </div>
                        <div className="text-xs text-primary/80 font-medium truncate">{shortRole}</div>
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
                    <div className="font-label text-[9px] tracking-widest text-white/40">MODEL_ASSIGNMENT</div>
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
                            <span key={i} className="px-1.5 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] text-white/60 font-mono truncate max-w-[100px]">
                                {char}
                            </span>
                        ))}
                        {characteristics.length > 3 && (
                            <span className="px-1.5 py-0.5 rounded bg-white/5 text-[9px] text-white/40 font-mono">
                                +{characteristics.length - 3}
                            </span>
                        )}
                    </div>
                )}



                {/* Additional Info - Only show if space permits or on hover? keeping simple for now */}
                {(member.life_story || member.special_orders) && (
                    <div className="pt-2 border-t border-white/10 flex gap-2">
                        {member.life_story && <div className="w-1.5 h-1.5 rounded-full bg-blue-400/50" title="Has Life Story" />}
                        {member.special_orders && <div className="w-1.5 h-1.5 rounded-full bg-amber-400/50" title="Has Special Orders" />}
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




function IdBadge({ id }: { id: string }) {
    const short = `${id.slice(0, 4)}...`;

    return (
        <button
            type="button"
            title={id}
            onClick={() => {
                if (navigator.clipboard?.writeText) {
                    navigator.clipboard.writeText(id).catch(() => undefined);
                }
            }}
            className="flex items-center gap-1 border border-border/60 cyber-chamfer-sm px-2 py-1 text-sm text-muted-foreground hover:text-primary"
        >
            <Clipboard size={12} />
            {short}
        </button>
    );
}

function shortenTeamRole(teamRole?: string) {
    if (!teamRole) return 'Team Role';
    return trimTeamRole(teamRole);
}

function trimTeamRole(teamRole: string) {
    const words = teamRole.split(/\s+/).filter(Boolean);
    return words.slice(0, 2).join(' ');
}



export function TeamEditModal({
    isOpen,
    team,
    isCreating,
    onClose,
    onSave
}: {
    isOpen: boolean;
    team: Team | null;
    isCreating: boolean;
    onClose: () => void;
    onSave: (team: Team) => void;
}) {
    const [draft, setDraft] = useState<Team | null>(team);
    useEffect(() => {
        if (isCreating && team) {
            setDraft({ ...team, is_public: true, is_saved: true });
        } else {
            setDraft(team);
        }
    }, [team, isCreating]);

    if (!isOpen || !draft) return null;

    const updateField = <K extends keyof Team>(key: K, value: Team[K]) => {
        setDraft(prev => (prev ? { ...prev, [key]: value } : prev));
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
                        <div className="font-label text-sm text-primary/80 tracking-widest mb-1">{isCreating ? 'CREATE_TEAM' : 'EDIT_TEAM'}</div>
                        <h2 className="font-display text-xl text-white tracking-wide flex items-center gap-2">
                            {draft.name || 'New Team'}
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="group p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 hover:text-white text-white/60 transition-all duration-300"
                    >
                        <X size={18} className="group-hover:rotate-90 transition-transform duration-300" />
                    </button>
                </div>

                <div className="flex flex-col flex-1 min-h-0">
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto cyber-scroll flex-1 min-h-0">
                        <Field label="TEAM NAME">
                            <input
                                value={draft.name}
                                onChange={(e) => updateField('name', e.target.value)}
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/20 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-mono"
                            />
                        </Field>
                        <Field label="CATEGORY">
                            <div className="grid grid-cols-2 gap-2">
                                {CATEGORY_ORDER.map(cat => (
                                    <button
                                        key={cat}
                                        type="button"
                                        onClick={() => updateField('category', cat)}
                                        className={`px-3 py-2 rounded-lg border text-xs font-bold tracking-widest transition-all ${draft.category === cat
                                            ? 'bg-primary/20 border-primary text-primary shadow-[0_0_10px_rgba(0,255,136,0.2)]'
                                            : 'bg-black/40 border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </Field>
                        <Field label="SETTINGS">
                            <div className="flex items-center gap-6">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <button
                                        type="button"
                                        onClick={() => updateField('is_public', !draft.is_public)}
                                        className={`w-10 h-5 rounded-full relative transition-colors ${draft.is_public ? 'bg-primary/20 border border-primary/50' : 'bg-white/5 border border-white/10'}`}
                                    >
                                        <div className={`absolute top-0.5 left-0.5 w-3.5 h-3.5 rounded-full bg-white transition-transform ${draft.is_public ? 'translate-x-[20px] bg-primary shadow-[0_0_10px_rgba(0,255,136,0.5)]' : 'bg-white/20'}`} />
                                    </button>
                                    <span className={`text-xs font-bold tracking-widest transition-colors ${draft.is_public ? 'text-primary' : 'text-white/40'}`}>
                                        PUBLIC
                                    </span>
                                </label>

                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <button
                                        type="button"
                                        onClick={() => updateField('is_saved', !draft.is_saved)}
                                        className={`w-10 h-5 rounded-full relative transition-colors ${draft.is_saved ? 'bg-primary/20 border border-primary/50' : 'bg-white/5 border border-white/10'}`}
                                    >
                                        <div className={`absolute top-0.5 left-0.5 w-3.5 h-3.5 rounded-full bg-white transition-transform ${draft.is_saved ? 'translate-x-[20px] bg-primary shadow-[0_0_10px_rgba(0,255,136,0.5)]' : 'bg-white/20'}`} />
                                    </button>
                                    <span className={`text-xs font-bold tracking-widest transition-colors ${draft.is_saved ? 'text-primary' : 'text-white/40'}`}>
                                        SAVED
                                    </span>
                                </label>
                            </div>
                        </Field>
                        <Field label="CATCH PHRASE" full>
                            <input
                                value={draft.catch_phrase}
                                onChange={(e) => updateField('catch_phrase', e.target.value)}
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/20 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-mono"
                            />
                        </Field>
                        <Field label="DEFAULT STARTING ROUNDS">
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <button
                                        type="button"
                                        onClick={() => updateField('default_starting_rounds', draft.default_starting_rounds === null ? 1 : null)}
                                        className={`w-10 h-5 rounded-full relative transition-colors ${draft.default_starting_rounds !== null ? 'bg-primary/20 border border-primary/50' : 'bg-white/5 border border-white/10'}`}
                                    >
                                        <div className={`absolute top-0.5 left-0.5 w-3.5 h-3.5 rounded-full bg-white transition-transform ${draft.default_starting_rounds !== null ? 'translate-x-[20px] bg-primary shadow-[0_0_10px_rgba(0,255,136,0.5)]' : 'bg-white/20'}`} />
                                    </button>
                                    <span className="text-sm text-white/60 font-mono">
                                        {draft.default_starting_rounds !== null ? 'ENABLED' : 'NOT SET'}
                                    </span>
                                </div>

                                {draft.default_starting_rounds !== null && (
                                    <div className="flex items-center gap-4 bg-black/40 border border-white/10 rounded-lg px-4 py-3 animate-in fade-in slide-in-from-top-1 duration-200">
                                        <input
                                            type="range"
                                            min={1}
                                            max={20}
                                            step={1}
                                            value={draft.default_starting_rounds}
                                            onChange={(e) => updateField('default_starting_rounds', Number(e.target.value))}
                                            className="cyber-range w-full h-1.5 rounded-full cursor-pointer"
                                            style={{
                                                background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${(draft.default_starting_rounds - 1) / 19 * 100}%, rgba(255, 255, 255, 0.1) ${(draft.default_starting_rounds - 1) / 19 * 100}%, rgba(255, 255, 255, 0.1) 100%)`
                                            }}
                                        />
                                        <div className="font-display text-xl text-primary w-12 text-center">
                                            {draft.default_starting_rounds}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Field>
                        <Field label="DESCRIPTION" full>
                            <MarkdownEditor
                                value={draft.description}
                                onChange={(value) => updateField('description', value)}
                                placeholder="Enter team description (Markdown supported)"
                                className="min-h-[100px]"
                            />
                        </Field>
                        <Field label="QUICK STARTS" full>
                            <StringArrayInput
                                label="QUICK STARTS"
                                name="quick_starts"
                                value={draft.quick_starts}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    const arr = typeof val === 'string' ? val.split(',').map(s => s.trim()).filter(Boolean) : val;
                                    updateField('quick_starts', arr as string[]);
                                }}
                                placeholder="Add quick start..."
                            />
                        </Field>
                        <Field label="BOOTSTRAP PROMPT" full>
                            <textarea
                                value={draft.bootstrap_prompt ?? ''}
                                onChange={(e) => updateField('bootstrap_prompt', e.target.value)}
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/20 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-mono min-h-[120px] resize-none"
                            />
                        </Field>

                    </div>
                </div>

                <div className="px-6 pb-6 pt-4 flex justify-end gap-3 border-t border-white/10 bg-black/40">
                    <button
                        onClick={onClose}
                        className="px-6 py-2.5 rounded-lg border border-white/10 text-xs font-bold tracking-widest text-white/60 hover:text-white hover:bg-white/5 transition-all"
                    >
                        CANCEL
                    </button>
                    <button
                        onClick={() => onSave(draft)}
                        className="px-6 py-2.5 rounded-lg bg-primary/20 border border-primary/50 text-primary text-xs font-bold tracking-widest hover:bg-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(0,255,136,0.2)]"
                    >
                        <Save size={14} />
                        SAVE_CHANGES
                    </button>
                </div>
            </div>
        </div>
    );
}

function MemberEditModal({
    isOpen,
    member,
    teams,
    modelsById,
    vendorsById,
    isCreating,
    onClose,
    onSave
}: {
    isOpen: boolean;
    member: TeamMember | null;
    teams: Team[];
    modelsById: Record<string, LLMModel>;
    vendorsById: Record<string, Vendor>;
    isCreating: boolean;
    onClose: () => void;
    onSave: (member: TeamMember) => void;
}) {
    const [draft, setDraft] = useState<TeamMember | null>(member);

    useEffect(() => {
        setDraft(member);
    }, [member]);

    if (!isOpen || !draft) return null;

    const updateField = <K extends keyof TeamMember>(key: K, value: TeamMember[K]) => {
        setDraft(prev => (prev ? { ...prev, [key]: value } : prev));
    };



    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
            onClick={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <div className="cyber-panel cyber-chamfer w-full max-w-4xl shadow-xl max-h-[85vh] overflow-hidden flex flex-col">
                <div className="p-6 pb-0 flex items-center justify-between">
                    <div>
                        <div className="font-label text-sm text-muted-foreground">{isCreating ? 'ADD_MEMBER' : 'EDIT_MEMBER'}</div>
                        <h3 className="font-display text-lg text-primary">{draft.name || draft.team_role || 'New Member'}</h3>
                    </div>
                    <button onClick={onClose} className="border border-border/60 cyber-chamfer-sm p-2 text-muted-foreground hover:text-primary">
                        <X size={18} />
                    </button>
                </div>

                <div className="px-6 py-4 overflow-y-auto cyber-scroll flex-1 min-h-0">
                    <div className="grid gap-4 md:grid-cols-2">
                        <Field label="ID">
                            <input
                                value={draft.id}
                                onChange={(e) => updateField('id', e.target.value)}
                                className="w-full cyber-input cyber-chamfer-sm"
                            />
                        </Field>
                        <Field label="Team">
                            <select
                                value={draft.team_id}
                                onChange={(e) => updateField('team_id', e.target.value)}
                                className="w-full cyber-input cyber-chamfer-sm"
                            >
                                {teams.map(team => (
                                    <option key={team.id} value={team.id}>{team.name}</option>
                                ))}
                            </select>
                        </Field>

                        <Field label="Name">
                            <input
                                value={draft.name ?? ''}
                                onChange={(e) => updateField('name', e.target.value)}
                                className="w-full cyber-input cyber-chamfer-sm"
                            />
                        </Field>
                        <Field label="Role">
                            <div className="grid grid-cols-2 gap-2">
                                {ROLE_OPTIONS.map(role => (
                                    <button
                                        key={role}
                                        onClick={() => updateField('role', role)}
                                        className={`px-3 py-2 rounded-lg border text-xs font-bold tracking-widest transition-all ${draft.role === role
                                            ? 'bg-primary/20 border-primary text-primary shadow-[0_0_10px_rgba(0,255,136,0.2)]'
                                            : 'bg-black/40 border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60'
                                            }`}
                                    >
                                        {role}
                                    </button>
                                ))}
                            </div>
                        </Field>
                        <Field label="Team Role">
                            <input
                                value={draft.team_role}
                                onChange={(e) => updateField('team_role', e.target.value)}
                                className="w-full cyber-input cyber-chamfer-sm"
                            />
                        </Field>
                        <Field label="Color" full>
                            <div className="grid grid-cols-5 gap-2">
                                <button
                                    onClick={() => updateField('color', null)}
                                    className={`col-span-1 px-2 py-2 rounded-lg border text-[10px] font-bold tracking-wider transition-all flex items-center justify-center gap-1 ${!draft.color
                                        ? 'bg-white/10 border-white/50 text-white shadow-[0_0_10px_rgba(255,255,255,0.2)]'
                                        : 'bg-black/40 border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60'
                                        }`}
                                >
                                    <div className="w-3 h-3 rounded-full border border-white/20 bg-transparent" />
                                    NONE
                                </button>
                                {COLOR_OPTIONS.map(color => (
                                    <button
                                        key={color}
                                        onClick={() => updateField('color', color)}
                                        className={`col-span-1 px-1 py-2 rounded-lg border text-[10px] font-mono transition-all flex items-center justify-center gap-1.5 ${draft.color === color
                                            ? 'bg-white/10 border-white/50 text-white shadow-[0_0_10px_rgba(255,255,255,0.2)]'
                                            : 'bg-black/40 border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60'
                                            }`}
                                    >
                                        <div
                                            className="w-3 h-3 rounded-full shadow-sm"
                                            style={{ backgroundColor: color }}
                                        />
                                        {color}
                                    </button>
                                ))}
                            </div>
                        </Field>
                        <Field label="Model" full>
                            <FallbackPicker
                                models={Object.values(modelsById)}
                                vendorsById={vendorsById}
                                modelsById={modelsById}
                                value={draft.model_id ? String(draft.model_id) : undefined}
                                favorModel={draft.model_id ? modelsById[String(draft.model_id)] : undefined}
                                onChange={(modelId) => updateField('model_id', modelId ? Number(modelId) : 0)} // Default to 0 if cleared
                            />
                        </Field>
                        <Field label="Characteristics" full>
                            <StringArrayInput
                                label="CHARACTERISTICS"
                                name="characteristics"
                                value={draft.characteristics}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    const arr = typeof val === 'string' ? val.split(',').map(s => s.trim()).filter(Boolean) : val;
                                    updateField('characteristics', arr as string[]);
                                }}
                                placeholder="Add characteristic..."
                            />
                        </Field>
                        <Field label="Life Story" full>
                            <textarea
                                value={draft.life_story ?? ''}
                                onChange={(e) => updateField('life_story', e.target.value)}
                                className="w-full cyber-input cyber-chamfer-sm min-h-[100px]"
                            />
                        </Field>
                        <Field label="Special Orders" full>
                            <textarea
                                value={draft.special_orders ?? ''}
                                onChange={(e) => updateField('special_orders', e.target.value)}
                                className="w-full cyber-input cyber-chamfer-sm min-h-[120px]"
                            />
                        </Field>
                    </div>


                </div>

                <div className="px-6 pb-6 pt-2 flex justify-end gap-3">
                    <button onClick={onClose} className="cyber-button-secondary cyber-chamfer-sm">Cancel</button>
                    <button
                        onClick={() =>
                            onSave({
                                ...draft,
                                characteristics: draft.characteristics
                            })
                        }
                        className="cyber-button cyber-chamfer-sm"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

function Field({ label, children, full }: { label: string; children: ReactNode; full?: boolean }) {
    return (
        <div className={full ? 'md:col-span-2 space-y-2' : 'space-y-2'}>
            <label className="font-label text-sm text-muted-foreground">{label}</label>
            {children}
        </div>
    );
}

function normalizeList(value: string[] | string | null | undefined) {
    if (Array.isArray(value)) return value;
    if (typeof value === 'string') {
        return value.split(/\n|,/).map(item => item.trim()).filter(Boolean);
    }
    return [];
}



function getMissingTeamFields(team: Team) {
    const missing: string[] = [];
    if (!team.name) missing.push('name');
    if (!team.catch_phrase) missing.push('catch_phrase');
    if (!team.description) missing.push('description');
    if (!team.category) missing.push('category');
    if (!team.quick_starts || team.quick_starts.length === 0) missing.push('quick_starts');
    if (team.default_starting_rounds === null || team.default_starting_rounds === undefined) missing.push('default_starting_rounds');
    if (!team.bootstrap_prompt) missing.push('bootstrap_prompt');
    return missing;
}

function getMissingMemberFields(member: TeamMember) {
    const missing: string[] = [];
    if (!member.name) missing.push('name');
    if (!member.role) missing.push('role');
    return missing;
}
