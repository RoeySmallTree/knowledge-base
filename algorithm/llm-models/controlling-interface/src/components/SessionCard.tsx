import { Session } from '../types';
import { Activity, AlertTriangle, Shield, Archive } from 'lucide-react';
import { FONT_SIZE } from '../constants';

interface SessionCardProps {
    session: Session;
}

export const SessionCard: React.FC<SessionCardProps> = ({ session }) => {
    const isLive = session.status === 'Live';
    const isHalted = session.status === 'Halted' || !!session.error;
    const isArchived = !!session.archived_at;

    // Calculate progress
    const totalRounds = session.current_round + session.rounds_left;
    const progressPercent = totalRounds > 0 ? (session.current_round / totalRounds) * 100 : 0;

    return (
        <div className={`
            cyber-card group relative flex flex-col bg-black/40 border transition-all duration-300
            ${isLive ? 'border-primary/30 hover:border-primary' : ''}
            ${isHalted ? 'border-red-500/30 hover:border-red-500' : ''}
            ${!isLive && !isHalted ? 'border-white/10 hover:border-white/30' : ''}
        `}>
            {/* Status Stripe */}
            <div className={`absolute top-0 left-0 w-1 h-full transition-colors 
                 ${isLive ? 'bg-primary shadow-[0_0_10px_rgba(0,255,136,0.5)]' : ''}
                 ${isHalted ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]' : ''}
                 ${!isLive && !isHalted ? 'bg-white/10' : ''}
            `} />

            <div className="pl-5 p-4 flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className={`
                                ${FONT_SIZE.XXS} font-mono uppercase tracking-widest px-1.5 py-0.5 rounded-sm border
                                ${isLive ? 'text-primary border-primary/30 bg-primary/10' : ''}
                                ${isHalted ? 'text-red-500 border-red-500/30 bg-red-500/10' : ''}
                                ${!isLive && !isHalted ? 'text-white/40 border-white/10 bg-white/5' : ''}
                            `}>
                                {session.status}
                            </span>
                            {session.access === 'private' && <Shield size={12} className="text-white/30" />}
                            {isArchived && <Archive size={12} className="text-white/30" />}
                        </div>
                        <h3 className={`font-display ${FONT_SIZE.LG} text-white group-hover:text-primary transition-colors line-clamp-1`} title={session.name}>
                            {session.name}
                        </h3>
                    </div>
                </div>

                {/* Info Grid */}
                <div className={`grid grid-cols-2 gap-4 ${FONT_SIZE.XS} font-mono text-white/50 mb-4`}>
                    <div>
                        <div className={`${FONT_SIZE.XXS} uppercase tracking-wider text-white/20 mb-1`}>TEAM</div>
                        <div className="truncate text-white/70">{session.team_name}</div>
                    </div>
                    <div>
                        <div className={`${FONT_SIZE.XXS} uppercase tracking-wider text-white/20 mb-1`}>USER</div>
                        <div className="truncate text-white/70">{session.user_name}</div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-auto">
                    <div className={`flex justify-between ${FONT_SIZE.XXS} font-mono text-white/40 mb-1`}>
                        <span>ROUND {session.current_round}</span>
                        <span>{session.rounds_left} LEFT</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <div
                            className={`h-full transition-all duration-500 ${isHalted ? 'bg-red-500' : 'bg-primary'}`}
                            style={{ width: `${Math.min(100, progressPercent)}%` }}
                        />
                    </div>
                </div>

                {/* Error / Halt Reason */}
                {(session.halt_reason || session.error) && (
                    <div className="mt-3 p-2 bg-red-500/5 border border-red-500/20 rounded-sm flex items-start gap-2">
                        <AlertTriangle size={12} className="text-red-500 shrink-0 mt-0.5" />
                        <div className={`${FONT_SIZE.XXS} font-mono text-red-400 line-clamp-2 leading-tight`}>
                            {session.error || session.halt_reason}
                        </div>
                    </div>
                )}

                {/* Footer Round Status */}
                {session.round_status && (
                    <div className={`mt-2 ${FONT_SIZE.XXS} font-mono text-white/30 flex items-center gap-1.5`}>
                        <Activity size={10} />
                        <span className="uppercase">{session.round_status}</span>
                    </div>
                )}
            </div>
        </div>
    );
};
