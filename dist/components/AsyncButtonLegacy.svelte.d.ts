/** @typedef {typeof __propDef.props}  AsyncButtonLegacyProps */
/** @typedef {typeof __propDef.events}  AsyncButtonLegacyEvents */
/** @typedef {typeof __propDef.slots}  AsyncButtonLegacySlots */
export default class AsyncButtonLegacy extends SvelteComponent<{
    handleClick: any;
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
export type AsyncButtonLegacyProps = typeof __propDef.props;
export type AsyncButtonLegacyEvents = typeof __propDef.events;
export type AsyncButtonLegacySlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        handleClick: any;
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
