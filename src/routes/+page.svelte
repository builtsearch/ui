<script>
import AppIcon from "$lib/components/AppIcon.svelte";
import AsyncButton from "$lib/components/AsyncButton.svelte";
import Avatar from "$lib/components/Avatar.svelte";
import SegmentedControl from "$lib/components/SegmentedControl.svelte";
import Select from "$lib/components/Select.svelte";
import Switch from "$lib/components/Switch.svelte";

async function awaitClick() {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return "ok";
}

let segmentedControlOptions = [
	{ icon: "ic:round-square", value: "1", displayValue: "Option 1" },
	{ icon: "ic:round-circle", value: "2", displayValue: "Option 2" },
	{ icon: "ph:triangle-fill", value: "3" },
];
</script>

<main>
	<h1>BuiltSearch UI Library</h1>
	<div class="card">
		<h3>Component</h3>
		<div class="row">
			<AppIcon glyph="C" --height="48px" />
		</div>

		<Avatar --height="128px" src="A" />
	</div>
	<div class="card">
		<div class="row">
			<AsyncButton on:click={awaitClick}>Async Button</AsyncButton>
			<AsyncButton buttonStyle="warning" on:click={awaitClick}>Async Button</AsyncButton>
		</div>
		<SegmentedControl
			evenWidth={true}
			options={segmentedControlOptions}
			on:change={(e) => console.log(e.detail)} />
	</div>
	<div class="card">
		<label for="select">Select</label>
		<Select id="select" items={["a", "b", "c", "d"]} />
		<Select items={["a", "b", "c", "d"]} />

		<Switch />
	</div>
	<div class="card">
		<h3>Buttons</h3>
		<div class="row">
			<button class="">Primary</button>
			<button class="outline">Outline</button>
			<button class="disabled">Disabled</button>
			<button class="warning">Warning</button>
			<button class="warning outlined">Warning Outlined</button>
			<button class="none">None</button>
			<button class="small">smaller button</button>
		</div>

		<div class="card">
			<h3>Links</h3>
			<div class="row">
				<a href="/">go to link</a>
				<a class="button" href="/">Button link</a>
			</div>
		</div>

		<div class="card">
			<h3>Inputs</h3>
			<div class="col inputs">
				<input type="text" value="input" />
				<input type="email" for="email" id="email" placeholder="Auto Complete" />

				<input class="error" type="email" placeholder="Error Email" />

				<input type="text" value="disabled" disabled />
				<div class="inputBox">
					<div class="prefix">$</div>
					<input type="text" value="With Prefix" />
				</div>
				<div class="inputBox">
					<input type="text" value="With Button" />
					<button>OK</button>
				</div>
				<div class="inputBox disabled">
					<input disabled type="text" value="With Button" />
					<button class="disabled">OK</button>
				</div>
			</div>
		</div>
		<div class="card">
			<h3>TextArea</h3>

			<textarea>textarea</textarea>
			<textarea disabled>disabled</textarea>
			<textarea class="error">error</textarea>
		</div>
	</div>
</main>

<style lang="scss">
main {
	display: flex;
	flex-direction: column;
	padding: 1rem;
	width: min(700px, 100%);
	margin-inline: auto;
	min-height: calc(100vh - 60px);
	gap: 1rem;
}
h3 {
	margin: 0;
}
.card {
	// background-color: var(--bg-s);
	border: 1px solid var(--mono-100);
	border-radius: 0.5rem;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	.row {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		flex-wrap: wrap;
	}
	.col {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		&.inputs {
			width: 400px;
		}
	}
}
</style>
