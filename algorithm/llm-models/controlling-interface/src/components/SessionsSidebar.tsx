import React from 'react';
import { Search, Database } from 'lucide-react';

interface SessionsSidebarProps {
    totalSessions: number;
    searchQuery: string;
    onSearchChange: (query: string) => void;
    statusFilter: 'all' | 'Live' | 'Pending' | 'Halted';
    onStatusChange: (status: 'all' | 'Live' | 'Pending' | 'Halted') => void;
    onNewSession: () => void;
}

export const SessionsSidebar: React.FC<SessionsSidebarProps> = ({
    totalSessions,
    searchQuery,
    onSearchChange,
    statusFilter,
    onStatusChange,
    onNewSession
}) => {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6 text-primary">
                <Database size={20} />
                <h2 className="font-display text-lg tracking-wide">SESSIONS</h2>
                <span className="ml-auto text-xs font-mono text-white/50">{totalSessions}</span>
            </div>

            <button
                onClick={onNewSession}
                className="w-full py-3 bg-primary/20 border border-primary/50 rounded-lg text-primary font-bold tracking-widest text-xs hover:bg-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,255,136,0.2)]"
            >
                <Database size={14} />
                NEW_SESSION
            </button>

            <div className="space-y-6">
                {/* Search */}
                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Search</label>
                    <div className="relative">
                        <Search className="absolute left-3 top-2.5 text-white/30" size={14} />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => onSearchChange(e.target.value)}
                            placeholder="Session, Team, User..."
                            className="w-full bg-black/40 border border-white/10 rounded-sm py-2 pl-9 pr-3 text-sm text-white focus:border-primary/50 focus:outline-none placeholder:text-white/20 font-mono"
                        />
                    </div>
                </div>

                {/* Status Filter */}
                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Status</label>
                    <div className="flex flex-col gap-1">
                        {(['all', 'Live', 'Pending', 'Halted'] as const).map(status => (
                            <button
                                key={status}
                                onClick={() => onStatusChange(status)}
                                className={`
                                    flex items-center justify-between px-3 py-2 text-xs font-mono border transition-all
                                    ${statusFilter === status
                                        ? 'border-primary/40 bg-primary/10 text-primary'
                                        : 'border-white/5 hover:border-white/20 text-white/60'}
                                `}
                            >
                                <span className="capitalize">{status}</span>
                                {statusFilter === status && <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_5px_rgba(0,255,136,0.8)]" />}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
