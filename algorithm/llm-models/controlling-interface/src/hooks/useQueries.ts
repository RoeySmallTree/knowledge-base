import { useQuery } from '@tanstack/react-query';
import { ModelsData, VendorsData, Team, Member } from '../types';

export const useModels = () => {
    return useQuery<ModelsData>({
        queryKey: ['models', 'active'],
        queryFn: async () => {
            const res = await fetch('/api/models');
            if (!res.ok) throw new Error('Failed to fetch models');
            return res.json();
        }
    });
};

export const useArchivedModels = () => {
    return useQuery<ModelsData>({
        queryKey: ['models', 'archived'],
        queryFn: async () => {
            const res = await fetch('/api/archive');
            if (!res.ok) throw new Error('Failed to fetch archived models');
            return res.json();
        }
    });
};

export const useVendors = () => {
    return useQuery<VendorsData>({
        queryKey: ['vendors'],
        queryFn: async () => {
            const res = await fetch('/api/vendors');
            if (!res.ok) throw new Error('Failed to fetch vendors');
            return res.json();
        }
    });
};

export const useTeams = () => {
    return useQuery<{ generatedAt: string; totalTeams: number; teams: Team[] }>({
        queryKey: ['teams'],
        queryFn: async () => {
            const res = await fetch('/api/teams');
            if (!res.ok) throw new Error('Failed to fetch teams');
            return res.json();
        }
    });
};

export const useMembers = () => {
    return useQuery<{ generatedAt: string; totalMembers: number; members: Member[] }>({
        queryKey: ['members'],
        queryFn: async () => {
            const res = await fetch('/api/members');
            if (!res.ok) throw new Error('Failed to fetch members');
            return res.json();
        }
    });
};
