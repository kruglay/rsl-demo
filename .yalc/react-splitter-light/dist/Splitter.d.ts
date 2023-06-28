import './splitter.css';
import React, { CSSProperties, ReactNode } from 'react';
export type MODE = 'vertical' | 'horizontal';
export interface SplitterProps {
    children: ReactNode | ReactNode[];
    initialSizes?: number[];
    minSizes?: (number | string) | (number | string)[];
    maxSizes?: (number | string) | (number | string)[];
    runnerSize?: number | string;
    onResize?: (sizesInUnits: number[], sizes: number[]) => void;
    onDragStart?: (event: MouseEvent, indexes: number[]) => void;
    onDragEnd?: (event: MouseEvent, indexes: number[]) => void;
    resizable?: boolean | boolean[];
    discrete?: boolean | number;
    actionOnContainerResize?: boolean;
    mode?: MODE;
    runnerStyle?: CSSProperties;
    runnerClassName?: string;
    splitterStyle?: CSSProperties;
    splitterClassName?: string;
    paneClassName?: string;
}
export interface RectParams {
    offset: 'left' | 'top';
    size: 'width' | 'height';
    axis: 'clientX' | 'clientY';
}
export declare const Splitter: (props: SplitterProps) => React.JSX.Element;
