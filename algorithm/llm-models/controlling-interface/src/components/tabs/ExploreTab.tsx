import type { RefObject } from 'react';
import { ExploreSidebar } from '../ExploreSidebar';
import { ExploreView } from '../ExploreView';
import { ExploreFilters } from '../ExploreFilters';
import { TabShell } from '../layout/TabShell';
import { useAppData } from '../../context/AppDataContext';

interface ExploreTabProps {
    activeModels: any[];
    ownedApiIds: Set<string>;
    exploreStats: { total: number; owned: number; shown: number };
    onHideModel: (modelId: string) => void;
    onImportModel: (model: any) => void;
    hideOwned: boolean;
    onToggleHideOwned: (value: boolean) => void;
    hideIrrelevant: boolean;
    onToggleHideIrrelevant: (value: boolean) => void;
    onClear: () => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
    createdAfter: number | null;
    onCreatedAfterChange: (value: number | null) => void;
    lastOwnedDate?: number;
    scrollRootRef?: RefObject<HTMLDivElement>;
    leftPanelRef?: RefObject<HTMLDivElement>;
}

export function ExploreTab({
    activeModels,
    ownedApiIds,
    exploreStats,
    onHideModel,
    onImportModel,
    hideOwned,
    onToggleHideOwned,
    hideIrrelevant,
    onToggleHideIrrelevant,
    onClear,
    searchQuery,
    onSearchChange,
    createdAfter,
    onCreatedAfterChange,
    lastOwnedDate,
    scrollRootRef,
    leftPanelRef
}: ExploreTabProps) {
    const { loading } = useAppData();

    const left = !loading ? (
        <ExploreSidebar
            total={exploreStats.total}
            shown={exploreStats.shown}
            owned={exploreStats.owned}
        />
    ) : null;

    const main = (
        <div className="h-full">
            <ExploreView
                activeModels={activeModels}
                ownedApiIds={ownedApiIds}
                onHideModel={onHideModel}
                onImportModel={onImportModel}
            />
        </div>
    );

    const right = !loading ? (
        <ExploreFilters
            hideOwned={hideOwned}
            onToggleHideOwned={onToggleHideOwned}
            hideIrrelevant={hideIrrelevant}
            onToggleHideIrrelevant={onToggleHideIrrelevant}
            onClear={onClear}
            searchQuery={searchQuery}
            onSearchChange={onSearchChange}
            createdAfter={createdAfter}
            onCreatedAfterChange={onCreatedAfterChange}
            lastOwnedDate={lastOwnedDate}
        />
    ) : null;

    return (
        <TabShell
            left={left}
            main={main}
            right={right}
            leftPanelRef={leftPanelRef}
            scrollRootRef={scrollRootRef}
        />
    );
}
