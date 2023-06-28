import React, { CSSProperties, Dispatch, MutableRefObject, RefObject, SetStateAction } from 'react';
import { RectParams, SplitterProps } from './Splitter';
export interface RunnerProps {
    refContainer: RefObject<HTMLDivElement | null>;
    startAt: number;
    minBorder: number;
    maxBorder: number;
    paneRefs: MutableRefObject<HTMLDivElement[]>;
    runnerRefs: MutableRefObject<HTMLDivElement[]>;
    pairIndex: [number, number];
    setSizes: Dispatch<SetStateAction<number[]>>;
    onResize?: SplitterProps['onResize'];
    onDragStart?: SplitterProps['onDragStart'];
    onDragEnd?: SplitterProps['onDragEnd'];
    fullSizeInUnits: number;
    discrete?: SplitterProps['discrete'];
    modeParams: RectParams;
    style: CSSProperties;
    className?: string;
}
export declare const Runner: (props: RunnerProps) => React.JSX.Element;
