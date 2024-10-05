/** @typedef {typeof __propDef.props}  FooterLinksProps */
/** @typedef {typeof __propDef.events}  FooterLinksEvents */
/** @typedef {typeof __propDef.slots}  FooterLinksSlots */
export default class FooterLinks extends SvelteComponent<{
    title: any;
    links: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type FooterLinksProps = typeof __propDef.props;
export type FooterLinksEvents = typeof __propDef.events;
export type FooterLinksSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        title: any;
        links: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
