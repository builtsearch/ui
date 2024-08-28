/**
 * @param {{ (msg: any, opts?: {}): string; (url: any): void; (url: any): void; (url: any): void; (url: any): void; apply?: any; }} func
 * @param {number} delay
 */
export function debounce(func, delay) {
	// @ts-ignore
	let timeoutId;
	if (!delay) {
		delay = 300;
	}

	return function (/** @type {any} */ ...args) {
		// @ts-ignore
		const context = this;

		// @ts-ignore
		clearTimeout(timeoutId);

		timeoutId = setTimeout(() => {
			func.apply(context, args);
		}, delay);
	};
}

/**
 * @param {number | undefined} ms
 */
export function timeout(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export function toTitleCase(str, lowerCaseRest = false, replaceUnderscore = false) {
	if (!str) return str;
	if (replaceUnderscore) {
		str = str.replace(/_/g, " ");
	}

	return (
		str
			.split(/\s/)
			// @ts-ignore
			.map((word) => {
				const firstChar = word.charAt(0);
				if (!firstChar.match(/[a-zA-Z]/)) {
					return word;
				}
				const firstLetter = word.charAt(0).toUpperCase();
				let rest = word.slice(1);
				if (lowerCaseRest) {
					rest = rest.toLowerCase();
				}
				return firstLetter + rest;
			})
			.join(" ")
	);
}
