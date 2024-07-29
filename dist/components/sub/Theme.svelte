<script>
import Icon from "@iconify/svelte";
import { onMount } from "svelte";
import { theme } from "./theme.store.js";
export let hover = true;
let rotate = 0;
onMount(() => {
	const systemIsDark = window.matchMedia("(prefers-color-scheme: dark").matches;

	$theme = localStorage.getItem("theme");
	if ($theme == null) {
		const systemTheme = systemIsDark ? "dark" : "light";
		localStorage.setItem("theme", systemTheme);
		$theme = systemTheme;
	}

	if ($theme == "light") {
		document.body.classList.add("light");
		document.body.classList.remove("dark");
	} else {
		document.body.classList.remove("light");
		document.body.classList.add("dark");
	}
});

export function changeTheme() {
	document.body.classList.add("transitionEffect");

	if ($theme == "dark") {
		$theme = "light";
		document.body.classList.add("light");
		document.body.classList.remove("dark");
	} else {
		$theme = "dark";
		document.body.classList.remove("light");
		document.body.classList.add("dark");
	}

	setTimeout(() => {
		document.body.classList.remove("transitionEffect");
	}, 500);

	rotate += 180;
	localStorage.setItem("theme", $theme);
}
</script>

<button
	id="theme_button"
	style="transform:rotateZ({rotate}deg)"
	class="none"
	class:no-hover={!hover}
	data-theme={$theme}
	on:click={() => changeTheme()}>
	{#if $theme == "light"}
		<Icon icon="material-symbols:brightness-7" width="24" />
	{:else}
		<Icon icon="material-symbols:brightness-4" width="24" />
	{/if}
</button>

<style>#theme_button {
  outline: none;
  border: none;
  padding: 0;
  height: 36px;
  width: 36px;
  aspect-ratio: 1;
  border-radius: 100px;
  transition: transform 0.5s;
  transform: rotateZ(0deg);
  color: var(--main);
  box-shadow: none;
  display: flex;
  justify-content: center;
  align-items: center;
}</style>
