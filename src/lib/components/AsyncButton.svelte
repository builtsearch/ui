<script>
import Icon from "@iconify/svelte";
import { get_current_component } from "svelte/internal";

/** @type {"default" | "outlined" | "warning" | "none"} */
export let buttonStyle = "default";
export let disabled = false;
export let persist = false;
let isAwaiting = false;
let button;

const dispatch = createEventDispatcher();

function createEventDispatcher() {
	const component = get_current_component();
	return async (type, detail) => {
		const callbacks = component.$$.callbacks[type];
		if (callbacks && callbacks.length > 0) {
			const fn = callbacks[0];
			const res = fn.call(component, detail);

			if (res instanceof Promise) {
				return await res;
			}
			return res;
		}
		return [];
	};
}

export async function handleButtonClick() {
	if (disabled) return;
	if (isAwaiting) return;
	isAwaiting = true;
	await dispatch("click");
	if (persist) return;
	isAwaiting = false;
}
</script>

<button
	bind:this={button}
	on:click={handleButtonClick}
	class:isAwaiting
	class:disabled
	class:warning={buttonStyle == "warning"}
	class:outlined={buttonStyle == "outlined"}
	class:none={buttonStyle == "none"}>
	{#if isAwaiting}
		<div class="icon">
			<Icon icon="svg-spinners:3-dots-bounce" height="24" />
		</div>
	{/if}
	<span class:hide={isAwaiting}>
		<slot />
	</span>
</button>

<style lang="scss">
button {
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	width: var(--width, fit-content);
	padding-inline: var(--padding-inline, 1rem);
	font-size: var(--font-size, 1rem);
	padding-block: var(--padding-block, 0.5rem);
	.icon {
		display: block;
		position: absolute;
		bottom: 0;
	}

	&.isAwaiting {
		cursor: default;
		--button-bg: var(--accent-600);
		filter: grayscale(0.7);
		&:hover {
			background-color: var(--button-bg);
		}
		&.outlined {
			filter: grayscale(0.4);
			--border-color: var(--accent-400);
			--button-bg: color-mix(in srgb, var(--accent-600), 90% transparent);
			--text-color: var(--accent);
		}
		&.warning {
			filter: none;
			--button-bg: color-mix(in srgb, var(--red) 50%, var(--mono));
		}
	}
	span.hide {
		visibility: hidden;
	}
}
</style>
