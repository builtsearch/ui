/** @typedef {typeof __propDef.props}  AsyncButtonProps */
/** @typedef {typeof __propDef.events}  AsyncButtonEvents */
/** @typedef {typeof __propDef.slots}  AsyncButtonSlots */
export default class AsyncButton extends SvelteComponent<{
    buttonStyle?: "default" | "none" | "outlined" | "warning";
    disabled?: boolean;
    persist?: boolean;
    handleButtonClick?: () => Promise<void>;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
    get handleButtonClick(): () => Promise<void>;
}
export type AsyncButtonProps = typeof __propDef.props;
export type AsyncButtonEvents = typeof __propDef.events;
export type AsyncButtonSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        buttonStyle?: "default" | "outlined" | "warning" | "none";
        disabled?: boolean;
        persist?: boolean;
        handleButtonClick?: () => Promise<void>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
