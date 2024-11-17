<script setup>
import { RouterLink } from 'vue-router';
import Card from './Card.vue';
</script>

<template>
  <section class="py-4 my-4">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card>
          <h2 class="text-2xl font-bold">For Freelancers</h2>
          <p class="mt-2 mb-4">
            Find the best freelance projects and work with top clients
          </p>
          <RouterLink
            to="/projects"
            class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
          >
            Browse Projects
          </RouterLink>
        </Card>
        <Card bg="bg-teal-100">
          <h2 class="text-2xl font-bold">For Clients</h2>
          <p class="mt-2 mb-4">
            Find the best freelancers and hire the right talent for your
            projects
          </p>
          <RouterLink
            to="/projects/add"
            class="inline-block bg-teal-500 text-white rounded-lg px-4 py-2 hover:bg-teal-600"
          >
            Add Project
          </RouterLink>
        </Card>
      </div>
    </div>
  </section>
</template>
