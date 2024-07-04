<script>
import { theme } from "$lib/components/sub/theme.store.js";
import AppIcon from "$lib/components/AppIcon.svelte";

/** @type {string} - Glyph icon enum from A to Z. */
export let glyph = "B";
export let appName = "";
export let themeOverride = "";
export let height = "48px";
import logo_light from "$lib/assets/builtsearch_logo.svg";
import logo_dark from "$lib/assets/builtsearch_logo_dark.svg";

$: glyph = glyph.toUpperCase();

let t;
$: $theme, updateTheme();

function updateTheme() {
	if (themeOverride) {
		t = themeOverride;
		console.log(t);
	} else {
		t = $theme;
	}
}
</script>

<a class="button none no-focus no-hover" href="/">
	{#if glyph}
		<AppIcon {glyph} --height={height} />
	{/if}
	<div class="name">
		<img
			class="logo"
			src={t == "light" ? logo_light : logo_dark}
			alt="logo"
			draggable="false" />
		{#if appName}
			<span class:light={t == "light"}>{appName}</span>
		{/if}
	</div>
</a>

<style lang="scss">
a {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;
	border: none;
	background-color: transparent;
	cursor: pointer;
	gap: 0.5rem;
	flex-shrink: 0;

	img,
	span {
		user-select: none;
		pointer-events: none;
	}
	.name {
		display: flex;
		align-items: baseline;
		span {
			margin-left: 4px;
			font-family: "Montserrat", sans-serif;
			font-weight: 600;
			color: #dcdfed;
			font-size: 24px;
			line-height: 0px;
			&.light {
				color: #303941;
			}
		}
	}

	.logo {
		height: 24px;
	}
}
</style>
