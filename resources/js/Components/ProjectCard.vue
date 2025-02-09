<script setup lang="ts">
	import { ref, computed } from "vue";

	interface Project {
		id: number;
		title: string;
		description: string;
		image: string;
		link: string | null;
		github: string | null;
		tech_stack: string;
		html: string;
		featured: boolean;
	}

	const props = defineProps<{
		project: Project;
	}>();

	const showBackdrop = ref(false);

	// Technology mapping with icons and border colors
	const technologies = [
		{ key: "Laravel", icon: "/icons/laravel.svg", alt: "Laravel", border: "border-red-600" },
		{ key: "VueJS", icon: "/icons/vue.svg", alt: "VueJS", border: "border-green-600" },
		{ key: "Tailwind CSS", icon: "/icons/tailwind.svg", alt: "Tailwind CSS", border: "border-blue-400" },
		{ key: "Flutter", icon: "/icons/flutter.svg", alt: "Flutter", border: "border-blue-500" },
		{ key: "MySQL", icon: "/icons/mysql.svg", alt: "MySQL", border: "border-yellow-600" },
		{ key: "Svelte", icon: "/icons/svelte.svg", alt: "Svelte", border: "border-orange-500" },
		{ key: "React", icon: "/icons/react.svg", alt: "React", border: "border-blue-600" },
		{ key: "Symfony", icon: "/icons/symfony.svg", alt: "Symfony", border: "border-gray-700" },
	];

	// Extract the tech stack into an array and match with the predefined list
	const techTags = computed(() => {
		return props.project.tech_stack.split(",").map((tech) => tech.trim());
	});
</script>

<template>
	<div class="max-w rounded overflow-hidden shadow-lg bg-gray-800 flex flex-col h-full">
		<img class="w-full h-48 object-cover cursor-pointer" :src="`/images/${project.image}`" :alt="project.title" @click="showBackdrop = true" />
		<!-- Backdrop -->
		<div v-if="showBackdrop" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" @click.self="showBackdrop = false">
			<!-- Close button -->
			<button class="absolute cursor-pointer top-5 right-5 text-white p-2" @click="showBackdrop = false">
				<svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
					<path d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
			<img class="max-w-full max-h-full" :src="`/images/${project.image}`" :alt="project.title" />
		</div>
		<div class="px-6 py-4 flex-grow">
			<div class="font-bold text-xl mb-2 text-white">
				{{ project.title }}
			</div>
			<p class="text-gray-300 text-sm" v-html="project.description"></p>
		</div>
		<div class="px-6 pt-4 pb-4 mt-auto flex flex-wrap gap-2">
			<!-- Dynamically generate tech stack tags with SVG icons -->
			<span
				v-for="tech in techTags"
				:key="tech"
				:class="[
					'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white border',
					technologies.find((t) => t.key === tech)?.border || 'border-gray-600',
				]">
				<img v-if="technologies.find((t) => t.key === tech)?.icon" :src="technologies.find((t) => t.key === tech)?.icon" :alt="tech" class="w-4 h-4 mr-1" />
				#{{ tech }}
			</span>
		</div>
	</div>
</template>
