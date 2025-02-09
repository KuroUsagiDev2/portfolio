<script setup lang="ts">
	import TechCard from "@/Components/TechCard.vue";

	const technologies = [
		{ icon: "/icons/laravel.svg", alt: "Laravel", label: "Laravel" },
		{ icon: "/icons/vue.svg", alt: "VueJS", label: "VueJS" },
		{ icon: "/icons/tailwind.svg", alt: "Tailwind CSS", label: "Tailwind CSS" },
		{ icon: "/icons/flutter.svg", alt: "Flutter", label: "Flutter" },
		{ icon: "/icons/mysql.svg", alt: "MySQL", label: "MySQL" },
		{ icon: "/icons/svelte.svg", alt: "Svelte", label: "Svelte" },
		{ icon: "/icons/react.svg", alt: "React", label: "React" },
		{ icon: "/icons/symfony.svg", alt: "Symfony", label: "Symfony" },
	];
</script>
<template>
	<div class="flex space-x-4 overflow-x-auto scrollbar-custom p-2">
		<TechCard v-for="tech in technologies" :key="tech.label" :icon="tech.icon" :alt="tech.alt" :label="tech.label" />
	</div>
</template>
