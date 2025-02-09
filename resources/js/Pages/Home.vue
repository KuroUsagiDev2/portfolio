<script setup lang="ts">
	import { Head, Link } from "@inertiajs/vue3";
	import TechCard from "@/Components/TechCard.vue";
	import ProjectCard from "@/Components/ProjectCard.vue";

	type Project = {
		id: number;
		title: string;
		description: string;
		image: string;
		link: string;
		github: string;
		tech_stack: string;
		html: string;
		featured: boolean;
	};

	defineProps({
		projects: Array as () => Project[],
	});

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
	<Head title="Start" />

	<section>
		<div class="px-4 max-w-screen-md mx-auto text-justify py-24">
			<h1 class="mb-4 font-light text-3xl tracking-tight leading-none text-white md:text-3xl lg:text-5xl">
				I'm Jorge, <span class="font-extrabold">a Full Stack Developer.</span>
			</h1>
			<p class="mb-8 text-lg font-normal text-gray-300">
				Experienced full-stack develop	er (9+ years) specializing in <b class="font-extrabold"> Laravel, Vue</b>, and Flutter. I design and build scalable, high-performance web and mobile
				applications, optimize system efficiency, and develop robust APIs to streamline data management. Passionate about problem-solving and delivering practical,
				business-driven solutions.
			</p>
			<div class="mt-8">
				<h2 class="text-xl font-semibold text-white mb-4">Technologies I Use</h2>
				<div class="flex space-x-4 overflow-x-auto scrollbar-custom p-2">
					<TechCard v-for="tech in technologies" :key="tech.label" :icon="tech.icon" :alt="tech.alt" :label="tech.label" />
				</div>
			</div>
			<div class="mt-8">
				<h2 class="text-xl font-semibold text-white mb-4">Highlights</h2>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
					<ProjectCard v-for="project in projects" :key="project.id" :project />
					<div class="flex flex-col space-y-4 sm:justify-center sm:space-y-0">
						<Link
							href="/projects"
							class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
							View more
						</Link>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
