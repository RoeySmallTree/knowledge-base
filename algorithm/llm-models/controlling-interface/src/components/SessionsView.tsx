import React from 'react';
import { Session } from '../types';
import { SessionCard } from './SessionCard';
import { Filter } from 'lucide-react';

interface SessionsViewProps {
    sessions: Session[];
}

export const SessionsView: React.FC<SessionsViewProps> = ({ sessions }) => {
    return (
        <div className="h-full min-h-0">
            {/* Main Grid */}
            <div className="h-full overflow-y-auto cyber-scroll">
                {sessions.length === 0 ? (
                    <div className="h-64 flex flex-col items-center justify-center text-white/30">
                        <Filter size={32} className="mb-4 opacity-50" />
                        <div className="font-mono text-sm">NO MATCHING SESSIONS FOUND</div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-max">
                        {sessions.map(session => (
                            <SessionCard key={session.id} session={session} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
