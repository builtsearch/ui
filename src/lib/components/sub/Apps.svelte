<script>
import Icon from "@iconify/svelte";
import Popover from "./Popover.svelte";
import AppIcon from "../AppIcon.svelte";

export let icon = "material-symbols:apps";

const apps = [
	{ appName: "RC", glyph: "V" },
	{ appName: "Code", glyph: "C" },
	{ appName: "Materials", glyph: "M" },
	{ appName: "Guru", glyph: "G" },
	{ appName: "Real", glyph: "R" },
];
</script>

<Popover position="bottom-right">
	<span slot="button">
		<button class="none">
			<Icon {icon} width="24" />
		</button>
	</span>

	<span slot="popup">
		<div class="popup">
			{#each apps as app}
				<a href="/" class="href">
					<div class="icon">
						<AppIcon glyph={app.glyph} />
					</div>
					<span>{app.appName}</span>
				</a>
			{/each}
		</div>
	</span>
</Popover>

<style lang="scss">
button {
	outline: none;
	border: none;
	padding: 0;
	height: 36px;
	width: 36px;
	aspect-ratio: 1;
	border-radius: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.popup {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	border: 1px solid var(--mono-200);
	border-radius: 1rem;
	padding-inline: 1rem;
	padding-block: 1rem;
	row-gap: 1rem;
	column-gap: 1rem;
	--bx-shadow: color-mix(in srgb, var(--accent-900) 12%, transparent);
	box-shadow: 0 2px 8px 0 var(--bx-shadow);
	position: relative;
	background-color: var(--bg-p);
	// &:after {
	// 	position: absolute;
	// 	width: calc(100% - 1rem);
	// 	height: calc(100% - 1rem);
	// 	left: 0.5rem;
	// 	top: 0.5rem;
	// 	content: "";
	// 	border-radius: 0.5rem;
	// 	z-index: 1;
	// }
	a {
		z-index: 2;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		color: var(--mono-800);
		font-size: 0.875rem;
		padding: 0.5rem;
		height: 80px;
		aspect-ratio: 1;
		border-radius: 1rem;
		transition: border-radius 0.2s;
		// background-color: color-mix(in srgb, var(--accent-400) 12%, transparent);

		&:hover {
			background-color: color-mix(in srgb, var(--accent-400) 12%, transparent);
		}
	}
}
</style>
