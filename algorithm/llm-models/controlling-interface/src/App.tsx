import { useState, useEffect, useMemo, useRef } from 'react';
import { LLMModel, Team, TeamMember, TeamCategory, AppUser } from './types';
import { useExploreModels, useUpdateUser } from './hooks/useQueries';
import { useModelSettings } from './hooks/useModelSettings';
import { FONT_SIZE } from './constants';
import { useUpdateModel, useCreateModel, useArchiveRestoreModel, useDeleteModel, useUpdateModels, useCreateTeam, useUpdateTeam, useDeleteTeam, useDuplicateTeam, useCreateMember, useUpdateMember, useDeleteMember } from './hooks/useMutations';
import { EditModal } from './components/EditModal';
import { FilterState } from './components/FilterPanel';
import { ArchivedModal } from './components/ArchivedModal';
import { Compass, Box, LayoutGrid, Users, Activity, Tags as TagIcon } from 'lucide-react';
import { GlitchLoader } from './components/GlitchLoader';
import { CreateSessionModal } from './components/CreateSessionModal';
import { ModelsTab } from './components/tabs/ModelsTab';
import { ExploreTab } from './components/tabs/ExploreTab';
import { TeamsTab } from './components/tabs/TeamsTab';
import { UsersTab } from './components/tabs/UsersTab';
import { SessionsTab } from './components/tabs/SessionsTab';
import { TagsTab } from './components/tabs/TagsTab';
import { AppDataProvider, useAppData } from './context/AppDataContext';


const STORAGE_KEYS = {
    activeTab: 'cabal.ui.activeTab',
    scroll: {
        models: 'cabal.ui.scroll.models',
        teams: 'cabal.ui.scroll.teams'
    }
};

const readStorage = (key: string) => {
    if (typeof window === 'undefined') return null;
    try {
        return window.localStorage.getItem(key);
    } catch {
        return null;
    }
};

const writeStorage = (key: string, value: string) => {
    if (typeof window === 'undefined') return;
    try {
        window.localStorage.setItem(key, value);
    } catch {
        // ignore storage errors (private mode, quota, etc)
    }
};

function App() {
    return (
        <AppDataProvider>
            <AppContent />
        </AppDataProvider>
    );
}

function AppContent() {
    const { data: exploreModelsData } = useExploreModels();
    const {
        models,
        archivedModels,
        vendors,
        teams,
        members,
        sessions,
        users,
        vendorsById,
        modelsById,
        loading
    } = useAppData();

    // Mutations
    const updateModelMutation = useUpdateModel();
    const createModelMutation = useCreateModel();

    const updateModelsMutation = useUpdateModels();

    // New CRUD Mutations
    const createTeamMutation = useCreateTeam();
    const updateTeamMutation = useUpdateTeam();
    const deleteTeamMutation = useDeleteTeam();
    const duplicateTeamMutation = useDuplicateTeam();

    const createMemberMutation = useCreateMember();
    const updateMemberMutation = useUpdateMember();
    const deleteMemberMutation = useDeleteMember();

    const updateUserMutation = useUpdateUser();

    const archiveRestoreMutation = useArchiveRestoreModel();
    const deleteModelMutation = useDeleteModel();

    // Explore Logic
    const [hideOwned, setHideOwned] = useState(true);
    const [hideIrrelevant, setHideIrrelevant] = useState(true);
    const [exploreSearchQuery, setExploreSearchQuery] = useState('');
    const [createdAfter, setCreatedAfter] = useState<number | null>(null);

    // Users Logic
    const [userSearchQuery, setUserSearchQuery] = useState('');
    const [userPlanFilter, setUserPlanFilter] = useState<string[]>([]);
    const [userTypeFilter, setUserTypeFilter] = useState<string[]>([]);

    // Sessions Logic
    const [sessionSearchQuery, setSessionSearchQuery] = useState('');
    const [sessionStatusFilter, setSessionStatusFilter] = useState<'all' | 'Live' | 'Pending' | 'Halted'>('all');
    const [isCreateSessionOpen, setIsCreateSessionOpen] = useState(false);

    // Settings Hook
    const { settings: modelSettings, updateSettings } = useModelSettings();

    const { ownedApiIds, exploreStats, latestOwnedDate, filteredExploreModels } = useMemo(() => {
        const owned = new Set<string>();
        [...models, ...archivedModels].forEach(m => {
            if (m.api_id) owned.add(m.api_id);
        });

        const remoteModels = exploreModelsData?.data || [];

        // Calculate last owned date
        let maxOwnedDate = 0;
        remoteModels.forEach(m => {
            if (owned.has(m.id)) {
                if (m.created > maxOwnedDate) maxOwnedDate = m.created;
            }
        });

        // Helper to check match
        const matchesSearch = (m: any) => {
            if (!exploreSearchQuery) return true;
            const q = exploreSearchQuery.toLowerCase();
            return m.name.toLowerCase().includes(q) || m.id.toLowerCase().includes(q);
        };

        const matchesDate = (m: any) => {
            if (createdAfter === null) return true;
            return m.created >= createdAfter;
        }

        const isIrrelevant = (m: any) => {
            if (!hideIrrelevant) return false;
            return modelSettings?.irrelevant_models_api_keys?.includes(m.id);
        }

        const total = remoteModels.length;
        const ownedCount = remoteModels.filter(m => owned.has(m.id)).length;

        // Shown count should reflect ALL filters: hideOwned AND search AND date AND irrelevant
        const filteredExploreModels = remoteModels.filter(m => {
            if (hideOwned && owned.has(m.id)) return false;
            if (isIrrelevant(m)) return false;
            if (!matchesSearch(m)) return false;
            if (!matchesDate(m)) return false;
            return true;
        });

        return {
            ownedApiIds: owned,
            exploreStats: { total, owned: ownedCount, shown: filteredExploreModels.length },
            latestOwnedDate: maxOwnedDate || undefined,
            filteredExploreModels
        };
    }, [models, archivedModels, exploreModelsData, hideOwned, exploreSearchQuery, createdAfter, hideIrrelevant, modelSettings]);


    // Helpers
    const getVendorName = (vendorId: number | string | null) =>
        vendorId !== null && vendorId !== undefined
            ? vendorsById[String(vendorId)]?.display_name ?? 'Unknown Vendor'
            : 'Unknown Vendor';

    const getModelKey = (model: LLMModel) => {
        const idPart = model.id ? String(model.id) : model.modelName;
        return `${model.vendor_id} -${idPart} -${model.modelFamily} `;
    };

    // UI State
    const [searchQuery, setSearchQuery] = useState('');
    const [teamSearchQuery, setTeamSearchQuery] = useState('');
    const [savedFilter, setSavedFilter] = useState<'all' | 'saved' | 'not-saved'>('saved');
    const [missingFieldsFilter, setMissingFieldsFilter] = useState<string[]>([]);
    const [createTeamSignal, setCreateTeamSignal] = useState(0);
    const [teamModelFilter, setTeamModelFilter] = useState<number | null>(null);
    const [expandedCategories, setExpandedCategories] = useState<Set<TeamCategory>>(new Set()); // Shared state
    const [activeTab, setActiveTab] = useState<'models' | 'teams' | 'users' | 'tags' | 'sessions' | 'explore'>(() => {
        const stored = readStorage(STORAGE_KEYS.activeTab);
        // Validate stored value is one of the valid tabs, otherwise default to models
        if (['models', 'teams', 'users', 'tags', 'sessions', 'explore'].includes(stored || '')) {
            return stored as any;
        }
        return 'models';
    });

    const [editingModel, setEditingModel] = useState<LLMModel | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isArchiveOpen, setIsArchiveOpen] = useState(false);
    const [modelIdFilter, setModelIdFilter] = useState<number | null>(null);
    const leftPanelRef = useRef<HTMLDivElement>(null);
    const scrollRootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        writeStorage(STORAGE_KEYS.activeTab, activeTab);
    }, [activeTab]);

    // Calculate maxPrice for filter initialization
    const maxPrice = useMemo(() =>
        Math.max(
            ...(models.map(m => {
                if (!m.pricing) return 0;
                return (m.pricing.prompt ?? 0) + (m.pricing.completion ?? 0);
            }) || [0]),
            1
        ),
        [models]
    );
    const maxContext = useMemo(() =>
        Math.max(...(models.map(m => Number(m.contextK) || 0) || [0]), 1),
        [models]
    );

    const [filters, setFilters] = useState<FilterState>({
        creativity: [0, 100],
        logic: [0, 100],
        pricing: [0, maxPrice],
        freeOnly: false,
        missingCreative: false,
        missingLogic: false,
        missingPrice: false,
        traits: [],
        vendorIds: [],
        searchText: ''
    });


    const [publicFilter, setPublicFilter] = useState<'public' | 'private' | 'all'>('all');


    // Update pricing filter range when maxPrice changes
    useEffect(() => {
        setFilters(prev => ({
            ...prev,
            pricing: [0, maxPrice]
        }));
    }, [maxPrice]);

    useEffect(() => {
        if (modelIdFilter === null || !models.length) return;
        if (!models.some(model => model.id === modelIdFilter)) {
            setModelIdFilter(null);
        }
    }, [modelIdFilter, models]);

    // Handlers

    // Vendor Reorder (Keep as is)




    const handleTeamUpdate = (updatedTeam: Team, _originalId?: string) => {
        updateTeamMutation.mutate(updatedTeam);
    };

    const handleTeamCreate = (team: Team) => {
        const userId = team.user_id || users[0]?.id;
        if (!userId) {
            console.error('handleTeamCreate: missing user_id and no users available');
            return;
        }
        createTeamMutation.mutate({ ...team, user_id: userId });
    };

    const handleTeamDelete = (teamId: string) => {
        deleteTeamMutation.mutate(teamId);
    };

    const handleTeamDuplicate = async (teamId: string) => {
        const res = await duplicateTeamMutation.mutateAsync(teamId);
        return res.team;
    };



    const handleMemberUpdate = (updatedMember: TeamMember, _originalId?: string) => {
        updateMemberMutation.mutate(updatedMember);
    };

    const handleMemberDelete = (memberId: string) => {
        deleteMemberMutation.mutate(memberId);
    };

    const handleMemberCreate = (member: TeamMember) => {
        createMemberMutation.mutate(member);
    };

    const handleUserUpdate = (updatedUser: AppUser) => {
        updateUserMutation.mutate(updatedUser);
    };

    const updateModelsData = async (updatedModels: LLMModel[]) => {
        try {
            await updateModelsMutation.mutateAsync(updatedModels);
        } catch (err) {
            console.error("Update models failed", err);
        }
    };







    const handleFallbackChange = (modelKey: string, fallbackId: string | null) => {
        if (!models.length) return;
        const updatedModels = models.map(model => {
            if (getModelKey(model) !== modelKey) return model;
            return {
                ...model,
                fallback_model_id: fallbackId ? Number(fallbackId) : null
            };
        });
        updateModelsData(updatedModels);
    };

    const handleArchiveModel = async (model: LLMModel) => {
        setEditingModel(null);
        try {
            await archiveRestoreMutation.mutateAsync({ model, active: false });
        } catch (err) {
            console.error("Archive failed", err);
            alert("Failed to archive model.");
        }
    };

    const handleRestoreModel = async (model: LLMModel) => {
        try {
            await archiveRestoreMutation.mutateAsync({ model, active: true });
        } catch (err) {
            console.error("Restore failed", err);
            alert("Failed to restore model.");
        }
    };

    const handleDeleteModel = async (model: LLMModel) => {
        setEditingModel(null);
        try {
            if (!model.id) {
                console.error('Delete failed: missing model id');
                return;
            }
            await deleteModelMutation.mutateAsync({ id: model.id });
        } catch (err) {
            console.error("Delete failed", err);
        }
    };

    const handleSaveModel = async (model: LLMModel) => {
        try {
            if (model.id) {
                await updateModelMutation.mutateAsync(model);
            } else {
                await createModelMutation.mutateAsync(model);
            }
            setEditingModel(null);
            setIsModalOpen(false);
        } catch (err) {
            console.error("Save failed", err);
        }
    };

    const handleDuplicateModel = (model: LLMModel) => {
        // Create a copy without the ID
        const { id, ...rest } = model;
        const duplicatedModel: LLMModel = {
            ...rest,
            // Optional: append "Copy" to distinguish
            modelName: `${model.modelName} (Copy)`,
            name_within_family: model.name_within_family ? `${model.name_within_family} (Copy)` : null,
            api_id: '', // Clear unique fields to force user input
            slug: ''    // Clear unique fields to force user input
        };
        setEditingModel(duplicatedModel);
        setIsModalOpen(true);
    };

    const handleAddModel = (vendorId: string, family?: string) => {
        const parsedVendorId = Number(vendorId);
        const newModel: LLMModel = {
            vendor_id: Number.isFinite(parsedVendorId) ? parsedVendorId : null,
            modelFamily: family ?? null,
            modelName: '',
            name_within_family: null,
            api_id: '',
            slug: '',
            display_order: 0,
            description: '',
            capabilities: [],
            contextK: null,
            context_length: null,
            parameter_count_b: null,
            active_parameter_count_b: null,
            personalityTraits: '',
            analyticalTraits: '',
            bestFor: '',
            creativeScore: null,
            deductiveScore: null,
            efficiencyScore: null,
            pricing: { prompt: 0, completion: 0, tier: 1 },
            fallback_model_id: null,
            active: true,
            last_synced_at: null,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        };
        setEditingModel(newModel);
        setIsModalOpen(true);
    };

    const handleHideModel = (modelId: string) => {
        if (!modelId) {
            console.error('handleHideModel: modelId is required');
            return;
        }

        // Ensure modelSettings is loaded before proceeding
        if (!modelSettings || !modelSettings.irrelevant_models_api_keys) {
            console.error('handleHideModel: modelSettings not loaded yet');
            return;
        }

        const currentIgnored = modelSettings.irrelevant_models_api_keys;

        // Check if already in list to avoid duplicates
        if (currentIgnored.includes(modelId)) {
            console.log(`Model ${modelId} is already marked as irrelevant`);
            return;
        }

        try {
            updateSettings({
                irrelevant_models_api_keys: [...currentIgnored, modelId]
            });
        } catch (err) {
            console.error('Failed to update irrelevant models settings:', err);
        }
    };

    const handleToggleCategory = (category: TeamCategory) => {
        setExpandedCategories(prev => {
            const next = new Set(prev);
            if (next.has(category)) next.delete(category);
            else next.add(category);
            return next;
        });
    };

    const handleExpandCategory = (category: TeamCategory) => {
        setExpandedCategories(prev => {
            if (prev.has(category)) return prev;
            const next = new Set(prev);
            next.add(category);
            return next;
        });
    };


    // Extract all unique traits from models
    const allTraits = useMemo(() => {
        if (!models.length) return [];
        const traits = new Set<string>();
        models.forEach(m => {
            const personality = m.personalityTraits?.split(',').map(t => t.trim()) || [];
            const analytical = m.analyticalTraits?.split(',').map(t => t.trim()) || [];
            [...personality, ...analytical].forEach(t => {
                if (t && t.length > 0) traits.add(t);
            });
        });
        return Array.from(traits).sort();
    }, [models]);

    // Apply all filters
    const filteredModels = useMemo(() => {
        if (!models.length) return [];

        if (modelIdFilter !== null) {
            const focused = models.find(model => model.id === modelIdFilter);
            return focused ? [focused] : [];
        }

        return models.filter(model => {
            const vendorName = getVendorName(model.vendor_id).toLowerCase();
            const searchLower = searchQuery.toLowerCase();
            const modelNames = [model.modelName, model.name_within_family].filter(Boolean) as string[];

            const matchesSearch =
                modelNames.some(name => name.toLowerCase().includes(searchLower)) ||
                vendorName.includes(searchLower) ||
                model.bestFor.toLowerCase().includes(searchLower);

            if (!matchesSearch) return false;

            if (filters.searchText) {
                const filtersLower = filters.searchText.toLowerCase();
                const matchesTextSearch =
                    modelNames.some(name => name.toLowerCase().includes(filtersLower)) ||
                    (model.description || '').toLowerCase().includes(filtersLower) ||
                    (model.specialPropertiesNotes || '').toLowerCase().includes(filtersLower) ||
                    (model.bestFor || '').toLowerCase().includes(filtersLower);

                if (!matchesTextSearch) return false;
            }

            const hasCreative = model.creativeScore !== null
                && model.creativeScore !== undefined
                && Number.isFinite(model.creativeScore);
            if (filters.missingCreative) {
                if (hasCreative) return false;
            } else {
                const creativity = hasCreative ? model.creativeScore! : 50;
                if (creativity < filters.creativity[0] || creativity > filters.creativity[1]) return false;
            }

            const hasLogic = model.deductiveScore !== null
                && model.deductiveScore !== undefined
                && Number.isFinite(model.deductiveScore);
            if (filters.missingLogic) {
                if (hasLogic) return false;
            } else {
                const logic = hasLogic ? model.deductiveScore! : 50;
                if (logic < filters.logic[0] || logic > filters.logic[1]) return false;
            }

            const hasPricing = model.pricing?.prompt !== undefined && model.pricing?.completion !== undefined;
            if (filters.missingPrice) {
                if (hasPricing) return false;
            } else {
                if (filters.freeOnly) {
                    const isFree = model.pricing?.prompt === 0 && model.pricing?.completion === 0;
                    if (!isFree) return false;
                } else if (hasPricing) {
                    const price = (model.pricing?.prompt ?? 0) + (model.pricing?.completion ?? 0);
                    if (price < filters.pricing[0] || price > filters.pricing[1]) return false;
                }
            }

            if (filters.traits.length > 0) {
                const modelTraits = [
                    ...(model.personalityTraits?.split(',').map(t => t.trim()) || []),
                    ...(model.analyticalTraits?.split(',').map(t => t.trim()) || [])
                ];

                const hasAnyTrait = filters.traits.some(filterTrait =>
                    modelTraits.some(modelTrait => modelTrait === filterTrait)
                );

                if (!hasAnyTrait) return false;
            }

            if (filters.vendorIds.length > 0) {
                if (!filters.vendorIds.includes(String(model.vendor_id))) return false;
            }

            return true;
        });
    }, [models, searchQuery, filters, vendorsById, modelIdFilter]);

    const filteredTeams = useMemo(() => {
        if (!teams.length) return [];

        let filtered = teams;

        // Apply saved filter
        if (savedFilter === 'saved') {
            filtered = filtered.filter(t => t.is_saved);
        } else if (savedFilter === 'not-saved') {
            filtered = filtered.filter(t => !t.is_saved);
        }

        // Apply public filter
        if (publicFilter === 'public') {
            filtered = filtered.filter(t => t.is_public);
        } else if (publicFilter === 'private') {
            filtered = filtered.filter(t => !t.is_public);
        }

        // Apply missing fields filter
        if (missingFieldsFilter.length > 0) {
            filtered = filtered.filter(team => {
                const teamMembers = members.filter(m => m.team_id === team.id);

                // Check each selected missing field/role
                return missingFieldsFilter.some(field => {
                    switch (field) {
                        case 'chair':
                            return !teamMembers.some(m => m.role?.toLowerCase() === 'chair');
                        case 'watchdog':
                            return !teamMembers.some(m => m.role?.toLowerCase() === 'watchdog');
                        case 'envoy':
                            return !teamMembers.some(m => m.role?.toLowerCase() === 'envoy');
                        case 'operatives':
                            return !teamMembers.some(m => m.role?.toLowerCase() === 'operative');
                        case 'name':
                            return !team.name || team.name.trim() === '';
                        case 'description':
                            return !team.description || team.description.trim() === '';
                        case 'catch_phrase':
                            return !team.catch_phrase || team.catch_phrase.trim() === '';
                        case 'category':
                            return !team.category;
                        case 'quick_starts':
                            return !team.quick_starts || team.quick_starts.length === 0;
                        case 'default_rounds':
                            return team.default_starting_rounds === null || team.default_starting_rounds === undefined;
                        case 'bootstrap_prompt':
                            return !team.bootstrap_prompt || team.bootstrap_prompt.trim() === '';
                        default:
                            return false;
                    }
                });
            });
        }
        // Apply model filter
        if (teamModelFilter !== null) {
            filtered = filtered.filter(team => {
                const teamMembers = members.filter(m => m.team_id === team.id);
                return teamMembers.some(m => m.model_id === teamModelFilter);
            });
        }

        // Apply search filter
        if (!teamSearchQuery) return filtered;

        const query = teamSearchQuery.toLowerCase();
        return filtered.filter(team => {
            // Check team fields
            if (team.name.toLowerCase().includes(query)) return true;
            if (team.catch_phrase?.toLowerCase().includes(query)) return true;

            // Check members
            const teamMembers = members.filter(m => m.team_id === team.id);
            return teamMembers.some(member =>
                member.name?.toLowerCase().includes(query) ||
                member.team_role?.toLowerCase().includes(query)
            );
        });
    }, [teams, members, teamSearchQuery, savedFilter, publicFilter, missingFieldsFilter, teamModelFilter]);

    const filteredTeamsMembers = useMemo(() => {
        const teamIds = new Set(filteredTeams.map(t => t.id));
        return members.filter(m => teamIds.has(m.team_id));
    }, [filteredTeams, members]);

    const filteredSessions = useMemo(() => {
        if (!sessions.length) return [];

        let filtered = sessions;

        // Search Filter
        if (sessionSearchQuery) {
            const lowerQuery = sessionSearchQuery.toLowerCase();
            filtered = filtered.filter(s =>
                s.name.toLowerCase().includes(lowerQuery) ||
                s.team_name.toLowerCase().includes(lowerQuery) ||
                s.user_name.toLowerCase().includes(lowerQuery)
            );
        }

        // Status Filter
        if (sessionStatusFilter !== 'all') {
            filtered = filtered.filter(s => s.status === sessionStatusFilter);
        }

        return filtered;
    }, [sessions, sessionSearchQuery, sessionStatusFilter]);

    const filteredUsers = useMemo(() => {
        if (!users.length) return [];

        let filtered = users;

        // Search Filter
        if (userSearchQuery) {
            const lowerQuery = userSearchQuery.toLowerCase();
            filtered = filtered.filter(u =>
                (u.display_name || '').toLowerCase().includes(lowerQuery) ||
                u.email.toLowerCase().includes(lowerQuery)
            );
        }

        // Plan Filter
        if (userPlanFilter.length > 0) {
            filtered = filtered.filter(u => userPlanFilter.includes(u.plan_name || 'No Plan'));
        }

        // Type Filter
        if (userTypeFilter.length > 0) {
            filtered = filtered.filter(u => userTypeFilter.includes(u.type));
        }

        return filtered;
    }, [users, userSearchQuery, userPlanFilter, userTypeFilter]);

    const handleImportModel = (model: any) => {
        // Validate required fields
        if (!model || !model.id) {
            console.error('handleImportModel: model or model.id is missing');
            return;
        }

        if (!model.pricing || typeof model.pricing.prompt === 'undefined' || typeof model.pricing.completion === 'undefined') {
            console.error('handleImportModel: model pricing data is missing');
            return;
        }

        if (typeof model.context_length !== 'number') {
            console.error('handleImportModel: model.context_length is not a number');
            return;
        }

        // Parse pricing - OpenRouter API returns prices in dollars per token (e.g., 0.00000028)
        // For modal display, we want dollars per 1M tokens (e.g., 0.28)
        // OpenRouter value × 1,000,000 = dollars per 1M tokens (for display in modal)
        // Modal will multiply by 1M again when saving to get micro value for DB
        const promptPrice = parseFloat(model.pricing.prompt) * 1000000;
        const completionPrice = parseFloat(model.pricing.completion) * 1000000;

        // Validate parsed prices
        if (!Number.isFinite(promptPrice) || !Number.isFinite(completionPrice)) {
            console.error('handleImportModel: Invalid pricing values', { promptPrice, completionPrice });
            return;
        }

        const contextK = Math.round(model.context_length / 1024);

        // Extract vendor from model ID
        const modelIdParts = model.id.split('/');
        if (modelIdParts.length < 2) {
            console.error('handleImportModel: Invalid model.id format, expected "vendor/model"');
            return;
        }

        const vendorId = modelIdParts[0];
        const matchingVendor = vendors.find(v => v.display_name.toLowerCase() === vendorId.toLowerCase());

        const newModel: LLMModel = {
            vendor_id: matchingVendor ? matchingVendor.id : null, // User can select
            modelFamily: null,
            modelName: model.name || '',
            name_within_family: model.name || '',
            display_order: 0,
            description: model.description || '',
            capabilities: [],
            contextK,
            context_length: model.context_length,
            parameter_count_b: null,
            active_parameter_count_b: null,
            personalityTraits: '',
            analyticalTraits: '',
            bestFor: '',
            creativeScore: null,
            deductiveScore: null,
            efficiencyScore: null,
            pricing: { prompt: promptPrice, completion: completionPrice, tier: 1 },
            fallback_model_id: null,
            active: true,
            last_synced_at: null,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            api_id: model.id,
            slug: modelIdParts.pop() || '' // suggested slug
        };
        setEditingModel(newModel);
        setIsModalOpen(true);
    };

    const handleNavigateToTeam = (teamId: string) => {
        setActiveTab('teams');
        // Find the team name to search/filter
        const team = teams.find(t => t.id === teamId);
        if (team) {
            setTeamSearchQuery(team.name);
        }
    };

    const handleFilterTeamsByModel = (modelId: number) => {
        setActiveTab('teams');
        setTeamModelFilter(modelId);
        // Clear conflicting filters
        setTeamSearchQuery('');
        setSavedFilter('all');
        setPublicFilter('all');
    };

    if (loading) {
        return <GlitchLoader />;
    }

    return (
        <div className="cyber-shell scanlines bg-grid-pattern flex flex-col h-[100dvh] w-screen overflow-hidden">
            <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-[100px] z-0" />


            {/* Top Header - Full Width */}
            <header className="shrink-0 z-20 border-b border-white/10 bg-black/80 backdrop-blur-md">
                <div className="flex items-center justify-between px-6 h-16">
                    {/* Logo Section */}
                    <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center border border-primary/50 bg-black/40 cyber-chamfer-sm overflow-hidden p-1.5">
                            <img src="/logo.png" alt="Cabal Logo" className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]" />
                        </div>
                        <div>
                            <div className={`font-display ${FONT_SIZE.XL} text-primary cyber-glitch animate-glitch leading-none`}>CABAL</div>
                            <div className={`font-label ${FONT_SIZE.XXS} text-white/40 tracking-[0.2em] leading-none mt-1`}>SYSTEM INTERFACE V2.0</div>
                        </div>
                    </div>

                    {/* Navigation Tabs */}
                    <nav className="flex items-center h-full gap-2 ml-12">
                        {[
                            { id: 'models', label: 'MODELS', icon: Box },
                            { id: 'explore', label: 'EXPLORE', icon: Compass },
                            { id: 'teams', label: 'TEAMS', icon: LayoutGrid },
                            { id: 'users', label: 'USERS', icon: Users },
                            { id: 'sessions', label: 'SESSIONS', icon: Activity },
                            { id: 'tags', label: 'TAGS', icon: TagIcon }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`
                                relative h-10 px-4 rounded transition-all duration-300 group
                                flex items-center gap-2
                                ${activeTab === tab.id
                                        ? 'text-primary bg-primary/10 border border-primary/20 shadow-[0_0_10px_rgba(0,255,136,0.15)]'
                                        : 'text-white/40 hover:text-white hover:bg-white/5 border border-transparent'}
                            `}
                            >
                                <tab.icon
                                    size={14}
                                    className={`transition-transform duration-300 ${activeTab === tab.id ? 'scale-110' : 'group-hover:scale-110'}`}
                                />
                                <span className={`font-label ${FONT_SIZE.XS} tracking-widest`}>{tab.label}</span>

                                {/* Active Indicator (Bottom Glow) */}
                                {activeTab === tab.id && (
                                    <div className="absolute -bottom-[13px] left-1/2 -translate-x-1/2 w-12 h-[2px] bg-primary shadow-[0_0_8px_rgba(0,255,136,0.8)]" />
                                )}
                            </button>
                        ))}
                    </nav>

                    {/* Right Status */}
                    <div className="flex items-center gap-6">
                        <div className={`font-label ${FONT_SIZE.XS} text-white/40 tracking-wider`}>
                            NET_STATUS: <span className="text-primary animate-pulse">ONLINE</span>
                        </div>
                    </div>
                </div>
            </header>

            {activeTab === 'models' ? (
                <ModelsTab
                    filteredModels={filteredModels}
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    filters={filters}
                    onFiltersChange={setFilters}
                    allTraits={allTraits}
                    maxPrice={maxPrice}
                    maxContext={maxContext}
                    modelIdFilter={modelIdFilter}
                    onClearModelIdFilter={() => setModelIdFilter(null)}
                    onEditModel={(model) => {
                        setEditingModel(model);
                        setIsModalOpen(true);
                    }}
                    onDuplicateModel={handleDuplicateModel}
                    onAddModel={() => handleAddModel('', '')}
                    onArchiveModel={handleArchiveModel}
                    onDeleteModel={handleDeleteModel}
                    onNavigateToTeam={handleNavigateToTeam}
                    onFallbackChange={handleFallbackChange}
                    onTeamUpdate={handleTeamUpdate}
                    onTeamDelete={handleTeamDelete}
                    onTeamDuplicate={handleTeamDuplicate}
                    onMemberUpdate={handleMemberUpdate}
                    onMemberDelete={handleMemberDelete}
                    onMemberCreate={handleMemberCreate}
                    onFilterTeamsByModel={handleFilterTeamsByModel}
                    onOpenArchive={() => setIsArchiveOpen(true)}
                    onExplore={() => setActiveTab('explore')}
                    scrollRootRef={scrollRootRef}
                    leftPanelRef={leftPanelRef}
                />
            ) : activeTab === 'explore' ? (
                <ExploreTab
                    activeModels={filteredExploreModels}
                    ownedApiIds={ownedApiIds}
                    exploreStats={exploreStats}
                    onHideModel={handleHideModel}
                    onImportModel={handleImportModel}
                    hideOwned={hideOwned}
                    onToggleHideOwned={setHideOwned}
                    hideIrrelevant={hideIrrelevant}
                    onToggleHideIrrelevant={setHideIrrelevant}
                    onClear={() => {
                        setHideOwned(false);
                        setExploreSearchQuery('');
                        setCreatedAfter(null);
                        setHideIrrelevant(true);
                    }}
                    searchQuery={exploreSearchQuery}
                    onSearchChange={setExploreSearchQuery}
                    createdAfter={createdAfter}
                    onCreatedAfterChange={setCreatedAfter}
                    lastOwnedDate={latestOwnedDate}
                    scrollRootRef={scrollRootRef}
                    leftPanelRef={leftPanelRef}
                />
            ) : activeTab === 'teams' ? (
                <TeamsTab
                    filteredTeams={filteredTeams}
                    filteredTeamsMembers={filteredTeamsMembers}
                    expandedCategories={expandedCategories}
                    onToggleCategory={handleToggleCategory}
                    onExpandCategory={handleExpandCategory}
                    onTeamUpdate={handleTeamUpdate}
                    onTeamCreate={handleTeamCreate}
                    onTeamDelete={handleTeamDelete}
                    onTeamDuplicate={handleTeamDuplicate}
                    onMemberUpdate={handleMemberUpdate}
                    onMemberDelete={handleMemberDelete}
                    onMemberCreate={handleMemberCreate}
                    createTeamSignal={createTeamSignal}
                    onCreateTeam={() => setCreateTeamSignal(prev => prev + 1)}
                    teamModelFilter={teamModelFilter}
                    onClearTeamModelFilter={() => setTeamModelFilter(null)}
                    onFilterTeamsByModel={handleFilterTeamsByModel}
                    teamSearchQuery={teamSearchQuery}
                    onTeamSearchChange={setTeamSearchQuery}
                    savedFilter={savedFilter}
                    onSavedFilterChange={setSavedFilter}
                    publicFilter={publicFilter}
                    onPublicFilterChange={setPublicFilter}
                    missingFieldsFilter={missingFieldsFilter}
                    onMissingFieldsFilterChange={setMissingFieldsFilter}
                    onClearTeamFilters={() => {
                        setTeamSearchQuery('');
                        setSavedFilter('saved');
                        setPublicFilter('all');
                        setMissingFieldsFilter([]);
                    }}
                    onFilterByModel={(modelId) => {
                        setActiveTab('models');
                        setModelIdFilter(modelId);
                    }}
                    scrollRootRef={scrollRootRef}
                    leftPanelRef={leftPanelRef}
                />
            ) : activeTab === 'users' ? (
                <UsersTab
                    filteredUsers={filteredUsers}
                    activeUserSearchQuery={userSearchQuery}
                    onUserSearchChange={setUserSearchQuery}
                    userPlanFilter={userPlanFilter}
                    onUserPlanFilterChange={setUserPlanFilter}
                    userTypeFilter={userTypeFilter}
                    onUserTypeFilterChange={setUserTypeFilter}
                    onUpdateUser={handleUserUpdate}
                    scrollRootRef={scrollRootRef}
                    leftPanelRef={leftPanelRef}
                />
            ) : activeTab === 'sessions' ? (
                <SessionsTab
                    filteredSessions={filteredSessions}
                    sessionSearchQuery={sessionSearchQuery}
                    onSessionSearchChange={setSessionSearchQuery}
                    sessionStatusFilter={sessionStatusFilter}
                    onSessionStatusChange={setSessionStatusFilter}
                    onNewSession={() => setIsCreateSessionOpen(true)}
                    scrollRootRef={scrollRootRef}
                    leftPanelRef={leftPanelRef}
                />
            ) : (
                <TagsTab scrollRootRef={scrollRootRef} leftPanelRef={leftPanelRef} />
            )}

            {/* Modals */}
            <EditModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSaveModel}
                model={editingModel}
                models={models}
                vendorsById={vendorsById}
                modelsById={modelsById}
                vendors={vendors}
            />

            <ArchivedModal
                isOpen={isArchiveOpen}
                onClose={() => setIsArchiveOpen(false)}
                archivedModels={archivedModels}
                vendorsById={vendorsById}
                onRestore={(model) => {
                    handleRestoreModel(model);
                    setIsArchiveOpen(false);
                }}
            />

            <CreateSessionModal
                isOpen={isCreateSessionOpen}
                onClose={() => setIsCreateSessionOpen(false)}
                teams={teams}
                models={models}
                onSessionCreated={() => {
                    // Refetch sessions (query invalidation would be better but simple reload works for now)
                    window.location.reload();
                }}
            />
        </div>
    );
}

export default App;
