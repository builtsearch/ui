/**
 * @param {{ (msg: any, opts?: {}): string; (url: any): void; (url: any): void; (url: any): void; (url: any): void; apply?: any; }} func
 * @param {number} delay
 */
export function debounce(func: {
    (msg: any, opts?: {}): string;
    (url: any): void;
    (url: any): void;
    (url: any): void;
    (url: any): void;
    apply?: any;
}, delay: number): (...args: any) => void;
/**
 * @param {number | undefined} ms
 */
export function timeout(ms: number | undefined): Promise<any>;
export function toTitleCase(str: any, lowerCaseRest?: boolean, replaceUnderscore?: boolean): any;
export function formatWithComma(number: any, decimal?: number, showDecimal?: boolean): any;
/**
 * @param {string} str
 */
export function toPascalCase(str: string): string;
