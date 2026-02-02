import React, { useState, useMemo } from 'react';
import { X, Search, Play, Loader2, ChevronRight, ChevronDown } from 'lucide-react';
import { Team, TeamCategory, LLMModel, TeamMember } from '../types';
import { sessionService } from '../services/SessionService';
import { useMembers } from '../hooks/useQueries';

interface CreateSessionModalProps {
    isOpen: boolean;
    onClose: () => void;
    teams: Team[];
    models: LLMModel[];
    onSessionCreated: () => void;
}

const CATEGORY_ORDER: TeamCategory[] = ['CORTEX', 'VITALS', 'OPS', 'ARCADE'];

const CATEGORY_COLORS: Record<TeamCategory, string> = {
    'CORTEX': 'text-cyan-400',
    'VITALS': 'text-emerald-400',
    'OPS': 'text-amber-400',
    'ARCADE': 'text-fuchsia-400'
};

export const CreateSessionModal: React.FC<CreateSessionModalProps> = ({
    isOpen,
    onClose,
    teams,
    models,
    onSessionCreated
}) => {
    const [step, setStep] = useState<1 | 2>(1);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [rounds, setRounds] = useState(1);
    const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);
    const [teamSearch, setTeamSearch] = useState('');
    const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
        'CORTEX': true, 'VITALS': true, 'OPS': true, 'ARCADE': true
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Fetch members to map roles for the selected team
    const { data: membersData } = useMembers();

    const filteredTeams = useMemo(() => {
        let result = teams;
        if (teamSearch) {
            const q = teamSearch.toLowerCase();
            result = result.filter(t => t.name.toLowerCase().includes(q) || t.description?.toLowerCase().includes(q));
        }
        return result;
    }, [teams, teamSearch]);

    const teamsByCategory = useMemo(() => {
        const grouped: Record<string, Team[]> = {};
        CATEGORY_ORDER.forEach(cat => grouped[cat] = []);
        filteredTeams.forEach(team => {
            const cat = team.category || 'OPS'; // Default fallback
            if (!grouped[cat]) grouped[cat] = [];
            grouped[cat].push(team);
        });
        return grouped;
    }, [filteredTeams]);

    const handleCreate = async () => {
        if (!name || !selectedTeamId) {
            setError("Please fill in all required fields");
            return;
        }

        setIsSubmitting(true);
        setError(null);

        try {
            // 1. Create Session
            const session = await sessionService.createSession({
                name,
                description
            });

            // 2. Prepare Routing
            const routing: any = {};
            const teamMembers = membersData?.members.filter(m => m.team_id === selectedTeamId) || [];
            const selectedTeam = teams.find(t => t.id === selectedTeamId);

            // Helper to get model string
            const getModelString = (member: TeamMember) => {
                const model = models.find(m => m.id === String(member.model_id));
                // Prefer api_id, fallback to logic or name
                return model?.api_id || model?.modelName || 'gpt-4-turbo';
            };

            // Map roles
            const chair = teamMembers.find(m => m.role === 'Chair');
            const watchdog = teamMembers.find(m => m.role === 'Watchdog');
            const envoy = teamMembers.find(m => m.role === 'Envoy');
            const operative = teamMembers.find(m => m.role === 'Operative'); // Just one if multiple? Logic might need refinement for multiple ops

            if (chair) routing.chair = { model: getModelString(chair) };
            if (watchdog) routing.watchdog = { model: getModelString(watchdog) };
            if (envoy) routing.envoy = { model: getModelString(envoy) };
            if (operative) routing.operative = { model: getModelString(operative) };

            // Include bootstrap_prompt from team if available
            if (selectedTeam?.bootstrap_prompt) {
                routing.bootstrap_prompt = selectedTeam.bootstrap_prompt;
            }

            // 3. Run Session (Start)
            await sessionService.runSession(session.id, {
                addRounds: rounds,
                routing
            });

            onSessionCreated();
            onClose();
            // Reset form
            setName('');
            setDescription('');
            setRounds(1);
            setSelectedTeamId(null);
            setStep(1);

        } catch (err: any) {
            console.error(err);
            setError(err.message || 'Failed to create session');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="w-full max-w-2xl bg-black/90 border border-white/10 rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col max-h-[90vh]">

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <div>
                        <h2 className="text-xl font-display tracking-widest text-white">INITIALIZE SESSION</h2>
                        <div className="flex gap-2 mt-2">
                            <div className={`h-1 w-12 rounded-full transition-colors ${step >= 1 ? 'bg-primary' : 'bg-white/10'}`} />
                            <div className={`h-1 w-12 rounded-full transition-colors ${step >= 2 ? 'bg-primary' : 'bg-white/10'}`} />
                        </div>
                    </div>
                    <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6">
                    {error && (
                        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-mono rounded">
                            ERROR: {error}
                        </div>
                    )}

                    {step === 1 ? (
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-white/50 uppercase tracking-widest">Session Identity</label>
                                <input
                                    type="text"
                                    placeholder="SESSION_NAME"
                                    value={name}
                                    onChange={e => {
                                        setName(e.target.value);
                                        if (error) setError(null); // Clear error when user types
                                    }}
                                    className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-primary/50 focus:outline-none font-mono"
                                    autoFocus
                                />
                                <textarea
                                    placeholder="MISSION_BRIEF (OPTIONAL)"
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                    className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-primary/50 focus:outline-none font-mono h-24 resize-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono text-white/50 uppercase tracking-widest">Initial Parameters</label>
                                <div className="flex items-center gap-4 p-4 border border-white/5 rounded bg-white/5">
                                    <span className="text-sm font-mono text-white/70">ROUNDS_TO_EXECUTE</span>
                                    <input
                                        type="number"
                                        min={1}
                                        max={10}
                                        value={rounds}
                                        onChange={e => setRounds(parseInt(e.target.value))}
                                        className="w-20 bg-black/50 border border-white/10 rounded p-2 text-center text-white focus:border-primary/50 focus:outline-none font-mono"
                                    />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-2.5 text-white/30" size={14} />
                                <input
                                    type="text"
                                    placeholder="SEARCH_TEAMS..."
                                    value={teamSearch}
                                    onChange={e => setTeamSearch(e.target.value)}
                                    className="w-full bg-black/50 border border-white/10 rounded p-2 pl-9 text-sm text-white focus:border-primary/50 focus:outline-none font-mono"
                                    autoFocus
                                />
                            </div>

                            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                {CATEGORY_ORDER.map(category => {
                                    const categoryTeams = teamsByCategory[category] || [];
                                    if (categoryTeams.length === 0) return null;

                                    return (
                                        <div key={category} className="space-y-2">
                                            <button
                                                onClick={() => setExpandedCategories(prev => ({ ...prev, [category]: !prev[category] }))}
                                                className="flex items-center gap-2 w-full text-left"
                                            >
                                                {expandedCategories[category] ? <ChevronDown size={12} className="text-white/30" /> : <ChevronRight size={12} className="text-white/30" />}
                                                <span className={`text-[10px] tracking-[0.2em] font-bold ${CATEGORY_COLORS[category]}`}>
                                                    {category}
                                                </span>
                                                <div className="h-px flex-1 bg-white/5" />
                                            </button>

                                            {expandedCategories[category] && (
                                                <div className="grid grid-cols-1 gap-2 pl-4">
                                                    {categoryTeams.map(team => (
                                                        <button
                                                            key={team.id}
                                                            onClick={() => setSelectedTeamId(team.id)}
                                                            className={`
                                                                flex items-center justify-between p-3 rounded border text-left transition-all
                                                                ${selectedTeamId === team.id
                                                                    ? 'bg-primary/10 border-primary/50 text-white shadow-[0_0_15px_rgba(0,255,136,0.1)]'
                                                                    : 'bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10 text-white/60'}
                                                            `}
                                                        >
                                                            <div>
                                                                <div className="font-display text-sm tracking-wide">{team.name}</div>
                                                                <div className="text-[10px] font-mono text-white/40 mt-1 line-clamp-1">{team.catch_phrase}</div>
                                                            </div>
                                                            {selectedTeamId === team.id && <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_5px_rgba(0,255,136,1)]" />}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-white/10 flex justify-between items-center bg-white/5">
                    {step === 2 ? (
                        <button
                            onClick={() => setStep(1)}
                            className="px-4 py-2 text-xs font-mono text-white/50 hover:text-white transition-colors"
                        >
                            ← BACK
                        </button>
                    ) : (
                        <div /> // Spacer
                    )}

                    {step === 1 ? (
                        <button
                            onClick={() => {
                                if (name) setStep(2);
                                else setError("Please enter a session name");
                            }}
                            className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded font-mono text-sm transition-all"
                        >
                            SELECT TEAM →
                        </button>
                    ) : (
                        <button
                            onClick={handleCreate}
                            disabled={isSubmitting || !selectedTeamId}
                            className={`
                                flex items-center gap-2 px-6 py-2 rounded font-bold tracking-wider text-sm transition-all
                                ${isSubmitting || !selectedTeamId
                                    ? 'bg-white/5 text-white/30 cursor-not-allowed'
                                    : 'bg-primary text-black hover:bg-primary-light hover:scale-105 shadow-[0_0_20px_rgba(0,255,136,0.3)]'}
                            `}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="animate-spin" size={16} />
                                    INITIALIZING...
                                </>
                            ) : (
                                <>
                                    <Play size={16} fill="currentColor" />
                                    LAUNCH_SESSION
                                </>
                            )}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
