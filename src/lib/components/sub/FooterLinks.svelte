<script>
export let title;
export let links;

function onLinkClick(e, link) {
	if (link.disabled) {
		e.preventDefault();
	}
}
</script>

<div class="title">{title}</div>
<div class="list">
	<slot />
	{#each links as link}
		<a
			on:click={(e) => {
				onLinkClick(e, link);
			}}
			title={link.text}
			href={link.url}
			disabled={link.disabled}
			tabindex={link.disabled ? -1 : 0}>
			{link.text}
		</a>
	{/each}
</div>

<style lang="scss">
a {
	text-decoration: none;
	color: inherit;
	&:hover {
		color: var(--accent);
	}
	&[disabled] {
		color: color-mix(in srgb, var(--footer-font-color) 50%, transparent);
		cursor: default;
	}
}
.title {
	color: var(--footer-title-color);
	font-size: 1.25rem;
	font-weight: 600;
	@media screen and (max-width: 600px) {
		text-align: center;
	}
}
.list {
	display: flex;
	flex-direction: column;
	margin-top: 0.5rem;
	gap: 0.5rem;
	@media screen and (max-width: 600px) {
		align-items: center;
	}
}
</style>
