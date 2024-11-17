<script setup>
import { defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    default: 'Pick the work you love',
  },
  subtitle: {
    type: String,
    default: 'Find the best freelance projects and work with top clients.',
  },
});
</script>

<template>
  <section class="bg-teal-700 py-20">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
    >
      <div class="text-center">
        <h1 class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
          {{ title }}
        </h1>
        <p class="my-4 text-xl text-white">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>
