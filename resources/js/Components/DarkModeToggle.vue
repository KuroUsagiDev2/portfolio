<script setup>
import { ref, onMounted } from 'vue';

// Reactive variable for dark mode state
const isDark = ref(localStorage.getItem('theme') === 'dark');

// Toggle function
const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  
  if (isDark.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }

  console.log("Dark Mode:", isDark.value);
};


// Apply stored theme preference on page load
onMounted(() => {
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
    isDark.value = true;
  }
});
</script>

<template>
  <!-- Flowbite Button -->
  <button
    @click="toggleDarkMode"
    class="absolute top-4 right-4 flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600"
  >
    <!-- Moon Icon for Dark Mode -->
    <svg
      v-if="!isDark"
      class="w-5 h-5 text-gray-800 dark:text-gray-200"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.58 9.58z"
      ></path>
    </svg>

    <!-- Sun Icon for Light Mode -->
    <svg
      v-else
      class="w-5 h-5 text-gray-800 dark:text-gray-200"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 3v1m0 16v1m8-8h1m-16 0H3m15.364 6.364l-.707-.707m-12.02 0l-.707.707M16.95 7.05l-.707.707m-8.486 0l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z"
      ></path>
    </svg>
  </button>
</template>
