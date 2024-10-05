<script>
import "$lib/style/main.scss";
import Header from "$lib/components/Header.svelte";
import Theme from "$lib/components/sub/Theme.svelte";
import Footer from "$lib/components/Footer.svelte";
import FooterLinks from "$lib/components/sub/FooterLinks.svelte";
// import PageProgressBar from "$lib/components/PageProgressBar.svelte";
import { PageProgressBar } from "$lib/index.js";
import Apps from "$lib/components/sub/Apps.svelte";
import AvatarMenu from "$lib/components/AvatarMenu.svelte";
</script>

<PageProgressBar />
<Header --transparency="50%" responsive icon={false}>
	<div class="menu">
		<Apps />
		<Theme />
		<AvatarMenu src="A">
			<button>
				<span>Sign In</span>
			</button>
			<a href="/">
				<span>Dashsboard</span>
			</a>
			<button>
				<span>Sign Out</span>
			</button>
		</AvatarMenu>
	</div>
</Header>
<slot />

<Footer>
	<span slot="tagline">Resource Centre for the Built Environment</span>
	<div slot="column1">
		<FooterLinks
			title="About"
			links={[
				{ text: "About Us", url: "/about" },
				{ text: "Our Team", url: "/team" },
				{ text: "Careers", url: "/careers" },
				{ text: "Partners", url: "/partners" },
				{ text: "Contact Us", url: "/contact", disabled: true },
			]} />
	</div>
	<div slot="column2">
		<FooterLinks
			title="Resources"
			links={[
				{ text: "Blog", url: "/blog" },
				{ text: "Case Studies", url: "/case-studies" },
				{ text: "Publications", url: "/publications" },
				{ text: "News", url: "/news", disabled: true },
			]} />
	</div>
	<div slot="column3">
		<FooterLinks
			title="Connect"
			links={[
				{ text: "Twitter", url: "https://twitter.com" },
				{ text: "LinkedIn", url: "https://linkedin.com" },
				{ text: "Facebook", url: "https://facebook.com" },
				{ text: "Instagram", url: "https://instagram.com", disabled: true },
				{ text: "YouTube", url: "https://youtube.com" },
			]} />
	</div>
	<div slot="footer_description">A product of BuiltSearch</div>
	<div slot="footer_legal">
		<a href="/privacy">Privacy Policy</a>
		<a href="/terms">Terms of Service</a>
		<a href="/sitemap">Sitemap</a>
	</div>
</Footer>

<style lang="scss">
.menu {
	margin-left: auto;
	display: flex;
	gap: 0.25rem;
	align-items: center;
}
</style>
