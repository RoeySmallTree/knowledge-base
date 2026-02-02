import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const API_BASE = 'http://localhost:3006/api';

export interface ModelSettings {
    irrelevant_models_api_keys: string[];
}

export function useModelSettings() {
    const queryClient = useQueryClient();

    const fetchSettings = async (): Promise<ModelSettings> => {
        const res = await fetch(`${API_BASE}/settings/models`);
        if (!res.ok) throw new Error('Failed to fetch model settings');
        return res.json();
    };

    const updateSettings = async (settings: ModelSettings) => {
        const res = await fetch(`${API_BASE}/settings/models`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(settings),
        });
        if (!res.ok) throw new Error('Failed to update model settings');
        return res.json();
    };

    const query = useQuery({
        queryKey: ['modelSettings'],
        queryFn: fetchSettings,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });

    const mutation = useMutation({
        mutationFn: updateSettings,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['modelSettings'] });
        },
    });

    return {
        settings: query.data || { irrelevant_models_api_keys: [] },
        isLoading: query.isLoading,
        error: query.error,
        updateSettings: mutation.mutate,
    };
}
