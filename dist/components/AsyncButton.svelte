<script>
import Icon from "@iconify/svelte";
export let handleClick;
export let buttonStyle = "";
export let disabled = false;
export let persist = false;
let isAwaiting = false;
let button;

export async function handleButtonClick() {
	if (disabled) return;
	isAwaiting = true;
	await handleClick();

	if (persist) return;
	isAwaiting = false;
}
</script>

<button
	bind:this={button}
	on:click={handleButtonClick}
	class:isAwaiting
	class:disabled
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

<style>button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--width, fit-content);
  padding-inline: var(--padding-inline, 2rem);
  position: relative;
}
button .icon {
  position: absolute;
  bottom: 0;
}
button.isAwaiting {
  cursor: default;
  --button-bg: var(--accent-600);
  filter: grayscale(0.7);
}
button.isAwaiting:hover {
  background-color: var(--button-bg);
}
button.isAwaiting.outlined {
  filter: grayscale(0.4);
  --border-color: var(--accent-400);
  --button-bg: color-mix(in srgb, var(--accent-600), 90% transparent);
  --text-color: var(--accent);
}
button span.hide {
  visibility: hidden;
}</style>
