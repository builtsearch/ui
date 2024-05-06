<script>
import glyphJSON from "../glyph.json";
import { theme } from "./sub/theme.store.js";
/** @type {string} - Glyph icon enum from A to Z. */
export let glyph = "B";
export let themeOverride = "";
let src = createImage();
function createImage() {
	const glyphData = glyphJSON[glyph];

	const blob = new Blob([glyphData], { type: "image/svg+xml" });
	return URL.createObjectURL(blob);
}

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

<img class="glyph" {src} alt="glyph_logo" draggable="false" />

<style>img {
  aspect-ratio: 1;
  height: var(--height);
}</style>
