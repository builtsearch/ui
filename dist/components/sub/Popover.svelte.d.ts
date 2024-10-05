/** @typedef {typeof __propDef.props}  PopoverProps */
/** @typedef {typeof __propDef.events}  PopoverEvents */
/** @typedef {typeof __propDef.slots}  PopoverSlots */
export default class Popover extends SvelteComponent<{
    position?: string;
    autoClose?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    button: {};
    popup: {
        closePopover: () => void;
    };
}> {
}
export type PopoverProps = typeof __propDef.props;
export type PopoverEvents = typeof __propDef.events;
export type PopoverSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        position?: string;
        autoClose?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        button: {};
        popup: {
            closePopover: () => void;
        };
    };
};
export {};
