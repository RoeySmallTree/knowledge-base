import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: React.ReactNode;
    confirmLabel?: string;
    cancelLabel?: string;
    variant?: 'danger' | 'warning' | 'info';
}

export function ConfirmationModal({
    isOpen,
    onClose,
    onConfirm,
    title,
    message,
    confirmLabel = "CONFIRM",
    cancelLabel = "CANCEL",
    variant = 'danger'
}: ConfirmationModalProps) {
    if (!isOpen) return null;

    const colors = {
        danger: {
            border: 'border-red-500/30',
            bg: 'bg-black/90',
            text: 'text-red-400',
            buttonBg: 'bg-red-500/20',
            buttonBorder: 'border-red-500/50',
            buttonText: 'text-red-500',
            buttonHover: 'hover:bg-red-500/30',
            shadow: 'shadow-[0_0_30px_rgba(255,50,50,0.2)]'
        },
        warning: {
            border: 'border-yellow-500/30',
            bg: 'bg-black/90',
            text: 'text-yellow-400',
            buttonBg: 'bg-yellow-500/20',
            buttonBorder: 'border-yellow-500/50',
            buttonText: 'text-yellow-500',
            buttonHover: 'hover:bg-yellow-500/30',
            shadow: 'shadow-[0_0_30px_rgba(255,200,50,0.2)]'
        },
        info: {
            border: 'border-primary/30',
            bg: 'bg-black/90',
            text: 'text-primary',
            buttonBg: 'bg-primary/20',
            buttonBorder: 'border-primary/50',
            buttonText: 'text-primary',
            buttonHover: 'hover:bg-primary/30',
            shadow: 'shadow-[0_0_30px_rgba(0,255,136,0.2)]'
        }
    }[variant];

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
            onClick={(e) => {
                e.stopPropagation();
                onClose();
            }}
        >
            <div
                className={`w-full max-w-sm rounded-xl p-6 border ${colors.border} ${colors.bg} ${colors.shadow}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={`flex items-center gap-3 ${colors.text} mb-4`}>
                    <AlertTriangle size={24} />
                    <h3 className="font-display text-lg tracking-wide">{title}</h3>
                </div>
                <div className="text-sm text-white/70 mb-6 font-mono leading-relaxed">
                    {message}
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onClose();
                        }}
                        className="flex-1 py-2 rounded border border-white/10 hover:bg-white/5 text-xs font-mono text-white/60 transition-colors"
                    >
                        {cancelLabel}
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onConfirm();
                            onClose();
                        }}
                        className={`flex-1 py-2 rounded ${colors.buttonBg} border ${colors.buttonBorder} ${colors.buttonText} ${colors.buttonHover} text-xs font-mono font-bold transition-all shadow-md`}
                    >
                        {confirmLabel}
                    </button>
                </div>
            </div>
        </div>
    );
}
