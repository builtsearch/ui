/** @typedef {typeof __propDef.props}  FooterProps */
/** @typedef {typeof __propDef.events}  FooterEvents */
/** @typedef {typeof __propDef.slots}  FooterSlots */
export default class Footer extends SvelteComponent<{
    glyph?: string;
    appName?: string;
    copyright_url?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    tagline: {};
    column1: {};
    column2: {};
    column3: {};
    footer_description: {};
    footer_legal: {};
}> {
}
export type FooterProps = typeof __propDef.props;
export type FooterEvents = typeof __propDef.events;
export type FooterSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        glyph?: string;
        appName?: string;
        copyright_url?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        tagline: {};
        column1: {};
        column2: {};
        column3: {};
        footer_description: {};
        footer_legal: {};
    };
};
export {};
