/** @typedef {typeof __propDef.props}  AppIconProps */
/** @typedef {typeof __propDef.events}  AppIconEvents */
/** @typedef {typeof __propDef.slots}  AppIconSlots */
export default class AppIcon extends SvelteComponent<{
    glyph?: string;
    themeOverride?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type AppIconProps = typeof __propDef.props;
export type AppIconEvents = typeof __propDef.events;
export type AppIconSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        glyph?: string;
        themeOverride?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
