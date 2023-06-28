import React, { MutableRefObject, ReactNode } from 'react';
import { MODE } from './Splitter';
export interface PaneProps {
    children: ReactNode | ReactNode[];
    size: number | string;
    minSize: number | string;
    maxSize: number | string;
    index: number;
    paneRefs: MutableRefObject<HTMLDivElement[]>;
    className?: string;
    mode?: MODE;
}
export declare const Pane: {
    (props: PaneProps): React.JSX.Element;
    displayName: string;
};
