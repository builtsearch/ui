<script>
import Icon from "@iconify/svelte";
import { createEventDispatcher } from "svelte";

/**
 * @params {String|Array} options -An array of string, or an array of objects with value and displayValue
 */
export let options = [];
options = initOptions();
export let selected = options[0].value;
export let evenWidth = false;
export let accented = false;
export let ignoreSameOption = true;

const dispatch = createEventDispatcher();

function initOptions() {
	const arr = [];
	for (const item of options) {
		if (typeof item === "string") {
			arr.push({ value: item });
		} else {
			arr.push(item);
		}
	}
	return arr;
}

export async function change(value) {
	dispatch("change", value);
}
</script>

<div
	class="segmented-control-container"
	class:grid={evenWidth}
	class:accented
	style="--count:{options.length}">
	{#each options as option}
		<button
			class="none"
			class:selected={option.value == selected}
			on:click={() => {
				if (option.value == selected && ignoreSameOption == true) return;
				selected = option.value;
				change(selected);
			}}>
			{#if option.icon}
				<div class="icon">
					<Icon icon={option.icon} width="16" height="16" />
				</div>
			{/if}
			{#if option.displayValue}
				{option.displayValue}
			{:else}
				{option.value}
			{/if}
		</button>
	{/each}
</div>

<style>.segmented-control-container {
  display: flex;
  border-radius: 0.5rem;
  padding: 0.25rem;
  width: fit-content;
  background-color: var(--mono-100);
  display: flex;
  gap: var(--gap, 0.25rem);
  width: var(--width, fit-content);
}
.segmented-control-container.grid {
  display: grid;
  grid-template-columns: repeat(var(--count), 1fr);
}
.segmented-control-container.accented button.selected {
  background-color: var(--accent);
  color: var(--main-alt);
}
.segmented-control-container button {
  width: var(--button-width, auto);
  position: relative;
  padding-inline: 1rem;
  padding-block: 0.25rem;
  color: var(--inactive-color, var(--main));
  font-size: var(--font-size, 1rem);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
}
.segmented-control-container button .icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
.segmented-control-container button.selected {
  color: var(--main);
  background-color: var(--bg-p);
}</style>
