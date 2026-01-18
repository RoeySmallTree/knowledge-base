import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function StringArrayInput({
    label,
    name,
    value,
    onChange,
    placeholder = "Type and press Enter..."
}: {
    label: string,
    name: string,
    value: string | string[] | undefined, // stored as CSV string or string array
    onChange: (e: { target: { name: string, value: string | string[] } }) => void,
    placeholder?: string
}) {
    // Parse initial value to array (supports CSV string or direct string array)
    const [items, setItems] = useState<string[]>(() => {
        if (!value) return [];
        if (Array.isArray(value)) return value;
        return value.split(/,\s*|\n/).map(s => s.trim()).filter(Boolean);
    });
    const [inputValue, setInputValue] = useState('');

    // Sync external value changes
    useEffect(() => {
        let currentArr: string[] = [];
        if (Array.isArray(value)) {
            currentArr = value;
        } else if (value) {
            currentArr = value.split(/,\s*|\n/).map(s => s.trim()).filter(Boolean);
        }

        if (JSON.stringify(currentArr) !== JSON.stringify(items)) {
            setItems(currentArr);
        }
    }, [value]);

    const updateParent = (newItems: string[]) => {
        setItems(newItems);
        // optimal format: comma separated for storage? or newline?
        // simple csv is easiest for now consistent with other text fields
        onChange({ target: { name, value: newItems.join(', ') } });
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (inputValue.trim()) {
                const newItems = [...items, inputValue.trim()];
                updateParent(newItems);
                setInputValue('');
            }
        } else if (e.key === 'Backspace' && !inputValue && items.length > 0) {
            const newItems = items.slice(0, -1);
            updateParent(newItems);
        }
    };

    const removeItem = (index: number) => {
        const newItems = items.filter((_, i) => i !== index);
        updateParent(newItems);
    };

    return (
        <div className="space-y-1.5">
            <label className="font-label text-xs tracking-widest text-white/40 uppercase">{label}</label>
            <div className="w-full bg-black/40 border border-white/10 rounded-lg px-2 py-2 text-sm text-white focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50 transition-all flex flex-wrap gap-2 min-h-[42px]">
                {items.map((item, i) => (
                    <span key={i} className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/10 border border-white/10 text-xs font-mono group">
                        {item}
                        <button
                            type="button"
                            onClick={() => removeItem(i)}
                            className="text-white/40 hover:text-red-400 transition-colors"
                        >
                            <X size={10} />
                        </button>
                    </span>
                ))}
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={items.length === 0 ? placeholder : ""}
                    className="bg-transparent border-none outline-none text-sm placeholder:text-white/20 min-w-[120px] flex-1 font-mono"
                />
            </div>
        </div>
    );
}
