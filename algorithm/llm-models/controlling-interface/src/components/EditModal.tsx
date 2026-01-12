import React, { useState, useEffect } from 'react';
import { LLMModel } from '../types';
import { X, Save } from 'lucide-react';

interface EditModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (model: LLMModel) => void;
    model: LLMModel | null;
}

export function EditModal({ isOpen, onClose, onSave, model }: EditModalProps) {
    const [formData, setFormData] = useState<LLMModel | null>(null);

    useEffect(() => {
        setFormData(model);
    }, [model]);

    if (!isOpen || !formData) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => {
            if (!prev) return null;
            return {
                ...prev,
                [name]: name.includes('Score') ? (value === '' ? null : parseFloat(value)) : value
            };
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData) {
            onSave(formData);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-card w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-card/95 px-8 py-5 backdrop-blur-md">
                    <h2 className="text-2xl font-semibold text-white">Edit Model</h2>
                    <button onClick={onClose} className="text-muted-foreground hover:text-white transition-colors">
                        <X size={28} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <Input label="Vendor" name="vendor" value={formData.vendor} onChange={handleChange} />
                        <Input label="Model Family" name="modelFamily" value={formData.modelFamily} onChange={handleChange} />
                        <Input label="Model Name" name="modelName" value={formData.modelName} onChange={handleChange} />
                        <Input label="Parameters (B)" name="parametersB" value={formData.parametersB} onChange={handleChange} />
                        <Input label="Context (K)" name="contextK" value={formData.contextK} onChange={handleChange} />
                    </div>

                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <Input label="Creative Score" name="creativeScore" type="number" step="0.1" value={formData.creativeScore ?? ''} onChange={handleChange} />
                            <Input label="Deductive Score" name="deductiveScore" type="number" step="0.1" value={formData.deductiveScore ?? ''} onChange={handleChange} />
                        </div>
                        <Input label="Best For" name="bestFor" value={formData.bestFor} onChange={handleChange} />
                        <TextArea label="Personality Traits" name="personalityTraits" value={formData.personalityTraits} onChange={handleChange} />
                        <TextArea label="Analytical Traits" name="analyticalTraits" value={formData.analyticalTraits} onChange={handleChange} />
                    </div>

                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <TextArea label="Optimal Team Examples" name="optimalTeamExamples" value={formData.optimalTeamExamples} onChange={handleChange} />
                        <TextArea label="Special Properties / Notes" name="specialPropertiesNotes" value={formData.specialPropertiesNotes} onChange={handleChange} />
                    </div>

                    <div className="col-span-1 md:col-span-2 flex justify-end gap-5 pt-6 border-t border-white/10">
                        <button type="button" onClick={onClose} className="px-5 py-2.5 text-base font-medium text-muted-foreground hover:text-white transition-colors">Cancel</button>
                        <button type="submit" className="flex items-center gap-2 px-8 py-2.5 text-base font-medium bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                            <Save size={18} />
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

function Input({ label, name, value, onChange, type = "text", step }: any) {
    return (
        <div className="space-y-2">
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                step={step}
                className="w-full h-11 px-4 rounded-xl bg-secondary/50 border border-white/5 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-base"
            />
        </div>
    )
}

function TextArea({ label, name, value, onChange }: any) {
    return (
        <div className="space-y-2">
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{label}</label>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                rows={3}
                className="w-full p-4 rounded-xl bg-secondary/50 border border-white/5 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-base resize-none"
            />
        </div>
    )
}
