## What is Vue.js?

- Javascript frame for building user interfaces and SPAs
- Simple, flexible, and incrementally adoptable
- Component-based architecture
- Created by Evan You in 2013
- Active community and ecosystem

## Vue Components

- Building blocks of Vue applications
- Reusable, self-contained pieces of code
- Includes the logic/JS, template/HTML, and scoped styles/CSS
- HTML can also include dynamic data using directives

```js
<script>
// JavaScript logic
</script>

<template>
  <!-- HTML Output -->
  <div>
    <h2>Hello from Vue.js</h2>
  </div>
</template>

<style scoped>
/* CSS Styles */
</style>
```

2 ways to build components:

1. **Options API (Vue 2.x)** - Object-based syntax
2. **Composition API (Vue 3.x)** - Function-based syntax

## Getting Setup

1. **CDN**: Include Vue.js via CDN in the script tag
2. **Vue CLI**: Install Vue CLI globally and create a new project. No longer recommended.
3. **Create Vue**: Uses Vite, which includes features like hot reload, built-in TypeScript support, and an ecosystem of plugins.
4. **Nuxt.js & Gridsome**: SSR & SSG frameworks built on top of Vue.js

## CDN Setup

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <title>Vue Playground</title>
  </head>

  <body>
    <div id="app">
      <h1>{{ message }}</h1>

      <button @click="handleClick">Click Me</button>
    </div>

    <script>
      const app = Vue.createApp({
        data() {
          return {
            message: 'Hello from Vue Playground!',
          };
        },

        methods: {
          handleClick() {
            this.message = 'Button clicked!';
          },
        },
      });

      app.mount('#app');
    </script>
  </body>
</html>
```

- **Vue.createApp()**: Creates a new Vue instance
- **data()**: Returns an object with reactive properties
- **methods**: Contains custom methods
- **app.mount()**: Mounts the Vue instance to an HTML element
- **{{ }}**: Interpolates data properties in the template
- **@click**: Event listener directive

## Setting up Vue Project

Run the following command to create a new Vue project:

```bash
npm create vue@latest my-vue-app
```

Navigate to the project directory:

```bash
cd my-vue-app
```

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

## File and Folder Structure

1. **package.json**: Contains project metadata and dependencies
2. **vite.config.js**: Vite configuration file used for custom settings and plugins
3. **index.html**: Main HTML file that loads the Vue app
4. **src**: Contains all the components and the source code of the Vue app
5. **src/main.js**: Entry point of the Vue app that mounts the app to the DOM
6. **src/App.vue**: Main component file that contains the app structure and is mounted to the DOM
7. **components**: Folder to store reusable components
8. **assets**: Folder to store static assets like images, fonts, styles, etc.
9. **public**: Folder to store static files that are not processed by Vite

## Vue Directives

- Used to add dynamic behavior to HTML elements
- Prefixed with `v-` in the template
- Examples: `v-if`, `v-for`, `v-bind`, `v-on`, `v-model`, etc.

###### Directives in the Template

```html
<template>
  <div v-if="isUserLoggedIn">Welcome, {{ username }}</div>

  <ul>
    <li v-for="item in items" :key="item.id">{{ item.name }}</li>
  </ul>

  <input v-model="message" placeholder="Enter your message" />

  <button v-on:click="handleClick">Click Me</button>
</template>
```

- **v-if**: Conditional rendering
- **v-for**: List rendering
- **:key**: Unique key for list items
- **v-model**: Two-way data binding
- **v-on:click**: Event listener

###### Options API to set up data and methods

```html
<script>
  export default {
    data() {
      return {
        isUserLoggedIn: true,
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
      handleClick() {
        alert('Button clicked!');
      },
    },
  };
</script>
```

- **data()**: Returns an object with reactive properties
- **methods**: Contains custom methods
- **this**: Refers to the Vue instance

###### Composition API to set up data and methods

```html
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const isUserLoggedIn = ref(true);
      const username = ref('John Doe');
      const items = ref([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
      ]);
      const message = ref('');

      const handleClick = () => {
        alert('Button clicked!');
      };

      return {
        isUserLoggedIn,
        username,
        items,
        message,
        handleClick,
      };
    },
  };
</script>
```

- **ref()**: Creates a reactive reference to a value
- **setup()**: Function that returns reactive properties and methods
- **return**: Exposes the reactive properties and methods to the template
- Without `ref()`, the properties will not be reactive

###### Cleaner Composition API Example

```html
<script setup>
  import { ref } from 'vue';

  const isUserLoggedIn = ref(true);
  const username = ref('John Doe');
  const items = ref([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);
  const message = ref('');

  const handleClick = () => {
    alert('Button clicked!');
  };
</script>
```
