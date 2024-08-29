/** @typedef {typeof __propDef.props}  SwitchProps */
/** @typedef {typeof __propDef.events}  SwitchEvents */
/** @typedef {typeof __propDef.slots}  SwitchSlots */
export default class Switch extends SvelteComponent<{
    isChecked?: any;
    checked?: boolean;
}, {
    change: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type SwitchProps = typeof __propDef.props;
export type SwitchEvents = typeof __propDef.events;
export type SwitchSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        isChecked?: any;
        checked?: boolean;
    };
    events: {
        change: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
