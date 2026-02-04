import type { RefObject } from 'react';
import { Search, Loader2 } from 'lucide-react';
import type { AppUser } from '../../types';
import { UsersSidebar } from '../UsersSidebar';
import { UsersView } from '../UsersView';
import { TabShell } from '../layout/TabShell';
import { FONT_SIZE } from '../../constants';
import { useAppData } from '../../context/AppDataContext';

interface UsersTabProps {
    filteredUsers: AppUser[];
    activeUserSearchQuery: string;
    onUserSearchChange: (query: string) => void;
    userPlanFilter: string[];
    onUserPlanFilterChange: (next: string[]) => void;
    userTypeFilter: string[];
    onUserTypeFilterChange: (next: string[]) => void;
    onUpdateUser: (user: AppUser) => void;
    scrollRootRef?: RefObject<HTMLDivElement>;
    leftPanelRef?: RefObject<HTMLDivElement>;
}

export function UsersTab({
    filteredUsers,
    activeUserSearchQuery,
    onUserSearchChange,
    userPlanFilter,
    onUserPlanFilterChange,
    userTypeFilter,
    onUserTypeFilterChange,
    onUpdateUser,
    scrollRootRef,
    leftPanelRef
}: UsersTabProps) {
    const { loading } = useAppData();

    const left = !loading ? (
        <UsersSidebar users={filteredUsers} />
    ) : null;

    const main = (
        <div className="min-h-[50vh] max-w-7xl mx-auto">
            {!loading ? (
                <UsersView
                    users={filteredUsers}
                    activeUserSearchQuery={activeUserSearchQuery}
                    filters={{
                        plans: userPlanFilter,
                        types: userTypeFilter
                    }}
                    onUpdateUser={onUpdateUser}
                />
            ) : (
                <div className="flex h-64 items-center justify-center text-primary">
                    <Loader2 className="animate-spin" size={32} />
                </div>
            )}
        </div>
    );

    const right = (
        <div className="space-y-6">
            <div className="space-y-2">
                <div className={`flex items-center gap-2 ${FONT_SIZE.XS} font-bold text-primary/60 tracking-widest`}>
                    <Search size={14} />
                    SEARCH_USERS
                </div>
                <input
                    type="text"
                    value={activeUserSearchQuery}
                    onChange={(e) => onUserSearchChange(e.target.value)}
                    placeholder="SEARCH_NAME_EMAIL..."
                    className={`w-full bg-black/60 border border-white/10 rounded-lg pl-3 pr-3 py-2 ${FONT_SIZE.SM} text-white placeholder:text-white/20 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-mono cyber-chamfer-sm`}
                />
            </div>

            <div className="space-y-3">
                <div className={`${FONT_SIZE.XXS} font-bold text-white/40 mb-1`}>PLAN_TYPE</div>
                <div className="grid grid-cols-2 gap-2">
                    {['Free', 'Pro', 'Team', 'Enterprise', 'No Plan'].map(plan => (
                        <button
                            key={plan}
                            onClick={() => {
                                if (userPlanFilter.includes(plan)) {
                                    onUserPlanFilterChange(userPlanFilter.filter(p => p !== plan));
                                } else {
                                    onUserPlanFilterChange([...userPlanFilter, plan]);
                                }
                            }}
                            className={`
                                px-2 py-1.5 ${FONT_SIZE.XXS} font-mono border rounded transition-colors text-left truncate
                                ${userPlanFilter.includes(plan)
                                    ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400'
                                    : 'border-white/10 text-white/40 hover:border-white/20 hover:text-white/60'}
                            `}
                        >
                            {plan.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-3">
                <div className={`${FONT_SIZE.XXS} font-bold text-white/40 mb-1`}>USER_ROLE</div>
                <div className="grid grid-cols-2 gap-2">
                    {['client', 'admin', 'moderator'].map(type => (
                        <button
                            key={type}
                            onClick={() => {
                                if (userTypeFilter.includes(type)) {
                                    onUserTypeFilterChange(userTypeFilter.filter(t => t !== type));
                                } else {
                                    onUserTypeFilterChange([...userTypeFilter, type]);
                                }
                            }}
                            className={`
                                px-2 py-1.5 ${FONT_SIZE.XXS} font-mono border rounded transition-colors text-left
                                ${userTypeFilter.includes(type)
                                    ? 'border-indigo-500/50 bg-indigo-500/10 text-indigo-400'
                                    : 'border-white/10 text-white/40 hover:border-white/20 hover:text-white/60'}
                            `}
                        >
                            {type.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <TabShell
            left={left}
            main={main}
            right={right}
            leftPanelRef={leftPanelRef}
            scrollRootRef={scrollRootRef}
        />
    );
}
