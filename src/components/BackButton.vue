<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <section>
    <div class="container m-auto py-4 px-6">
      <RouterLink
        to="/projects"
        class="text-teal-500 hover:text-teal-600 flex items-center"
      >
        <i class="pi pi-arrow-circle-left mr-3"></i>Back to Projects
      </RouterLink>
    </div>
  </section>
</template>
