import type { RefObject } from 'react';
import { Loader2 } from 'lucide-react';
import type { Session } from '../../types';
import { SessionsSidebar } from '../SessionsSidebar';
import { SessionsView } from '../SessionsView';
import { TabShell } from '../layout/TabShell';
import { FONT_SIZE } from '../../constants';
import { useAppData } from '../../context/AppDataContext';

interface SessionsTabProps {
    filteredSessions: Session[];
    sessionSearchQuery: string;
    onSessionSearchChange: (query: string) => void;
    sessionStatusFilter: 'all' | 'Live' | 'Pending' | 'Halted';
    onSessionStatusChange: (value: 'all' | 'Live' | 'Pending' | 'Halted') => void;
    onNewSession: () => void;
    scrollRootRef?: RefObject<HTMLDivElement>;
    leftPanelRef?: RefObject<HTMLDivElement>;
}

export function SessionsTab({
    filteredSessions,
    sessionSearchQuery,
    onSessionSearchChange,
    sessionStatusFilter,
    onSessionStatusChange,
    onNewSession,
    scrollRootRef,
    leftPanelRef
}: SessionsTabProps) {
    const { sessions, loading, errors } = useAppData();

    const left = !loading ? (
        <SessionsSidebar
            totalSessions={sessions.length}
            searchQuery={sessionSearchQuery}
            onSearchChange={onSessionSearchChange}
            statusFilter={sessionStatusFilter}
            onStatusChange={onSessionStatusChange}
            onNewSession={onNewSession}
        />
    ) : null;

    const main = (
        <div className="h-full">
            {loading ? (
                <div className="flex h-64 items-center justify-center text-primary">
                    <Loader2 className="animate-spin" size={32} />
                </div>
            ) : errors.sessions ? (
                <div className="cyber-panel cyber-chamfer-sm border border-destructive/40 p-6 text-destructive">
                    ERROR: {errors.sessions}
                </div>
            ) : (
                <SessionsView sessions={filteredSessions} />
            )}
        </div>
    );

    const right = (
        <div className={`p-4 text-white/30 font-mono ${FONT_SIZE.XS} text-center border border-white/5 rounded-lg border-dashed`}>
            NO_INDEXING_DATA
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
