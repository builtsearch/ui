<script context="module">
export function initItems(arr) {
	const items = [];
	arr.forEach((item) => {
		if (typeof item !== "object") {
			return items.push({
				value: item,
				label: item,
			});
		}
		item.match = true;
		items.push(item);
	});
	return items;
}
</script>

<script>
import { createEventDispatcher, onMount, tick } from "svelte";
import { quadOut } from "svelte/easing";
import Icon from "@iconify/svelte";

let open = false,
	foundSearch = true,
	input,
	error,
	preselected,
	dropdownCurrentHeight,
	dropdown;

export let disabled;

export let dropdownRelative = false;
let dropdownDisplay = dropdownRelative ? "relative" : "absolute";

/**
 * @type {Array<{value: string, label: string}>|Array<string>}
 * @param {Array<{value: string, label: string, match: boolean}>} items
 *
 * If the value and label is the same, it can be written as [value,value,...]
 */
export let items;

/**
 * @param {boolean} itemBorder - show border-bottom for each item in list
 */
export let itemBorder = false;
/**
 * @param {boolean} searchable - Include search prompt
 */
export let searchable = false;

/**
 *
 * @param {string} placeholder - Placeholder value when initialize
 */
export let placeholder = searchable ? "Search..." : "Select an option";

/**
 * the default value when initialize, this override placeholder value
 *
 * @type {Array<index>|string}
 * @param {Array<index>|string} defaultValue - The default value when initialize.
 * It can either be an array (index of item)
 * or value in string
 *
 * @example [0], [3], "Apple"
 */
export let defaultValue = [];

/**
 * @param {number} maxHeight - max-height in pixel
 *
 * rows will override maxHeight value
 */
export let maxHeight = 220;

/**
 * @param {rows} number - number of rows to display
 *
 * max-height will be computed base on number of rows
 */
export let rows = 0;

/**
 * @param {number} animationDuration - Duration of sliding animation. Value in milliseconds.
 */
export let animationDuration = 250;

function computeHeight(dropdown) {
	// if (rows) {
	const h = dropdown.querySelector(".item");
	const rowHeight = h.getBoundingClientRect().height;
	// maxHeight = h.getBoundingClientRect().height * rows + 8;
	// console.log(maxHeight);

	if (rows) {
		maxHeight = rowHeight * rows + 8;
		dropdownCurrentHeight = maxHeight;
		return;
	} else {
		// const totalHeight
		const t = dropdown.querySelectorAll(".item").length;
		const totalHeight = t * rowHeight + 8;
		if (totalHeight > maxHeight) {
			dropdownCurrentHeight = maxHeight;
		} else {
			dropdownCurrentHeight = totalHeight;
		}
	}

	// }
}

const dispatch = createEventDispatcher();

onMount(() => {});

const arrItems = (() => {
	if (!items) {
		return [];
	}

	const arr = [];
	items.forEach((item) => {
		if (typeof item !== "object") {
			return arr.push({
				value: item,
				label: item,
				match: true,
			});
		}
		item.match = true;
		arr.push(item);
	});
	return arr;
})();

export let selected = (() => {
	if (placeholder && !defaultValue) return null;

	if (Array.isArray(defaultValue)) {
		return arrItems[defaultValue[0]];
	} else {
		for (const item of arrItems) {
			if (item.value == defaultValue) {
				return item;
			}
		}
	}

	return null;
})();

function initInput(e) {
	if (defaultValue && defaultValue.length) {
		e.value = selected.label;
	}
}

function clickOutside(element, callback) {
	document.body.addEventListener("click", onClick);

	function onClick(event) {
		if (!element.contains(event.target) && open) {
			closeDropdown();
		}
	}
}

export function change(item) {
	error = false;
	// placeholder = null;
	if (searchable && input) {
		input.value = item.label;
	}
	selected = { ...item };
	closeDropdown();

	dispatch("change", selected);
}

async function toggleDropdown(e) {
	if (e.target.closest("input")) {
		return;
	}
	open = !open;
	if (!open) {
		return closeDropdown();
	}
	if (searchable) {
		preselected = false;
		input.value = "";
		placeholder = selected ? selected.label : placeholder;

		foundSearch = true;
	}

	if (open && searchable) {
		await tick();
		const container = dropdown.querySelector(".items_container");
		const items = container.querySelectorAll(".item");
		for (const item of items) {
			if (selected && item.textContent == selected.label) {
				const y = item.offsetTop;
				container.scrollTo(0, y);
				break;
			}
		}
		input.focus();
	}
}

function closeDropdown() {
	if (dropdown) {
		dropdownCurrentHeight = dropdown.getBoundingClientRect().height;
	}
	open = false;
	if (searchable) {
		preselected = false;
		placeholder = false;
		if (input) {
			input.value = selected ? selected.label : null;
		}
	}
}

function filter(string) {
	if (!string.length) {
		return resetFilter();
	}

	resetFilter();
	let matches = 0;
	arrItems.forEach((item, index) => {
		const label = item.label.toString();
		const match = label.match(new RegExp(string, "i"));
		if (!match) {
			return (arrItems[index].match = false);
		}
		matches++;
	});

	if (!matches) {
		foundSearch = false;
	}

	function resetFilter() {
		foundSearch = true;
		arrItems.forEach((item, index) => {
			arrItems[index].match = true;
		});
	}
}

export function getSelected() {
	return selected;
}

export function getValue() {
	if (!selected) {
		return null;
	}
	return selected.value;
}

export function setError() {
	error = true;
}

export function reset() {
	selected = null;
}

export function set(value) {
	const item = arrItems.find((x) => x.value == value);
	change(item);
}

function fadeSlide(node, { delay = 0, duration = 300 }) {
	return {
		delay,
		duration,
		css: (t) => {
			const eased = quadOut(t);
			return `
                       height:${eased * dropdownCurrentHeight}px;
                       opacity: ${eased * 100}%;
                `;
		},
	};
}

let preselected_index;
$: open,
	(() => {
		if (open) {
			preselected_index = null;
			preselected = false;
		}
	})();

async function handleArrowKeys(e) {
	if (e.key == "Tab") {
		open = false;
		return;
	}

	function getCurrentSelection() {
		if (!selected && !preselected) {
			preselected = arrItems[0];

			return;
		}

		if (!selected) {
			if (e.key == "ArrowDown") {
				preselected_index++;
				if (preselected_index > arrItems.length - 1) {
					preselected_index = 0;
				}
			} else if (e.key == "ArrowUp") {
				preselected_index--;
				if (preselected_index < 0) {
					preselected_index = arrItems.length - 1;
				}
			}
			preselected = arrItems[preselected_index];
			s;
			return;
		}

		const currentIndex = arrItems.findIndex((x) => x.value == selected.value);
		if (preselected_index == null) {
			preselected_index = currentIndex;
		}

		if (e.key == "ArrowDown") {
			preselected_index++;
			if (preselected_index > arrItems.length - 1) {
				preselected_index = 0;
			}
		} else if (e.key == "ArrowUp") {
			preselected_index--;
			if (preselected_index < 0) {
				preselected_index = arrItems.length - 1;
			}
		}

		preselected = arrItems[preselected_index];
	}

	if (e.key == "ArrowDown" || e.key == "ArrowUp") {
		getCurrentSelection();
		await tick();
		const preselected_element = dropdown.querySelector(".preselected");
		const row = dropdown.querySelector(".item");
		const offset = row.getBoundingClientRect().height * 2;
		dropdown
			.querySelector(".items_container")
			.scrollTo(0, preselected_element.offsetTop - offset);

		return;
	}

	if (preselected && e.key == "Enter") {
		selected = preselected;
		change(preselected);
		input.blur();
		closeDropdown();
		return;
	}

	open = true;
	const item = arrItems.filter((x) => x.match == true)[0];
	preselected = item;
	if (e.key == "Enter" && foundSearch && item) {
		selected = item;
		change(item);
		input.blur();
		closeDropdown();
	}
}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="select__container" use:clickOutside class:disabled>
	<!-- svelte-ignore a11y-role-has-required-aria-props -->
	<div
		tabindex="0"
		role="combobox"
		class="select"
		class:error
		class:open
		class:placeholder={selected == null}
		class:focus={open == true}
		data-value={selected ? selected.value : ""}
		on:keydown={(e) => {
			if (disabled) {
				return;
			}
			if (e.key == "Enter") {
				e.preventDefault();
				toggleDropdown(e);
			}
		}}
		on:click={toggleDropdown}>
		{#if searchable}
			<div class="search__container">
				<input
					bind:this={input}
					use:initInput
					class:placeholder={input ? input.value == placeholder : false}
					on:input={() => {
						filter(input.value);
					}}
					on:focus={async () => {
						open = true;
					}}
					on:keydown={handleArrowKeys}
					spellcheck="false"
					autocomplete="false"
					placeholder={placeholder !== false
						? selected
							? selected.label
							: placeholder || "Search..."
						: ""} />
			</div>
		{:else}
			<div class="label" class:placeholder={!selected}>
				{selected == null ? placeholder : selected.label}
			</div>
		{/if}

		<div class="expand">
			<Icon icon="ic:outline-expand-more" width="20" inline={true} />
		</div>
	</div>

	{#if open}
		<div
			bind:this={dropdown}
			use:computeHeight
			transition:fadeSlide={{ duration: animationDuration }}
			class="dropdown"
			style="--select-dropdown-position:{dropdownDisplay}; max-height:{maxHeight}px">
			<div class="items_container">
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				{#each arrItems as item}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						class="item"
						class:item__border={itemBorder}
						class:hide={!item.match && input && input.value.length}
						class:selected={selected ? selected.value == item.value : false}
						class:preselected={preselected ? preselected.value == item.value : false}
						on:click={() => {
							change(item);
						}}>
						{item.label}
					</div>
				{/each}
				{#if searchable && !foundSearch}
					<div class="no_options_found">No options found</div>
				{/if}
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
.select__container {
	height: 100%;
	height: fit-content;
	position: relative;
	display: flex;
	flex-direction: column;
	--select-border-radius: var(--border-radius, 0.375rem);
	--select-padding: var(--padding-block, 0.5rem);
	--select-font-size: var(--font-size, 1rem);

	&.disabled {
		pointer-events: none;
		--bg-input: var(--mono-100);
		.select {
			&:focus-visible {
				outline-color: var(--mono-500) !important;
			}
		}
	}
	.select {
		min-width: 200px;
		padding: 0.5rem;
		padding-block: 0.5rem;
		padding-left: var(--padding-inline, 1rem);
		padding-right: 0.5rem;
		border-radius: var(--select-border-radius);
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		cursor: pointer;
		// transition: border 0.25s;
		width: auto;
		border: 1px solid var(--mono-200);
		background-color: var(--bg-input);

		&:focus-visible {
			outline: var(--focus-visible-outline) !important;
		}

		// &.open {
		// 	// border-radius: var(--select-border-radius) var(--select-border-radius) 0 0;
		// }

		&.focus {
			outline: 1px solid var(--accent);
			border: 1px solid transparent;
		}

		.expand {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-left: auto;
			color: var(--mono-500);
		}

		&.error {
			border-color: #cf3a3a;
		}

		.label {
			color: var(--main);
			font-size: var(--select-font-size);
			&.placeholder {
				color: var(--mono-500);
			}
		}

		.search__container {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			width: 100%;

			input {
				width: 100%;
				border: none;
				border-radius: 0;
				font-style: inherit;
				font-size: var(--select-font-size);
				padding: 0 !important;
				background-color: transparent;
				&:focus {
					outline: none;
					background-color: inherit;
				}
				&::placeholder {
					font-size: inherit;
					color: var(--mono);
				}
			}
		}
	}
}

.dropdown {
	margin-top: 6px;
	top: 100%;
	position: var(--select-dropdown-position);
	right: 0;
	box-sizing: border-box;
	// border-radius: 0 0 var(--select-border-radius) var(--select-border-radius);
	border-radius: var(--select-border-radius);
	width: 100%;
	background-color: var(--bg-input);
	display: flex;
	flex-direction: column;
	z-index: 10;
	max-height: 220px;
	overflow: hidden;
	outline: 1px solid var(--accent);

	.items_container {
		height: auto;
		overflow-y: auto;
		padding-block: 0.25rem;
		.item {
			padding-inline: var(--padding-inline, 1rem);
			padding-block: var(--select-padding);
			font-size: var(--select-font-size);
			cursor: pointer;
			&:hover {
				background-color: var(--mono-100);
			}

			&.hide {
				display: none;
			}

			&.preselected {
				background-color: color-mix(in srgb, var(--accent) 25%, transparent);
			}
			&.selected {
				background-color: color-mix(in srgb, var(--accent-400) 75%, transparent);
			}
			&.item__border {
				border-bottom: 1px solid var(--mono-100);
			}
		}

		.no_options_found {
			padding: calc(var(--select-padding) - 0.125rem);
			color: var(--mono-300);
			text-align: center;
		}
	}
}
</style>
