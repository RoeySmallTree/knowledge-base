import { useMemo, useState, useEffect, type RefObject } from 'react';
import { ChevronRight, AlertTriangle } from 'lucide-react';
import { Team, TeamCategory, TeamMember } from '../types';

const CATEGORY_ORDER: TeamCategory[] = ['CORTEX', 'VITALS', 'OPS', 'ARCADE'];

const normalizeCategory = (value: TeamCategory | null | undefined): TeamCategory =>
    CATEGORY_ORDER.includes(value as TeamCategory) ? (value as TeamCategory) : 'CORTEX';

interface TeamsSidebarProps {
    teams: Team[];
    members: TeamMember[];
    scrollRootRef?: RefObject<HTMLDivElement>;
    navRootRef?: RefObject<HTMLDivElement>;
}

export function TeamsSidebar({ teams, members, scrollRootRef, navRootRef }: TeamsSidebarProps) {
    const [expandedCategories, setExpandedCategories] = useState<Set<TeamCategory>>(new Set(CATEGORY_ORDER));
    const [activeId, setActiveId] = useState<string>('');

    const membersByTeam = useMemo(() => {
        const map: Record<string, number> = {};
        members.forEach(member => {
            map[member.team_id] = (map[member.team_id] || 0) + 1;
        });
        return map;
    }, [members]);

    const teamsByCategory = useMemo(() => {
        const map: Record<TeamCategory, Team[]> = {
            CORTEX: [],
            VITALS: [],
            OPS: [],
            ARCADE: []
        };
        teams.forEach(team => {
            const category = normalizeCategory(team.category);
            map[category].push(team);
        });
        CATEGORY_ORDER.forEach(category => {
            map[category] = [...map[category]].sort((a, b) => {
                return a.name.localeCompare(b.name);
                return a.name.localeCompare(b.name);
            });
        });
        return map;
    }, [teams]);

    const teamCategoryById = useMemo(() => {
        const map = new Map<string, TeamCategory>();
        teams.forEach(team => {
            map.set(team.id, normalizeCategory(team.category));
        });
        return map;
    }, [teams]);

    const missingFieldsByTeam = useMemo(() => {
        const map = new Map<string, string[]>();
        teams.forEach(team => {
            const missing = getMissingTeamFields(team);
            if (missing.length) {
                map.set(team.id, missing);
            }
        });
        return map;
    }, [teams]);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rootEl = scrollRootRef?.current;
        if (rootEl) {
            const rootTop = rootEl.getBoundingClientRect().top;
            const elTop = el.getBoundingClientRect().top;
            const offset = elTop - rootTop;
            rootEl.scrollTo({ top: rootEl.scrollTop + offset - 24, behavior: 'smooth' });
            return;
        }
        const y = el.getBoundingClientRect().top + window.scrollY - 96;
        window.scrollTo({ top: y, behavior: 'smooth' });
    };

    const toggleCategory = (category: TeamCategory) => {
        setExpandedCategories(prev => {
            const next = new Set(prev);
            if (next.has(category)) next.delete(category);
            else next.add(category);
            return next;
        });
    };

    useEffect(() => {
        const rootEl = scrollRootRef?.current ?? null;
        const observer = new IntersectionObserver((entries) => {
            const visibleEntries = entries.filter(entry => entry.isIntersecting);
            if (!visibleEntries.length) return;
            visibleEntries.sort((a, b) => {
                if (b.intersectionRatio !== a.intersectionRatio) {
                    return b.intersectionRatio - a.intersectionRatio;
                }
                return a.boundingClientRect.top - b.boundingClientRect.top;
            });
            setActiveId(visibleEntries[0].target.id);
        }, { root: rootEl, rootMargin: '-10% 0px -80% 0px' });

        CATEGORY_ORDER.forEach(category => {
            const categoryId = `category-${category.toLowerCase()}`;
            const el = document.getElementById(categoryId);
            if (el) observer.observe(el);
        });

        teams.forEach(team => {
            const teamId = `team-${team.id}`;
            const el = document.getElementById(teamId);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [teams, scrollRootRef]);

    useEffect(() => {
        if (!activeId) return;
        CATEGORY_ORDER.forEach(category => {
            const categoryId = `category-${category.toLowerCase()}`;
            if (activeId === categoryId) {
                setExpandedCategories(prev => {
                    if (prev.has(category)) return prev;
                    const next = new Set(prev);
                    next.add(category);
                    return next;
                });
            }
        });
        const teamEntry = teams.find(team => `team-${team.id}` === activeId);
        if (teamEntry) {
            setExpandedCategories(prev => {
                if (prev.has(teamEntry.category)) return prev;
                const next = new Set(prev);
                next.add(teamEntry.category);
                return next;
            });
        }
    }, [activeId, teams]);

    useEffect(() => {
        if (!activeId) return;
        const rootEl = navRootRef?.current;
        if (!rootEl) return;
        const targetId = `sidebar-${activeId}`;
        const targetEl = document.getElementById(targetId);
        if (!targetEl) return;
        const rootRect = rootEl.getBoundingClientRect();
        const targetRect = targetEl.getBoundingClientRect();
        const targetCenter = targetRect.top + targetRect.height / 2;
        const rootCenter = rootRect.top + rootRect.height / 2;
        const delta = targetCenter - rootCenter;
        const nextTop = Math.min(
            Math.max(rootEl.scrollTop + delta, 0),
            rootEl.scrollHeight - rootEl.clientHeight
        );
        if (Math.abs(delta) < 4) return;
        requestAnimationFrame(() => {
            rootEl.scrollTo({ top: nextTop, behavior: 'smooth' });
        });
    }, [activeId, navRootRef, expandedCategories]);

    const totalTeams = teams.length;
    const totalMembers = members.length;

    return (
        <div className="space-y-6">
            <div className="space-y-4">
                <div className="font-label text-sm text-primary">TEAM_DIRECTORY</div>
                <div className="cyber-panel cyber-chamfer-sm p-4 space-y-3">
                    <div className="flex items-center justify-between text-base">
                        <span className="text-muted-foreground">TOTAL TEAMS</span>
                        <span className="text-primary">{totalTeams}</span>
                    </div>
                    <div className="flex items-center justify-between text-base">
                        <span className="text-muted-foreground">TOTAL MEMBERS</span>
                        <span className="text-primary">{totalMembers}</span>
                    </div>
                </div>
            </div>

            <div className="space-y-3">
                {CATEGORY_ORDER.map(category => {
                    const categoryTeams = teamsByCategory[category];
                    const isExpanded = expandedCategories.has(category);
                    const categoryId = `category-${category.toLowerCase()}`;
                    const activeTeamCategory = activeId.startsWith('team-')
                        ? teamCategoryById.get(activeId.replace('team-', ''))
                        : null;
                    const isCategoryActive = activeId === categoryId || activeTeamCategory === category;

                    return (
                        <div key={category} className="space-y-2">
                            <button
                                onClick={() => {
                                    toggleCategory(category);
                                    scrollTo(categoryId);
                                }}
                                id={`sidebar-${categoryId}`}
                                className={`w-full flex items-center justify-between px-3 py-2 font-label text-sm border border-border/70 cyber-chamfer-sm transition-colors ${isCategoryActive ? 'text-primary border-primary/60' : 'text-muted-foreground hover:text-primary'}`}
                            >
                                <div className="flex items-center gap-2">
                                    <ChevronRight size={14} className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                                    {category}
                                </div>
                                <span className="text-sm text-muted-foreground">{categoryTeams.length}</span>
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="pl-4 space-y-2 border-l border-border/60 ml-3">
                                    {categoryTeams.map(team => {
                                        const teamId = `team-${team.id}`;
                                        const missing = missingFieldsByTeam.get(team.id) ?? [];
                                        return (
                                            <button
                                                key={team.id}
                                                onClick={() => scrollTo(teamId)}
                                                id={`sidebar-${teamId}`}
                                                className={`w-full flex items-center justify-between px-3 py-1.5 text-sm border border-transparent cyber-chamfer-sm transition-colors ${activeId === teamId ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
                                            >
                                                <span className="truncate">{team.name}</span>
                                                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    {missing.length > 0 && (
                                                        <span
                                                            className="flex items-center gap-1 text-accent-secondary"
                                                            title={missing.join(', ')}
                                                        >
                                                            <AlertTriangle size={12} />
                                                            {missing.length}
                                                        </span>
                                                    )}
                                                    {membersByTeam[team.id] || 0}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function getMissingTeamFields(team: Team) {
    const missing: string[] = [];
    if (!team.name) missing.push('name');
    if (!team.catch_phrase) missing.push('catch_phrase');
    if (!team.description) missing.push('description');
    if (!team.category) missing.push('category');
    if (!team.quick_starts || team.quick_starts.length === 0) missing.push('quick_starts');
    if (team.default_starting_rounds === null || team.default_starting_rounds === undefined) missing.push('default_starting_rounds');
    if (!team.bootstrap_prompt) missing.push('bootstrap_prompt');
    return missing;
}
