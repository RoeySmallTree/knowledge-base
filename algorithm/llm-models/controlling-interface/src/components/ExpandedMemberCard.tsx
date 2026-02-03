import { LLMModel, TeamMember, Vendor } from '../types';
import { FONT_SIZE } from '../constants';
import { getVendorIcon } from '../utils/getVendorIcon';
import { normalizeList } from '../utils/teamUtils';
import { IdBadge } from './IdBadge';
import { ExternalLink } from 'lucide-react';

export function ExpandedMemberCard({
    member,
    modelsById,
    vendorsById,
    onFilterByModel
}: {
    member: TeamMember;
    modelsById: Record<string, LLMModel>;
    vendorsById: Record<string, Vendor>;
    onFilterByModel?: (modelId: number) => void;
}) {
    const model = member.model_id ? modelsById[String(member.model_id)] : undefined;
    const vendor = model ? vendorsById[String(model.vendor_id)] : undefined;
    const vendorName = vendor?.display_name || 'Unknown';
    const modelName = model ? (model.name_within_family?.trim() || model.modelName) : 'No Model Assigned';
    const characteristics = normalizeList(member.characteristics);
    const isLeader = member.role !== 'Operative';

    return (
        <div className="group relative overflow-hidden rounded-xl border bg-black/60 backdrop-blur-md transition-all duration-300 border-primary/30 shadow-[0_0_50px_rgba(0,0,0,0.7)] ring-1 ring-primary/20">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-10" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none" />

            <div className="relative z-10 p-6 space-y-6">
                {/* Header Section: 3 Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Column 1: Identity */}
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <span className={`font-label ${FONT_SIZE.XS} tracking-widest uppercase px-2 py-1 rounded ${isLeader ? 'bg-primary/20 text-primary border border-primary/30' : 'bg-white/5 text-white/40 border border-white/10'}`}>
                                    {member.role}
                                </span>
                                {member.color && (
                                    <div className="flex items-center gap-2 px-2 py-1 rounded bg-white/5 border border-white/10">
                                        <div className="w-3 h-3 rounded-full shadow-[0_0_8px_currentColor]" style={{ backgroundColor: member.color, color: member.color }} />
                                        <span className={`${FONT_SIZE.XS} text-white/60 font-mono`}>{member.color}</span>
                                    </div>
                                )}
                            </div>
                            <h3 className={`font-display ${FONT_SIZE.XXXL} text-primary tracking-wide`}>
                                {member.name || 'Unnamed Member'}
                            </h3>
                            <div className={`${FONT_SIZE.SM} text-white/70 font-medium`}>{member.team_role || 'No Team Role Assigned'}</div>
                        </div>

                        {/* Member ID Badge */}
                        <div className="opacity-50 hover:opacity-100 transition-opacity">
                            <IdBadge id={member.id} />
                        </div>
                    </div>

                    {/* Column 2: Model Assignment */}
                    <div className="space-y-3 p-5 rounded-xl border border-white/10 bg-white/5 h-fit">
                        {model ? (
                            <>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg overflow-hidden opacity-80 shrink-0 border border-white/10">
                                        <img
                                            src={getVendorIcon(vendorName, '')}
                                            alt={vendorName}
                                            className="w-full h-full object-contain"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = '/llm-icons/ai-placeholder.png';
                                            }}
                                        />
                                    </div>
                                    <div className="space-y-1 flex-1">
                                        <div className={`${FONT_SIZE.XS} text-white/40 font-mono`}>{vendorName}</div>
                                        <div className={`font-display ${FONT_SIZE.LG} text-white`}>{modelName}</div>
                                    </div>
                                </div>

                                {/* Creative & Logic Score Bars */}
                                <div className="space-y-2">
                                    {model.creativeScore !== undefined && model.creativeScore > 0 && (
                                        <div className="space-y-1">
                                            <div className="flex items-center justify-between">
                                                <span className={`${FONT_SIZE.XXS} text-white/40 font-mono uppercase`}>Creative</span>
                                                <span className={`${FONT_SIZE.XXS} text-primary font-mono`}>{model.creativeScore}</span>
                                            </div>
                                            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-primary/50 to-primary rounded-full transition-all duration-500"
                                                    style={{ width: `${model.creativeScore}%` }}
                                                />
                                            </div>
                                        </div>
                                    )}
                                    {model.deductiveScore !== undefined && model.deductiveScore > 0 && (
                                        <div className="space-y-1">
                                            <div className="flex items-center justify-between">
                                                <span className={`${FONT_SIZE.XXS} text-white/40 font-mono uppercase`}>Deductive</span>
                                                <span className={`${FONT_SIZE.XXS} text-accent-secondary font-mono`}>{model.deductiveScore}</span>
                                            </div>
                                            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-accent-secondary/50 to-accent-secondary rounded-full transition-all duration-500"
                                                    style={{ width: `${model.deductiveScore}%` }}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Navigate to Model Button */}
                                {onFilterByModel && model.id && (
                                    <button
                                        onClick={() => onFilterByModel(model.id!)}
                                        className={`w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-primary/30 bg-primary/5 hover:bg-primary/10 text-primary ${FONT_SIZE.XS} font-mono tracking-wider transition-colors group`}
                                    >
                                        <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                        VIEW IN MODELS
                                    </button>
                                )}
                            </>
                        ) : (
                            <div className={`${FONT_SIZE.SM} text-white/40 font-mono`}>No Model Assigned</div>
                        )}
                    </div>

                    {/* Column 3: Characteristics as individual chips */}
                    {characteristics.length > 0 && (
                        <div className="flex flex-wrap gap-2 content-start">
                            {characteristics.map((char, i) => (
                                <span key={i} className={`px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 ${FONT_SIZE.XS} text-primary font-mono tracking-wider shadow-[0_0_15px_rgba(0,255,136,0.1)] hover:bg-primary/20 transition-colors`}>
                                    {char.toUpperCase()}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* Life Story Section */}
                {member.life_story && (
                    <div className="p-6 rounded-xl border border-white/5 bg-white/5">
                        <h4 className={`${FONT_SIZE.XS} text-white/50 font-label mb-3 uppercase tracking-widest`}>Life Story</h4>
                        <p className={`${FONT_SIZE.SM} text-white/70 leading-relaxed font-mono whitespace-pre-line`}>
                            {member.life_story}
                        </p>
                    </div>
                )}

                {/* Special Orders Section */}
                {member.special_orders && (
                    <div className="p-6 rounded-xl border border-white/5 bg-white/5">
                        <h4 className={`${FONT_SIZE.XS} text-white/50 font-label mb-3 uppercase tracking-widest`}>Special Orders</h4>
                        <p className={`${FONT_SIZE.SM} text-white/70 leading-relaxed font-mono whitespace-pre-line`}>
                            {member.special_orders}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
