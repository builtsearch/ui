<script>
import Logo from "./sub/Logo.svelte";
export let glyph = "B";
export let appName = "";
export let height = "36px";
</script>

<header>
	<Logo {glyph} {appName} {height} />
	<div class="slot">
		<slot />
	</div>
</header>

<style>header {
  z-index: 100;
  display: flex;
  align-items: center;
  padding-inline: 1rem;
  padding-block-start: 12px;
  padding-block-end: 11px;
  border-bottom: 1px solid var(--mono-50);
  position: sticky;
  top: 0;
  width: 100%;
  background: color-mix(in srgb, var(--bg-p), 24% transparent);
  backdrop-filter: blur(6px);
}
header .slot {
  padding-left: 1rem;
  display: flex;
  width: 100%;
}</style>
