import { useState, useEffect, type ReactNode } from 'react';
import { X, Save } from 'lucide-react';
import { FONT_SIZE } from '../constants';
import { Team, TeamCategory } from '../types';
import { MarkdownEditor } from './MarkdownEditor';
import { StringArrayInput } from './StringArrayInput';

const CATEGORY_ORDER: TeamCategory[] = ['CORTEX', 'VITALS', 'OPS', 'ARCADE'];

export function TeamEditModal({
    isOpen,
    team,
    isCreating,
    onClose,
    onSave
}: {
    isOpen: boolean;
    team: Team | null;
    isCreating: boolean;
    onClose: () => void;
    onSave: (team: Team) => void;
}) {
    const [draft, setDraft] = useState<Team | null>(team);
    useEffect(() => {
        if (isCreating && team) {
            setDraft({ ...team, is_public: true, is_saved: true });
        } else {
            setDraft(team);
        }
    }, [team, isCreating]);

    if (!isOpen || !draft) return null;

    const updateField = <K extends keyof Team>(key: K, value: Team[K]) => {
        setDraft(prev => (prev ? { ...prev, [key]: value } : prev));
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
            onClick={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <div className="cyber-panel cyber-chamfer w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col border border-white/10 bg-black/80 backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-6 py-4">
                    <div>
                        <div className={`font-label ${FONT_SIZE.SM} text-primary/80 tracking-widest mb-1`}>{isCreating ? 'CREATE_TEAM' : 'EDIT_TEAM'}</div>
                        <h2 className={`font-display ${FONT_SIZE.XL} text-white tracking-wide flex items-center gap-2`}>
                            {draft.name || 'New Team'}
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="group p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 hover:text-white text-white/60 transition-all duration-300"
                    >
                        <X size={18} className="group-hover:rotate-90 transition-transform duration-300" />
                    </button>
                </div>

                <div className="flex flex-col flex-1 min-h-0">
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto cyber-scroll flex-1 min-h-0">
                        <Field label="TEAM NAME">
                            <input
                                value={draft.name}
                                onChange={(e) => updateField('name', e.target.value)}
                                className={`w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 ${FONT_SIZE.SM} text-white placeholder:text-white/20 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-mono`}
                            />
                        </Field>
                        <Field label="CATEGORY">
                            <div className="grid grid-cols-2 gap-2">
                                {CATEGORY_ORDER.map(cat => (
                                    <button
                                        key={cat}
                                        type="button"
                                        onClick={() => updateField('category', cat)}
                                        className={`px-3 py-2 rounded-lg border ${FONT_SIZE.XS} font-bold tracking-widest transition-all ${draft.category === cat
                                            ? 'bg-primary/20 border-primary text-primary shadow-[0_0_10px_rgba(0,255,136,0.2)]'
                                            : 'bg-black/40 border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </Field>
                        <Field label="SETTINGS">
                            <div className="flex items-center gap-6">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <button
                                        type="button"
                                        onClick={() => updateField('is_public', !draft.is_public)}
                                        className={`w-10 h-5 rounded-full relative transition-colors ${draft.is_public ? 'bg-primary/20 border border-primary/50' : 'bg-white/5 border border-white/10'}`}
                                    >
                                        <div className={`absolute top-0.5 left-0.5 w-3.5 h-3.5 rounded-full bg-white transition-transform ${draft.is_public ? 'translate-x-[20px] bg-primary shadow-[0_0_10px_rgba(0,255,136,0.5)]' : 'bg-white/20'}`} />
                                    </button>
                                    <span className={`${FONT_SIZE.XS} font-bold tracking-widest transition-colors ${draft.is_public ? 'text-primary' : 'text-white/40'}`}>
                                        PUBLIC
                                    </span>
                                </label>

                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <button
                                        type="button"
                                        onClick={() => updateField('is_saved', !draft.is_saved)}
                                        className={`w-10 h-5 rounded-full relative transition-colors ${draft.is_saved ? 'bg-primary/20 border border-primary/50' : 'bg-white/5 border border-white/10'}`}
                                    >
                                        <div className={`absolute top-0.5 left-0.5 w-3.5 h-3.5 rounded-full bg-white transition-transform ${draft.is_saved ? 'translate-x-[20px] bg-primary shadow-[0_0_10px_rgba(0,255,136,0.5)]' : 'bg-white/20'}`} />
                                    </button>
                                    <span className={`${FONT_SIZE.XS} font-bold tracking-widest transition-colors ${draft.is_saved ? 'text-primary' : 'text-white/40'}`}>
                                        SAVED
                                    </span>
                                </label>
                            </div>
                        </Field>
                        <Field label="CATCH PHRASE" full>
                            <input
                                value={draft.catch_phrase}
                                onChange={(e) => updateField('catch_phrase', e.target.value)}
                                className={`w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 ${FONT_SIZE.SM} text-white placeholder:text-white/20 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-mono`}
                            />
                        </Field>
                        <Field label="DEFAULT STARTING ROUNDS">
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <button
                                        type="button"
                                        onClick={() => updateField('default_starting_rounds', draft.default_starting_rounds === null ? 1 : null)}
                                        className={`w-10 h-5 rounded-full relative transition-colors ${draft.default_starting_rounds !== null ? 'bg-primary/20 border border-primary/50' : 'bg-white/5 border border-white/10'}`}
                                    >
                                        <div className={`absolute top-0.5 left-0.5 w-3.5 h-3.5 rounded-full bg-white transition-transform ${draft.default_starting_rounds !== null ? 'translate-x-[20px] bg-primary shadow-[0_0_10px_rgba(0,255,136,0.5)]' : 'bg-white/20'}`} />
                                    </button>
                                    <span className={`${FONT_SIZE.SM} text-white/60 font-mono`}>
                                        {draft.default_starting_rounds !== null ? 'ENABLED' : 'NOT SET'}
                                    </span>
                                </div>

                                {draft.default_starting_rounds !== null && (
                                    <div className="flex items-center gap-4 bg-black/40 border border-white/10 rounded-lg px-4 py-3 animate-in fade-in slide-in-from-top-1 duration-200">
                                        <input
                                            type="range"
                                            min={1}
                                            max={20}
                                            step={1}
                                            value={draft.default_starting_rounds}
                                            onChange={(e) => updateField('default_starting_rounds', Number(e.target.value))}
                                            className="cyber-range w-full h-1.5 rounded-full cursor-pointer"
                                            style={{
                                                background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${(draft.default_starting_rounds - 1) / 19 * 100}%, rgba(255, 255, 255, 0.1) ${(draft.default_starting_rounds - 1) / 19 * 100}%, rgba(255, 255, 255, 0.1) 100%)`
                                            }}
                                        />
                                        <div className="font-display text-xl text-primary w-12 text-center">
                                            {draft.default_starting_rounds}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Field>
                        <Field label="DESCRIPTION" full>
                            <MarkdownEditor
                                value={draft.description}
                                onChange={(value) => updateField('description', value)}
                                placeholder="Enter team description (Markdown supported)"
                                className="min-h-[100px]"
                            />
                        </Field>
                        <Field label="QUICK STARTS" full>
                            <StringArrayInput
                                label="QUICK STARTS"
                                name="quick_starts"
                                value={draft.quick_starts}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    const arr = typeof val === 'string' ? val.split(',').map(s => s.trim()).filter(Boolean) : val;
                                    updateField('quick_starts', arr as string[]);
                                }}
                                placeholder="Add quick start..."
                            />
                        </Field>
                        <Field label="BOOTSTRAP PROMPT" full>
                            <textarea
                                value={draft.bootstrap_prompt ?? ''}
                                onChange={(e) => updateField('bootstrap_prompt', e.target.value)}
                                className={`w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 ${FONT_SIZE.SM} text-white placeholder:text-white/20 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-mono min-h-[120px] resize-none`}
                            />
                        </Field>

                    </div>
                </div>

                <div className="px-6 pb-6 pt-4 flex justify-end gap-3 border-t border-white/10 bg-black/40">
                    <button
                        onClick={onClose}
                        className={`px-6 py-2.5 rounded-lg border border-white/10 ${FONT_SIZE.XS} font-bold tracking-widest text-white/60 hover:text-white hover:bg-white/5 transition-all`}
                    >
                        CANCEL
                    </button>
                    <button
                        onClick={() => onSave(draft)}
                        className={`px-6 py-2.5 rounded-lg bg-primary/20 border border-primary/50 text-primary ${FONT_SIZE.XS} font-bold tracking-widest hover:bg-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(0,255,136,0.2)]`}
                    >
                        <Save size={14} />
                        SAVE_CHANGES
                    </button>
                </div>
            </div>
        </div>
    );
}

function Field({ label, children, full }: { label: string; children: ReactNode; full?: boolean }) {
    return (
        <div className={full ? 'md:col-span-2 space-y-2' : 'space-y-2'}>
            <label className={`font-label ${FONT_SIZE.SM} text-muted-foreground`}>{label}</label>
            {children}
        </div>
    );
}
