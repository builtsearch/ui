<main>
	<h1>BuiltSearch UI Library</h1>
	<div class="card">
		<h3>Buttons</h3>
		<div class="row">
			<button class="">Primary</button>
			<button class="outline">Outline</button>
			<button class="disabled">Disabled</button>
			<button class="none">None</button>
			<button class="small">smaller button</button>
		</div>
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
</main>

<style lang="scss">
main {
	display: flex;
	flex-direction: column;
	padding: 1rem;
	width: min(700px, 100%);
	margin-inline: auto;
	min-height: calc(100vh - 70px);
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
