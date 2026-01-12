import { LLMModel } from '../types';
import { RefreshCw, X } from 'lucide-react';

interface ArchivedModalProps {
    isOpen: boolean;
    onClose: () => void;
    archivedModels: LLMModel[];
    onRestore: (model: LLMModel) => void;
}

export function ArchivedModal({ isOpen, onClose, archivedModels, onRestore }: ArchivedModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-card w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border border-white/10 shadow-2xl animate-in fade-in zoom-in-95 duration-200 flex flex-col">
                <div className="flex items-center justify-between border-b border-white/10 bg-card/95 px-8 py-5 backdrop-blur-md shrink-0">
                    <div>
                        <h2 className="text-2xl font-semibold text-white">Archived Models</h2>
                        <p className="text-sm text-muted-foreground mt-1">Found {archivedModels.length} archived models</p>
                    </div>
                    <button onClick={onClose} className="text-muted-foreground hover:text-white transition-colors">
                        <X size={28} />
                    </button>
                </div>

                <div className="flex-1 overflow-auto p-8">
                    {archivedModels.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-muted-foreground opacity-50 space-y-4">
                            <p className="text-xl">No archived models</p>
                        </div>
                    ) : (
                        <div className="grid gap-4">
                            {archivedModels.map((model, idx) => (
                                <div key={`${model.vendor}-${model.modelName}-${idx}`} className="flex items-center justify-between p-4 rounded-xl bg-secondary/30 border border-white/5 hover:border-white/10 transition-colors">
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">{model.modelName}</h3>
                                        <p className="text-sm text-muted-foreground">{model.vendor} • {model.modelFamily}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={() => onRestore(model)}
                                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground rounded-lg hover:bg-emerald-500/20 hover:text-emerald-400 border border-transparent hover:border-emerald-500/50 transition-all"
                                            title="Restore to active list"
                                        >
                                            <RefreshCw size={16} />
                                            Restore
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
