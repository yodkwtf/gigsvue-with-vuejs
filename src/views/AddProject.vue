<script setup>
import { reactive } from 'vue';
import router from '@/router';
import { useToast } from 'vue-toastification';
import axios from 'axios';

const form = reactive({
  type: 'Hourly',
  title: '',
  description: '',
  budget: '',
  location: '',
  client: {
    name: '',
    description: '',
    contactEmail: '',
    contactPhone: '',
  },
});

const toast = useToast();

const handleSubmit = async () => {
  try {
    const response = await axios.post('/api/projects', form);
    toast.success('Project added successfully');
    router.push(`/projects/${response.data.id}`);
  } catch (error) {
    console.log('Error adding a new project: ' + error);
    toast.error('Error adding a new project: ' + error.message);
  }
};
</script>

<template>
  <section class="bg-green-50">
    <div class="container m-auto max-w-2xl py-24">
      <div
        class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
      >
        <form @submit.prevent="handleSubmit">
          <h2 class="text-3xl text-center font-semibold mb-6">Add Project</h2>

          <div class="mb-4">
            <label for="type" class="block text-gray-700 font-bold mb-2"
              >Project Type</label
            >
            <select
              v-model="form.type"
              id="type"
              name="type"
              class="border rounded w-full py-2 px-3"
              required
            >
              <option value="Hourly">Hourly</option>
              <option value="One-Time">One-Time</option>
              <option value="Monthly">Monthly</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2"
              >Project Title</label
            >
            <input
              v-model="form.title"
              type="text"
              id="name"
              name="name"
              class="border rounded w-full py-2 px-3 mb-2"
              placeholder="eg. Build a website"
              required
            />
          </div>
          <div class="mb-4">
            <label for="description" class="block text-gray-700 font-bold mb-2"
              >Description</label
            >
            <textarea
              v-model="form.description"
              id="description"
              name="description"
              class="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="Add any project details, expectations, requirements, etc"
            ></textarea>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Budget</label>
            <input
              v-model="form.budget"
              type="text"
              id="budget"
              name="budget"
              class="border rounded w-full py-2 px-3 mb-2"
              placeholder="eg. $100/Hourly"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2"> Location </label>
            <input
              v-model="form.location"
              type="text"
              id="location"
              name="location"
              class="border rounded w-full py-2 px-3 mb-2"
              placeholder="Client Location"
              required
            />
          </div>

          <h3 class="text-2xl mb-5">Client Info</h3>

          <div class="mb-4">
            <label for="client" class="block text-gray-700 font-bold mb-2"
              >Your Company Name</label
            >
            <input
              v-model="form.client.name"
              type="text"
              id="client"
              name="client"
              class="border rounded w-full py-2 px-3"
              placeholder="Company Name"
            />
          </div>

          <div class="mb-4">
            <label
              for="client_description"
              class="block text-gray-700 font-bold mb-2"
              >Company Description</label
            >
            <textarea
              v-model="form.client.description"
              id="client_description"
              name="client_description"
              class="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="What does your company do?"
            ></textarea>
          </div>

          <div class="mb-4">
            <label
              for="contact_email"
              class="block text-gray-700 font-bold mb-2"
              >Contact Email</label
            >
            <input
              v-model="form.client.contactEmail"
              type="email"
              id="contact_email"
              name="contact_email"
              class="border rounded w-full py-2 px-3"
              placeholder="Email address for applicants"
              required
            />
          </div>
          <div class="mb-4">
            <label
              for="contact_phone"
              class="block text-gray-700 font-bold mb-2"
              >Contact Phone</label
            >
            <input
              v-model="form.client.contactPhone"
              type="tel"
              id="contact_phone"
              name="contact_phone"
              class="border rounded w-full py-2 px-3"
              placeholder="Phone for applicants"
            />
          </div>

          <div>
            <button
              class="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
