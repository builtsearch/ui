/** @typedef {typeof __propDef.props}  SegmentedControlProps */
/** @typedef {typeof __propDef.events}  SegmentedControlEvents */
/** @typedef {typeof __propDef.slots}  SegmentedControlSlots */
export default class SegmentedControl extends SvelteComponent<{
    change?: (value: any) => Promise<void>;
    options?: any[];
    selected?: any;
    evenWidth?: boolean;
    accented?: boolean;
}, {
    change: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
    get change(): (value: any) => Promise<void>;
}
export type SegmentedControlProps = typeof __propDef.props;
export type SegmentedControlEvents = typeof __propDef.events;
export type SegmentedControlSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        change?: (value: any) => Promise<void>;
        options?: any[];
        selected?: any;
        evenWidth?: boolean;
        accented?: boolean;
    };
    events: {
        change: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
