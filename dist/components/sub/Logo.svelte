<script>
import { goto } from "$app/navigation";
import { theme } from "./theme.store.js";
/** @type {string} - Glyph icon enum from A to Z. */
export let glyph = "B";
export let appName = "";
export let themeOverride = "";
export let height = "48px";

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

function navigateHome() {
	goto("/");
}
</script>

<button class="none no-focus no-hover" on:click={navigateHome}>
	<img
		style="--height:{height}"
		class="glyph"
		src="/logo/glyph/{glyph}.svg"
		alt="glyph_logo"
		draggable="false" />
	<div class="name">
		<img
			class="logo"
			src="/logo/builtsearch_logo{t == 'dark' ? '_dark' : ''}.svg"
			alt="logo"
			draggable="false" />
		<span class:light={t == "light"}>{appName}</span>
	</div>
</button>

<style>button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  gap: 0.5rem;
}
button img,
button span {
  user-select: none;
  pointer-events: none;
}
button .name {
  display: flex;
  align-items: baseline;
}
button .name span {
  margin-left: 4px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: #dcdfed;
  font-size: 24px;
  line-height: 0px;
}
button .name span.light {
  color: #303941;
}
button .glyph {
  height: var(--height);
}
button .logo {
  height: 24px;
}</style>
