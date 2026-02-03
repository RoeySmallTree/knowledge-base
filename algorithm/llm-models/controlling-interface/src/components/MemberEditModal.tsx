import { useState, useEffect, type ReactNode } from 'react';
import { X } from 'lucide-react';
import { FONT_SIZE } from '../constants';
import { Team, TeamMember, LLMModel, Vendor, TeamRole } from '../types';
import { FallbackPicker } from './FallbackPicker';
import { StringArrayInput } from './StringArrayInput';

const ROLE_OPTIONS: TeamRole[] = ['Chair', 'Envoy', 'Watchdog', 'Operative'];
const COLOR_OPTIONS = [
    '#FF6B9D',
    '#C77DFF',
    '#F38181',
    '#AA96DA',
    '#FCBAD3',
    '#FFFFD2',
    '#FFD93D',
    '#6BCB77',
    '#4D96FF',
    '#FF6B6B'
];

export function MemberEditModal({
    isOpen,
    member,
    teams,
    modelsById,
    vendorsById,
    isCreating,
    onClose,
    onSave
}: {
    isOpen: boolean;
    member: TeamMember | null;
    teams: Team[];
    modelsById: Record<string, LLMModel>;
    vendorsById: Record<string, Vendor>;
    isCreating: boolean;
    onClose: () => void;
    onSave: (member: TeamMember) => void;
}) {
    const [draft, setDraft] = useState<TeamMember | null>(member);

    useEffect(() => {
        setDraft(member);
    }, [member]);

    if (!isOpen || !draft) return null;

    const updateField = <K extends keyof TeamMember>(key: K, value: TeamMember[K]) => {
        setDraft(prev => (prev ? { ...prev, [key]: value } : prev));
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
            onClick={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <div className="cyber-panel cyber-chamfer w-full max-w-4xl shadow-xl max-h-[85vh] overflow-hidden flex flex-col">
                <div className="p-6 pb-0 flex items-center justify-between">
                    <div>
                        <div className={`font-label ${FONT_SIZE.SM} text-muted-foreground`}>{isCreating ? 'ADD_MEMBER' : 'EDIT_MEMBER'}</div>
                        <h3 className={`font-display ${FONT_SIZE.LG} text-primary`}>{draft.name || draft.team_role || 'New Member'}</h3>
                    </div>
                    <button onClick={onClose} className="border border-border/60 cyber-chamfer-sm p-2 text-muted-foreground hover:text-primary">
                        <X size={18} />
                    </button>
                </div>

                <div className="px-6 py-4 overflow-y-auto cyber-scroll flex-1 min-h-0">
                    <div className="grid gap-4 md:grid-cols-2">
                        <Field label="ID">
                            <input
                                value={draft.id}
                                onChange={(e) => updateField('id', e.target.value)}
                                className="w-full cyber-input cyber-chamfer-sm"
                            />
                        </Field>
                        <Field label="Team">
                            <select
                                value={draft.team_id}
                                onChange={(e) => updateField('team_id', e.target.value)}
                                className="w-full cyber-input cyber-chamfer-sm"
                            >
                                {teams.map(team => (
                                    <option key={team.id} value={team.id}>{team.name}</option>
                                ))}
                            </select>
                        </Field>

                        <Field label="Name">
                            <input
                                value={draft.name ?? ''}
                                onChange={(e) => updateField('name', e.target.value)}
                                className="w-full cyber-input cyber-chamfer-sm"
                            />
                        </Field>
                        <Field label="Role">
                            <div className="grid grid-cols-2 gap-2">
                                {ROLE_OPTIONS.map(role => (
                                    <button
                                        key={role}
                                        onClick={() => updateField('role', role)}
                                        className={`px-3 py-2 rounded-lg border ${FONT_SIZE.XS} font-bold tracking-widest transition-all ${draft.role === role
                                            ? 'bg-primary/20 border-primary text-primary shadow-[0_0_10px_rgba(0,255,136,0.2)]'
                                            : 'bg-black/40 border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60'
                                            }`}
                                    >
                                        {role}
                                    </button>
                                ))}
                            </div>
                        </Field>
                        <Field label="Team Role">
                            <input
                                value={draft.team_role}
                                onChange={(e) => updateField('team_role', e.target.value)}
                                className="w-full cyber-input cyber-chamfer-sm"
                            />
                        </Field>
                        <Field label="Color" full>
                            <div className="grid grid-cols-5 gap-2">
                                <button
                                    onClick={() => updateField('color', null)}
                                    className={`col-span-1 px-2 py-2 rounded-lg border ${FONT_SIZE.XXS} font-bold tracking-wider transition-all flex items-center justify-center gap-1 ${!draft.color
                                        ? 'bg-white/10 border-white/50 text-white shadow-[0_0_10px_rgba(255,255,255,0.2)]'
                                        : 'bg-black/40 border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60'
                                        }`}
                                >
                                    <div className="w-3 h-3 rounded-full border border-white/20 bg-transparent" />
                                    NONE
                                </button>
                                {COLOR_OPTIONS.map(color => (
                                    <button
                                        key={color}
                                        onClick={() => updateField('color', color)}
                                        className={`col-span-1 px-1 py-2 rounded-lg border ${FONT_SIZE.XXS} font-mono transition-all flex items-center justify-center gap-1.5 ${draft.color === color
                                            ? 'bg-white/10 border-white/50 text-white shadow-[0_0_10px_rgba(255,255,255,0.2)]'
                                            : 'bg-black/40 border-white/10 text-white/40 hover:bg-white/5 hover:text-white/60'
                                            }`}
                                    >
                                        <div
                                            className="w-3 h-3 rounded-full shadow-sm"
                                            style={{ backgroundColor: color }}
                                        />
                                        {color}
                                    </button>
                                ))}
                            </div>
                        </Field>
                        <Field label="Model" full>
                            <FallbackPicker
                                models={Object.values(modelsById)}
                                vendorsById={vendorsById}
                                modelsById={modelsById}
                                value={draft.model_id ? String(draft.model_id) : undefined}
                                favorModel={draft.model_id ? modelsById[String(draft.model_id)] : undefined}
                                onChange={(modelId) => updateField('model_id', modelId ? Number(modelId) : 0)} // Default to 0 if cleared
                            />
                        </Field>
                        <Field label="Characteristics" full>
                            <StringArrayInput
                                label="CHARACTERISTICS"
                                name="characteristics"
                                value={draft.characteristics}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    const arr = typeof val === 'string' ? val.split(',').map(s => s.trim()).filter(Boolean) : val;
                                    updateField('characteristics', arr as string[]);
                                }}
                                placeholder="Add characteristic..."
                            />
                        </Field>
                        <Field label="Life Story" full>
                            <textarea
                                value={draft.life_story ?? ''}
                                onChange={(e) => updateField('life_story', e.target.value)}
                                className="w-full cyber-input cyber-chamfer-sm min-h-[100px]"
                            />
                        </Field>
                        <Field label="Special Orders" full>
                            <textarea
                                value={draft.special_orders ?? ''}
                                onChange={(e) => updateField('special_orders', e.target.value)}
                                className="w-full cyber-input cyber-chamfer-sm min-h-[120px]"
                            />
                        </Field>
                    </div>


                </div>

                <div className="px-6 pb-6 pt-2 flex justify-end gap-3">
                    <button onClick={onClose} className="cyber-button-secondary cyber-chamfer-sm">Cancel</button>
                    <button
                        onClick={() =>
                            onSave({
                                ...draft,
                                characteristics: draft.characteristics
                            })
                        }
                        className="cyber-button cyber-chamfer-sm"
                    >
                        Save
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
