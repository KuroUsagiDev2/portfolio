<script setup lang="ts">
import { Head } from "@inertiajs/vue3";
import { computed } from "vue";

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
  projects: Array as () => Project[]
});

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
</script>

<template>
  <Head title="Projects" />

  <section class="bg-gray-900 text-white py-24">
    <div class="px-6 max-w-screen-lg mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-center text-gray-100">
        Projects
      </h1>
      
      <div class="space-y-12">
        <!-- Project Block -->
        <div v-for="(project, index) in projects" :key="project.id" class="flex flex-col md:flex-row items-center md:items-start bg-gray-800 p-6 rounded-lg shadow-lg">
          <img :src="`/images/${project.image}`" :alt="project.title" class="w-full md:w-1/2 h-64 object-cover rounded-lg mb-4 md:mb-0" :class="index % 2 === 0 ? 'md:order-1' : 'md:order-2'" />
          <div class="md:w-1/2 px-6">
            <h2 class="text-2xl font-semibold text-gray-100">{{ project.title }}</h2>
            <p class="mt-4 text-gray-300" v-html="project.description"></p>
            <div class="flex flex-wrap gap-2 mt-4">
              <div v-for="tech in project.tech_stack.split(',')" :key="tech" class="px-3 py-1 border rounded-md text-sm flex items-center" :class="technologies.find(t => t.key === tech.trim())?.border || 'border-gray-500'">
                <img v-if="technologies.find(t => t.key === tech.trim())" :src="technologies.find(t => t.key === tech.trim())?.icon" :alt="tech" class="w-4 h-4 inline mr-1"> {{ tech.trim() }}
              </div>
            </div>
            <div class="mt-4 flex space-x-4">
              <a v-if="project.link" :href="project.link" class="text-blue-400 hover:underline" target="_blank">Live Project</a>
              <a v-if="project.github" :href="project.github" class="text-blue-400 hover:underline" target="_blank">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>