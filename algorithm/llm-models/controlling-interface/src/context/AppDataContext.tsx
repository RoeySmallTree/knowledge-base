import { createContext, useContext, useMemo, type ReactNode } from 'react';
import type { AppUser, LLMModel, Session, Team, TeamMember, Vendor } from '../types';
import { useArchivedModels, useMembers, useModels, useSessions, useTeams, useUsers, useVendors } from '../hooks/useQueries';

type AppDataErrors = {
    models: string | null;
    teams: string | null;
    members: string | null;
    sessions: string | null;
    users: string | null;
};

type AppDataTotals = {
    models: number;
    archivedModels: number;
    vendors: number;
    teams: number;
    members: number;
    sessions: number;
    users: number;
};

export type AppDataContextValue = {
    models: LLMModel[];
    archivedModels: LLMModel[];
    vendors: Vendor[];
    teams: Team[];
    members: TeamMember[];
    sessions: Session[];
    users: AppUser[];
    vendorsById: Record<string, Vendor>;
    modelsById: Record<string, LLMModel>;
    loading: boolean;
    errors: AppDataErrors;
    totals: AppDataTotals;
};

const AppDataContext = createContext<AppDataContextValue | null>(null);

export function AppDataProvider({ children }: { children: ReactNode }) {
    const { data: modelsData, isLoading: isLoadingModels, error: modelsError } = useModels();
    const { data: archivedModelsData, isLoading: isLoadingArchived } = useArchivedModels();
    const { data: vendorsData, isLoading: isLoadingVendors } = useVendors();
    const { data: teamsData, isLoading: isLoadingTeams, error: teamsErrorObj } = useTeams();
    const { data: membersData, isLoading: isLoadingMembers, error: membersErrorObj } = useMembers();
    const { data: sessionsData, isLoading: isLoadingSessions, error: sessionsErrorObj } = useSessions();
    const { data: usersData, isLoading: isLoadingUsers, error: usersErrorObj } = useUsers();

    const models = modelsData?.items || [];
    const archivedModels = archivedModelsData?.items || [];
    const vendors = vendorsData?.items || [];
    const teams = teamsData?.items || [];
    const members = membersData?.items || [];
    const sessions = sessionsData?.items || [];
    const users = usersData?.items || [];

    const vendorsById = useMemo(() => {
        const map: Record<string, Vendor> = {};
        vendors.forEach(vendor => {
            map[String(vendor.id)] = vendor;
        });
        return map;
    }, [vendors]);

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

    const loading = isLoadingModels
        || isLoadingArchived
        || isLoadingVendors
        || isLoadingTeams
        || isLoadingMembers
        || isLoadingSessions
        || isLoadingUsers;

    const errors: AppDataErrors = {
        models: modelsError ? (modelsError as Error).message : null,
        teams: teamsErrorObj ? (teamsErrorObj as Error).message : null,
        members: membersErrorObj ? (membersErrorObj as Error).message : null,
        sessions: sessionsErrorObj ? (sessionsErrorObj as Error).message : null,
        users: usersErrorObj ? (usersErrorObj as Error).message : null
    };

    const totals: AppDataTotals = {
        models: modelsData?.total ?? models.length,
        archivedModels: archivedModelsData?.total ?? archivedModels.length,
        vendors: vendors.length,
        teams: teamsData?.total ?? teams.length,
        members: membersData?.total ?? members.length,
        sessions: sessionsData?.total ?? sessions.length,
        users: usersData?.total ?? users.length
    };

    const value: AppDataContextValue = {
        models,
        archivedModels,
        vendors,
        teams,
        members,
        sessions,
        users,
        vendorsById,
        modelsById,
        loading,
        errors,
        totals
    };

    return (
        <AppDataContext.Provider value={value}>
            {children}
        </AppDataContext.Provider>
    );
}

export function useAppData() {
    const context = useContext(AppDataContext);
    if (!context) {
        throw new Error('useAppData must be used within AppDataProvider');
    }
    return context;
}
