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
    <!-- VUE CDN -->
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

#### Directives Usage

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

##### Options API Example

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

##### Composition API Example

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

###### Cleaner and Easier Syntax

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

## Props in Vue Components

- Used to pass data from parent to child components
- Declared in the child component and received as attributes
- Props can be passed as strings, numbers, objects, arrays, etc.
- Props are reactive and can be validated using type and default values
- Props can be one-way or two-way (v-model)

###### Parent Component

```html
<template>
  <ChildComponent :title="pageTitle" :items="pageItems" />
</template>
```

###### Child Component

```html
<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    title: String, // Prop type
    showButton: {
      // Prop with default value
      type: Boolean,
      default: true,
    },
  });

  console.log(props.title);
</script>

<template>
  <h1>{{ title }}</h1>
  <button v-if="showButton">Click Me</button>
</template>
```

- **defineProps()**: Function to define props and their types
- **props**: Object containing the prop values
- **String, Number, Boolean, Object, Array, Function, Symbol**: Prop types
- **v-if**: Conditional rendering based on the prop value

## Computing Properties in Vue

- Reactive properties that update when dependent properties change
- Can be computed using a function or getter/setter
- Cached and only re-evaluated when necessary

###### Computed Properties Example

```html
<script setup>
  import { ref, computed } from 'vue';

  const count = ref(0);

  // computed property
  const doubleCount = computed(() => count.value * 2);

  const increment = () => {
    count.value++;
  };
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>
```

- `doubleCount` - Computed property that doubles the value of `count`
- Evaluated only when `count` changes
- Similar to useEffect's dependency array in React

## Vue Icons

We can add icons in a Vue project in various ways. Here is an example using primeicons:

1. Install PrimeIcons:

   ```bash
   npm install primeicons
   ```

2. Import PrimeIcons in the main.js file:

   ```js
   import 'primeicons/primeicons.css';
   ```

3. Use the icons in the template:

   ```html
   <template>
     <i class="pi pi-check"></i>
   </template>
   ```

## Vue Router

- Official router for Vue.js
- Allows navigation between different views in a Vue application
- Supports nested routes, route parameters, and route guards
- Can be set up manually or can be used as default while initializing a Vue project

#### Installation

```bash
npm install vue-router
```

#### Basic Setup

1. Create a router instance:

   ###### src/router/index.js

   ```js
   import { createRouter, createWebHistory } from 'vue-router';
   import HomeView from './views/HomeView.vue';

   const router = createRouter({
     history: createWebHistory(import.meta.env.BASE_URL),
     routes: [
       {
         path: '/',
         name: 'home',
         component: HomeView,
       },
     ],
   });

   export default router;
   ```

2. Wrap the app with the router:

   ###### src/main.js

   ```js
   import { createApp } from 'vue';
   import App from './App.vue';
   import router from './router';

   createApp(App).use(router).mount('#app');
   ```

3. Create a view component:

   ###### src/views/HomeView.vue

   ```html
   <template>
     <main>
       <Hero />
       <HomeCards />
     </main>
   </template>
   ```

4. Add the router-view in the App.vue file:

   ###### src/App.vue

   ```html
   <script setup>
     import Navbar from '@/components/Navbar.vue';
     import { RouterView } from 'vue-router';
   </script>

   <template>
     <Navbar />
     <RouterView />
   </template>
   ```
