<script setup>
// TODO: change logo
import logo from '@/assets/logo.png';
</script>

<template>
  <nav class="bg-blue-700 border-b border-blue-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <!-- Logo -->
          <a class="flex flex-shrink-0 items-center mr-4" href="index.html">
            <img class="h-10 w-auto" v-bind:src="logo" alt="JobVue" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2">
              JobVue
            </span>
          </a>
          <div class="md:ml-auto">
            <!-- TODO: make this as a configurable list -->
            <div class="flex space-x-2">
              <a
                href="/"
                class="text-white bg-blue-900 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >Home</a
              >
              <a
                href="/jobs"
                class="text-white hover:bg-blue-900 hover:text-white rounded-md px-3 py-2"
                >Jobs</a
              >
              <a
                href="/jobs/add"
                class="text-white hover:bg-blue-900 hover:text-white rounded-md px-3 py-2"
                >Add Job</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
