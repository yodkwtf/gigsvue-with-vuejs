<script setup>
import { defineProps, ref, computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  project: Object,
});

const showFullDescription = ref(false);

// Method to toggle the description
const toggleFullDescription = () => {
  showFullDescription.value = !showFullDescription.value;
};

// Computed property to truncate the description
const truncatedDescription = computed(() => {
  let description = props.project.description;

  if (description.length > 90 && !showFullDescription.value) {
    return `${description.slice(0, 90)}...`;
  }

  return description;
});
</script>

<template>
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-600 my-2">{{ project.type }}</div>
        <h3 class="text-xl font-bold">{{ project.title }}</h3>
      </div>

      <div class="mb-5">
        <div>
          {{ truncatedDescription }}
        </div>
        <button
          @click="toggleFullDescription"
          class="text-teal-500 :hover:text-teal-600 mb-4"
        >
          {{ showFullDescription ? 'Show Less' : 'Show More' }}
        </button>
      </div>

      <h3 class="text-teal-500 mb-2">{{ project.budget }}</h3>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-orange-700 mb-3">
          <i class="pi pi-map-marker text-orange-700"></i>
          {{ project.location }}
        </div>
        <RouterLink
          :to="`/projects/${project.id}`"
          class="h-[36px] bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </RouterLink>
      </div>
    </div>
  </div>
</template>
