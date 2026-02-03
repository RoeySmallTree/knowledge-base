import { useMemo, useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, X, Filter } from 'lucide-react';
import { FONT_SIZE } from '../constants';
import { LLMModel, Team, TeamCategory, TeamMember, Vendor } from '../types';
import { TeamCard } from './TeamCard';
import { TeamStripCard } from './TeamStripCard';
import { TeamEditModal } from './TeamEditModal';
import { MemberEditModal } from './MemberEditModal';

const CATEGORY_ORDER: TeamCategory[] = ['CORTEX', 'VITALS', 'OPS', 'ARCADE'];
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
    expandedCategories: Set<TeamCategory>;
    onToggleCategory: (category: TeamCategory) => void;
    modelFilter: number | null;
    onClearModelFilter: () => void;
    onFilterByModel?: (modelId: number) => void;
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
    createTeamSignal,
    expandedCategories,
    onToggleCategory,
    modelFilter,
    onClearModelFilter,
    onFilterByModel
}: TeamsViewProps) {
    // Local state expandedCategories removed, using props
    const [expandedTeams, setExpandedTeams] = useState<Set<string>>(new Set());
    const [expandedMembers, setExpandedMembers] = useState<Set<string>>(new Set());
    const [editingTeam, setEditingTeam] = useState<Team | null>(null);
    const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
    const [isCreatingTeam, setIsCreatingTeam] = useState(false);
    const [isCreatingMember, setIsCreatingMember] = useState(false);

    const membersByTeam = useMemo(() => {
        const map: Record<string, TeamMember[]> = {};
        members.forEach(member => {
            const teamId = member.team_id;
            if (!map[teamId]) map[teamId] = [];
            map[teamId].push(member);
        });
        return map;
    }, [members]);

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
    }, [teams, modelFilter, membersByTeam]);

    const buildTeamDraft = () => {
        const category: TeamCategory = 'CORTEX';

        return {
            id: '',
            user_id: '',
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

    // toggleCategory replaced by props.onToggleCategory


    const toggleTeam = (teamId: string) => {
        setExpandedTeams(prev => {
            const next = new Set(prev);
            if (next.has(teamId)) next.delete(teamId);
            else next.add(teamId);
            return next;
        });
    };

    const toggleMember = (memberId: string) => {
        setExpandedMembers(prev => {
            const isSelected = prev.has(memberId);
            if (isSelected && prev.size === 1) return new Set();
            return new Set([memberId]);
        });
    };

    return (
        <div className="space-y-6">
            {/* Filter Banner */}
            {modelFilter !== null && (
                <div className="cyber-panel cyber-chamfer-sm p-4 flex items-center justify-between border-primary/30 bg-primary/5">
                    <div className="flex items-center gap-3">
                        <Filter className="text-primary" size={20} />
                        <div>
                            <div className={`${FONT_SIZE.XS} text-primary/70 font-mono mb-0.5`}>FILTERING BY MODEL</div>
                            <div className={`${FONT_SIZE.LG} font-display text-white`}>
                                {modelsById[String(modelFilter)]?.modelName || 'Unknown Model'}
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={onClearModelFilter}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded border border-white/10 hover:border-white/30 hover:bg-white/5 transition-colors ${FONT_SIZE.SM} text-white/70 hover:text-white`}
                    >
                        <X size={14} />
                        CLEAR FILTER
                    </button>
                </div>
            )}

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
                        expandedMembers={expandedMembers}
                        onToggleCategory={() => onToggleCategory(category)}
                        onToggleTeam={toggleTeam}
                        onToggleMember={toggleMember}
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
                        onFilterByModel={onFilterByModel}
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
    expandedMembers,
    onToggleCategory,
    onToggleTeam,
    onToggleMember,
    onTeamEdit,
    onMemberEdit,
    onMemberAdd,
    onMemberDelete,
    onTeamDelete,
    onTeamDuplicate,
    onMemberUpdate,
    onFilterByModel
}: {
    category: TeamCategory;
    teams: Team[];
    membersByTeam: Record<string, TeamMember[]>;
    modelsById: Record<string, LLMModel>;
    vendorsById: Record<string, Vendor>;
    isExpanded: boolean;
    expandedTeams: Set<string>;
    expandedMembers: Set<string>;
    onToggleCategory: () => void;
    onToggleTeam: (teamId: string) => void;
    onToggleMember: (memberId: string) => void;
    onTeamEdit: (team: Team) => void;
    onMemberEdit: (member: TeamMember) => void;
    onMemberAdd: (teamId: string) => void;
    onMemberDelete: (memberId: string) => void;
    onTeamDelete: (teamId: string) => void;
    onTeamDuplicate: (teamId: string) => Promise<Team | undefined>;
    onMemberUpdate: (updatedMember: TeamMember, originalId: string) => void;
    onFilterByModel?: (modelId: number) => void;
}) {
    const sortedTeams = [...teams].sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    return (
        <section id={`category-${category.toLowerCase()}`} className="space-y-6 scroll-mt-28">
            <div className={`transition-all duration-300 ${!isExpanded ? 'bg-black/20 border border-white/5 rounded-lg overflow-hidden hover:bg-white/5 hover:border-white/10' : ''}`}>
                <button
                    onClick={onToggleCategory}
                    className={`cyber-panel cyber-chamfer-sm flex w-full items-center gap-4 px-4 py-3 text-left transition-all duration-300 ${isExpanded
                        ? 'bg-black/60 border-primary/30 shadow-[0_0_15px_rgba(0,255,136,0.1)]'
                        : 'border-transparent bg-transparent shadow-none'
                        }`}
                >
                    <div className={`border cyber-chamfer-sm px-2 py-1 transition-colors duration-300 ${isExpanded ? 'border-primary/50 text-primary bg-primary/10' : 'border-white/10 text-white/40'}`}>
                        {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                    </div>
                    <div className="flex flex-1 items-center justify-between">
                        <div>
                            <div className={`font-display ${FONT_SIZE.XXL} tracking-wide transition-colors duration-300 ${isExpanded ? 'text-primary' : 'text-white/40'}`}>{category}</div>
                        </div>
                        <span className={`${FONT_SIZE.SM} transition-colors duration-300 ${isExpanded ? 'text-white/60' : 'text-white/20'}`}>{sortedTeams.length} UNITS</span>
                    </div>
                </button>

                {!isExpanded && sortedTeams.length > 0 && (
                    <div className="px-4 pb-4 overflow-x-auto cyber-scroll">
                        <div className="flex items-stretch gap-3 pb-2 pt-2">
                            {sortedTeams.map(team => (
                                <TeamStripCard
                                    key={team.id}
                                    team={team}
                                    members={membersByTeam[team.id] ?? []}
                                    category={category}
                                    onClick={() => {
                                        onToggleCategory();
                                        // Wait for expansion animation? Or just set expanded immediately
                                        setTimeout(() => onToggleTeam(team.id), 100);
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {isExpanded && (
                <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-300">
                    {sortedTeams.length === 0 ? (
                        <div className={`cyber-panel cyber-chamfer-sm p-6 ${FONT_SIZE.MD} text-muted-foreground`}>
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
                                    expandedMembers={expandedMembers}
                                    onToggle={() => onToggleTeam(team.id)}
                                    onToggleMember={onToggleMember}
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
                                    onFilterByModel={onFilterByModel}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </section>
    );
}
