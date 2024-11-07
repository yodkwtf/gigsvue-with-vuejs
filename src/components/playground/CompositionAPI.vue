<script setup>
import { ref } from 'vue';

const isUserLoggedIn = ref(true);
const status = ref('active');
const username = ref('John Doe');
const games = ref([
  { id: 1, name: 'Baja 100' },
  { id: 2, name: 'GTA V' },
  { id: 3, name: 'Sega Classic' },
]);
const game = ref('');

const handleStatus = () => {
  if (status.value === 'active') {
    status.value = 'away';
  } else if (status.value === 'away') {
    status.value = 'offline';
  } else {
    status.value = 'active';
  }
};

const addGame = () => {
  if (game.value) {
    games.value.push({ id: games.value.length + 1, name: game.value });
    game.value = '';
  }
};

const deleteTask = (id) => {
  games.value = games.value.filter((game) => game.id !== id);
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

    <!-- @submit -> form submit event where prevent is e.preventDefault -->
    <form @submit.prevent="addGame">
      <!-- v-model -> two-way data binding -->
      <input
        v-model="game"
        id="game"
        name="game"
        placeholder="Enter new game"
      />
      &nbsp;
      <!-- @ -> shorthand for v-on -->
      <button type="submit">Add</button>
    </form>

    <!-- v-for -> loop through games -->
    <h4>Games:</h4>
    <ul>
      <li v-for="game in games" :key="game.id">
        <span>{{ game.name }}</span>
        &nbsp;
        <button @click="deleteTask(game.id)">x</button>
      </li>
    </ul>

    <!-- v-on -> event listener -->
    <button v-on:click="handleStatus">Change Status</button>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: #111;
  padding: 2rem;
}

button[type='submit'] {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

button[type='submit']:hover {
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
