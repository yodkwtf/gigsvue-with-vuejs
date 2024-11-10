<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { defineProps } from 'vue';

const isActiveLink = (navigatedRoute) => {
  const currentRoute = useRoute();
  return currentRoute.path === navigatedRoute;
};

defineProps({
  navLink: Object,
});
</script>

<template>
  <RouterLink
    :to="navLink.path"
    :class="[
      isActiveLink(navLink.path) ? 'bg-blue-900' : 'hover:bg-gray-900',
      'text-white rounded-md px-3 py-2',
    ]"
  >
    {{ navLink.name }}
  </RouterLink>
</template>
