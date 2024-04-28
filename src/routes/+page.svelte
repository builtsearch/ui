<main>
	<h1>Welcome to your library project</h1>
	<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
	<div class="bg">
		<button class="">hello</button>
		<button class="secondary">hello</button>
		<input type="text" value="123" />
	</div>
	<a href="/page1">Goto Page 1</a>
	<div>
		<button class="">primary</button>
		<button class="secondary">secondary</button>
	</div>

	<div class="inputBox">
		<div class="prefix">hello</div>
		<input type="text" value="123" />
	</div>

	<input type="text" value="123" />
</main>

<style lang="scss">
main {
	display: flex;
	flex-direction: column;
	padding: 1rem;
	min-height: calc(100vh - 70px);
	gap: 1rem;
}
div.bg {
	background-color: var(--bg-alt);
	padding: 2rem;
}
</style>
