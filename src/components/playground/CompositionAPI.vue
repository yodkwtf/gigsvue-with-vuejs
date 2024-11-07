<script setup>
import { ref, onMounted } from 'vue';

const isUserLoggedIn = ref(true);
const status = ref('active');
const username = ref('John Doe');
const tasks = ref([
  { id: 1, name: 'Baja 100' },
  { id: 2, name: 'GTA V' },
  { id: 3, name: 'Sega Classic' },
]);
const task = ref('');

const handleStatus = () => {
  if (status.value === 'active') {
    status.value = 'away';
  } else if (status.value === 'away') {
    status.value = 'offline';
  } else {
    status.value = 'active';
  }
};

const addTask = () => {
  if (task.value) {
    tasks.value.push({ id: tasks.value.length + 1, name: task.value });
    task.value = '';
  }
};

const deleteTask = (id) => {
  tasks.value = tasks.value.filter((task) => task.id !== id);
};

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    tasks.value = data
      .reverse()
      .slice(0, 7)
      .map((item) => ({ id: item.id, name: item.title }));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
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
    <form @submit.prevent="addTask">
      <!-- v-model -> two-way data binding -->
      <input
        v-model="task"
        id="task"
        name="task"
        placeholder="Enter new task"
      />
      &nbsp;
      <!-- @ -> shorthand for v-on -->
      <button type="submit">Add</button>
    </form>

    <!-- v-for -> loop through tasks -->
    <h4>Tasks:</h4>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <span>{{ task.name }}</span>
        &nbsp;
        <button @click="deleteTask(task.id)">x</button>
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
