import { Clipboard } from 'lucide-react';
import { FONT_SIZE } from '../constants';

export function IdBadge({ id }: { id: string }) {
    const short = `${id.slice(0, 4)}...`;

    return (
        <button
            type="button"
            title={id}
            onClick={() => {
                if (navigator.clipboard?.writeText) {
                    navigator.clipboard.writeText(id).catch(() => undefined);
                }
            }}
            className={`flex items-center gap-1 border border-border/60 cyber-chamfer-sm px-2 py-1 ${FONT_SIZE.SM} text-muted-foreground hover:text-primary`}
        >
            <Clipboard size={12} />
            {short}
        </button>
    );
}
