/** @typedef {typeof __propDef.props}  AvatarMenuProps */
/** @typedef {typeof __propDef.events}  AvatarMenuEvents */
/** @typedef {typeof __propDef.slots}  AvatarMenuSlots */
export default class AvatarMenu extends SvelteComponent<{
    avatar?: any;
    initial?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type AvatarMenuProps = typeof __propDef.props;
export type AvatarMenuEvents = typeof __propDef.events;
export type AvatarMenuSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        avatar?: any;
        initial?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
