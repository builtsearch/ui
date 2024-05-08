<script>
import glyphJSON from "../glyph.json";
import { theme } from "./sub/theme.store.js";
/** @type {string} - Glyph icon enum from A to Z. */
export let glyph = "B";
export let themeOverride = "";
let url = createImage();

function createImage() {
	const glyphData = glyphJSON[glyph];
	const base64Svg = btoa(glyphData);
	return `data:image/svg+xml;base64,${base64Svg}`;
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

<img src={url} alt="glyph_icon" draggable="false" />

<style>img {
  aspect-ratio: 1;
  height: var(--height);
}</style>
