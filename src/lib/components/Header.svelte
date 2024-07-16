<script>
import Logo from "./sub/Logo.svelte";
export let glyph = "B";
export let appName = "";
export let height = "36px";
export let background = "";
</script>

<header class:bg-transparent={background == "transparent"}>
	<Logo {glyph} {appName} {height} />
	<div class="slot">
		<slot />
	</div>
</header>

<style lang="scss">
header {
	z-index: 100;
	display: flex;
	align-items: center;
	padding-inline: 1rem;
	padding-block-start: 12px;
	padding-block-end: 11px;
	max-height: 60px;
	border-bottom: 1px solid var(--mono-50);
	position: sticky;
	top: 0;
	width: 100%;
	background: color-mix(in srgb, var(--bg-p), var(--transparency, 24%) transparent);
	backdrop-filter: blur(6px);
	&.bg-transparent {
		background-color: transparent !important;
		padding-block-end: 12px;
		border-bottom: 0;
	}
	.slot {
		padding-left: 1rem;
		display: flex;
		width: 100%;
	}
}
</style>
