import React from 'react';
import { AppUser } from '../types';
import { User, MapPin, Briefcase } from 'lucide-react';
import { FONT_SIZE } from '../constants';

interface UserCardProps {
    user: AppUser;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
    return (
        <div className="cyber-card group h-full flex flex-col relative overflow-hidden bg-black/40 border border-white/10 hover:border-primary/50 transition-all duration-300">
            {/* Header / Avatar Area */}
            <div className="p-4 flex items-start gap-4 border-b border-white/5 bg-gradient-to-b from-white/5 to-transparent">
                <div className="relative shrink-0">
                    <div className="w-16 h-16 rounded-sm overflow-hidden border border-white/20 group-hover:border-primary/50 transition-colors">
                        {user.image_url ? (
                            <img src={user.image_url} alt={user.display_name} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-white/5">
                                <User className="text-white/20" size={32} />
                            </div>
                        )}
                    </div>
                    <div className={`
                        absolute -bottom-2 -right-2 px-2 py-0.5 ${FONT_SIZE.XXS} font-mono uppercase tracking-wider border
                        ${user.type === 'admin'
                            ? 'bg-red-500/20 text-red-500 border-red-500/50'
                            : 'bg-primary/20 text-primary border-primary/50'}
                    `}>
                        {user.type}
                    </div>
                </div>

                <div className="min-w-0 flex-1">
                    <h3 className={`${FONT_SIZE.LG} font-display text-white group-hover:text-primary transition-colors truncate`}>
                        {user.display_name || 'Anonymous User'}
                    </h3>
                    <div className={`${FONT_SIZE.SM} font-mono text-white/50 truncate`}>
                        {user.email}
                    </div>
                    {user.community_name && (
                        <div className="mt-2 inline-flex items-center px-2 py-1 bg-white/5 border border-white/10 rounded-sm">
                            <span className={`${FONT_SIZE.XS} font-mono text-secondary tracking-wide`}>
                                {user.community_name}
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* Details Body */}
            <div className="p-4 space-y-3 flex-1">
                <div className={`grid grid-cols-2 gap-2 ${FONT_SIZE.XS} font-mono`}>
                    {user.location && (
                        <div className="flex items-center gap-2 text-white/60">
                            <MapPin size={12} className="text-primary/70" />
                            <span className="truncate">{user.location}</span>
                        </div>
                    )}
                    {user.profession && (
                        <div className="flex items-center gap-2 text-white/60">
                            <Briefcase size={12} className="text-primary/70" />
                            <span className="truncate">{user.profession}</span>
                        </div>
                    )}
                </div>

                {user.legion_id && (
                    <div className="pt-2 border-t border-white/5">
                        <div className={`${FONT_SIZE.XXS} text-white/30 uppercase tracking-widest mb-1`}>LEGION ID</div>
                        <div className={`${FONT_SIZE.XS} font-mono text-white/80 truncate font-bold`}>
                            {user.legion_id}
                        </div>
                    </div>
                )}
            </div>

            {/* Footer Info */}
            <div className={`p-3 bg-black/40 border-t border-white/5 flex justify-between items-center ${FONT_SIZE.XXS} font-mono text-white/30`}>
                <span>Created: {new Date(user.created_at).toLocaleDateString()}</span>
                {user.chat_name && <span>aka {user.chat_name}</span>}
            </div>
        </div>
    );
};
