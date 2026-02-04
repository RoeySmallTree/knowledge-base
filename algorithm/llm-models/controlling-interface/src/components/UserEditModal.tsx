import { useState, useEffect } from 'react';
import { AppUser } from '../types';
import { FONT_SIZE } from '../constants';
import { X, Save } from 'lucide-react';

interface UserEditModalProps {
    isOpen: boolean;
    onClose: () => void;
    user: AppUser;
    onSave: (user: AppUser) => void;
}

export function UserEditModal({ isOpen, onClose, user, onSave }: UserEditModalProps) {
    const [draft, setDraft] = useState<AppUser>(user);

    useEffect(() => {
        setDraft(user);
    }, [user, isOpen]);

    const handleChange = (field: keyof AppUser, value: string) => {
        setDraft(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = () => {
        onSave(draft);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="w-full max-w-2xl bg-black border border-white/10 cyber-chamfer-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col max-h-[90vh]">

                <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
                    <h2 className={`font-label ${FONT_SIZE.XL} text-primary tracking-widest`}>EDIT USER PROFILE</h2>
                    <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
                        <X size={20} />
                    </button>
                </div>

                <div className="p-6 space-y-6 overflow-y-auto cyber-scroll flex-1">
                    {/* Identity Section */}
                    <Section title="IDENTITY">
                        <Field label="Display Name">
                            <input
                                value={draft.display_name || ''}
                                onChange={e => handleChange('display_name', e.target.value)}
                                className="w-full cyber-input cyber-chamfer-sm"
                            />
                        </Field>
                        <div className="grid grid-cols-2 gap-4">
                            <Field label="Chat Name">
                                <input
                                    value={draft.chat_name || ''}
                                    onChange={e => handleChange('chat_name', e.target.value)}
                                    className="w-full cyber-input cyber-chamfer-sm"
                                />
                            </Field>
                            <Field label="Community Name">
                                <input
                                    value={draft.community_name || ''}
                                    onChange={e => handleChange('community_name', e.target.value)}
                                    className="w-full cyber-input cyber-chamfer-sm"
                                />
                            </Field>
                        </div>
                    </Section>

                    {/* Details Section */}
                    <Section title="DETAILS">
                        <div className="grid grid-cols-2 gap-4">
                            <Field label="Profession">
                                <input
                                    value={draft.profession || ''}
                                    onChange={e => handleChange('profession', e.target.value)}
                                    className="w-full cyber-input cyber-chamfer-sm"
                                />
                            </Field>
                            <Field label="Location">
                                <input
                                    value={draft.location || ''}
                                    onChange={e => handleChange('location', e.target.value)}
                                    className="w-full cyber-input cyber-chamfer-sm"
                                />
                            </Field>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Field label="Gender">
                                <input
                                    value={draft.gender || ''}
                                    onChange={e => handleChange('gender', e.target.value)}
                                    className="w-full cyber-input cyber-chamfer-sm"
                                />
                            </Field>
                            <Field label="Type">
                                <select
                                    value={draft.type}
                                    onChange={e => handleChange('type', e.target.value)}
                                    className="w-full cyber-input cyber-chamfer-sm bg-black"
                                >
                                    <option value="client">Client</option>
                                    <option value="admin">Admin</option>
                                    <option value="moderator">Moderator</option>
                                </select>
                            </Field>
                        </div>
                    </Section>

                    {/* Extras Section */}
                    <Section title="EXTRAS">
                        <Field label="Notes / Extras">
                            <textarea
                                value={draft.extras || ''}
                                onChange={e => handleChange('extras', e.target.value)}
                                className="w-full cyber-input cyber-chamfer-sm min-h-[120px]"
                            />
                        </Field>
                    </Section>
                </div>

                <div className="p-6 border-t border-white/10 flex justify-end gap-3 bg-white/5">
                    <button onClick={onClose} className={`px-4 py-2 ${FONT_SIZE.XS} font-bold rounded border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-colors`}>
                        CANCEL
                    </button>
                    <button onClick={handleSave} className="cyber-button cyber-chamfer-sm flex items-center gap-2">
                        <Save size={16} />
                        SAVE CHANGES
                    </button>
                </div>
            </div>
        </div>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="space-y-4">
            <div className={`${FONT_SIZE.XS} font-bold text-primary/60 tracking-widest border-b border-primary/20 pb-1`}>
                {title}
            </div>
            <div className="space-y-4">
                {children}
            </div>
        </div>
    );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className="space-y-1.5">
            <label className={`${FONT_SIZE.XS} font-medium text-white/50 uppercase tracking-wide`}>{label}</label>
            {children}
        </div>
    );
}
