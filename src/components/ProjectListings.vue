<script setup>
import ProjectListing from './ProjectListing.vue';
import { ref, reactive, defineProps, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import axios from 'axios';
import { API_URL } from '@/config/constants';

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({
  projects: [],
  isLoading: true,
});

onMounted(async () => {
  try {
    const response = await axios.get(API_URL);
    state.projects = response.data;
  } catch (error) {
    console.error(`Error fetching projects: ${error}`);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-teal-500 mb-6 text-center">
        Browse Projects
      </h2>

      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader color="teal" />
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProjectListing
          v-for="project in state.projects.slice(0, limit) ||
          state.projects.length"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>

  <section v-if="showButton" class="bg-green-50">
    <div v-if="showButton" class="m-auto max-w-lg py-10 px-6">
      <RouterLink
        to="/projects"
        class="block bg-teal-500 text-white text-center py-4 px-6 rounded-xl hover:bg-teal-600 transition duration-200"
      >
        View All Projects
      </RouterLink>
    </div>
  </section>
</template>
