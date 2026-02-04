import { useState, type MouseEvent, useEffect, useMemo } from 'react';
import {
    Cpu,
    Archive,
    Trash2,
    Edit2,
    Copy,
    Users,
    Activity,
    Box,
    ChevronRight,
    Sparkles,
    Globe,
    Lock,
    Save,
    Filter,
    LayoutGrid,
    CheckCheck,
    Terminal,
    Eye,
    Zap,
    Code,
    Layers
} from 'lucide-react';
import { LLMModel, Vendor, Member, Team, TeamMember } from '../types';
import { FONT_SIZE } from '../constants';
import { FallbackPicker } from './FallbackPicker';
import { getVendorIcon } from '../utils/getVendorIcon';
import { ConfirmationModal } from './ConfirmationModal';
import { useMigrateMembersModel } from '../hooks/useMutations';
// Extracted components
import { TeamCard } from './TeamCard';
import { TeamStripCard } from './TeamStripCard';
import { TeamEditModal } from './TeamEditModal';
import { MemberEditModal } from './MemberEditModal';

interface ModelCardProps {
    model: LLMModel;
    vendorName: string;
    vendorsById: Record<string, Vendor>;
    modelsById: Record<string, LLMModel>;
    allModels: LLMModel[];
    onFallbackChange: (modelKey: string, fallbackId: string | null) => void;
    modelKey: string;
    onEdit: (model: LLMModel) => void;
    onDuplicate: (model: LLMModel) => void;
    onArchive: (model: LLMModel) => void;
    onDelete: (model: LLMModel) => void;
    maxPrice: number;
    maxContext: number;

    // Expansion & Usage
    isExpanded: boolean;
    isActive?: boolean;
    usage?: { count: number; teams: (Team & { members: Member[] })[] };
    onToggleExpand: () => void;
    onNavigateToTeam: (teamId: string) => void;
    onFilterTeamsByModel: (modelId: number) => void;

    // Team CRUD passed down
    onTeamUpdate: (updatedTeam: Team, originalId: string) => void;
    onTeamDelete: (teamId: string) => void;
    onTeamDuplicate: (teamId: string) => Promise<Team | undefined>;
    onMemberUpdate: (updatedMember: TeamMember, originalId: string) => void;
    onMemberDelete: (memberId: string) => void;
    onMemberCreate: (member: TeamMember) => void;
}

export function ModelCard({
    model,
    vendorName,
    vendorsById,
    modelsById,
    allModels,
    onFallbackChange,
    modelKey,
    onEdit,
    onDuplicate,
    onArchive,
    onDelete,
    maxPrice,
    maxContext,
    isExpanded,
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
    onMemberCreate
}: ModelCardProps) {
    const [confirmAction, setConfirmAction] = useState<'archive' | 'delete' | null>(null);

    // Usage Intel Filters
    const [usageFilterPublic, setUsageFilterPublic] = useState<'all' | 'public' | 'private'>('all');
    const [usageFilterSaved, setUsageFilterSaved] = useState<'all' | 'saved' | 'unsaved'>('all');
    const [activeUsageTab, setActiveUsageTab] = useState<string | null>(null); // Team ID

    // Team & Member Editing State
    const [editingTeam, setEditingTeam] = useState<Team | null>(null);
    const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
    const [isCreatingMember, setIsCreatingMember] = useState(false);
    const [expandedMembers, setExpandedMembers] = useState<Set<string>>(new Set());
    const [showMigrationModal, setShowMigrationModal] = useState(false);
    const [targetModelId, setTargetModelId] = useState<string | null>(null);

    const migrateMutation = useMigrateMembersModel();

    const filteredUsageTeams = useMemo(() => {
        if (!usage?.teams) return [];
        return usage.teams.filter(t => {
            if (usageFilterPublic === 'public' && !t.is_public) return false;
            if (usageFilterPublic === 'private' && t.is_public) return false;
            if (usageFilterSaved === 'saved' && !t.is_saved) return false;
            if (usageFilterSaved === 'unsaved' && t.is_saved) return false;
            return true;
        });
    }, [usage?.teams, usageFilterPublic, usageFilterSaved]);

    // Calculate metrics
    const hasPricing = !!model.pricing && model.pricing.prompt !== undefined && model.pricing.completion !== undefined;
    const isFree = hasPricing && model.pricing?.prompt === 0 && model.pricing?.completion === 0;
    const totalPrice = hasPricing ? (model.pricing?.prompt ?? 0) + (model.pricing?.completion ?? 0) : 0;

    const paramsValue = typeof model.parameter_count_b === 'number' ? model.parameter_count_b : Number.parseFloat(String(model.parameter_count_b || '0'));
    const hasParamsValue = Number.isFinite(paramsValue);

    const contextValue = (model.contextK === null || model.contextK === undefined || (typeof model.contextK === 'string' && model.contextK === ''))
        ? Number.NaN
        : Number(model.contextK);
    const hasContextValue = Number.isFinite(contextValue);

    const displayName = model.name_within_family?.trim() || model.modelName;
    const usageTeamsCount = usage?.teams.length ?? 0;
    const usageMembersCount = usage?.count ?? 0;

    const handleCardClick = (event: MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement;
        if (target.closest('[data-model-action]')) return;
        onToggleExpand();
    };

    // Keep active tab aligned with filtered usage teams.
    useEffect(() => {
        if (!isExpanded) return;
        if (!usage || usage.teams.length === 0 || filteredUsageTeams.length === 0) {
            if (activeUsageTab !== null) setActiveUsageTab(null);
            return;
        }
        if (!activeUsageTab || !filteredUsageTeams.some(team => team.id === activeUsageTab)) {
            setActiveUsageTab(filteredUsageTeams[0].id);
        }
    }, [isExpanded, usage, filteredUsageTeams, activeUsageTab]);

    // Get currently selected team data
    const selectedTeamRaw = filteredUsageTeams.find(t => t.id === activeUsageTab);
    // Ensure selectedTeam members are cast to TeamMember if needed, or use as is
    // The props say `members: Member[]` but we treat them as `TeamMember` (alias)
    const selectedTeam = selectedTeamRaw as (Team & { members: TeamMember[] }) | undefined;

    const modelId = model.id;
    const canFilterTeams = typeof modelId === 'number';

    // Handlers for TeamCard
    const handleToggleMember = (memberId: string) => {
        setExpandedMembers(prev => {
            const isSelected = prev.has(memberId);
            if (isSelected && prev.size === 1) return new Set();
            return new Set([memberId]);
        });
    };

    return (
        <div
            className={`
                group relative flex flex-col items-stretch
                ${isExpanded ? 'w-full min-h-[400px]' : 'h-full aspect-[4/5]'}
                ${isActive ? 'cyber-border cyber-glow bg-black/40' : 'border border-border/40 bg-card/20 hover:border-border/80 hover:bg-card/30'}
                backdrop-blur-md rounded-xl overflow-hidden transition-all duration-300
            `}
            onClick={!isExpanded ? handleCardClick : undefined}
        >
            {/* Ambient Background Glow */}
            <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-secondary/5 rounded-full blur-[80px]" />
            </div>

            {/* Main Content Container */}
            <div className={`relative flex flex-col h-full bg-gradient-to-b from-white/5 to-transparent ${isExpanded ? 'p-8' : 'p-5'}`}>

                {/* Header Section */}
                <div className="flex justify-between items-start gap-4 mb-4">
                    <div className="flex items-start gap-3 min-w-0">
                        {/* Vendor Icon */}
                        <div className={`relative flex-shrink-0 ${isExpanded ? 'w-16 h-16' : 'w-10 h-10'} rounded-lg bg-black/50 border border-white/10 p-1.5 overflow-hidden transition-all duration-300 group-hover:border-primary/30`}>
                            <img
                                src={getVendorIcon(vendorName, '')}
                                alt={vendorName}
                                className="w-full h-full object-contain opacity-90 group-hover:scale-110 transition-transform duration-500"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = '/llm-icons/ai-placeholder.png';
                                }}
                            />
                        </div>

                        {/* Title & Badges */}
                        <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <h3 className={`font-display tracking-wide text-white truncate transition-all duration-300 ${isExpanded ? FONT_SIZE.XXXL : `${FONT_SIZE.LG} group-hover:text-primary`}`}>
                                    {displayName}
                                </h3>
                                {model.active === false && (
                                    <span className={`px-1.5 py-0.5 ${FONT_SIZE.XXS} font-bold bg-yellow-500/20 text-yellow-500 border border-yellow-500/30 rounded`}>
                                        ARCHIVED
                                    </span>
                                )}
                            </div>
                            <div className={`flex flex-wrap gap-2 items-center ${FONT_SIZE.XS} text-white/40 font-mono`}>
                                <span className="text-white/30">#{model.id}</span>
                                <span className="text-white/20">•</span>
                                <span>{model.api_id}</span>
                                {hasParamsValue && (
                                    <>
                                        <span className="text-white/20">•</span>
                                        <span className="flex items-center gap-1">
                                            <Cpu size={10} />
                                            {paramsValue}B
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons (Top Right) */}
                    <div className={`flex items-center gap-1 transition-opacity duration-200 ${isExpanded || isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} data-model-action>
                        {isExpanded ? (
                            <>
                                <ActionButton icon={Edit2} onClick={() => onEdit(model)} color="hover:text-blue-400 hover:border-blue-400/30" />
                                <ActionButton icon={Copy} onClick={() => onDuplicate(model)} color="hover:text-green-400 hover:border-green-400/30" />
                                <ActionButton icon={model.active === false ? Box : Archive} onClick={() => setConfirmAction('archive')} color="hover:text-amber-400 hover:border-amber-400/30" />
                                <ActionButton icon={Trash2} onClick={() => setConfirmAction('delete')} color="hover:text-red-400 hover:border-red-400/30" />
                                <button
                                    onClick={(e) => { e.stopPropagation(); onToggleExpand(); }}
                                    className="ml-2 p-2 rounded-lg border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                                >
                                    <ChevronRight size={16} className="rotate-180" />
                                </button>
                            </>
                        ) : (
                            <div className="flex items-center gap-1.5">
                                <div className="border border-white/10 bg-black/40 rounded px-1.5 py-0.5 text-[10px] font-mono text-white/40">
                                    DETAILS
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Description & Traits */}
                <div className={`space-y-4 ${isExpanded ? 'mb-8' : 'mb-4 flex-1'}`}>
                    <div className={`text-white/60 font-sans leading-relaxed ${isExpanded ? `${FONT_SIZE.MD} max-w-3xl` : `${FONT_SIZE.XS} line-clamp-2`}`}>
                        {model.description || `${model.modelFamily} SERIES MODEL`}
                    </div>

                    {/* Stats & Capability Matrix */}
                    <div className={`grid ${isExpanded ? 'grid-cols-4 gap-8' : 'grid-cols-2 gap-3'} mt-auto`}>
                        {/* Column 1: Core Stats */}
                        <div className="space-y-3">
                            <QuickStat label="CONTEXT" value={hasContextValue ? contextValue : 0} max={maxContext} suffix="K" isCurrency={false} />

                            {isFree ? (
                                <div className="p-3 rounded-lg border border-emerald-500/20 bg-emerald-500/10 flex items-center justify-center gap-2 group/free">
                                    <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
                                    <span className="font-display font-medium text-lg bg-gradient-to-r from-emerald-200 to-emerald-500 bg-clip-text text-transparent">
                                        FREE
                                    </span>
                                </div>
                            ) : (
                                <QuickStat label="PRICE / 1M" value={hasPricing ? totalPrice : 0} max={maxPrice} isCurrency={true} />
                            )}

                            {isExpanded && (
                                <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
                                    <MetricBarSmall label="INPUT" value={model.pricing?.prompt ?? 0} prefix="$" suffix="/1M" />
                                    <MetricBarSmall label="OUTPUT" value={model.pricing?.completion ?? 0} prefix="$" suffix="/1M" />
                                </div>
                            )}
                        </div>

                        {/* Column 2: Scores */}
                        <div className="space-y-3">
                            <ScoreBar label="EFFICIENCY" value={model.efficiencyScore} colorClass="bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                            <ScoreBar label="CREATIVITY" value={model.creativeScore} colorClass="bg-primary shadow-[0_0_10px_rgba(255,51,102,0.5)]" />
                            <ScoreBar label="REASONING" value={model.deductiveScore} colorClass="bg-accent-tertiary shadow-[0_0_10px_rgba(147,51,234,0.5)]" />

                            {usage && (
                                <div className="pt-3 mt-1 border-t border-white/5 grid grid-cols-2 gap-2">
                                    <div className="bg-white/5 rounded p-2 flex flex-col items-center justify-center text-center group/stat hover:bg-white/10 transition-colors">
                                        <span className={`text-white/40 ${FONT_SIZE.XXS} font-mono mb-1`}>TEAMS</span>
                                        <span className={`text-white font-mono font-bold ${FONT_SIZE.MD} flex items-center gap-1.5 group-hover/stat:text-primary transition-colors`}>
                                            <LayoutGrid size={12} className="text-primary/70 group-hover/stat:text-primary" />
                                            {usageTeamsCount}
                                        </span>
                                    </div>
                                    <div className="bg-white/5 rounded p-2 flex flex-col items-center justify-center text-center group/stat hover:bg-white/10 transition-colors">
                                        <span className={`text-white/40 ${FONT_SIZE.XXS} font-mono mb-1`}>MEMBERS</span>
                                        <span className={`text-white font-mono font-bold ${FONT_SIZE.MD} flex items-center gap-1.5 group-hover/stat:text-primary transition-colors`}>
                                            <Users size={12} className="text-primary/70 group-hover/stat:text-primary" />
                                            {usageMembersCount}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Column 3: Capabilities & Focus (Only when expanded) */}
                        {isExpanded && (
                            <div className="space-y-4">
                                {/* Capabilities */}
                                <div className="space-y-2">
                                    <h4 className={`${FONT_SIZE.XXS} font-bold text-white/30 uppercase tracking-widest`}>Capabilities</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {model.capabilities && model.capabilities.length > 0 ? (
                                            model.capabilities.map((cap, i) => (
                                                <CapabilityBadge key={i} capability={cap} />
                                            ))
                                        ) : (
                                            <div className={`${FONT_SIZE.XS} text-white/20 italic`}>Standard text generation</div>
                                        )}
                                        {/* Fallback Badge if defined */}
                                        {model.fallback_model_id && (
                                            <div className="px-2 py-1 rounded bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-mono tracking-wider flex items-center gap-1.5">
                                                <Zap size={10} />
                                                FALLBACK
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Best For */}
                                <div className="space-y-2">
                                    <h4 className={`${FONT_SIZE.XXS} font-bold text-white/30 uppercase tracking-widest`}>Best For</h4>
                                    <div className="space-y-1.5">
                                        {model.bestFor ? (
                                            model.bestFor.split(',').map((item, i) => (
                                                <div key={i} className={`flex items-start gap-2 ${FONT_SIZE.XS} text-white/70`}>
                                                    <span className="text-primary mt-1">
                                                        <CheckCheck size={12} />
                                                    </span>
                                                    <span className="leading-tight">{item.trim()}</span>
                                                </div>
                                            ))
                                        ) : (
                                            <div className={`${FONT_SIZE.XS} text-white/20 italic`}>General purpose tasks</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Column 4: Personality Matrix (Only when expanded) */}
                        {isExpanded && (
                            <div className="space-y-4">
                                {/* Personality Traits */}
                                <div className="space-y-2">
                                    <h4 className={`${FONT_SIZE.XXS} font-bold text-white/30 uppercase tracking-widest`}>Personality</h4>
                                    <div className="flex flex-wrap gap-1.5">
                                        {model.personalityTraits ? (
                                            model.personalityTraits.split(',').slice(0, 6).map((trait, i) => (
                                                <TraitChip key={i} trait={trait.trim()} type="personality" />
                                            ))
                                        ) : (
                                            <div className={`${FONT_SIZE.XS} text-white/20 italic`}>Neutral persona</div>
                                        )}
                                    </div>
                                </div>

                                {/* Analytical Traits */}
                                <div className="space-y-2">
                                    <h4 className={`${FONT_SIZE.XXS} font-bold text-white/30 uppercase tracking-widest`}>Analytical Style</h4>
                                    <div className="flex flex-wrap gap-1.5">
                                        {model.analyticalTraits ? (
                                            model.analyticalTraits.split(',').slice(0, 6).map((trait, i) => (
                                                <TraitChip key={i} trait={trait.trim()} type="analytical" />
                                            ))
                                        ) : (
                                            <div className={`${FONT_SIZE.XS} text-white/20 italic`}>Standard analysis</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>


                </div>
            </div>

            {/* Fallback Selection */}
            {isExpanded && (
                <div className="pt-6 mt-6 border-t border-white/5">
                    <div className="flex items-center gap-4">
                        <div className="p-2 rounded bg-white/5 text-white/40">
                            <Activity size={16} />
                        </div>
                        <div className="flex-1">
                            <div className={`font-label ${FONT_SIZE.XS} text-white/40 mb-1`}>FALLBACK_CHAIN</div>
                            <FallbackPicker
                                value={model.fallback_model_id ? String(model.fallback_model_id) : undefined}
                                favorModel={model}
                                models={allModels}
                                vendorsById={vendorsById}
                                modelsById={modelsById}
                                onChange={(newId) => onFallbackChange(modelKey, newId)}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Usage Intel Section - Horizontal Scroll & Full Team Card */}
            {isExpanded && usage && usage.count > 0 && (
                <div className="mt-8">
                    {/* Header & Filters */}
                    <div className="flex flex-col gap-4 mb-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Users className="text-primary" size={18} />
                                <h4 className={`font-display ${FONT_SIZE.LG} text-white tracking-wide`}>USAGE_INTEL</h4>
                                <span className={`bg-primary/20 text-primary px-2 py-0.5 rounded ${FONT_SIZE.XS} font-mono font-bold`}>
                                    {filteredUsageTeams.length} / {usage.count} TEAMS
                                </span>
                            </div>
                            <button
                                onClick={() => {
                                    if (!canFilterTeams || modelId === undefined) return;
                                    onFilterTeamsByModel(modelId);
                                }}
                                disabled={!canFilterTeams}
                                className={`${FONT_SIZE.XS} font-mono transition-colors flex items-center gap-1 border border-primary/20 bg-primary/5 px-2 py-1 rounded ${canFilterTeams ? 'text-primary/70 hover:text-primary' : 'text-white/30 cursor-not-allowed opacity-50'}`}
                            >
                                <Filter size={12} />
                                FILTER TEAMS VIEW
                            </button>
                        </div>

                        {/* Filter Controls */}
                        <div className={`flex items-center gap-2 ${FONT_SIZE.XS} font-mono`}>
                            <span className="text-white/40 uppercase tracking-widest mr-2">Filters:</span>
                            {/* Public/Private Toggle */}
                            <button
                                onClick={() => setUsageFilterPublic(prev => prev === 'all' ? 'public' : prev === 'public' ? 'private' : 'all')}
                                className={`px-2 py-1 flex items-center gap-1.5 rounded border transition-colors ${usageFilterPublic !== 'all' ? 'border-primary/50 bg-primary/10 text-primary' : 'border-white/10 bg-black/20 text-white/40 hover:text-white/60'}`}
                            >
                                {usageFilterPublic === 'all' && <Globe size={10} />}
                                {usageFilterPublic === 'public' && <Globe size={10} />}
                                {usageFilterPublic === 'private' && <Lock size={10} />}
                                {usageFilterPublic === 'all' ? 'ALL ACCESS' : usageFilterPublic.toUpperCase()}
                            </button>

                            {/* Saved/Unsaved Toggle */}
                            <button
                                onClick={() => setUsageFilterSaved(prev => prev === 'all' ? 'saved' : prev === 'saved' ? 'unsaved' : 'all')}
                                className={`px-2 py-1 flex items-center gap-1.5 rounded border transition-colors ${usageFilterSaved !== 'all' ? 'border-amber-400/50 bg-amber-400/10 text-amber-400' : 'border-white/10 bg-black/20 text-white/40 hover:text-white/60'}`}
                            >
                                {usageFilterSaved === 'saved' ? <Save size={10} /> : <Box size={10} />}
                                {usageFilterSaved === 'all' ? 'ALL STATUS' : usageFilterSaved.toUpperCase()}
                            </button>

                            <div className="flex-1" />
                            <button
                                onClick={() => setShowMigrationModal(true)}
                                className={`${FONT_SIZE.XS} font-mono text-amber-400/70 hover:text-amber-400 transition-colors flex items-center gap-1 border border-amber-400/20 bg-amber-400/5 px-2 py-1 rounded`}
                            >
                                MIGRATE MEMBERS
                            </button>
                            <button
                                onClick={() => activeUsageTab && onNavigateToTeam(activeUsageTab)}
                                disabled={!activeUsageTab}
                                className={`${FONT_SIZE.XS} font-mono text-white/40 hover:text-white transition-colors flex items-center gap-1 disabled:opacity-20`}
                            >
                                GO TO TEAM <ChevronRight size={12} />
                            </button>
                        </div>
                    </div>

                    {/* Horizontal Team List */}
                    <div className="flex overflow-x-auto gap-3 pb-4 mb-4 scrollbar-hide snap-x px-1">
                        {filteredUsageTeams.map(team => {
                            // Filter members who use this model
                            const modelMembers = team.members?.filter(m => m.model_id === model.id) || [];
                            return (
                                <div key={team.id} className="snap-start flex-shrink-0 w-[240px]">
                                    <TeamStripCard
                                        team={team}
                                        members={modelMembers}
                                        category={team.category}
                                        isActive={activeUsageTab === team.id}
                                        onClick={() => setActiveUsageTab(team.id)}
                                    />
                                </div>
                            );
                        })}
                    </div>

                    {/* Selected Team Details */}
                    {selectedTeam && (
                        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                            <TeamCard
                                team={selectedTeam}
                                members={selectedTeam.members}
                                vendorsById={vendorsById}
                                modelsById={modelsById}
                                isExpanded={true}
                                expandedMembers={expandedMembers}
                                onToggle={() => { }} // Always expanded here
                                onToggleMember={handleToggleMember}
                                onEdit={() => setEditingTeam(selectedTeam)}
                                onDelete={() => onTeamDelete(selectedTeam.id)}
                                onDuplicate={() => onTeamDuplicate(selectedTeam.id)}
                                onMemberEdit={(member) => {
                                    setEditingMember(member);
                                    setIsCreatingMember(false);
                                }}
                                onMemberAdd={() => {
                                    setEditingMember(null);
                                    setIsCreatingMember(true);
                                }}
                                onMemberDelete={onMemberDelete}
                                onMemberUpdate={onMemberUpdate}
                            />
                        </div>
                    )}
                </div>
            )}


            {/* Modals */}
            <ConfirmationModal
                isOpen={confirmAction !== null}
                onClose={() => setConfirmAction(null)}
                onConfirm={() => {
                    if (confirmAction === 'archive') onArchive(model);
                    if (confirmAction === 'delete') onDelete(model);
                }}
                title={confirmAction === 'archive' ? 'ARCHIVE_MODEL?' : 'DELETE_MODEL?'}
                message={
                    confirmAction === 'archive' ? (
                        <>
                            Are you sure you want to archive <span className="text-white font-bold">{displayName}</span>? It will be moved to the archive list and can be restored later.
                        </>
                    ) : (
                        <>
                            Are you sure you want to delete <span className="text-white font-bold">{displayName}</span>? <br /><br />
                            <span className="text-red-400 font-bold">WARNING: This action cannot be undone.</span>
                        </>
                    )
                }
                confirmLabel={confirmAction === 'archive' ? 'ARCHIVE' : 'DELETE'}
                variant={confirmAction === 'archive' ? 'warning' : 'danger'}
            />

            <TeamEditModal
                isOpen={!!editingTeam}
                team={editingTeam}
                isCreating={false}
                onClose={() => setEditingTeam(null)}
                onSave={(updatedTeam) => {
                    if (editingTeam) {
                        onTeamUpdate(updatedTeam, editingTeam.id);
                    }
                    setEditingTeam(null);
                }}
            />

            <MemberEditModal
                isOpen={!!editingMember || isCreatingMember}
                member={editingMember}
                teams={usage?.teams || []} // Only pass usage teams? Or all teams? Ideally all teams but we don't have them here. 
                // Wait, Modals might need ALL teams if moving member? 
                // Currently MemberEditModal takes `teams` prop for "Team Assignment"?
                // If we are in "Usage Intel" of a specific model, we might only be editing members OF the teams using this model.
                // But `MemberEditModal` dropdown needs options.
                // We don't have `teams` (all teams) prop in `ModelCard`.
                // However, `MemberEditModal` uses `teams` for the dataset of teams. 
                // If we restrict to `usage.teams`, user can only switch between teams that use this model?
                // Probably fine for this context. Or maybe redundant since we are in a Team context.
                modelsById={modelsById}
                vendorsById={vendorsById}
                isCreating={isCreatingMember}
                onClose={() => {
                    setEditingMember(null);
                    setIsCreatingMember(false);
                }}
                onSave={(member) => {
                    if (isCreatingMember) {
                        // We need to attach team_id if creating from here?
                        // `MemberEditModal` usually handles it if we pass default team or user selects one.
                        // If we are inside `selectedTeam` context, we should pre-fill team_id?
                        // `MemberEditModal` logic: `const [currTeam, setCurrTeam] = useState(teams.find(t => t.id === member?.team_id) || teams[0]);`
                        // So if we pass `usage.teams` and one is selected...
                        // But wait, `onMemberCreate` needs a `TeamMember`.
                        if (selectedTeam && !member.team_id) {
                            member.team_id = selectedTeam.id;
                        }
                        onMemberCreate(member);
                    } else if (editingMember) {
                        onMemberUpdate(member, editingMember.id);
                    }
                    setEditingMember(null);
                    setIsCreatingMember(false);
                }}
            />

            <ConfirmationModal
                isOpen={showMigrationModal}
                onClose={() => {
                    setShowMigrationModal(false);
                    setTargetModelId(null);
                }}
                onConfirm={() => {
                    if (targetModelId && model.id) {
                        migrateMutation.mutate(
                            { fromModelId: model.id, toModelId: Number(targetModelId) },
                            {
                                onSuccess: () => {
                                    setShowMigrationModal(false);
                                    setTargetModelId(null);
                                }
                            }
                        );
                    }
                }}
                title="MIGRATE_MEMBERS?"
                message={
                    <div className="space-y-4">
                        <p>
                            Migrate all members currently using <span className="text-white font-bold">{displayName}</span> to a different model?
                        </p>
                        <div className="bg-white/5 border border-white/5 rounded-lg p-3">
                            <div className={`font-label ${FONT_SIZE.TINY} tracking-widest text-white/40 mb-2`}>TARGET_MODEL</div>
                            <FallbackPicker
                                models={allModels.filter(m => m.id !== model.id)}
                                vendorsById={vendorsById}
                                modelsById={modelsById}
                                value={targetModelId ?? undefined}
                                onChange={(id) => setTargetModelId(id ?? null)}
                            />
                        </div>
                        <p className={`text-amber-400 ${FONT_SIZE.XS}`}>
                            This will update {usage?.count || 0} team member(s) across {usage?.teams.length || 0} team(s).
                        </p>
                    </div>
                }
                confirmLabel="MIGRATE"
                variant="warning"
            />

        </div>
    );
}

// Helpers
function ActionButton({ icon: Icon, onClick, color }: { icon: any, onClick: (e: any) => void, color: string }) {
    return (
        <button
            onClick={(e) => {
                e.stopPropagation();
                onClick(e);
            }}
            className={`p-2 rounded-lg border border-white/10 bg-black/40 text-white/50 transition-all duration-200 ${color}`}
            data-model-action
            title="Action"
        >
            <Icon size={14} />
        </button>
    )
}

function QuickStat({ label, value, max, isCurrency, suffix = '', color = 'bg-primary' }: { label: string, value: number, max: number, isCurrency?: boolean, suffix?: string, color?: string }) {
    const safeMax = max > 0 ? max : 1;
    const ratio = Math.min(100, Math.max(5, (value / safeMax) * 100)); // Min 5% so it shows
    const displayValue = isCurrency ? `$${(value / 1000000).toFixed(4)}` : `${value}${suffix}`;

    return (
        <div className="space-y-1">
            <div className={`flex justify-between items-center ${FONT_SIZE.XXS} uppercase tracking-wider font-medium text-white/50`}>
                <span>{label}</span>
                <span className="text-white/80 font-mono">
                    {displayValue}
                </span>
            </div>
            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div className={`h-full ${color} shadow-[0_0_8px_currentColor] transition-all duration-500`} style={{ width: `${ratio}%` }} />
            </div>
        </div>
    )
}

function MetricBarSmall({ label, value, prefix = '', suffix = '' }: { label: string, value: string | number, prefix?: string, suffix?: string }) {
    return (
        <div className={`flex justify-between items-center ${FONT_SIZE.SM}`}>
            <span className={`text-white/50 font-mono ${FONT_SIZE.XS} tracking-wide`}>{label}</span>
            <span className="text-white font-mono">{prefix}{value}{suffix}</span>
        </div>
    );
}



function ScoreBar({
    label,
    value,
    colorClass
}: {
    label: string;
    value: number | null;
    colorClass: string;
}) {
    const hasValue = value !== null && value !== undefined && Number.isFinite(value);
    const score = hasValue ? value : 0;
    const ratio = hasValue ? normalizeValue(score, 100, false) : 0;

    return (
        <div className="space-y-1 group">
            <div className={`flex items-center justify-between ${FONT_SIZE.XS} text-muted-foreground`}>
                <span className={`font-label ${FONT_SIZE.XS} tracking-widest text-white/40`}>{label}</span>
                <span className={`text-white font-mono ${FONT_SIZE.XS}`}>{hasValue ? score : 'N/A'}</span>
            </div>
            <IndicatorBar ratio={ratio} highClass={colorClass} heightClass="h-1" minPercent={hasValue ? 5 : 0} />
        </div>
    );
}

function IndicatorBar({
    ratio,
    highClass,
    heightClass,
    minPercent = 6
}: {
    ratio: number;
    highClass: string;
    heightClass: string;
    minPercent?: number;
}) {
    const clamped = Math.min(1, Math.max(0, ratio));
    const percent = Math.min(100, Math.max(minPercent, clamped * 100));
    // Simple override for now
    const barClass = highClass;

    return (
        <div className={`${heightClass} w-full bg-white/5 rounded-full overflow-hidden`}>
            <div
                className={`${heightClass} ${barClass} rounded-full transition-all duration-500`}
                style={{ width: `${percent}%` }}
            />
        </div>
    );
}

function normalizeValue(value: number, maxValue: number, useLog: boolean) {
    if (!Number.isFinite(value) || value <= 0) return 0;
    if (!Number.isFinite(maxValue) || maxValue <= 0) return 0;
    const raw = useLog
        ? Math.log10(value + 1) / Math.log10(maxValue + 1)
        : value / maxValue;
    return Math.min(1, Math.max(0, raw));
}

function TraitChip({ trait, type }: { trait: string; type: 'personality' | 'analytical' }) {
    const isPersonality = type === 'personality';
    const colorClass = isPersonality
        ? 'bg-blue-500/10 text-blue-300 border-blue-500/20 hover:bg-blue-500/20'
        : 'bg-purple-500/10 text-purple-300 border-purple-500/20 hover:bg-purple-500/20';

    return (
        <span className={`
            px-2 py-1 rounded text-[10px] font-mono tracking-wide border transition-colors cursor-default
            ${colorClass}
        `}>
            {trait.toUpperCase()}
        </span>
    );
}

function CapabilityBadge({ capability }: { capability: string }) {
    let icon = <Terminal size={10} />;
    let label = capability.replace(/_/g, ' ').toUpperCase();
    let colorClass = 'bg-white/5 text-white/50 border-white/10';

    if (capability.toLowerCase().includes('vision') || capability.toLowerCase().includes('image')) {
        icon = <Eye size={10} />;
        colorClass = 'bg-pink-500/10 text-pink-300 border-pink-500/20';
    } else if (capability.toLowerCase().includes('function') || capability.toLowerCase().includes('tool')) {
        icon = <Zap size={10} />;
        colorClass = 'bg-amber-500/10 text-amber-300 border-amber-500/20';
    } else if (capability.toLowerCase().includes('code') || capability.toLowerCase().includes('json')) {
        icon = <Code size={10} />;
        colorClass = 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20';
    } else if (capability.toLowerCase().includes('context') || capability.toLowerCase().includes('long')) {
        icon = <Layers size={10} />;
        colorClass = 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20';
    }

    return (
        <div className={`
            flex items-center gap-1.5 px-2 py-1 rounded border ${colorClass}
            text-[10px] font-bold tracking-wider
        `}>
            {icon}
            {label}
        </div>
    );
}
