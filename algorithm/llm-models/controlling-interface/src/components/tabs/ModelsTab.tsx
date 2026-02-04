import type { RefObject } from 'react';
import { Filter, X, Loader2 } from 'lucide-react';
import type { LLMModel, Team, TeamMember } from '../../types';
import { ModelSidebar } from '../ModelSidebar';
import { ModelTable } from '../ModelTable';
import { FilterPanel, type FilterState } from '../FilterPanel';
import { TabShell } from '../layout/TabShell';
import { FONT_SIZE } from '../../constants';
import { useAppData } from '../../context/AppDataContext';

interface ModelsTabProps {
    filteredModels: LLMModel[];
    searchQuery: string;
    onSearchChange: (query: string) => void;
    filters: FilterState;
    onFiltersChange: (filters: FilterState) => void;
    allTraits: string[];
    maxPrice: number;
    maxContext: number;
    modelIdFilter: number | null;
    onClearModelIdFilter: () => void;
    onEditModel: (model: LLMModel) => void;
    onDuplicateModel: (model: LLMModel) => void;
    onAddModel: () => void;
    onArchiveModel: (model: LLMModel) => void;
    onDeleteModel: (model: LLMModel) => void;
    onNavigateToTeam: (teamId: string) => void;
    onFallbackChange: (modelKey: string, fallbackId: string | null) => void;
    onTeamUpdate: (updatedTeam: Team, originalId: string) => void;
    onTeamDelete: (teamId: string) => void;
    onTeamDuplicate: (teamId: string) => Promise<Team | undefined>;
    onMemberUpdate: (updatedMember: TeamMember, originalId: string) => void;
    onMemberDelete: (memberId: string) => void;
    onMemberCreate: (member: TeamMember) => void;
    onFilterTeamsByModel: (modelId: number) => void;
    onOpenArchive: () => void;
    onExplore: () => void;
    scrollRootRef?: RefObject<HTMLDivElement>;
    leftPanelRef?: RefObject<HTMLDivElement>;
}

export function ModelsTab({
    filteredModels,
    searchQuery,
    onSearchChange,
    filters,
    onFiltersChange,
    allTraits,
    maxPrice,
    maxContext,
    modelIdFilter,
    onClearModelIdFilter,
    onEditModel,
    onDuplicateModel,
    onAddModel,
    onArchiveModel,
    onDeleteModel,
    onNavigateToTeam,
    onFallbackChange,
    onTeamUpdate,
    onTeamDelete,
    onTeamDuplicate,
    onMemberUpdate,
    onMemberDelete,
    onMemberCreate,
    onFilterTeamsByModel,
    onOpenArchive,
    onExplore,
    scrollRootRef,
    leftPanelRef
}: ModelsTabProps) {
    const {
        models,
        vendors,
        teams,
        members,
        vendorsById,
        modelsById,
        loading,
        errors,
        totals
    } = useAppData();

    const left = !loading && vendors.length > 0 ? (
        <ModelSidebar
            models={filteredModels}
            vendorsById={vendorsById}
            searchQuery={searchQuery}
            onSearchChange={onSearchChange}
            totalModels={totals.models}
            archivedCount={totals.archivedModels}
            onOpenArchive={onOpenArchive}
            onExplore={onExplore}
            scrollRootRef={scrollRootRef}
        />
    ) : null;

    const main = (
        <div className="relative min-w-0 max-w-7xl mx-auto">
            {loading ? (
                <div className="flex h-64 items-center justify-center text-primary">
                    <Loader2 className="animate-spin" size={32} />
                </div>
            ) : errors.models ? (
                <div className="cyber-panel cyber-chamfer-sm border border-destructive/40 p-6 text-destructive">
                    ERROR: {errors.models}
                </div>
            ) : (
                <div className="space-y-6">
                    {modelIdFilter !== null && (
                        <div className="cyber-panel cyber-chamfer-sm p-4 flex items-center justify-between border-primary/30 bg-primary/5">
                            <div className="flex items-center gap-3">
                                <Filter className="text-primary" size={20} />
                                <div>
                                    <div className={`${FONT_SIZE.XS} text-primary/70 font-mono mb-0.5`}>FILTERING BY MODEL</div>
                                    <div className={`${FONT_SIZE.LG} font-display text-white`}>
                                        {modelsById[String(modelIdFilter)]?.modelName || 'Unknown Model'}
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={onClearModelIdFilter}
                                className={`flex items-center gap-2 px-3 py-1.5 rounded border border-white/10 hover:border-white/30 hover:bg-white/5 transition-colors ${FONT_SIZE.SM} text-white/70 hover:text-white`}
                            >
                                <X size={14} />
                                CLEAR FILTER
                            </button>
                        </div>
                    )}
                    <ModelTable
                        models={filteredModels}
                        allModels={models}
                        vendorsById={vendorsById}
                        modelsById={modelsById}
                        onEdit={onEditModel}
                        onDuplicate={onDuplicateModel}
                        onAdd={onAddModel}
                        onArchive={onArchiveModel}
                        onDelete={onDeleteModel}
                        onNavigateToTeam={onNavigateToTeam}
                        onFallbackChange={onFallbackChange}
                        maxPrice={maxPrice}
                        maxContext={maxContext}
                        teams={teams}
                        members={members}
                        onTeamUpdate={onTeamUpdate}
                        onTeamDelete={onTeamDelete}
                        onTeamDuplicate={onTeamDuplicate}
                        onMemberUpdate={onMemberUpdate}
                        onMemberDelete={onMemberDelete}
                        onMemberCreate={onMemberCreate}
                        onFilterTeamsByModel={onFilterTeamsByModel}
                    />
                </div>
            )}
        </div>
    );

    const right = !loading && vendors.length > 0 ? (
        <FilterPanel
            filters={filters}
            onFiltersChange={onFiltersChange}
            allTraits={allTraits}
            maxPrice={maxPrice}
            vendors={vendors}
        />
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
