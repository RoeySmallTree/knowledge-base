import type { RefObject } from 'react';
import { TabShell } from '../layout/TabShell';
import { FONT_SIZE } from '../../constants';

interface TagsTabProps {
    scrollRootRef?: RefObject<HTMLDivElement>;
    leftPanelRef?: RefObject<HTMLDivElement>;
}

export function TagsTab({ scrollRootRef, leftPanelRef }: TagsTabProps) {
    const placeholder = (
        <div className={`p-4 text-white/30 font-mono ${FONT_SIZE.XS} text-center border border-white/5 rounded-lg border-dashed`}>
            NO_INDEXING_DATA
        </div>
    );

    const main = (
        <div className="flex h-64 items-center justify-center text-white/30 font-mono">
            COMPONENT_NOT_MOUNTED
        </div>
    );

    return (
        <TabShell
            left={placeholder}
            main={main}
            right={placeholder}
            leftPanelRef={leftPanelRef}
            scrollRootRef={scrollRootRef}
        />
    );
}
