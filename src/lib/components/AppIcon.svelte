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
let glyphs = import.meta.glob(`../assets/glyph/*.svg`, { eager: true });

for (const path in glyphs) {
	console.log(path);
}
</script>

<img class="glyph" src={`../assets/glyph/${glyph}.svg`} alt="glyph_logo" draggable="false" />

<style lang="scss">
img {
	aspect-ratio: 1;
	height: var(--height);
}
</style>
