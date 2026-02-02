import { Search, Filter, Clock } from 'lucide-react';

interface ExploreFiltersProps {
    hideOwned: boolean;
    onToggleHideOwned: (hide: boolean) => void;
    hideIrrelevant: boolean;
    onToggleHideIrrelevant: (hide: boolean) => void;
    onClear: () => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
    createdAfter: number | null;
    onCreatedAfterChange: (date: number | null) => void;
    lastOwnedDate?: number;
}

export function ExploreFilters({
    hideOwned,
    onToggleHideOwned,
    hideIrrelevant,
    onToggleHideIrrelevant,
    onClear,
    searchQuery,
    onSearchChange,
    createdAfter,
    onCreatedAfterChange,
    lastOwnedDate
}: ExploreFiltersProps) {
    const formatDateForInput = (timestamp: number) => {
        return new Date(timestamp * 1000).toISOString().split('T')[0];
    };

    const setPreset = (daysAgo: number) => {
        const date = new Date();
        date.setDate(date.getDate() - daysAgo);
        onCreatedAfterChange(Math.floor(date.getTime() / 1000));
    };

    return (
        <div className="flex flex-col h-full gap-6">
            {/* Search */}
            <div className="space-y-3">
                <div className="font-label text-xs text-secondary tracking-widest pl-1">SEARCH</div>
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-white/40 group-focus-within:text-primary transition-colors" />
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        placeholder="SEARCH_MODELS..."
                        className="w-full bg-black/60 border border-white/10 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder:text-white/20 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-mono cyber-chamfer-sm"
                    />
                </div>
            </div>

            {/* Filters */}
            <div className="space-y-4">
                <div className="flex items-center justify-between pl-1 border-b border-white/5 pb-2">
                    <div className="font-label text-xs text-primary/50 tracking-widest flex items-center gap-2">
                        <Filter size={12} />
                        FILTERS
                    </div>
                    {/* Clear Button */}
                    {(hideOwned || createdAfter !== null || searchQuery) && (
                        <button
                            onClick={onClear}
                            className="text-[10px] font-mono text-white/40 hover:text-white transition-colors flex items-center gap-1"
                        >
                            CLEAR_ALL
                        </button>
                    )}
                </div>

                {/* Hide Owned Toggle */}
                <button
                    onClick={() => onToggleHideOwned(!hideOwned)}
                    className={`w-full group relative overflow-hidden rounded-lg border p-3 transition-all duration-300 text-left ${hideOwned
                        ? 'border-accent-tertiary/50 bg-accent-tertiary/10 shadow-[0_0_15px_rgba(0,212,255,0.15)]'
                        : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
                        }`}
                >
                    <div className="relative z-10 flex items-center justify-between">
                        <span className={`font-display text-xs transition-colors ${hideOwned ? 'text-accent-tertiary' : 'text-white/70'}`}>
                            HIDE OWNED
                        </span>
                        <div className={`w-2.5 h-2.5 rounded-sm border transition-all ${hideOwned
                            ? 'bg-accent-tertiary border-accent-tertiary shadow-[0_0_8px_rgba(0,212,255,0.5)]'
                            : 'border-white/30 bg-transparent'
                            }`} />
                    </div>
                    {hideOwned && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-tertiary/5 to-transparent animate-[scan_2s_linear_infinite]" />
                    )}
                </button>

                {/* Hide Irrelevant Toggle */}
                <button
                    onClick={() => onToggleHideIrrelevant(!hideIrrelevant)}
                    className={`w-full group relative overflow-hidden rounded-lg border p-3 transition-all duration-300 text-left ${hideIrrelevant
                        ? 'border-violet-500/50 bg-violet-500/10 shadow-[0_0_15px_rgba(139,92,246,0.15)]'
                        : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
                        }`}
                >
                    <div className="relative z-10 flex items-center justify-between">
                        <span className={`font-display text-xs transition-colors ${hideIrrelevant ? 'text-violet-400' : 'text-white/70'}`}>
                            HIDE IRRELEVANT
                        </span>
                        <div className={`w-2.5 h-2.5 rounded-sm border transition-all ${hideIrrelevant
                            ? 'bg-violet-500 border-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.5)]'
                            : 'border-white/30 bg-transparent'
                            }`} />
                    </div>
                    {hideIrrelevant && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/5 to-transparent animate-[scan_2s_linear_infinite]" />
                    )}
                </button>

                {/* Created After Section */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-white/40 pl-1 uppercase">
                        <Clock size={10} />
                        Created After
                    </div>

                    <input
                        type="date"
                        value={createdAfter ? formatDateForInput(createdAfter) : ''}
                        onChange={(e) => {
                            const date = new Date(e.target.value);
                            if (!isNaN(date.getTime())) {
                                onCreatedAfterChange(Math.floor(date.getTime() / 1000));
                            } else {
                                onCreatedAfterChange(null);
                            }
                        }}
                        className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-xs font-mono text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors [color-scheme:dark]"
                    />

                    <div className="grid grid-cols-3 gap-1.5">
                        <button
                            onClick={() => setPreset(2)}
                            className="px-2 py-1.5 rounded border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-[9px] font-mono text-white/60 transition-all text-center"
                        >
                            2 Days
                        </button>
                        <button
                            onClick={() => setPreset(7)}
                            className="px-2 py-1.5 rounded border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-[9px] font-mono text-white/60 transition-all text-center"
                        >
                            1 Week
                        </button>
                        {lastOwnedDate && (
                            <button
                                onClick={() => onCreatedAfterChange(lastOwnedDate)}
                                className="px-2 py-1.5 rounded border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-[9px] font-mono text-accent-secondary/60 hover:text-accent-secondary transition-all text-center truncate"
                                title="Filter models released after your last purchase"
                            >
                                Last Added
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
