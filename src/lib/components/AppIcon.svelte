<script>
import { theme } from "$lib/components/sub/theme.store.js";
/** @type {string} - Glyph icon enum from A to Z. */
export let glyph = "B";
export let themeOverride = "";
let src;
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
	if (path.endsWith(`/${glyph}.svg`)) {
		src = glyphs[path].default;
		console.log(src);
		break;
	}
}
</script>

<img class="glyph" {src} alt="glyph_logo" draggable="false" />

<style lang="scss">
img {
	aspect-ratio: 1;
	height: var(--height);
}
</style>
