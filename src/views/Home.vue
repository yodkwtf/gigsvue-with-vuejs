<script setup>
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import ProjectListings from '@/components/ProjectListings.vue';
</script>

<template>
  <Hero />
  <HomeCards />
  <ProjectListings :limit="3" :showButton="true" />
</template>
