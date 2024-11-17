<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>

<template>
  <footer class="bg-teal-600 text-white py-4">
    <div class="container mx-auto px-4 text-center">
      <p>&copy; {{ currentYear }} GigsVue. All rights reserved.</p>
    </div>
  </footer>
</template>
