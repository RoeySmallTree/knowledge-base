import { useMemo, useState, useEffect, type RefObject } from 'react';
import { FONT_SIZE } from '../constants';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    useSortable,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { ChevronRight, AlertTriangle, GripVertical, Copy, Check } from 'lucide-react';
import { Team, TeamCategory, TeamMember } from '../types';
import { useUpdateTeamOrders } from '../hooks/useQueries';

const CATEGORY_ORDER: TeamCategory[] = ['CORTEX', 'VITALS', 'OPS', 'ARCADE'];

const normalizeCategory = (value: TeamCategory | null | undefined): TeamCategory =>
    CATEGORY_ORDER.includes(value as TeamCategory) ? (value as TeamCategory) : 'CORTEX';

interface TeamsSidebarProps {
    teams: Team[];
    members: TeamMember[];
    scrollRootRef?: RefObject<HTMLDivElement>;
    navRootRef?: RefObject<HTMLDivElement>;
    expandedCategories: Set<TeamCategory>;
    onToggleCategory: (category: TeamCategory) => void;
    onExpandCategory: (category: TeamCategory) => void;
    totalTeamsCount: number;
    totalMembersCount: number;
}

export function TeamsSidebar({
    teams,
    members,
    scrollRootRef,
    navRootRef,
    expandedCategories,
    onToggleCategory,
    onExpandCategory,
    totalTeamsCount,
    totalMembersCount
}: TeamsSidebarProps) {
    // Local state removed, using props
    const [activeId, setActiveId] = useState<string>('');
    const [showCopyTooltip, setShowCopyTooltip] = useState(false);
    const [copyFormat, setCopyFormat] = useState<'json' | 'markdown'>('json');
    const [selectedFields, setSelectedFields] = useState<string[]>(['name', 'category', 'description', 'members']);
    // Default member fields: name, role, team_role
    const [selectedMemberFields, setSelectedMemberFields] = useState<string[]>(['name', 'role', 'team_role']);
    const [copied, setCopied] = useState(false);


    // Drag-and-drop setup
    const updateTeamOrdersMutation = useUpdateTeamOrders();
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8, // Require 8px movement before drag starts
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

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
                // Sort by display_order first, then by name
                const orderA = a.display_order ?? Number.MAX_SAFE_INTEGER;
                const orderB = b.display_order ?? Number.MAX_SAFE_INTEGER;
                if (orderA !== orderB) return orderA - orderB;
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
        onToggleCategory(category);
    };

    const handleTeamClick = (team: Team) => {
        const category = normalizeCategory(team.category);
        if (!expandedCategories.has(category)) {
            onExpandCategory(category);
        }
        // Small delay to allow category expansion render
        setTimeout(() => {
            scrollTo(`team-${team.id}`);
        }, 100);
    };

    const handleDragEnd = (event: DragEndEvent, category: TeamCategory) => {
        const { active, over } = event;

        if (!over || active.id === over.id) return;

        const categoryTeams = teamsByCategory[category];
        const oldIndex = categoryTeams.findIndex(t => t.id === active.id);
        const newIndex = categoryTeams.findIndex(t => t.id === over.id);

        if (oldIndex === -1 || newIndex === -1) return;

        // Reorder teams within this category
        const reorderedTeams = arrayMove(categoryTeams, oldIndex, newIndex);

        // Calculate new display_order values (increments of 10)
        const orders = reorderedTeams.map((team, index) => ({
            id: team.id,
            display_order: index * 10
        }));

        // Update via mutation
        updateTeamOrdersMutation.mutate(orders);
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

    // Sync sidebar expansion with active scroll section
    useEffect(() => {
        if (!activeId) return;
        CATEGORY_ORDER.forEach(category => {
            const categoryId = `category-${category.toLowerCase()}`;
            if (activeId === categoryId) {
                // We don't auto-expand main view categories just by scrolling past headers in main view
                // But we DO want to expand the sidebar section to show context
                // However, since state is shared, this would expand the main view category too.
                // If the user scrolls to a category header, they are looking at it.
                // If it's collapsed, they only see the header.
                // It's acceptable to keep it as is or remove auto-expansion.
                // Given the shared state, auto-expanding might be aggressive.
                // Let's REMOVE auto-expansion on scroll to avoid confusing interactions.
                // Or only expand if it's the specific target?
                // For now, let's DISABLE auto-expansion on scroll to be safe.
            }
        });
        // Logic for auto-expanding based on active ID is complicated with shared state.
        // We'll trust the user to click headers or teams.
    }, [activeId]);

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

    const handleCopyTeams = async () => {
        if (selectedFields.length === 0) {
            alert('Please select at least one field to copy');
            return;
        }

        // Helper to format team data
        const formatTeamData = (team: Team) => {
            const teamMembers = members.filter(m => m.team_id === team.id);
            const data: Record<string, any> = {};

            selectedFields.forEach(field => {
                switch (field) {
                    case 'id':
                        data.id = team.id;
                        break;
                    case 'name':
                        data.name = team.name;
                        break;
                    case 'category':
                        data.category = team.category;
                        break;
                    case 'description':
                        data.description = team.description || '';
                        break;
                    case 'catch_phrase':
                        data.catch_phrase = team.catch_phrase || '';
                        break;
                    case 'quick_starts':
                        data.quick_starts = team.quick_starts || [];
                        break;
                    case 'default_rounds':
                        data.default_starting_rounds = team.default_starting_rounds;
                        break;
                    case 'bootstrap_prompt':
                        data.bootstrap_prompt = team.bootstrap_prompt || '';
                        break;
                    case 'members':
                        data.members = teamMembers.map(m => {
                            const memData: any = {};
                            selectedMemberFields.forEach(mf => {
                                switch (mf) {
                                    case 'id': memData.id = m.id; break;
                                    case 'name': memData.name = m.name; break;
                                    case 'role': memData.role = m.role; break;
                                    case 'team_role': memData.team_role = m.team_role; break;
                                    case 'color': memData.color = m.color; break;
                                    case 'characteristics': memData.characteristics = m.characteristics; break;
                                    case 'life_story': memData.life_story = m.life_story; break;
                                    case 'special_orders': memData.special_orders = m.special_orders; break;
                                    case 'model_id': memData.model_id = m.model_id; break;
                                    case 'team_id': memData.team_id = m.team_id; break;
                                }
                            });
                            return memData;
                        });
                        break;
                }
            });

            return data;
        };

        const teamsData = teams.map(formatTeamData);

        let output: string;
        if (copyFormat === 'json') {
            output = JSON.stringify(teamsData, null, 2);
        } else {
            // Markdown format
            output = teamsData.map((data) => {
                let md = `## ${data.name || 'Unnamed Team'}\n\n`;

                if (data.id) md += `**ID:** ${data.id}\n\n`;
                if (data.category) md += `**Category:** ${data.category}\n\n`;
                if (data.catch_phrase) md += `**Catch Phrase:** ${data.catch_phrase}\n\n`;
                if (data.description) md += `**Description:** ${data.description}\n\n`;
                if (data.default_starting_rounds !== undefined && data.default_starting_rounds !== null) {
                    md += `**Default Rounds:** ${data.default_starting_rounds}\n\n`;
                }
                if (data.quick_starts && data.quick_starts.length > 0) {
                    md += `**Quick Starts:**\n${data.quick_starts.map((qs: string) => `- ${qs}`).join('\n')}\n\n`;
                }
                if (data.bootstrap_prompt) {
                    md += `**Bootstrap Prompt:**\n\`\`\`\n${data.bootstrap_prompt}\n\`\`\`\n\n`;
                }
                if (data.members && data.members.length > 0) {
                    md += `**Members:**\n`;
                    data.members.forEach((m: any) => {
                        md += `- **${m.name || 'Member'}**`;
                        if (m.id) md += ` [ID: ${m.id}]`;
                        if (m.role) md += ` (${m.role})`;
                        if (m.team_role) md += ` - ${m.team_role}`;
                        if (m.life_story) md += `\n  - Life Story: ${m.life_story}`;
                        if (m.special_orders) md += `\n  - Orders: ${m.special_orders}`;
                        if (m.characteristics && m.characteristics.length > 0) md += `\n  - Traits: ${m.characteristics.join(', ')}`;
                        md += '\n';
                    });
                    md += '\n';
                }

                return md;
            }).join('---\n\n');
        }

        try {
            await navigator.clipboard.writeText(output);
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
                setShowCopyTooltip(false);
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
            alert('Failed to copy to clipboard');
        }
    };


    return (
        <div className="space-y-6">
            <div className="space-y-4">
                <div className="flex items-center justify-between px-1">
                    <div className={`font-label ${FONT_SIZE.XXS} text-primary/50 tracking-[0.3em]`}>INTELLIGENCE_HUD_V2</div>
                    <div className="flex gap-1">
                        <div className="w-1 h-1 bg-primary/40 animate-pulse" />
                        <div className="w-1 h-1 bg-primary/20" />
                        <div className="w-1 h-1 bg-primary/10" />
                    </div>
                </div>

                <div className="cyber-panel cyber-chamfer-sm p-4 space-y-5 bg-gradient-to-br from-white/[0.03] to-transparent border-white/5 relative overflow-hidden group">
                    {/* Background Grid Scanline Effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,136,0.03),transparent_70%)] pointer-events-none" />

                    {/* Active Teams HUD */}
                    <div className="relative space-y-2">
                        <div className="flex items-end justify-between">
                            <span className={`block ${FONT_SIZE.XS} font-bold text-primary/80 tracking-widest font-display`}>ACTIVE_TEAMS</span>
                            <div className={`${FONT_SIZE.XXL} font-display text-primary leading-none glow-sm flex items-baseline gap-1`}>
                                {totalTeams}
                                <span className={`${FONT_SIZE.XXS} text-white/20 font-mono`}>/ {totalTeamsCount}</span>
                            </div>
                        </div>

                        {/* Segmented HUD Bar */}
                        <div className="flex gap-0.5 h-1.5 w-full">
                            {[...Array(20)].map((_, i) => {
                                const threshold = (i / 19);
                                const currentRatio = totalTeamsCount > 0 ? totalTeams / totalTeamsCount : 0;
                                const isActive = threshold <= currentRatio;
                                return (
                                    <div
                                        key={i}
                                        className={`flex-1 transition-all duration-500 rounded-[1px] ${isActive
                                            ? 'bg-primary shadow-[0_0_8px_rgba(0,255,136,0.4)]'
                                            : 'bg-white/5'
                                            }`}
                                        style={{ transitionDelay: `${i * 20}ms` }}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    {/* Operatives HUD */}
                    <div className="relative space-y-2">
                        <div className="flex items-end justify-between">
                            <span className={`block ${FONT_SIZE.XS} font-bold text-accent-secondary/80 tracking-widest font-display`}>OPERATIVES</span>
                            <div className={`${FONT_SIZE.XXL} font-display text-accent-secondary leading-none glow-sm flex items-baseline gap-1`}>
                                {totalMembers}
                                <span className={`${FONT_SIZE.XXS} text-white/20 font-mono`}>/ {totalMembersCount}</span>
                            </div>
                        </div>

                        {/* Segmented HUD Bar */}
                        <div className="flex gap-0.5 h-1.5 w-full">
                            {[...Array(20)].map((_, i) => {
                                const threshold = (i / 19);
                                const currentRatio = totalMembersCount > 0 ? totalMembers / totalMembersCount : 0;
                                const isActive = threshold <= currentRatio;
                                return (
                                    <div
                                        key={i}
                                        className={`flex-1 transition-all duration-500 rounded-[1px] ${isActive
                                            ? 'bg-accent-secondary shadow-[0_0_8px_rgba(255,0,255,0.4)]'
                                            : 'bg-white/5'
                                            }`}
                                        style={{ transitionDelay: `${i * 20}ms` }}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    {/* Decorative Corner Flairs */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/30" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/30" />
                </div>
            </div>



            {/* Copy Button */}
            <div className="relative">
                <button
                    onClick={() => setShowCopyTooltip(!showCopyTooltip)}
                    className={`w-full group/copy relative py-2 ${FONT_SIZE.XXS} font-label tracking-[0.2em] text-white/40 hover:text-primary transition-colors flex items-center justify-center gap-2`}
                >
                    <div className="h-px flex-1 bg-white/5 group-hover/copy:bg-primary/20 transition-colors" />
                    <Copy size={12} className="opacity-50 group-hover/copy:opacity-100" />
                    <span>EXPORT_TEAM_INDEX</span>
                    <div className="h-px flex-1 bg-white/5 group-hover/copy:bg-primary/20 transition-colors" />
                </button>

                {showCopyTooltip && (
                    <div className="absolute left-0 top-full mt-2 w-full cyber-panel cyber-chamfer-sm p-3 space-y-3 bg-black/95 border border-primary/30 z-50">
                        <div className={`${FONT_SIZE.XS} text-white/40`}>EXPORT FORMAT:</div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setCopyFormat('json')}
                                className={`flex-1 px-2 py-1 ${FONT_SIZE.XS} rounded transition-colors ${copyFormat === 'json'
                                    ? 'bg-primary/20 text-primary border border-primary/50'
                                    : 'bg-white/5 text-white/40 border border-white/10 hover:bg-white/10'
                                    }`}
                            >
                                JSON
                            </button>
                            <button
                                onClick={() => setCopyFormat('markdown')}
                                className={`flex-1 px-2 py-1 ${FONT_SIZE.XS} rounded transition-colors ${copyFormat === 'markdown'
                                    ? 'bg-primary/20 text-primary border border-primary/50'
                                    : 'bg-white/5 text-white/40 border border-white/10 hover:bg-white/10'
                                    }`}
                            >
                                MARKDOWN
                            </button>
                        </div>

                        <div className={`${FONT_SIZE.XS} text-white/40`}>FIELDS TO INCLUDE:</div>
                        <div className="space-y-1.5 max-h-40 overflow-y-auto cyber-scroll">
                            {[
                                { id: 'id', label: 'ID' },
                                { id: 'name', label: 'Name' },
                                { id: 'category', label: 'Category' },
                                { id: 'description', label: 'Description' },
                                { id: 'catch_phrase', label: 'Catch Phrase' },
                                { id: 'quick_starts', label: 'Quick Starts' },
                                { id: 'default_rounds', label: 'Default Rounds' },
                                { id: 'bootstrap_prompt', label: 'Bootstrap Prompt' },
                                { id: 'members', label: 'Members' }
                            ].map(field => (
                                <label key={field.id} className="flex items-center gap-2 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        checked={selectedFields.includes(field.id)}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setSelectedFields([...selectedFields, field.id]);
                                            } else {
                                                setSelectedFields(selectedFields.filter(f => f !== field.id));
                                            }
                                        }}
                                        className="w-3 h-3 rounded border-white/20 bg-black/40 checked:bg-primary checked:border-primary transition-colors"
                                    />
                                    <span className={`${FONT_SIZE.XS} text-white/60 group-hover:text-white/90 transition-colors`}>{field.label}</span>
                                </label>
                            ))}

                            {/* Member Fields Sub-section */}
                            {selectedFields.includes('members') && (
                                <div className="ml-4 pl-3 border-l border-white/10 space-y-1.5 mt-1">
                                    <div className="text-[10px] text-white/40 mb-1">MEMBER PROPERTIES</div>
                                    {[
                                        { id: 'id', label: 'ID' },
                                        { id: 'name', label: 'Name' },
                                        { id: 'role', label: 'Role' },
                                        { id: 'team_role', label: 'Team Role' },
                                        { id: 'life_story', label: 'Life Story' },
                                        { id: 'special_orders', label: 'Special Orders' },
                                        { id: 'characteristics', label: 'Characteristics' },
                                        { id: 'color', label: 'Color' }
                                    ].map(field => (
                                        <label key={`member-${field.id}`} className="flex items-center gap-2 cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                checked={selectedMemberFields.includes(field.id)}
                                                onChange={(e) => {
                                                    if (e.target.checked) {
                                                        setSelectedMemberFields([...selectedMemberFields, field.id]);
                                                    } else {
                                                        setSelectedMemberFields(selectedMemberFields.filter(f => f !== field.id));
                                                    }
                                                }}
                                                className="w-2.5 h-2.5 rounded border-white/20 bg-black/40 checked:bg-primary checked:border-primary transition-colors"
                                            />
                                            <span className="text-[10px] text-white/50 group-hover:text-white/80 transition-colors">{field.label}</span>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                        <button
                            onClick={() => handleCopyTeams()}
                            className={`w-full px-3 py-2 bg-primary/20 hover:bg-primary/30 text-primary ${FONT_SIZE.XS} font-bold rounded border border-primary/50 transition-colors flex items-center justify-center gap-2`}
                        >
                            {copied ? (
                                <>
                                    <Check size={14} />
                                    COPIED!
                                </>
                            ) : (
                                <>
                                    <Copy size={14} />
                                    COPY TO CLIPBOARD
                                </>
                            )}
                        </button>
                    </div>
                )}
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
                                className={`w-full flex items-center justify-between px-3 py-2 font-label ${FONT_SIZE.SM} border border-border/70 cyber-chamfer-sm transition-colors ${isCategoryActive ? 'text-primary border-primary/60' : 'text-muted-foreground hover:text-primary'}`}
                            >
                                <div className="flex items-center gap-2">
                                    <ChevronRight size={14} className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                                    {category}
                                </div>
                                <span className={`${FONT_SIZE.SM} text-muted-foreground`}>{categoryTeams.length}</span>
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <DndContext
                                    sensors={sensors}
                                    collisionDetection={closestCenter}
                                    onDragEnd={(event) => handleDragEnd(event, category)}
                                >
                                    <SortableContext
                                        items={categoryTeams.map(t => t.id)}
                                        strategy={verticalListSortingStrategy}
                                    >
                                        <div className="pl-4 space-y-2 border-l border-border/60 ml-3">
                                            {categoryTeams.map(team => (
                                                <SortableTeamItem
                                                    key={team.id}
                                                    team={team}
                                                    activeId={activeId}
                                                    memberCount={membersByTeam[team.id] || 0}
                                                    missingFields={missingFieldsByTeam.get(team.id) ?? []}
                                                    onTeamClick={() => handleTeamClick(team)}
                                                />
                                            ))}
                                        </div>
                                    </SortableContext>
                                </DndContext>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

interface SortableTeamItemProps {
    team: Team;
    activeId: string;
    memberCount: number;
    missingFields: string[];
    onTeamClick: () => void;
}

function SortableTeamItem({ team, activeId, memberCount, missingFields, onTeamClick }: SortableTeamItemProps) {
    const teamId = `team-${team.id}`;
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({ id: team.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    };

    return (
        <button
            ref={setNodeRef}
            style={style}
            onClick={onTeamClick}
            id={`sidebar-${teamId}`}
            className={`w-full flex items-center justify-between px-3 py-1.5 ${FONT_SIZE.SM} border border-transparent cyber-chamfer-sm transition-colors ${isDragging ? 'shadow-[0_0_20px_rgba(0,255,136,0.3)] border-primary/50' : ''
                } ${activeId === teamId ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
        >
            <div className="flex items-center gap-2 truncate flex-1">
                {/* Drag Handle */}
                <div
                    {...attributes}
                    {...listeners}
                    className="cursor-grab active:cursor-grabbing text-white/20 hover:text-primary/50 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                >
                    <GripVertical size={12} />
                </div>
                <span className="truncate">{team.name}</span>
            </div>
            <span className={`flex items-center gap-2 ${FONT_SIZE.SM} text-muted-foreground`}>
                {missingFields.length > 0 && (
                    <span
                        className="flex items-center gap-1 text-accent-secondary"
                        title={missingFields.join(', ')}
                    >
                        <AlertTriangle size={12} />
                        {missingFields.length}
                    </span>
                )}
                {memberCount}
            </span>
        </button>
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
