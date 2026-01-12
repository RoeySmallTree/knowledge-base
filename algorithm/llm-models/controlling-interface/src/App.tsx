import { useState, useEffect } from 'react';
import { LLMModel, ModelsData } from './types';
import { ModelTable } from './components/ModelTable';
import { ModelSidebar } from './components/ModelSidebar';
import { EditModal } from './components/EditModal';

import { ArchivedModal } from './components/ArchivedModal';
import { Loader2, Archive } from 'lucide-react';

function App() {
    const [data, setData] = useState<ModelsData | null>(null);
    const [archivedData, setArchivedData] = useState<ModelsData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const [editingModel, setEditingModel] = useState<LLMModel | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isArchiveOpen, setIsArchiveOpen] = useState(false);

    // Fetch models
    useEffect(() => {
        fetchModels();
    }, []);

    const fetchModels = async () => {
        try {
            // Fetch both active and archived models
            const [activeRes, archiveRes] = await Promise.all([
                fetch('/api/models'),
                fetch('/api/archive')
            ]);

            if (!activeRes.ok) throw new Error('Failed to fetch models');
            // Archive fetch might fail if file doesn't exist yet, but our backend handles it

            const activeJson = await activeRes.json();
            const archiveJson = await archiveRes.json();

            setData(activeJson);
            setArchivedData(archiveJson);
            setLoading(false);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error');
            setLoading(false);
        }
    };

    const handleSaveModel = async (updatedModel: LLMModel) => {
        if (!data) return;

        // Replace the model in the list
        // Note: This matches by reference which might rely on finding exact object,
        // but since we are editing a copy, we need a unique ID.
        // The previous implementation of JSON doesn't have IDs.
        // We'll match by name + vendor for now, or just map by index if we had it.
        // Let's assume name+vendor is unique enough or use the original reference if possible.
        // Actually, `editingModel` (the source) is from the array.

        const newModels = data.models.map(m =>
            (m.vendor === editingModel?.vendor && m.modelName === editingModel?.modelName)
                ? updatedModel
                : m
        );

        const newData = { ...data, models: newModels };

        // Optimistic update
        setData(newData);
        setIsModalOpen(false);
        setEditingModel(null);

        try {
            const response = await fetch('/api/models', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newData)
            });
            if (!response.ok) throw new Error('Failed to save');
        } catch (err) {
            console.error("Save failed, reverting...", err);
            fetchModels(); // Revert on failure
            alert("Failed to save changes to server.");
        }
    };

    const handleArchiveModel = async (model: LLMModel) => {
        if (!data || !archivedData) return;

        // Remove from active, add to archive
        const newModels = data.models.filter(m => m.modelName !== model.modelName || m.vendor !== model.vendor);
        const newArchivedModels = [...archivedData.models, model];

        const newData = { ...data, models: newModels, totalModels: newModels.length };
        const newArchivedData = { ...archivedData, models: newArchivedModels, totalModels: newArchivedModels.length };

        setData(newData);
        setArchivedData(newArchivedData);

        try {
            await Promise.all([
                fetch('/api/models', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newData) }),
                fetch('/api/archive', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newArchivedData) })
            ]);
        } catch (err) {
            console.error("Archive failed", err);
            fetchModels();
            alert("Failed to archive model.");
        }
    };

    const handleRestoreModel = async (model: LLMModel) => {
        if (!data || !archivedData) return;

        // Remove from archive, add to active
        const newArchivedModels = archivedData.models.filter(m => m.modelName !== model.modelName || m.vendor !== model.vendor);
        const newModels = [...data.models, model];

        const newArchivedData = { ...archivedData, models: newArchivedModels, totalModels: newArchivedModels.length };
        const newData = { ...data, models: newModels, totalModels: newModels.length };

        setData(newData);
        setArchivedData(newArchivedData);

        try {
            await Promise.all([
                fetch('/api/models', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newData) }),
                fetch('/api/archive', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newArchivedData) })
            ]);
        } catch (err) {
            console.error("Restore failed", err);
            fetchModels();
            alert("Failed to restore model.");
        }
    };

    const filteredModels = data?.models.filter(m =>
        m.modelName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.vendor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.bestFor.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

    return (
        <div className="min-h-screen bg-background p-8 font-sans text-foreground">
            <div className="mx-auto max-w-7xl space-y-8">
                <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between pb-8 border-b border-white/5 mb-8">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Model Controller</h1>
                        <div className="flex items-center gap-4">
                            <p className="text-lg text-muted-foreground">Manage and analyze {data?.totalModels || 0} LLM models.</p>
                            <button
                                onClick={() => setIsArchiveOpen(true)}
                                className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-white bg-secondary/30 hover:bg-secondary/50 rounded-lg transition-colors border border-transparent hover:border-white/10"
                            >
                                <Archive size={16} />
                                View Archive ({archivedData?.totalModels || 0})
                            </button>
                        </div>
                    </div>
                </header>

                <div className="flex flex-col lg:flex-row gap-8 relative">
                    {/* Sticky Sidebar */}
                    {!loading && data && (
                        <ModelSidebar
                            models={filteredModels.length > 0 ? filteredModels : data.models}
                            searchQuery={searchQuery}
                            onSearchChange={setSearchQuery}
                        />
                    )}

                    {/* Main Content Area */}
                    <div className="flex-1 min-w-0">
                        {loading ? (
                            <div className="flex h-64 items-center justify-center">
                                <Loader2 className="animate-spin text-primary" size={32} />
                            </div>
                        ) : error ? (
                            <div className="rounded-xl border border-destructive/20 bg-destructive/10 p-6 text-destructive">
                                Error: {error}
                            </div>
                        ) : (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <ModelTable
                                    models={filteredModels}
                                    onEdit={(model) => {
                                        setEditingModel(model);
                                        setIsModalOpen(true);
                                    }}
                                    onArchive={handleArchiveModel}
                                    maxPrice={Math.max(...(data?.models.map(m => (m.pricing?.completion || 0)) || [0]))}
                                />
                            </div>
                        )}

                        {/* Edit Modal */}
                        <EditModal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            onSave={handleSaveModel}
                            model={editingModel}
                        />

                        {/* Archived Modal */}
                        <ArchivedModal
                            isOpen={isArchiveOpen}
                            onClose={() => setIsArchiveOpen(false)}
                            archivedModels={archivedData?.models || []}
                            onRestore={(model) => {
                                handleRestoreModel(model);
                                setIsArchiveOpen(false); // Optional: close modal on restore or keep open
                            }}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default App
