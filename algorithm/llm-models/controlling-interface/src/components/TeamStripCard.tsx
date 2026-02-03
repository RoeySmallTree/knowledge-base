import { Users } from 'lucide-react';
import { Team, TeamCategory } from '../types';
import { FONT_SIZE } from '../constants';

const CATEGORY_COLORS: Record<TeamCategory, string> = {
    'CORTEX': 'text-cyan-400 border-cyan-400/30 bg-cyan-400/5',
    'VITALS': 'text-emerald-400 border-emerald-400/30 bg-emerald-400/5',
    'OPS': 'text-amber-400 border-amber-400/30 bg-amber-400/5',
    'ARCADE': 'text-fuchsia-400 border-fuchsia-400/30 bg-fuchsia-400/5'
};

export function TeamStripCard({
    team,
    members,
    category,
    isActive,
    onClick
}: {
    team: Team;
    members: { name: string; role: string; team_role: string }[];
    category: TeamCategory;
    isActive?: boolean;
    onClick: () => void;
}) {
    return (
        <button
            onClick={(e) => {
                e.stopPropagation();
                onClick();
            }}
            className={`
                group relative flex flex-col min-w-[240px] max-w-[240px] h-[120px] p-3 text-left
                border rounded-lg transition-all duration-200
                ${isActive
                    ? 'border-primary bg-black/80 shadow-[0_0_20px_rgba(0,255,136,0.2)]'
                    : 'border-white/10 bg-black/40 hover:border-primary/50 hover:bg-black/60 hover:shadow-[0_0_15px_rgba(0,255,136,0.1)]'
                }
            `}
        >
            <div className="flex items-start justify-between w-full mb-2">
                <span className={`${FONT_SIZE.TINY} font-bold tracking-widest px-1.5 py-0.5 rounded border ${CATEGORY_COLORS[category]}`}>
                    {category}
                </span>
                <div className={`flex items-center gap-1 transition-colors ${isActive ? 'text-primary' : 'text-white/30 group-hover:text-primary'}`}>
                    <span className={`${FONT_SIZE.XXS} font-mono`}>{members.length}</span>
                    <Users size={10} />
                </div>
            </div>

            <div className="mb-2">
                <div className={`font-display ${FONT_SIZE.SM} truncate transition-colors ${isActive ? 'text-white' : 'text-white/90 group-hover:text-primary'}`} title={team.name}>
                    {team.name}
                </div>
            </div>

            {/* Members List */}
            <div className="flex-1 overflow-y-auto scrollbar-hide space-y-1">
                {members.map((m, idx) => (
                    <div key={idx} className={`flex items-center gap-1.5 ${FONT_SIZE.XXS} leading-tight`}>
                        <span className={`w-1 h-1 rounded-full ${isActive ? 'bg-primary' : 'bg-white/30'}`} />
                        <span className="text-white/80 font-medium truncate max-w-[80px]" title={m.name}>{m.name}</span>
                        <span className="text-white/40 truncate flex-1" title={`${m.team_role} | ${m.role}`}>
                            {m.team_role}
                        </span>
                    </div>
                ))}
            </div>

            {/* Active Indicator Line */}
            <div className={`absolute bottom-0 left-0 w-full h-[2px] transition-all duration-300 ${isActive ? 'bg-primary' : 'bg-primary/0 group-hover:bg-primary/50'}`} />
        </button>
    );
}
