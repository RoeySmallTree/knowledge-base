import React, { useMemo, useState } from 'react';
import { AppUser } from '../types';
import { UserEditModal } from './UserEditModal';
import { ChevronDown, MapPin, Briefcase, Calendar, CreditCard, DollarSign, Edit2, ExternalLink } from 'lucide-react';


interface UsersViewProps {
    users: AppUser[];
    activeUserSearchQuery: string;
    filters: {
        plans: string[];
        types: string[];
    };
    onUpdateUser: (user: AppUser) => void;
}

export function UsersView({ users, activeUserSearchQuery, filters, onUpdateUser }: UsersViewProps) {
    const [editingUser, setEditingUser] = useState<AppUser | null>(null);
    const [expandedUsers, setExpandedUsers] = useState<Set<string>>(new Set());

    // Filter Logic
    const filteredUsers = useMemo(() => {
        return users.filter(user => {
            // Search Query
            if (activeUserSearchQuery) {
                const query = activeUserSearchQuery.toLowerCase();
                const matches =
                    user.display_name?.toLowerCase().includes(query) ||
                    user.email.toLowerCase().includes(query) ||
                    user.community_name.toLowerCase().includes(query);
                if (!matches) return false;
            }

            // Plan Filter
            if (filters.plans.length > 0) {
                const plan = user.plan_name || 'No Plan';
                if (!filters.plans.includes(plan)) return false;
            }

            // Type Filter
            if (filters.types.length > 0) {
                if (!filters.types.includes(user.type)) return false;
            }

            return true;
        });
    }, [users, activeUserSearchQuery, filters]);

    // Grouping
    const groupedUsers = useMemo(() => {
        const groups: Record<string, AppUser[]> = {};
        filteredUsers.forEach(user => {
            const planKey = user.plan_name || 'No Plan';
            if (!groups[planKey]) groups[planKey] = [];
            groups[planKey].push(user);
        });
        return groups;
    }, [filteredUsers]);

    const sortedGroups = useMemo(() => {
        const priority = ['Enterprise', 'Team', 'Pro', 'Free', 'No Plan'];
        return Object.keys(groupedUsers).sort((a, b) => {
            const idxA = priority.indexOf(a);
            const idxB = priority.indexOf(b);
            if (idxA !== -1 && idxB !== -1) return idxA - idxB;
            if (idxA !== -1) return -1;
            if (idxB !== -1) return 1;
            return a.localeCompare(b);
        });
    }, [groupedUsers]);

    const toggleUser = (id: string) => {
        const next = new Set(expandedUsers);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        setExpandedUsers(next);
    };

    return (
        <div className="p-8 space-y-12 pb-32">
            {sortedGroups.map(plan => (
                <div key={plan} className="space-y-6">
                    <div className="flex items-center gap-4">
                        <h2 className="text-2xl font-display text-white">{plan.toUpperCase()}</h2>
                        <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                        <span className="font-mono text-white/40">{groupedUsers[plan].length}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {groupedUsers[plan].map(user => (
                            <UserCard
                                key={user.id}
                                user={user}
                                isExpanded={expandedUsers.has(user.id)}
                                onToggle={() => toggleUser(user.id)}
                                onEdit={() => setEditingUser(user)}
                            />
                        ))}
                    </div>
                </div>
            ))}

            {filteredUsers.length === 0 && (
                <div className="text-center py-20 text-white/30 font-mono">
                    NO_USERS_FOUND
                </div>
            )}

            {editingUser && (
                <UserEditModal
                    isOpen={true}
                    user={editingUser}
                    onClose={() => setEditingUser(null)}
                    onSave={onUpdateUser}
                />
            )}
        </div>
    );
}

function UserCard({ user, isExpanded, onToggle, onEdit }: {
    user: AppUser;
    isExpanded: boolean;
    onToggle: () => void;
    onEdit: () => void;
}) {
    return (
        <div
            id={`user-card-${user.id}`}
            className={`
                group relative bg-black/40 border transition-all duration-300 overflow-hidden
                ${isExpanded ? 'border-primary/50 ring-1 ring-primary/20 bg-black/80 z-10' : 'border-white/10 hover:border-white/20'}
                cyber-chamfer-sm
            `}
        >
            {/* Main Click Area */}
            <div className="p-4 cursor-pointer" onClick={onToggle}>
                <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
                        {user.image_url ? (
                            <img src={user.image_url} alt={user.display_name || ''} className="w-full h-full object-cover" />
                        ) : (
                            <div className="text-xl font-bold text-white/20">
                                {(user.display_name?.[0] || user.email[0])?.toUpperCase()}
                            </div>
                        )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                            <h3 className="font-medium text-white truncate pr-2">
                                {user.display_name || 'Unnamed User'}
                            </h3>
                            <div className={`transition-transform duration-300 text-white/40 ${isExpanded ? 'rotate-180' : ''}`}>
                                <ChevronDown size={16} />
                            </div>
                        </div>

                        <div className="text-xs text-white/50 truncate font-mono mt-0.5">
                            {user.email}
                        </div>

                        <div className="flex flex-wrap gap-2 mt-3">
                            {/* Type Badge */}
                            <div className={`
                                px-1.5 py-0.5 text-[10px] font-bold rounded border uppercase tracking-wider
                                ${user.type === 'admin'
                                    ? 'bg-rose-500/10 text-rose-400 border-rose-500/30'
                                    : 'bg-white/5 text-white/40 border-white/10'}
                            `}>
                                {user.type}
                            </div>

                            {/* Plan Badge (if needed explicitly, though used for grouping) */}
                            {user.plan_code && user.plan_code !== 'no_plan' && (
                                <div className="px-1.5 py-0.5 text-[10px] font-bold rounded border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 uppercase tracking-wider">
                                    {user.plan_code}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Expanded Content */}
            <div className={`
                transition-all duration-300 ease-in-out border-t border-white/5 bg-black/20
                ${isExpanded ? 'max-h-[500px] opacity-100 p-4' : 'max-h-0 opacity-0 overflow-hidden'}
            `}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <Stat icon={Briefcase} label="Profession" value={user.profession} />
                    <Stat icon={MapPin} label="Location" value={user.location} />
                    <Stat icon={Calendar} label="Joined" value={user.created_at ? new Date(user.created_at).toLocaleDateString() : '-'} />
                    <Stat icon={Calendar} label="Last Active" value={user.last_active ? new Date(user.last_active).toLocaleDateString() : '-'} />
                </div>

                <div className="p-3 rounded bg-white/5 border border-white/10 mb-4 space-y-2">
                    <div className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-2">Billing Stats</div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-white/60">
                            <CreditCard size={12} className="text-emerald-400" />
                            Credits
                        </div>
                        <span className="font-mono text-sm text-white">{user.plan_credits_balance?.toLocaleString() ?? 0}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-white/60">
                            <DollarSign size={12} className="text-amber-400" />
                            Usage (USD)
                        </div>
                        <span className="font-mono text-sm text-white">${Number(user.last_period_usage_usd ?? 0).toFixed(2)}</span>
                    </div>
                </div>

                {user.extras && (
                    <div className="mb-4">
                        <div className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-1">Extras</div>
                        <p className="text-xs text-white/60 leading-relaxed bg-black/40 p-2 rounded border border-white/5">
                            {user.extras}
                        </p>
                    </div>
                )}

                <div className="flex gap-2 pt-2">
                    <button
                        onClick={(e) => { e.stopPropagation(); onEdit(); }}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold rounded bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
                    >
                        <Edit2 size={12} />
                        EDIT PROFILE
                    </button>
                    <button
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold rounded bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 transition-colors"
                    >
                        <ExternalLink size={12} />
                        SESSIONS
                    </button>
                </div>
            </div>
        </div>
    );
}

function Stat({ icon: Icon, label, value }: { icon: any, label: string, value?: string | null }) {
    if (!value) return null;
    return (
        <div className="space-y-0.5">
            <div className="flex items-center gap-1.5 text-[10px] font-medium text-white/40 uppercase tracking-wide">
                <Icon size={10} />
                {label}
            </div>
            <div className="text-xs text-white/80 truncate font-medium">
                {value}
            </div>
        </div>
    );
}
