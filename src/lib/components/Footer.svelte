<script>
import Logo from "./sub/Logo.svelte";
import { page } from "$app/stores";

export let glyph = "B";
export let copyright_url = $page.url.host;
export let appName = "";
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

<style lang="scss">
footer {
	background-color: #000;
	padding-block: 2rem 3rem;
	--footer-font-color: #606b7a;
	--footer-title-color: #dcdfed;
	.footer_container {
		width: 1100px;
		margin-inline: auto;

		@media screen and (max-width: 1100px) {
			width: 100%;
			padding-inline: 2rem;
		}

		.grid {
			display: flex;
			justify-content: space-between;
			color: var(--footer-font-color);
			.logo {
				max-width: 400px;
				flex-shrink: 0;
				.tagline {
					font-size: 0.875rem;
				}
			}
			.links {
				display: flex;
				width: 100%;
				justify-content: space-between;
				margin-left: 150px;
			}
			@media screen and (max-width: 1100px) {
				display: flex;
				flex-wrap: wrap;
				gap: 2rem;
				.logo {
					width: 100%;
					margin-inline: auto;
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				.links {
					justify-content: space-around;
					margin-left: 0px;
				}
			}
			@media screen and (max-width: 600px) {
				.links {
					display: flex;
					flex-direction: column;
					gap: 1rem;
				}
			}
		}
		.footer_divider {
			width: 100%;
			height: 1px;
			margin-block: 2rem;
			background-color: var(--footer-title-color);
		}
		.footer_info {
			width: 100%;
			display: flex;
			justify-content: space-between;
			font-size: 0.875rem;
			color: var(--footer-font-color);
			@media screen and (max-width: 1100px) {
				flex-direction: column;
				justify-content: center;
				align-items: center;
				gap: 0.5rem;
			}
			.footer_legal {
				width: fit-content;
				& :global(div[slot="footer_legal"]) {
					display: flex;
					gap: 1rem;
					& :global(a) {
						color: var(--footer-font-color);
						text-decoration: none;
						&:hover {
							color: var(--accent);
						}
					}
				}
			}
		}
	}
}
</style>
