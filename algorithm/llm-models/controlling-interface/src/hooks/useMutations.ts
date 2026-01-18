import { useMutation, useQueryClient } from '@tanstack/react-query';
import { LLMModel, Vendor, Team, Member } from '../types';

export const useUpdateModel = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (model: LLMModel) => {
            const res = await fetch('/api/models/update', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ model })
            });
            if (!res.ok) throw new Error('Failed to update model');
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['models', 'active'] });
            queryClient.invalidateQueries({ queryKey: ['models', 'archived'] });
        }
    });
};

export const useCreateModel = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (model: LLMModel) => {
            const res = await fetch('/api/models/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ model })
            });
            if (!res.ok) throw new Error('Failed to create model');
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['models', 'active'] });
        }
    });
};

export const useUpdateModelsOrder = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (orders: { id?: string; api_id?: string; display_order: number }[]) => {
            const res = await fetch('/api/models/order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ orders })
            });
            if (!res.ok) throw new Error('Failed to update model order');
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['models', 'active'] });
        }
    });
};

export const useUpdateVendors = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (vendors: Vendor[]) => {
            const res = await fetch('/api/vendors', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ vendors })
            });
            if (!res.ok) throw new Error('Failed to update vendors');
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['vendors'] });
        }
    });
};


// --- Teams Mutations ---

export const useCreateTeam = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (team: Partial<Team>) => {
            const res = await fetch('/api/teams', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ team })
            });
            if (!res.ok) throw new Error('Failed to create team');
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['teams'] });
        }
    });
};

export const useUpdateTeam = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (team: Team) => {
            const res = await fetch('/api/teams', {
                method: 'POST', // Using same endpoint for upsert/update
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ team })
            });
            if (!res.ok) throw new Error('Failed to update team');
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['teams'] });
        }
    });
};

export const useDeleteTeam = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (id: string) => {
            const res = await fetch('/api/teams', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id })
            });
            if (!res.ok) throw new Error('Failed to delete team');
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['teams'] });
        }
    });
};

export const useDuplicateTeam = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (teamId: string) => {
            const res = await fetch('/api/teams/duplicate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: teamId })
            });
            if (!res.ok) throw new Error('Failed to duplicate team');
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['teams'] });
        }
    });
};

// --- Members Mutations ---

export const useCreateMember = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (member: Partial<Member>) => {
            const res = await fetch('/api/members', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ member })
            });
            if (!res.ok) throw new Error('Failed to create member');
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['members'] });
            queryClient.invalidateQueries({ queryKey: ['teams'] }); // Update teams as well if counts change
        }
    });
};

export const useUpdateMember = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (member: Member) => {
            const res = await fetch('/api/members', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ member })
            });
            if (!res.ok) throw new Error('Failed to update member');
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['members'] });
        }
    });
};

export const useDeleteMember = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (id: string) => {
            const res = await fetch('/api/members', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id })
            });
            if (!res.ok) throw new Error('Failed to delete member');
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['members'] });
        }
    });
};

export const useArchiveRestoreModel = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({ model, active }: { model: LLMModel; active: boolean }) => {
            const updatedModel = { ...model, active };
            const res = await fetch('/api/models/update', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ model: updatedModel })
            });
            if (!res.ok) throw new Error('Failed to update model status');
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['models', 'active'] });
            queryClient.invalidateQueries({ queryKey: ['models', 'archived'] });
        }
    });
};
export const useUpdateModels = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (models: LLMModel[]) => {
            const res = await fetch('/api/models', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ models })
            });
            if (!res.ok) throw new Error('Failed to update models');
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['models', 'active'] });
            queryClient.invalidateQueries({ queryKey: ['models', 'archived'] });
        }
    });
};

export const useDeleteModel = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({ id, api_id }: { id?: string | number; api_id?: string }) => {
            const res = await fetch('/api/models', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, api_id })
            });
            if (!res.ok) throw new Error('Failed to delete model');
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['models', 'active'] });
            queryClient.invalidateQueries({ queryKey: ['models', 'archived'] });
        }
    });
};
