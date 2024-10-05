/** @typedef {typeof __propDef.props}  AppsProps */
/** @typedef {typeof __propDef.events}  AppsEvents */
/** @typedef {typeof __propDef.slots}  AppsSlots */
export default class Apps extends SvelteComponent<{
    icon?: string;
    target?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type AppsProps = typeof __propDef.props;
export type AppsEvents = typeof __propDef.events;
export type AppsSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        icon?: string;
        target?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
