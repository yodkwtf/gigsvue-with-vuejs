<script>
export default {
  data() {
    return {
      isUserLoggedIn: true,
      status: 'active',
      username: 'John Doe',
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
      ],
      message: '',
    };
  },

  methods: {
    handleStatus() {
      if (this.status === 'active') {
        this.status = 'away';
      } else if (this.status === 'away') {
        this.status = 'offline';
      } else {
        this.status = 'active';
      }
    },
  },
};
</script>

<template>
  <main>
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
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 1rem;
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
