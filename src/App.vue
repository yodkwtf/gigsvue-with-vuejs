<script setup>
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import HomeCard from '@/components/HomeCard.vue';
</script>

<template>
  <Navbar />
  <!-- TODO: Change props for branding -->
  <Hero title="Test Title" subtitle="Test Subtitle" />
  <HomeCard />
</template>
