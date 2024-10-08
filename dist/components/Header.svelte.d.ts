/** @typedef {typeof __propDef.props}  HeaderProps */
/** @typedef {typeof __propDef.events}  HeaderEvents */
/** @typedef {typeof __propDef.slots}  HeaderSlots */
export default class Header extends SvelteComponent<{
    glyph?: string;
    appName?: string;
    height?: string;
    responsive?: boolean;
    background?: string;
    icon?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    icon: {};
    default: {};
}> {
}
export type HeaderProps = typeof __propDef.props;
export type HeaderEvents = typeof __propDef.events;
export type HeaderSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        glyph?: string;
        appName?: string;
        height?: string;
        responsive?: boolean;
        background?: string;
        icon?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        icon: {};
        default: {};
    };
};
export {};
