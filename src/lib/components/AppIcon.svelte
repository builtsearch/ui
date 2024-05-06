<script>
import { theme } from "$lib/components/sub/theme.store.js";
/** @type {string} - Glyph icon enum from A to Z. */
export let glyph = "B";
export let themeOverride = "";

$: glyph = glyph.toUpperCase();

let t;
$: $theme, updateTheme();

function updateTheme() {
	if (themeOverride) {
		t = themeOverride === "light" ? "light" : "dark";
	} else {
		t = $theme;
	}
}
</script>

{#await import(`$lib/assets/glyph/${glyph}.svg`) then { default: src }}
	<img class="glyph" {src} alt="glyph_logo" draggable="false" />
{/await}

<style lang="scss">
img {
	aspect-ratio: 1;
	height: var(--height);
}
</style>
