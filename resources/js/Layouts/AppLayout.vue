<script setup lang="ts">
	import { ref } from "vue";

	import Navigation from "./AppLayout/Navigation.vue";
	import DarkModeToggle from "@/Components/DarkModeToggle.vue";

</script>
<style>
	@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap");

	body {
		font-family: "Nunito", sans-serif;
	}
</style>

<template>
	<!-- Root container toggling dark mode via :class -->
	<div class="antialiased bg-gray-50 dark:bg-gray-900">
		<!--DarkModeToggle></!--DarkModeToggle-->

		<!-- Sidebar -->

		<aside
			class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
			aria-label="Sidenav"
			id="drawer-navigation">
			<Navigation></Navigation>
		</aside>

		<main class="p-4 md:ml-64 min-h-screen">
			<slot></slot>
		</main>
	</div>
</template>
