<script setup>
import { ref } from 'vue';

const isUserLoggedIn = ref(true);
const status = ref('active');
const username = ref('John Doe');
const items = ref([
  { id: 1, name: 'Game 1' },
  { id: 2, name: 'Game 2' },
  { id: 3, name: 'Game 3' },
]);
const message = ref('');

const handleStatus = () => {
  if (status.value === 'active') {
    status.value = 'away';
  } else if (status.value === 'away') {
    status.value = 'offline';
  } else {
    status.value = 'active';
  }
};
</script>

<template>
  <section>
    <h1>CompositionAPI Example</h1>

    <!-- v-show -> show/hide element based on condition -->
    <div v-show="isUserLoggedIn">Welcome, {{ username }}</div>

    <!-- v-if -> conditionally render element -->
    <p v-if="status === 'active'">User is active</p>
    <p v-else-if="status === 'away'">User is away</p>
    <p v-else>User is offline</p>

    <!-- v-for -> loop through items -->
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>

    <!-- v-model -> two-way data binding -->
    <input v-model="message" placeholder="Enter your message" />
    <small>{{ message }}</small>

    <!-- v-on -> event listener -->
    <button v-on:click="handleStatus">Change Status</button>
    <!-- @ -> shorthand for v-on -->
    <button @click="handleStatus">Change Status</button>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: #222;
  padding: 2rem;
}

button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

input {
  padding: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

small {
  color: #6c757d;
}
</style>
