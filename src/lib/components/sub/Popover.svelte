<script>
import { onDestroy, tick } from "svelte";

export let position = "auto";
export let autoClose = true;
import { browser } from "$app/environment";
let showPopup, button, popup;
let scrollPosition;
$: showPopup, onShowPopup();

async function onShowPopup() {
	if (!showPopup) {
		enableScroll();
		return;
	}
	await tick();
	preventScroll();

	if (popup) {
		const windowHeight = window.innerHeight;
		const windowWidth = window.innerWidth;

		const {
			top: button_top,
			left: button_left,
			right: button_right,
			width: button_width,
			height: button_height,
		} = button.getBoundingClientRect();
		let popup_dim = popup.getBoundingClientRect();

		if (position == "auto") {
			popup.style.top = button_top + button_height + "px";
			popup.style.left = button_left - popup_dim.width / 2 + button_width / 2 + "px";

			popup_dim = popup.getBoundingClientRect();

			if (popup_dim.left + popup_dim.width > windowWidth - 32) {
				popup.style.left = button_right - popup_dim.width + "px";
			}
			if (popup_dim.left < 0) {
				popup.style.left = button_left + "px";
			}
			if (popup_dim.bottom > windowHeight) {
				popup.style.top = button_top - popup_dim.height + "px";
			}
		}

		if (position == "bottom-right") {
			popup.style.top = button_top + button_height + "px";
			popup.style.left = button_right - popup_dim.width + "px";
		}

		if (position == "bottom-left") {
			popup.style.top = button_top + button_height + "px";
			popup.style.left = button_left + "px";
		}

		if (position == "bottom-center") {
			popup.style.top = button_top + button_height + "px";
			popup.style.left = button_left - popup_dim.width / 2 + button_width / 2 + "px";
		}

		if (position == "top-right") {
			popup.style.top = button_top - popup_dim.height + "px";
			popup.style.left = button_right - popup_dim.width + "px";
		}

		if (position == "top-left") {
			popup.style.top = button_top - popup_dim.height + "px";
			popup.style.left = button_left + "px";
		}

		if (position == "top-center") {
			popup.style.top = button_top - popup_dim.height + "px";
			popup.style.left = button_left - popup_dim.width / 2 + button_width / 2 + "px";
		}
	}

	if (autoClose) {
		popup.querySelectorAll("a, button").forEach((el) => {
			el.addEventListener(
				"click",
				(e) => {
					showPopup = false;
				},
				{ once: true }
			);
		});
	}
}

function closePopover() {
	showPopup = false;
	enableScroll();
}

onDestroy(() => {
	enableScroll();
});

function preventScroll() {
	if (!browser) return;
	document.body.style.overflow = "hidden";
	document.documentElement.classList.add("scrollbar-gutter");
}

function enableScroll() {
	if (!browser) return;
	document.body.style.overflow = "auto";
	document.documentElement.classList.remove("scrollbar-gutter");
}
</script>

{#if showPopup}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="background"
		on:click={() => {
			showPopup = false;
		}}>
	</div>
{/if}

<div class="popover">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		bind:this={button}
		class="button"
		on:click={() => {
			showPopup = true;
		}}>
		<slot name="button" />
	</div>
	{#if showPopup}
		<div
			bind:this={popup}
			class="popup"
			class:auto={position == "auto"}
			class:anchor={position != "auto"}
			class:bottom-left={position == "bottom-left"}
			class:bottom-right={position == "bottom-right"}
			class:bottom-center={position == "bottom-center"}
			class:top-left={position == "top-left"}
			class:top-right={position == "top-right"}
			class:top-center={position == "top-center"}>
			<slot name="popup" {closePopover} />
		</div>
	{/if}
</div>

<style lang="scss">
.background {
	background-color: transparent;
	width: min(100%, 100vw);
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
}
.button {
	padding: 0 !important;
}
.popover {
	width: fit-content;
}
.popup {
	z-index: 1001;
	position: fixed;
	width: fit-content;
	left: 0;
	top: 0;
	padding: 0 !important;
}
</style>
