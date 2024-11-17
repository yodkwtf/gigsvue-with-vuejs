<script setup>
import { RouterLink } from 'vue-router';
import { navLinks } from '@/config/constants';
import NavLink from './NavLink.vue';
</script>

<template>
  <nav class="bg-teal-700 border-b border-teal-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <span class="hidden md:block text-white text-2xl font-bold ml-2">
              GigsVue
            </span>
          </RouterLink>

          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <NavLink
                v-for="navLink in navLinks"
                :key="navLink.path"
                :navLink="navLink"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
