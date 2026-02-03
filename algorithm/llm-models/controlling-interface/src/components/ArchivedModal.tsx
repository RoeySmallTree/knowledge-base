import { LLMModel, Vendor } from '../types';
import { RefreshCw, X } from 'lucide-react';
import { FONT_SIZE } from '../constants';

interface ArchivedModalProps {
    isOpen: boolean;
    onClose: () => void;
    archivedModels: LLMModel[];
    vendorsById: Record<string, Vendor>;
    onRestore: (model: LLMModel) => void;
}

export function ArchivedModal({ isOpen, onClose, archivedModels, vendorsById, onRestore }: ArchivedModalProps) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <div className="cyber-panel cyber-chamfer w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
                <div className="flex items-center justify-between border-b border-border/70 bg-card/90 px-6 py-4 shrink-0">
                    <div>
                        <div className={`font-label ${FONT_SIZE.SM} text-muted-foreground`}>ARCHIVE_VAULT</div>
                        <h2 className={`font-display ${FONT_SIZE.LG} text-primary`}>ARCHIVED MODELS</h2>
                        <p className={`${FONT_SIZE.SM} text-muted-foreground mt-1`}>{archivedModels.length} UNITS</p>
                    </div>
                    <button onClick={onClose} className="border border-border/60 cyber-chamfer-sm p-2 text-muted-foreground hover:text-primary">
                        <X size={18} />
                    </button>
                </div>

                <div className="flex-1 overflow-auto cyber-scroll p-6">
                    {archivedModels.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-muted-foreground opacity-70">
                            NO ARCHIVED MODELS
                        </div>
                    ) : (
                        <div className="grid gap-4">
                            {archivedModels.map((model, idx) => {
                                const displayName = model.name_within_family?.trim() || model.modelName;
                                return (
                                    <div key={`${model.vendor_id}-${model.modelName}-${idx}`} className="cyber-panel cyber-chamfer-sm p-4 flex items-center justify-between">
                                        <div>
                                            <div className={`font-display ${FONT_SIZE.MD} text-foreground`}>{displayName}</div>
                                            <div className={`${FONT_SIZE.SM} text-muted-foreground`}>
                                                {vendorsById[String(model.vendor_id)]?.display_name ?? 'Unknown Vendor'} • {model.modelFamily}
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => onRestore(model)}
                                            className="cyber-button cyber-chamfer-sm flex items-center gap-2"
                                            title="Restore to active list"
                                        >
                                            <RefreshCw size={14} />
                                            RESTORE
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
