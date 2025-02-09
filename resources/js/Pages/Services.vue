<script setup lang="ts">
import { Head } from "@inertiajs/vue3";

const services = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description: "Building scalable and high-performance web applications using modern technologies like Laravel, VueJS, and Tailwind CSS.",
    icon: "/icons/web-development.svg"
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Creating cross-platform mobile applications with Flutter for a seamless user experience on iOS and Android.",
    icon: "/icons/mobile-development.svg"
  },
  {
    id: 3,
    title: "API Development & Integrations",
    description: "Designing and implementing secure and efficient APIs for seamless communication between systems.",
    icon: "/icons/api.svg"
  },
  {
    id: 4,
    title: "Database Design & Optimization",
    description: "Ensuring efficient data storage and retrieval with optimized database structures for MySQL and SQL Server.",
    icon: "/icons/database.svg"
  },
  {
    id: 5,
    title: "UI/UX Design",
    description: "Creating visually appealing and user-friendly interfaces that enhance user experience and engagement.",
    icon: "/icons/ui-ux.svg"
  },
  {
    id: 6,
    title: "DevOps & Cloud Deployment",
    description: "Deploying applications on cloud platforms like AWS, implementing CI/CD pipelines, and managing scalable infrastructure.",
    icon: "/icons/devops.svg"
  }
];
</script>

<template>
  <Head title="Services" />

  <section class="bg-gray-900 text-white py-24">
    <div class="px-6 max-w-screen-lg mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-center text-gray-100">
        Services
      </h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Service Block -->
        <div v-for="service in services" :key="service.id" class="flex items-center bg-gray-800 p-6 rounded-lg shadow-lg">
          <img :src="service.icon" :alt="service.title" class="w-16 h-16 mr-6" />
          <div>
            <h2 class="text-2xl font-semibold text-gray-100">{{ service.title }}</h2>
            <p class="mt-2 text-gray-300">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>