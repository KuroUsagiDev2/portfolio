<script setup>
	import { Link, usePage } from "@inertiajs/vue3";
	import { computed } from "vue";

	const page = usePage();

	const props = defineProps({
		href: String,
		title: String,
	});

	const active = computed(() => {
		return props.href.endsWith(page.url);
	});
</script>
<template>
	<li>
		<Link
			:href="href"
			:class="[
				'flex items-center p-2 text-base font-medium rounded-lg group',
				active ? 'text-gray-800 bg-white bg-opacity-50 dark:text-gray-200 dark:bg-gray-700' : 'text-gray-900 dark:text-white',
				'hover:bg-gray-100 dark:hover:bg-gray-700',
			]">
			<slot></slot>

			<span class="ml-3">{{ title }}</span>
		</Link>
	</li>
</template>
