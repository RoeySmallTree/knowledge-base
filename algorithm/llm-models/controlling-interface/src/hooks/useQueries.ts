import { useQuery } from '@tanstack/react-query';
import { ModelsData, VendorsData, TeamsData, MembersData, UsersData, SessionsData } from '../types';

export const useModels = () => {
    return useQuery<ModelsData>({
        queryKey: ['models', 'active'],
        queryFn: async () => {
            const res = await fetch('/api/models?active=true');
            if (!res.ok) throw new Error('Failed to fetch models');
            return res.json();
        }
    });
};

export const useArchivedModels = () => {
    return useQuery<ModelsData>({
        queryKey: ['models', 'archived'],
        queryFn: async () => {
            const res = await fetch('/api/models?active=false');
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
    return useQuery<TeamsData>({
        queryKey: ['teams'],
        queryFn: async () => {
            const res = await fetch('/api/teams');
            if (!res.ok) throw new Error('Failed to fetch teams');
            return res.json();
        }
    });
};

export const useMembers = () => {
    return useQuery<MembersData>({
        queryKey: ['members'],
        queryFn: async () => {
            const res = await fetch('/api/members');
            if (!res.ok) throw new Error('Failed to fetch members');
            return res.json();
        }
    });
};


export const useUsers = () => {
    return useQuery<UsersData>({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('/api/users');
            if (!res.ok) throw new Error('Failed to fetch users');
            return res.json();
        }
    });
};

export const useSessions = () => {
    return useQuery<SessionsData>({
        queryKey: ['sessions'],
        queryFn: async () => {
            const res = await fetch('/api/sessions');
            if (!res.ok) throw new Error('Failed to fetch sessions');
            return res.json();
        }
    });
};

import { OpenRouterModel } from '../types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useExploreModels = () => {
    return useQuery<{ data: OpenRouterModel[] }>({
        queryKey: ['explore-models'],
        queryFn: async () => {
            const res = await fetch('/api/explore/models');
            if (!res.ok) throw new Error('Failed to fetch explore models');
            return res.json();
        },
        staleTime: Infinity, // Don't refetch automatically, rely on manual refresh or cache invalidation
        refetchOnWindowFocus: false
    });
};

export const useRefreshExploreModels = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async () => {
            const res = await fetch('/api/explore/models?force=true');
            if (!res.ok) throw new Error('Failed to refresh explore models');
            return res.json();
        },
        onSuccess: (data) => {
            queryClient.setQueryData(['explore-models'], data);
        }
    });
};

export const useUpdateVendorOrders = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (orders: Array<{ id: number; display_order: number }>) => {
            const res = await fetch('/api/vendors/order', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ orders })
            });
            if (!res.ok) throw new Error('Failed to update vendor orders');
            return res.json();
        },
        onSuccess: () => {
            // Invalidate vendors query to refetch with new order
            queryClient.invalidateQueries({ queryKey: ['vendors'] });
        }
    });
};

export const useUpdateTeamOrders = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (orders: Array<{ id: string; display_order: number }>) => {
            const res = await fetch('/api/teams/order', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ orders })
            });
            if (!res.ok) throw new Error('Failed to update team orders');
            return res.json();
        },
        onSuccess: () => {
            // Invalidate teams query to refetch with new order
            queryClient.invalidateQueries({ queryKey: ['teams'] });
        }
    });
};

export const useUpdateMemberOrders = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (orders: Array<{ id: string; display_order: number }>) => {
            const res = await fetch('/api/members/order', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ orders })
            });
            if (!res.ok) throw new Error('Failed to update member orders');
            return res.json();
        },
        onSuccess: () => {
            // Invalidate members query to refetch with new order
            queryClient.invalidateQueries({ queryKey: ['members'] });
        }
    });
};

export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (user: any) => {
            const res = await fetch(`/api/users/${user.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user })
            });
            if (!res.ok) throw new Error('Failed to update user');
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        }
    });
};
