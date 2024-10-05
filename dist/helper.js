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

export function formatWithComma(number, decimal = 0, showDecimal = false) {
	if (!number) {
		return null;
	}

	if (decimal === 0) {
		number = Math.round(number);
	}

	const [integerPart, decimalPart] = number.toString().split(".");
	const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	let decimalValue = decimalPart ? decimalPart : Array(decimal).fill("0").join("");

	if (decimal > 0) {
		decimalValue = decimalValue.toString().substring(0, decimal);
		decimalValue = decimalValue.padEnd(2, "0");

		if (showDecimal) {
			return `${formattedIntegerPart}.${decimalValue}`;
		} else {
			let end = Number(decimalValue) > 0 ? `.${decimalValue}` : "";

			return formattedIntegerPart + end;
		}
	}

	if (decimal == 0) {
		return formattedIntegerPart;
	}

	return decimalPart ? `${formattedIntegerPart}.${decimalValue}` : formattedIntegerPart;
}

/**
 * @param {string} str
 */
export function toPascalCase(str) {
	return str
		.toLowerCase()
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
}
