<script>
import Logo from "./sub/Logo.svelte";
import { page } from "$app/stores";

export let glyph = "B";
export let copyright_url = $page.url.host;
export let appName = "asd";
</script>

<footer {glyph}>
	<div class="footer_container">
		<div class="grid">
			<div class="logo">
				<Logo {glyph} {appName} themeOverride="dark" />
				<span class="tagline">
					<slot name="tagline" />
				</span>
			</div>
			<div class="links">
				<slot name="column1" />
				<slot name="column2" />
				<slot name="column3" />
			</div>
		</div>
		<div class="footer_divider"></div>
		<div class="footer_info">
			<div class="copyright">
				<span>Copyright © {new Date().getFullYear()} {copyright_url}</span>
			</div>
			<slot name="footer_description" />
			<div class="footer_legal">
				<slot name="footer_legal" />
			</div>
		</div>
	</div>
</footer>

<style>footer {
  background-color: #000;
  padding-block: 2rem 3rem;
  --footer-font-color: #606b7a;
  --footer-title-color: #dcdfed;
}
footer .footer_container {
  width: 1100px;
  margin-inline: auto;
}
@media screen and (max-width: 1100px) {
  footer .footer_container {
    width: 100%;
    padding-inline: 2rem;
  }
}
footer .footer_container .grid {
  display: flex;
  justify-content: space-between;
  color: var(--footer-font-color);
}
footer .footer_container .grid .logo {
  max-width: 400px;
  flex-shrink: 0;
}
footer .footer_container .grid .logo .tagline {
  font-size: 0.875rem;
}
footer .footer_container .grid .links {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-left: 150px;
}
@media screen and (max-width: 1100px) {
  footer .footer_container .grid {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
  footer .footer_container .grid .logo {
    width: 100%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  footer .footer_container .grid .links {
    justify-content: space-around;
    margin-left: 0px;
  }
}
@media screen and (max-width: 600px) {
  footer .footer_container .grid .links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
footer .footer_container .footer_divider {
  width: 100%;
  height: 1px;
  margin-block: 2rem;
  background-color: var(--footer-title-color);
}
footer .footer_container .footer_info {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: var(--footer-font-color);
}
@media screen and (max-width: 1100px) {
  footer .footer_container .footer_info {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
}
footer .footer_container .footer_info .footer_legal {
  width: fit-content;
}
footer .footer_container .footer_info .footer_legal :global(div[slot="footer_legal"]) {
  display: flex;
  gap: 1rem;
}
footer .footer_container .footer_info .footer_legal :global(div[slot="footer_legal"]) :global(a) {
  color: var(--footer-font-color);
  text-decoration: none;
}
footer .footer_container .footer_info .footer_legal :global(div[slot="footer_legal"]) :global(a):hover {
  color: var(--accent);
}</style>
