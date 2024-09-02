export function initItems(arr: any): any[];
/** @typedef {typeof __propDef.props}  SelectProps */
/** @typedef {typeof __propDef.events}  SelectEvents */
/** @typedef {typeof __propDef.slots}  SelectSlots */
export default class Select extends SvelteComponent<{
    items: string[] | {
        value: string;
        label: string;
    }[];
    disabled?: boolean;
    change?: (item: any) => void;
    selected?: any;
    reset?: () => void;
    id?: string;
    dropdownRelative?: boolean;
    itemBorder?: boolean;
    searchable?: boolean;
    placeholder?: string;
    defaultValue?: string | index[];
    maxHeight?: number;
    rows?: number;
    animationDuration?: number;
    getSelected?: () => any;
    getValue?: () => any;
    setError?: () => void;
    set?: (value: any) => void;
}, {
    change: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
    get change(): (item: any) => void;
    get getSelected(): () => any;
    get getValue(): () => any;
    get setError(): () => void;
    get reset(): () => void;
    get set(): (value: any) => void;
}
export type SelectProps = typeof __propDef.props;
export type SelectEvents = typeof __propDef.events;
export type SelectSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        items: Array<{
            value: string;
            label: string;
        }> | Array<string>;
        disabled?: boolean;
        change?: (item: any) => void;
        selected?: any;
        reset?: () => void;
        id?: string;
        dropdownRelative?: boolean;
        itemBorder?: boolean;
        searchable?: boolean;
        placeholder?: string;
        defaultValue?: Array<index> | string;
        maxHeight?: number;
        rows?: number;
        animationDuration?: number;
        getSelected?: () => any;
        getValue?: () => any;
        setError?: () => void;
        set?: (value: any) => void;
    };
    events: {
        change: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
