<script setup>
import { reactive, onMounted } from 'vue';
import { useRoute, RouterLink, useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import axios from 'axios';
import BackButton from '@/components/BackButton.vue';
import { API_URL } from '@/config/constants';

const route = useRoute();
const router = useRouter();
const toast = useToast();

const projectId = route.params.id; // the param name in projects.json is 'id'

const state = reactive({
  project: {},
  isLoading: true,
});

const deleteProject = async () => {
  try {
    const isConfirmed = confirm(
      'Are you sure you want to delete this project?'
    );
    if (!isConfirmed) return;

    await axios.delete(`${API_URL}/${projectId}`);
    toast.success('Project deleted successfully');
    router.push('/projects');
  } catch (error) {
    console.error(`Error deleting project by projectId ${projectId}: ${error}`);
    toast.error('Error deleting project');
  }
};

onMounted(async () => {
  try {
    const response = await axios.get(`${API_URL}/${projectId}`);
    state.project = response.data;
  } catch (error) {
    console.error(`Error fetching project by projectId ${projectId}: ${error}`);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <BackButton />

  <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
    <PulseLoader color="teal" />
  </div>

  <section v-else class="bg-teal-50">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <main>
          <div
            class="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
          >
            <div class="text-gray-500 mb-4">{{ state.project.type }}</div>
            <h1 class="text-3xl font-bold mb-4">{{ state.project.title }}</h1>
            <div
              class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
            >
              <i class="pi pi-map-marker text-lg text-orange-700 mr-2"></i>
              <p class="text-orange-700">{{ state.project.location }}</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-teal-800 text-lg font-bold mb-6">
              Project Description
            </h3>

            <p class="mb-4">
              {{ state.project.description }}
            </p>

            <h3 class="text-teal-800 text-lg font-bold mb-2">Budget</h3>

            <p class="mb-4">{{ state.project.budget }} / Year</p>
          </div>
        </main>

        <!-- Sidebar -->
        <aside>
          <!-- Client Info -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-6">Client Info</h3>

            <h2 class="text-2xl">{{ state.project.client.name }}</h2>

            <p class="my-2">
              {{ state.project.client.description }}
            </p>

            <hr class="my-4" />

            <h3 class="text-xl">Contact Email:</h3>

            <p class="my-2 bg-teal-100 p-2 font-bold">
              {{ state.project.client.contactEmail }}
            </p>

            <h3 class="text-xl">Contact Phone:</h3>

            <p class="my-2 bg-teal-100 p-2 font-bold">{{
              state.project.client.contactPhone
            }}</p>
          </div>

          <!-- Manage -->
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-xl font-bold mb-6">Manage Project</h3>
            <RouterLink
              :to="`/projects/edit/${state.project.id}`"
              class="bg-teal-500 hover:bg-teal-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >Edit Project</RouterLink
            >
            <button
              @click="deleteProject"
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
            >
              Delete Project
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
