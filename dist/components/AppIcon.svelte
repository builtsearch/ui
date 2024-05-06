<script>
import { theme } from "./sub/theme.store.js";
/** @type {string} - Glyph icon enum from A to Z. */
export let glyph = "B";
export let themeOverride = "";
let src;
const glyphs = import.meta.glob("$lib/assets/glyph/*.svg", { eager: true });

(async () => {
	for await (const key of Object.keys(glyphs)) {
		if (key.endsWith(`${glyph}.svg`)) {
			const file = await glyphs[key];
			const { default: defaultExport } = file;
			src = defaultExport;
			break;
		}
	}
})();

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

{#if src}
	<img class="glyph" {src} alt="glyph_logo" draggable="false" />
{/if}

<style>img {
  aspect-ratio: 1;
  height: var(--height);
}</style>
