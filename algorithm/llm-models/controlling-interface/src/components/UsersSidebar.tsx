import React, { useMemo, useState } from 'react';
import { AppUser } from '../types';
import { ChevronRight } from 'lucide-react';

interface UsersSidebarProps {
    users: AppUser[];
    activeUserSearchQuery: string;
    onUserSearchQueryChange: (query: string) => void;
}

export function UsersSidebar({ users, activeUserSearchQuery, onUserSearchQueryChange }: UsersSidebarProps) {
    const [expandedPlans, setExpandedPlans] = useState<Set<string>>(new Set(['Free', 'Pro', 'Team', 'Enterprise', 'No Plan']));

    // Group users by plan
    const usersByPlan = useMemo(() => {
        const groups: Record<string, AppUser[]> = {};
        users.forEach(user => {
            const planKey = user.plan_name || 'No Plan';
            if (!groups[planKey]) groups[planKey] = [];
            groups[planKey].push(user);
        });
        return groups;
    }, [users]);

    // Sort plans by hierarchy if possible, otherwise alphabetical
    const sortedPlans = useMemo(() => {
        const priority = ['Enterprise', 'Team', 'Pro', 'Free', 'No Plan'];
        return Object.keys(usersByPlan).sort((a, b) => {
            const idxA = priority.indexOf(a);
            const idxB = priority.indexOf(b);
            if (idxA !== -1 && idxB !== -1) return idxA - idxB;
            if (idxA !== -1) return -1;
            if (idxB !== -1) return 1;
            return a.localeCompare(b);
        });
    }, [usersByPlan]);

    const scrollToUser = (id: string) => {
        const el = document.getElementById(`user-card-${id}`);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Briefly highlight?
            el.classList.add('ring-2', 'ring-primary');
            setTimeout(() => el.classList.remove('ring-2', 'ring-primary'), 1000);
        }
    };

    const togglePlan = (plan: string) => {
        const next = new Set(expandedPlans);
        if (next.has(plan)) next.delete(plan);
        else next.add(plan);
        setExpandedPlans(next);
    };

    return (
        <div className="flex flex-col h-full bg-black/40 border-r border-white/10 w-80 flex-shrink-0">
            {/* Header / Stats */}
            <div className="p-4 border-b border-white/10 space-y-4">
                <div className="font-label text-sm text-primary">USER_DIRECTORY</div>
                <div className="cyber-panel cyber-chamfer-sm p-4 space-y-3">
                    <div className="flex items-center justify-between text-base">
                        <span className="text-muted-foreground">TOTAL USERS</span>
                        <span className="text-primary">{users.length}</span>
                    </div>
                </div>
            </div>

            {/* Plan Groups */}
            <div className="flex-1 overflow-y-auto cyber-scroll p-4 space-y-6">
                {sortedPlans.map(plan => {
                    const planUsers = usersByPlan[plan];
                    const isExpanded = expandedPlans.has(plan);

                    return (
                        <div key={plan} className="space-y-2">
                            <button
                                onClick={() => togglePlan(plan)}
                                className={`w-full flex items-center justify-between px-3 py-2 font-label text-sm border border-border/70 cyber-chamfer-sm transition-colors ${isExpanded ? 'text-primary border-primary/60' : 'text-muted-foreground hover:text-primary'}`}
                            >
                                <div className="flex items-center gap-2">
                                    <ChevronRight size={14} className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                                    {plan.toUpperCase()}
                                </div>
                                <span className="text-sm text-muted-foreground">{planUsers.length}</span>
                            </button>

                            {isExpanded && (
                                <div className="space-y-1 pl-2 border-l border-white/5 ml-2">
                                    {planUsers.map(user => (
                                        <button
                                            key={user.id}
                                            onClick={() => scrollToUser(user.id)}
                                            className="w-full text-left px-3 py-1.5 text-xs text-muted-foreground hover:text-primary hover:bg-white/5 rounded transition-colors truncate"
                                        >
                                            {user.display_name || user.email}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
