<script setup>
// Props for dynamic content
defineProps({
  icon: String,  // Path to the icon image
  alt: String,   // Alt text for the image
  label: String  // Text label under the icon
});
</script>

<template>
  <div class="flex-shrink-0 bg-gray-800 p-4 rounded-lg">
    <img :src="icon" :alt="alt" class="w-12 h-12 mx-auto mb-2">
    <span class="text-gray-300 text-center block">{{ label }}</span>
  </div>
</template>
