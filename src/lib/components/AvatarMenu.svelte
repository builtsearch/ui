<script>
import Avatar from "./Avatar.svelte";
import Popover from "./sub/Popover.svelte";

export let src = null;
</script>

<Popover>
	<span style="display:flex" slot="button">
		<button class="none no-hover avatar">
			<Avatar {src} />
		</button>
	</span>

	<span slot="popup" class="avatar-menu">
		<slot />
	</span>
</Popover>

<style lang="scss">
button.avatar {
	border-radius: 50%;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: transparent;
}
.avatar-menu {
	display: flex;
	flex-direction: column;
	border: 1px solid var(--mono-100);
	border-radius: 0.5rem;
	background-color: var(--bg-p);
	padding: 0rem;
	align-items: flex-start;
	overflow: hidden;
	margin-top: 0.25rem;
}
:global(.avatar-menu button, .avatar-menu a) {
	text-wrap: nowrap;
	font-size: 0.875rem;
	background-color: transparent;
	padding-block: 0.5rem;
	padding-inline: 0.75rem 1rem;
	min-width: 140px;
	border-radius: 0;
	width: 100%;
	font-size: 0.875rem;
	text-align: left;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	color: var(--color, var(--mono-700));
}
:global(.avatar-menu button:hover, .avatar-menu a:hover) {
	background-color: var(--bg-s);
}
</style>
