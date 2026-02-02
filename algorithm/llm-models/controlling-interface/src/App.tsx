import { useState, useEffect, useMemo, useRef } from 'react';
import { LLMModel, Team, TeamMember, Vendor, TeamCategory, AppUser } from './types';
import { useModels, useArchivedModels, useVendors, useTeams, useMembers, useExploreModels, useSessions, useUsers, useUpdateUser } from './hooks/useQueries';
import { useModelSettings } from './hooks/useModelSettings';
import { useUpdateModel, useCreateModel, useArchiveRestoreModel, useDeleteModel, useUpdateModels, useCreateTeam, useUpdateTeam, useDeleteTeam, useDuplicateTeam, useCreateMember, useUpdateMember, useDeleteMember } from './hooks/useMutations';
import { ModelTable } from './components/ModelTable';
import { ModelSidebar } from './components/ModelSidebar';
import { ExploreSidebar } from './components/ExploreSidebar';
import { ExploreFilters } from './components/ExploreFilters';
import { EditModal } from './components/EditModal';
import { FilterPanel, FilterState } from './components/FilterPanel';
import { ArchivedModal } from './components/ArchivedModal';
import { TeamsView } from './components/TeamsView';
import { Loader2, Plus, Search, Compass, AlertTriangle, Box, LayoutGrid, Users, Activity, Tags as TagIcon } from 'lucide-react';
import { GlitchLoader } from './components/GlitchLoader';
import { TeamsSidebar } from './components/TeamsSidebar';
import { ExploreView } from './components/ExploreView';
import { UsersView } from './components/UsersView';
import { SessionsView } from './components/SessionsView';
import { SessionsSidebar } from './components/SessionsSidebar';
import { CreateSessionModal } from './components/CreateSessionModal';
import { UsersSidebar } from './components/UsersSidebar';


const STORAGE_KEYS = {
    activeTab: 'cabal.ui.activeTab',
    scroll: {
        models: 'cabal.ui.scroll.models',
        teams: 'cabal.ui.scroll.teams'
    }
};

const CATEGORY_ORDER: TeamCategory[] = ['CORTEX', 'VITALS', 'OPS', 'ARCADE'];

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
    // React Query Hooks
    const { data: activeModelsData, isLoading: isLoadingModels, error: modelsError } = useModels();
    const { data: exploreModelsData } = useExploreModels();
    const { data: archivedModelsData, isLoading: isLoadingArchived } = useArchivedModels();
    const { data: vendorsData, isLoading: isLoadingVendors } = useVendors();
    const { data: teamsData, isLoading: isLoadingTeams, error: teamsErrorObj } = useTeams();
    const { data: membersData, isLoading: isLoadingMembers, error: membersErrorObj } = useMembers();
    const { data: sessionsData, isLoading: isLoadingSessions, error: sessionsErrorObj } = useSessions();
    const { data: usersData, isLoading: isLoadingUsers, error: usersErrorObj } = useUsers();

    // Mutations
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

    // Derived State & Aliases
    const data = activeModelsData;
    const archivedData = archivedModelsData;

    // Safety checks for arrays
    const models = data?.models || [];
    const archivedModels = archivedData?.models || [];
    const vendors = vendorsData?.vendors || [];

    const loading = isLoadingModels || isLoadingArchived || isLoadingVendors || isLoadingTeams || isLoadingMembers || isLoadingSessions || isLoadingUsers;
    const error = modelsError ? (modelsError as Error).message : null;
    const teamsError = teamsErrorObj ? (teamsErrorObj as Error).message : null;
    const membersError = membersErrorObj ? (membersErrorObj as Error).message : null;
    const sessionsError = sessionsErrorObj ? (sessionsErrorObj as Error).message : null;
    const usersError = usersErrorObj ? (usersErrorObj as Error).message : null;

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


    // Memoized Lookups
    const vendorById = useMemo(() => {
        const map: Record<string, Vendor> = {};
        vendors.forEach(vendor => {
            map[String(vendor.id)] = vendor;
        });
        return map;
    }, [vendors]);

    // Helpers
    const getVendorName = (vendorId: number | string) =>
        vendorById[String(vendorId)]?.display_name ?? 'Unknown Vendor';

    const modelsById = useMemo(() => {
        const map: Record<string, LLMModel> = {};
        models.forEach(model => {
            if (model.id) map[String(model.id)] = model;
        });
        archivedModels.forEach(model => {
            if (model.id) map[String(model.id)] = model;
        });
        return map;
    }, [models, archivedModels]);

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
    const maxParams = useMemo(() =>
        Math.max(...(models.map(m => (typeof m.parameter_count_b === 'number' ? m.parameter_count_b : parseFloat(String(m.parameter_count_b || '0'))) || 0) || [0]), 1),
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

    // Handlers

    // Vendor Reorder (Keep as is)




    const handleTeamUpdate = (updatedTeam: Team) => {
        updateTeamMutation.mutate(updatedTeam);
    };

    const handleTeamCreate = (team: Team) => {
        createTeamMutation.mutate(team);
    };

    const handleTeamDelete = (teamId: string) => {
        deleteTeamMutation.mutate(teamId);
    };

    const handleTeamDuplicate = async (teamId: string) => {
        const res = await duplicateTeamMutation.mutateAsync(teamId);
        return res.team;
    };



    const handleMemberUpdate = (updatedMember: TeamMember) => {
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
        if (!data) return;
        const updatedModels = data.models.map(model => {
            if (getModelKey(model) !== modelKey) return model;
            return {
                ...model,
                fallback_model_id: fallbackId ? String(fallbackId) : undefined
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
            await deleteModelMutation.mutateAsync({ id: model.id, api_id: model.api_id });
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
            name_within_family: model.name_within_family ? `${model.name_within_family} (Copy)` : undefined,
            api_id: '', // Clear unique fields to force user input
            slug: ''    // Clear unique fields to force user input
        };
        setEditingModel(duplicatedModel);
        setIsModalOpen(true);
    };

    const handleAddModel = (vendorId: string, family?: string) => {
        const newModel: LLMModel = {
            vendor_id: vendorId,
            modelFamily: family ?? '',
            modelName: '',
            name_within_family: '',
            display_order: 0,
            description: '',
            contextK: '',
            personalityTraits: '',
            analyticalTraits: '',
            bestFor: '',
            optimalTeamExamples: '',
            creativeScore: 0,
            deductiveScore: 0,
            efficiencyScore: 0,
            specialPropertiesNotes: '',
            pricing: { prompt: 0, completion: 0, tier: 1 },
            active: true
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
        if (!data) return [];
        const traits = new Set<string>();
        data.models.forEach(m => {
            const personality = m.personalityTraits?.split(',').map(t => t.trim()) || [];
            const analytical = m.analyticalTraits?.split(',').map(t => t.trim()) || [];
            [...personality, ...analytical].forEach(t => {
                if (t && t.length > 0) traits.add(t);
            });
        });
        return Array.from(traits).sort();
    }, [data]);

    // Apply all filters
    const filteredModels = useMemo(() => {
        if (!data) return [];

        return data.models.filter(model => {
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
    }, [data, searchQuery, filters, vendorById]);

    const filteredTeams = useMemo(() => {
        if (!teamsData) return [];

        let teams = teamsData.teams;

        // Apply saved filter
        if (savedFilter === 'saved') {
            teams = teams.filter(t => t.is_saved);
        } else if (savedFilter === 'not-saved') {
            teams = teams.filter(t => !t.is_saved);
        }

        // Apply public filter
        if (publicFilter === 'public') {
            teams = teams.filter(t => t.is_public);
        } else if (publicFilter === 'private') {
            teams = teams.filter(t => !t.is_public);
        }

        // Apply missing fields filter
        if (missingFieldsFilter.length > 0) {
            teams = teams.filter(team => {
                const teamMembers = membersData?.members.filter(m => m.team_id === team.id) || [];

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

        // Apply search filter
        if (!teamSearchQuery) return teams;

        const query = teamSearchQuery.toLowerCase();
        return teams.filter(team => {
            // Check team fields
            if (team.name.toLowerCase().includes(query)) return true;
            if (team.catch_phrase?.toLowerCase().includes(query)) return true;

            // Check members
            const teamMembers = membersData?.members.filter(m => m.team_id === team.id) || [];
            return teamMembers.some(member =>
                member.name?.toLowerCase().includes(query) ||
                member.team_role?.toLowerCase().includes(query)
            );
        });
    }, [teamsData, membersData, teamSearchQuery, savedFilter, publicFilter, missingFieldsFilter]);

    const filteredSessions = useMemo(() => {
        if (!sessionsData?.sessions) return [];

        let sessions = sessionsData.sessions;

        // Search Filter
        if (sessionSearchQuery) {
            const lowerQuery = sessionSearchQuery.toLowerCase();
            sessions = sessions.filter(s =>
                s.name.toLowerCase().includes(lowerQuery) ||
                s.team_name.toLowerCase().includes(lowerQuery) ||
                s.user_name.toLowerCase().includes(lowerQuery)
            );
        }

        // Status Filter
        if (sessionStatusFilter !== 'all') {
            sessions = sessions.filter(s => s.status === sessionStatusFilter);
        }

        return sessions;
    }, [sessionsData, sessionSearchQuery, sessionStatusFilter]);

    const filteredUsers = useMemo(() => {
        if (!usersData?.users) return [];

        let users = usersData.users;

        // Search Filter
        if (userSearchQuery) {
            const lowerQuery = userSearchQuery.toLowerCase();
            users = users.filter(u =>
                (u.display_name || '').toLowerCase().includes(lowerQuery) ||
                u.email.toLowerCase().includes(lowerQuery)
            );
        }

        // Plan Filter
        if (userPlanFilter.length > 0) {
            users = users.filter(u => userPlanFilter.includes(u.plan_name || 'No Plan'));
        }

        // Type Filter
        if (userTypeFilter.length > 0) {
            users = users.filter(u => userTypeFilter.includes(u.type));
        }

        return users;
    }, [usersData, userSearchQuery, userPlanFilter, userTypeFilter]);

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

        const contextK = Math.round(model.context_length / 1024).toString();

        // Extract vendor from model ID
        const modelIdParts = model.id.split('/');
        if (modelIdParts.length < 2) {
            console.error('handleImportModel: Invalid model.id format, expected "vendor/model"');
            return;
        }

        const vendorId = modelIdParts[0];
        const matchingVendor = vendors.find(v => v.display_name.toLowerCase() === vendorId.toLowerCase());

        const newModel: LLMModel = {
            vendor_id: matchingVendor ? matchingVendor.id : '', // User can select
            modelFamily: '',
            modelName: model.name || '',
            name_within_family: model.name || '',
            display_order: 0,
            description: model.description || '',
            contextK: contextK,
            personalityTraits: '',
            analyticalTraits: '',
            bestFor: '',
            optimalTeamExamples: '',
            creativeScore: 0,
            deductiveScore: 0,
            efficiencyScore: 0,
            specialPropertiesNotes: '',
            pricing: { prompt: promptPrice, completion: completionPrice, tier: 1 },
            active: true,
            api_id: model.id,
            slug: modelIdParts.pop() || '' // suggested slug
        };
        setEditingModel(newModel);
        setIsModalOpen(true);
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
                            <div className="font-display text-xl text-primary cyber-glitch animate-glitch leading-none">CABAL</div>
                            <div className="font-label text-[10px] text-white/40 tracking-[0.2em] leading-none mt-1">SYSTEM INTERFACE V2.0</div>
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
                                <span className="font-label text-xs tracking-widest">{tab.label}</span>

                                {/* Active Indicator (Bottom Glow) */}
                                {activeTab === tab.id && (
                                    <div className="absolute -bottom-[13px] left-1/2 -translate-x-1/2 w-12 h-[2px] bg-primary shadow-[0_0_8px_rgba(0,255,136,0.8)]" />
                                )}
                            </button>
                        ))}
                    </nav>

                    {/* Right Status */}
                    <div className="flex items-center gap-6">
                        <div className="font-label text-xs text-white/40 tracking-wider">
                            NET_STATUS: <span className="text-primary animate-pulse">ONLINE</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content Area - Full Height Grid */}
            <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)_320px] relative z-10">

                {/* Left Sidebar */}
                <aside className="hidden lg:flex flex-col min-h-0 border-r border-white/10 bg-black/40 backdrop-blur-sm">
                    <div ref={leftPanelRef} className="flex-1 overflow-y-auto cyber-scroll p-4">
                        {activeTab === 'models' && !loading && data && vendorsData && (
                            <ModelSidebar
                                models={filteredModels}
                                vendorsById={vendorById}
                                searchQuery={searchQuery}
                                onSearchChange={setSearchQuery}

                                totalModels={data.totalModels}
                                archivedCount={archivedData?.totalModels || 0}
                                onOpenArchive={() => setIsArchiveOpen(true)}
                                onExplore={() => setActiveTab('explore')}
                                scrollRootRef={scrollRootRef}
                            />
                        )}

                        {activeTab === 'explore' && !loading && (
                            <ExploreSidebar
                                total={exploreStats.total}
                                shown={exploreStats.shown}
                                owned={exploreStats.owned}
                            />
                        )}

                        {activeTab === 'teams' && !loading && teamsData && membersData && (
                            <TeamsSidebar
                                teams={filteredTeams}
                                members={membersData.members}
                                expandedCategories={expandedCategories}
                                onToggleCategory={handleToggleCategory}
                                onExpandCategory={handleExpandCategory}
                                scrollRootRef={scrollRootRef}
                                navRootRef={leftPanelRef}

                            />
                        )}

                        {activeTab === 'sessions' && !loading && sessionsData && (
                            <SessionsSidebar
                                totalSessions={sessionsData.sessions.length}
                                searchQuery={sessionSearchQuery}
                                onSearchChange={setSessionSearchQuery}
                                statusFilter={sessionStatusFilter}
                                onStatusChange={setSessionStatusFilter}
                                onNewSession={() => setIsCreateSessionOpen(true)}
                            />
                        )}

                        {activeTab === 'users' && !loading && usersData && (
                            <UsersSidebar
                                users={filteredUsers}
                                activeUserSearchQuery={userSearchQuery}
                                onUserSearchQueryChange={setUserSearchQuery}
                            />
                        )}

                        {/* Placeholders for new tabs sidebar content - or empty if none needed yet */}
                        {(activeTab === 'tags') && (
                            <div className="p-4 text-white/30 font-mono text-xs text-center border border-white/5 rounded-lg border-dashed">
                                NO_INDEXING_DATA
                            </div>
                        )}
                    </div>
                </aside>

                {/* Center Stage */}
                <main className="relative h-full min-h-0 bg-black/20">
                    <div ref={scrollRootRef} data-scroll-root className="h-full min-h-0 overflow-y-auto cyber-scroll px-8 py-8">
                        {activeTab === 'models' ? (
                            <div className="relative min-w-0 max-w-7xl mx-auto">
                                {loading ? (
                                    <div className="flex h-64 items-center justify-center text-primary">
                                        <Loader2 className="animate-spin" size={32} />
                                    </div>
                                ) : error ? (
                                    <div className="cyber-panel cyber-chamfer-sm border border-destructive/40 p-6 text-destructive">
                                        ERROR: {error}
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        <ModelTable
                                            models={filteredModels}
                                            allModels={data?.models ?? []}
                                            vendorsById={vendorById}
                                            modelsById={modelsById}
                                            onEdit={(model) => {
                                                setEditingModel(model);
                                                setIsModalOpen(true);
                                            }}
                                            onDuplicate={handleDuplicateModel}
                                            onAdd={handleAddModel}
                                            onArchive={handleArchiveModel}
                                            onDelete={handleDeleteModel}

                                            onFallbackChange={handleFallbackChange}
                                            maxPrice={maxPrice}
                                            maxParams={maxParams}
                                            maxContext={maxContext}
                                        />
                                    </div>
                                )}
                            </div>
                        ) : activeTab === 'explore' ? (
                            <div className="h-full">
                                <ExploreView
                                    activeModels={filteredExploreModels}
                                    ownedApiIds={ownedApiIds}
                                    onHideModel={handleHideModel}
                                    onImportModel={handleImportModel}
                                />
                            </div>
                        ) : activeTab === 'teams' ? (
                            <div className="min-h-[50vh] max-w-7xl mx-auto">
                                {loading ? (
                                    <div className="flex h-64 items-center justify-center text-primary">
                                        <Loader2 className="animate-spin" size={32} />
                                    </div>
                                ) : error ? (
                                    <div className="cyber-panel cyber-chamfer-sm border border-destructive/40 p-6 text-destructive">
                                        ERROR: {error}
                                    </div>
                                ) : (
                                    <>
                                        {(teamsError || membersError) && (
                                            <div className="cyber-panel cyber-chamfer-sm border border-accent-tertiary/40 p-4 text-base text-accent-tertiary mb-6">
                                                {teamsError && <div>TEAMS DATA UNAVAILABLE. {teamsError}</div>}
                                                {membersError && <div>MEMBERS DATA UNAVAILABLE. {membersError}</div>}
                                            </div>
                                        )}
                                        <TeamsView
                                            teams={filteredTeams}
                                            members={membersData?.members ?? []}
                                            modelsById={modelsById}
                                            vendorsById={vendorById}
                                            expandedCategories={expandedCategories}
                                            onToggleCategory={handleToggleCategory}
                                            onTeamUpdate={handleTeamUpdate}
                                            onTeamCreate={handleTeamCreate}
                                            onTeamDelete={handleTeamDelete}
                                            onTeamDuplicate={handleTeamDuplicate}
                                            onMemberUpdate={handleMemberUpdate}
                                            onMemberDelete={handleMemberDelete}
                                            onMemberCreate={handleMemberCreate}
                                            createTeamSignal={createTeamSignal}
                                        />
                                    </>
                                )}
                            </div>
                        ) : activeTab === 'users' ? (
                            <div className="min-h-[50vh] max-w-7xl mx-auto">
                                {!loading && usersData ? (
                                    <UsersView
                                        users={filteredUsers}
                                        activeUserSearchQuery={userSearchQuery}
                                        filters={{
                                            plans: userPlanFilter,
                                            types: userTypeFilter
                                        }}
                                        onUpdateUser={handleUserUpdate}
                                    />
                                ) : (
                                    <div className="flex h-64 items-center justify-center text-primary">
                                        <Loader2 className="animate-spin" size={32} />
                                    </div>
                                )}
                            </div>
                        ) : activeTab === 'tags' ? (
                            <div className="flex h-64 items-center justify-center text-white/30 font-mono">
                                COMPONENT_NOT_MOUNTED
                            </div>
                        ) : activeTab === 'sessions' ? (
                            <div className="h-full">
                                {loading ? (
                                    <div className="flex h-64 items-center justify-center text-primary">
                                        <Loader2 className="animate-spin" size={32} />
                                    </div>
                                ) : sessionsError ? (
                                    <div className="cyber-panel cyber-chamfer-sm border border-destructive/40 p-6 text-destructive">
                                        ERROR: {sessionsError}
                                    </div>
                                ) : (
                                    <SessionsView sessions={filteredSessions} />
                                )}
                            </div>
                        ) : (
                            <div className="flex h-64 items-center justify-center text-white/30 font-mono">
                                COMPONENT_NOT_MOUNTED
                            </div>
                        )}
                    </div>
                </main>

                {/* Right Sidebar */}
                <aside className="hidden lg:flex flex-col min-h-0 border-l border-white/10 bg-black/40 backdrop-blur-sm">
                    <div className="flex-1 overflow-y-auto cyber-scroll p-4">
                        {activeTab === 'models' && !loading && data && vendorsData && (
                            <FilterPanel
                                filters={filters}
                                onFiltersChange={setFilters}
                                allTraits={allTraits}
                                maxPrice={maxPrice}
                                vendors={vendorsData.vendors}
                            />
                        )}

                        {activeTab === 'explore' && !loading && (
                            <ExploreFilters
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
                            />
                        )}

                        {activeTab === 'teams' && !loading && teamsData && membersData && (
                            <div className="space-y-6">

                                <div className="flex items-center justify-between">
                                    <div className="font-label text-xs text-secondary tracking-widest pl-1">TEAM_INTEL</div>
                                    {(teamSearchQuery || savedFilter !== 'saved' || publicFilter !== 'all' || missingFieldsFilter.length > 0) && (
                                        <button
                                            onClick={() => {
                                                setTeamSearchQuery('');
                                                setSavedFilter('saved');
                                                setPublicFilter('all');
                                                setMissingFieldsFilter([]);
                                            }}
                                            className="text-[10px] text-destructive hover:text-destructive/80 font-bold tracking-wider transition-colors border-b border-destructive/30 hover:border-destructive/60 pb-0.5"
                                        >
                                            CLEAR_FILTERS
                                        </button>
                                    )}
                                </div>

                                <button
                                    onClick={() => setCreateTeamSignal(prev => prev + 1)}
                                    className="w-full py-3 bg-primary/20 border border-primary/50 rounded-lg text-primary font-bold tracking-widest text-xs hover:bg-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,255,136,0.2)]"
                                >
                                    <Plus size={14} />
                                    NEW_TEAM
                                </button>

                                <div className="bg-black/40 border border-white/10 cyber-chamfer-sm p-4 space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-white/60 font-mono text-xs">ACTIVE_TEAMS</span>
                                            <span className="text-white font-display text-lg">{teamsData.totalTeams}</span>
                                        </div>
                                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary/50 w-3/4 animate-pulse"></div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-white/60 font-mono text-xs">OPERATIVES</span>
                                            <span className="text-white font-display text-lg">{membersData.totalMembers}</span>
                                        </div>
                                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-accent-secondary/50 w-1/2"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-black/40 border border-white/10 cyber-chamfer-sm p-4 space-y-3">
                                    <div className="font-label text-xs text-secondary tracking-widest mb-1">TEAM_SEARCH</div>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Search className="h-4 w-4 text-white/40 group-focus-within:text-primary transition-colors" />
                                        </div>
                                        <input
                                            type="text"
                                            value={teamSearchQuery}
                                            onChange={(e) => setTeamSearchQuery(e.target.value)}
                                            placeholder="FILTER_TEAMS..."
                                            className="w-full bg-black/60 border border-white/10 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder:text-white/20 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-mono cyber-chamfer-sm"
                                        />
                                    </div>
                                    <div className="text-[10px] text-white/30 font-mono mt-2 pl-1">
                                        SEARCHES: NAME, CATCH_PHRASE, MEMBER_NAME, ROLE
                                    </div>
                                </div>

                                <div className="bg-black/40 border border-white/10 cyber-chamfer-sm p-4 space-y-3">
                                    <div className="font-label text-xs text-secondary tracking-widest mb-1">SAVED_STATUS</div>
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
                                                    onClick={() => setSavedFilter(opt.id as any)}
                                                    className={`py-1.5 px-2 rounded text-[10px] font-bold tracking-wider transition-all ${isActive
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
                                    <div className="font-label text-xs text-secondary tracking-widest mb-1">PUBLIC_STATUS</div>
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
                                                    onClick={() => setPublicFilter(opt.id as any)}
                                                    className={`py-1.5 px-2 rounded text-[10px] font-bold tracking-wider transition-all ${isActive
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
                                    <div className="font-label text-xs text-amber-500/80 tracking-widest mb-1 flex items-center gap-2">
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
                                                            setMissingFieldsFilter(current => current.filter(f => f !== filter.id));
                                                        } else {
                                                            setMissingFieldsFilter(current => [...current, filter.id]);
                                                        }
                                                    }}
                                                    className={`
                                                        py-2 px-2 rounded border text-[9px] font-bold tracking-wider transition-all
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
                        )}

                        {activeTab === 'users' && (
                            <div className="space-y-6">
                                {/* Search */}
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-xs font-bold text-primary/60 tracking-widest">
                                        <Search size={14} />
                                        SEARCH_USERS
                                    </div>
                                    <input
                                        type="text"
                                        value={userSearchQuery}
                                        onChange={(e) => setUserSearchQuery(e.target.value)}
                                        placeholder="SEARCH_NAME_EMAIL..."
                                        className="w-full bg-black/60 border border-white/10 rounded-lg pl-3 pr-3 py-2 text-sm text-white placeholder:text-white/20 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-mono cyber-chamfer-sm"
                                    />
                                </div>

                                {/* Plan Filter */}
                                <div className="space-y-3">
                                    <div className="text-[10px] font-bold text-white/40 mb-1">PLAN_TYPE</div>
                                    <div className="grid grid-cols-2 gap-2">
                                        {['Free', 'Pro', 'Team', 'Enterprise', 'No Plan'].map(plan => (
                                            <button
                                                key={plan}
                                                onClick={() => {
                                                    if (userPlanFilter.includes(plan)) {
                                                        setUserPlanFilter(prev => prev.filter(p => p !== plan));
                                                    } else {
                                                        setUserPlanFilter(prev => [...prev, plan]);
                                                    }
                                                }}
                                                className={`
                                                    px-2 py-1.5 text-[10px] font-mono border rounded transition-colors text-left truncate
                                                    ${userPlanFilter.includes(plan)
                                                        ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400'
                                                        : 'border-white/10 text-white/40 hover:border-white/20 hover:text-white/60'}
                                                `}
                                            >
                                                {plan.toUpperCase()}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Role Filter */}
                                <div className="space-y-3">
                                    <div className="text-[10px] font-bold text-white/40 mb-1">USER_ROLE</div>
                                    <div className="grid grid-cols-2 gap-2">
                                        {['client', 'admin', 'moderator'].map(type => (
                                            <button
                                                key={type}
                                                onClick={() => {
                                                    if (userTypeFilter.includes(type)) {
                                                        setUserTypeFilter(prev => prev.filter(t => t !== type));
                                                    } else {
                                                        setUserTypeFilter(prev => [...prev, type]);
                                                    }
                                                }}
                                                className={`
                                                    px-2 py-1.5 text-[10px] font-mono border rounded transition-colors text-left
                                                    ${userTypeFilter.includes(type)
                                                        ? 'border-indigo-500/50 bg-indigo-500/10 text-indigo-400'
                                                        : 'border-white/10 text-white/40 hover:border-white/20 hover:text-white/60'}
                                                `}
                                            >
                                                {type.toUpperCase()}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {(activeTab === 'tags' || activeTab === 'sessions') && (
                            <div className="p-4 text-white/30 font-mono text-xs text-center border border-white/5 rounded-lg border-dashed">
                                NO_INDEXING_DATA
                            </div>
                        )}
                    </div>
                </aside>
            </div>

            {/* Modals */}
            <EditModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSaveModel}
                model={editingModel}
                vendorName={editingModel ? getVendorName(editingModel.vendor_id) : ''}
                models={data?.models ?? []}
                vendorsById={vendorById}
                modelsById={modelsById}
                vendors={vendors}
            />

            <ArchivedModal
                isOpen={isArchiveOpen}
                onClose={() => setIsArchiveOpen(false)}
                archivedModels={archivedData?.models || []}
                vendorsById={vendorById}
                onRestore={(model) => {
                    handleRestoreModel(model);
                    setIsArchiveOpen(false);
                }}
            />

            <CreateSessionModal
                isOpen={isCreateSessionOpen}
                onClose={() => setIsCreateSessionOpen(false)}
                teams={teamsData?.teams || []}
                models={data?.models || []}
                onSessionCreated={() => {
                    // Refetch sessions (query invalidation would be better but simple reload works for now)
                    window.location.reload();
                }}
            />
        </div>
    );
}

export default App;
