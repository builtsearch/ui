/** @typedef {typeof __propDef.props}  ThemeProps */
/** @typedef {typeof __propDef.events}  ThemeEvents */
/** @typedef {typeof __propDef.slots}  ThemeSlots */
export default class Theme extends SvelteComponent<{
    changeTheme?: () => void;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
    get changeTheme(): () => void;
}
export type ThemeProps = typeof __propDef.props;
export type ThemeEvents = typeof __propDef.events;
export type ThemeSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        changeTheme?: () => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
