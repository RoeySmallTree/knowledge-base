import type { RefObject } from 'react';
import { AlertTriangle, Loader2, Plus, Search } from 'lucide-react';
import type { Team, TeamCategory, TeamMember } from '../../types';
import { TeamsSidebar } from '../TeamsSidebar';
import { TeamsView } from '../TeamsView';
import { FallbackPicker } from '../FallbackPicker';
import { TabShell } from '../layout/TabShell';
import { FONT_SIZE } from '../../constants';
import { useAppData } from '../../context/AppDataContext';

interface TeamsTabProps {
    filteredTeams: Team[];
    filteredTeamsMembers: TeamMember[];
    expandedCategories: Set<TeamCategory>;
    onToggleCategory: (category: TeamCategory) => void;
    onExpandCategory: (category: TeamCategory) => void;
    onTeamUpdate: (updatedTeam: Team, originalId: string) => void;
    onTeamCreate: (team: Team) => void;
    onTeamDelete: (teamId: string) => void;
    onTeamDuplicate: (teamId: string) => Promise<Team | undefined>;
    onMemberUpdate: (updatedMember: TeamMember, originalId: string) => void;
    onMemberDelete: (memberId: string) => void;
    onMemberCreate: (member: TeamMember) => void;
    createTeamSignal: number;
    onCreateTeam: () => void;
    teamModelFilter: number | null;
    onClearTeamModelFilter: () => void;
    onFilterTeamsByModel: (modelId: number) => void;
    teamSearchQuery: string;
    onTeamSearchChange: (query: string) => void;
    savedFilter: 'saved' | 'not-saved' | 'all';
    onSavedFilterChange: (value: 'saved' | 'not-saved' | 'all') => void;
    publicFilter: 'public' | 'private' | 'all';
    onPublicFilterChange: (value: 'public' | 'private' | 'all') => void;
    missingFieldsFilter: string[];
    onMissingFieldsFilterChange: (next: string[]) => void;
    onClearTeamFilters: () => void;
    onFilterByModel: (modelId: number) => void;
    scrollRootRef?: RefObject<HTMLDivElement>;
    leftPanelRef?: RefObject<HTMLDivElement>;
}

export function TeamsTab({
    filteredTeams,
    filteredTeamsMembers,
    expandedCategories,
    onToggleCategory,
    onExpandCategory,
    onTeamUpdate,
    onTeamCreate,
    onTeamDelete,
    onTeamDuplicate,
    onMemberUpdate,
    onMemberDelete,
    onMemberCreate,
    createTeamSignal,
    onCreateTeam,
    teamModelFilter,
    onClearTeamModelFilter,
    onFilterTeamsByModel,
    teamSearchQuery,
    onTeamSearchChange,
    savedFilter,
    onSavedFilterChange,
    publicFilter,
    onPublicFilterChange,
    missingFieldsFilter,
    onMissingFieldsFilterChange,
    onClearTeamFilters,
    onFilterByModel,
    scrollRootRef,
    leftPanelRef
}: TeamsTabProps) {
    const { models, members, vendorsById, modelsById, loading, errors, totals } = useAppData();

    const left = !loading ? (
        <TeamsSidebar
            teams={filteredTeams}
            members={filteredTeamsMembers}
            expandedCategories={expandedCategories}
            onToggleCategory={onToggleCategory}
            onExpandCategory={onExpandCategory}
            scrollRootRef={scrollRootRef}
            navRootRef={leftPanelRef}
            totalTeamsCount={totals.teams}
            totalMembersCount={totals.members}
        />
    ) : null;

    const main = (
        <div className="min-h-[50vh] max-w-7xl mx-auto">
            {loading ? (
                <div className="flex h-64 items-center justify-center text-primary">
                    <Loader2 className="animate-spin" size={32} />
                </div>
            ) : errors.models ? (
                <div className="cyber-panel cyber-chamfer-sm border border-destructive/40 p-6 text-destructive">
                    ERROR: {errors.models}
                </div>
            ) : (
                <>
                    {(errors.teams || errors.members) && (
                        <div className={`cyber-panel cyber-chamfer-sm border border-accent-tertiary/40 p-4 ${FONT_SIZE.MD} text-accent-tertiary mb-6`}>
                            {errors.teams && <div>TEAMS DATA UNAVAILABLE. {errors.teams}</div>}
                            {errors.members && <div>MEMBERS DATA UNAVAILABLE. {errors.members}</div>}
                        </div>
                    )}
                    <TeamsView
                        teams={filteredTeams}
                        members={members}
                        modelsById={modelsById}
                        vendorsById={vendorsById}
                        expandedCategories={expandedCategories}
                        onToggleCategory={onToggleCategory}
                        onTeamUpdate={onTeamUpdate}
                        onTeamCreate={onTeamCreate}
                        onTeamDelete={onTeamDelete}
                        onTeamDuplicate={onTeamDuplicate}
                        onMemberUpdate={onMemberUpdate}
                        onMemberDelete={onMemberDelete}
                        onMemberCreate={onMemberCreate}
                        createTeamSignal={createTeamSignal}
                        modelFilter={teamModelFilter}
                        onClearModelFilter={onClearTeamModelFilter}
                        onFilterByModel={onFilterByModel}
                    />
                </>
            )}
        </div>
    );

    const right = !loading ? (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className={`font-label ${FONT_SIZE.XS} text-secondary tracking-widest pl-1`}>TEAM_INTEL</div>
                {(teamSearchQuery || savedFilter !== 'saved' || publicFilter !== 'all' || missingFieldsFilter.length > 0) && (
                    <button
                        onClick={onClearTeamFilters}
                        className={`${FONT_SIZE.XXS} text-destructive hover:text-destructive/80 font-bold tracking-wider transition-colors border-b border-destructive/30 hover:border-destructive/60 pb-0.5`}
                    >
                        CLEAR_FILTERS
                    </button>
                )}
            </div>

            <button
                onClick={onCreateTeam}
                className={`w-full py-3 bg-primary/20 border border-primary/50 rounded-lg text-primary font-bold tracking-widest ${FONT_SIZE.XS} hover:bg-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,255,136,0.2)]`}
            >
                <Plus size={14} />
                NEW_TEAM
            </button>

            <div className="bg-black/40 border border-white/10 cyber-chamfer-sm p-4 space-y-3">
                <div className={`font-label ${FONT_SIZE.XS} text-secondary tracking-widest mb-1`}>MODEL_FILTER</div>
                <div className="relative group">
                    <FallbackPicker
                        models={models}
                        vendorsById={vendorsById}
                        modelsById={modelsById}
                        value={teamModelFilter ?? undefined}
                        onChange={(val) => {
                            if (val) {
                                onFilterTeamsByModel(Number(val));
                            } else {
                                onClearTeamModelFilter();
                            }
                        }}
                    />
                    {teamModelFilter !== null && (
                        <button
                            onClick={onClearTeamModelFilter}
                            className={`absolute -top-6 right-0 ${FONT_SIZE.XXS} text-destructive hover:text-destructive/80 font-bold tracking-wider transition-colors border-b border-destructive/30 hover:border-destructive/60 pb-0.5`}
                        >
                            CLEAR
                        </button>
                    )}
                </div>
            </div>

            <div className="bg-black/40 border border-white/10 cyber-chamfer-sm p-4 space-y-3">
                <div className={`font-label ${FONT_SIZE.XS} text-secondary tracking-widest mb-1`}>TEAM_SEARCH</div>
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-white/40 group-focus-within:text-primary transition-colors" />
                    </div>
                    <input
                        type="text"
                        value={teamSearchQuery}
                        onChange={(e) => onTeamSearchChange(e.target.value)}
                        placeholder="FILTER_TEAMS..."
                        className={`w-full bg-black/60 border border-white/10 rounded-lg pl-9 pr-3 py-2 ${FONT_SIZE.SM} text-white placeholder:text-white/20 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-mono cyber-chamfer-sm`}
                    />
                </div>
                <div className={`${FONT_SIZE.XXS} text-white/30 font-mono mt-2 pl-1`}>
                    SEARCHES: NAME, CATCH_PHRASE, MEMBER_NAME, ROLE
                </div>
            </div>

            <div className="bg-black/40 border border-white/10 cyber-chamfer-sm p-4 space-y-3">
                <div className={`font-label ${FONT_SIZE.XS} text-secondary tracking-widest mb-1`}>SAVED_STATUS</div>
                <div className="grid grid-cols-3 gap-1 p-1 bg-black/60 rounded-lg border border-white/5">
                    {[
                        { id: 'saved', label: 'SAVED' },
                        { id: 'not-saved', label: 'UNSAVED' },
                        { id: 'all', label: 'ALL' }
                    ].map((opt) => {
                        const isActive = savedFilter === opt.id;
                        return (
                            <button
                                key={opt.id}
                                onClick={() => onSavedFilterChange(opt.id as any)}
                                className={`py-1.5 px-2 rounded ${FONT_SIZE.XXS} font-bold tracking-wider transition-all ${isActive
                                    ? 'bg-primary/20 text-primary shadow-[0_0_10px_rgba(0,255,136,0.1)] border border-primary/20'
                                    : 'text-white/40 hover:text-white/60 hover:bg-white/5'
                                    }`}
                            >
                                {opt.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="bg-black/40 border border-white/10 cyber-chamfer-sm p-4 space-y-3">
                <div className={`font-label ${FONT_SIZE.XS} text-secondary tracking-widest mb-1`}>PUBLIC_STATUS</div>
                <div className="grid grid-cols-3 gap-1 p-1 bg-black/60 rounded-lg border border-white/5">
                    {[
                        { id: 'all', label: 'ALL' },
                        { id: 'public', label: 'PUBLIC' },
                        { id: 'private', label: 'PRIVATE' }
                    ].map((opt) => {
                        const isActive = publicFilter === opt.id;
                        return (
                            <button
                                key={opt.id}
                                onClick={() => onPublicFilterChange(opt.id as any)}
                                className={`py-1.5 px-2 rounded ${FONT_SIZE.XXS} font-bold tracking-wider transition-all ${isActive
                                    ? 'bg-primary/20 text-primary shadow-[0_0_10px_rgba(0,255,136,0.1)] border border-primary/20'
                                    : 'text-white/40 hover:text-white/60 hover:bg-white/5'
                                    }`}
                            >
                                {opt.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="bg-black/40 border border-white/10 cyber-chamfer-sm p-4 space-y-3">
                <div className={`font-label ${FONT_SIZE.XS} text-amber-500/80 tracking-widest mb-1 flex items-center gap-2`}>
                    <AlertTriangle size={12} />
                    DATA_QUALITY
                </div>
                <div className="grid grid-cols-2 gap-2">
                    {[
                        { id: 'chair', label: 'NO_CHAIR' },
                        { id: 'watchdog', label: 'NO_WATCHDOG' },
                        { id: 'envoy', label: 'NO_ENVOY' },
                        { id: 'operatives', label: 'NO_OPS' },
                        { id: 'name', label: 'NO_NAME' },
                        { id: 'description', label: 'NO_DESC' },
                        { id: 'catch_phrase', label: 'NO_PHRASE' },
                        { id: 'bootstrap_prompt', label: 'NO_PROMPT' }
                    ].map(filter => {
                        const isActive = missingFieldsFilter.includes(filter.id);
                        return (
                            <button
                                key={filter.id}
                                onClick={() => {
                                    if (isActive) {
                                        onMissingFieldsFilterChange(missingFieldsFilter.filter(f => f !== filter.id));
                                    } else {
                                        onMissingFieldsFilterChange([...missingFieldsFilter, filter.id]);
                                    }
                                }}
                                className={`
                                    py-2 px-2 rounded border ${FONT_SIZE.TINY} font-bold tracking-wider transition-all
                                    flex items-center justify-center text-center
                                    ${isActive
                                        ? 'bg-amber-500/10 border-amber-500 text-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.2)]'
                                        : 'bg-white/5 border-white/5 text-white/40 hover:bg-white/10 hover:text-white/60'}
                                `}
                            >
                                {filter.label}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    ) : null;

    return (
        <TabShell
            left={left}
            main={main}
            right={right}
            leftPanelRef={leftPanelRef}
            scrollRootRef={scrollRootRef}
        />
    );
}
