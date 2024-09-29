<script>
import { onMount } from "svelte";

export let src = null;
export let autoFontSize = true;
let avatarElement;
let avatar, initial;

if (src) {
	if (src.startsWith("http") || src.startsWith("/") || src.startsWith("data:")) {
		avatar = src;
	} else {
		initial = src.toString().charAt(0).toUpperCase() || "?";
	}
}

onMount(() => {
	if (autoFontSize && avatarElement) {
		const size = avatarElement.getBoundingClientRect().width;
		const map = {
			32: "1rem",
			48: "1.5rem",
			64: "2rem",
			96: "3rem",
			128: "4rem",
			192: "6rem",
			256: "8rem",
		};
		avatarElement.style.setProperty("--font-size", map[size] || "1rem");
	}
});
</script>

<div class="avatar" bind:this={avatarElement}>
	{#if avatar}
		<img src={avatar} alt="avatar" />
	{:else}
		<div class="initial">
			{initial || "?"}
		</div>
	{/if}
</div>

<style lang="scss">
.avatar {
	border-radius: 50%;
	height: var(--height, 30px);
	width: var(--height, 30px);
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--background-color, var(--accent-400));
	overflow: clip;
	.initial {
		padding: var(--padding, 6px);
		font-size: var(--font-size, 1rem);
		font-weight: var(--font-weight, 500);
		color: var(--main-alt);
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}
</style>
