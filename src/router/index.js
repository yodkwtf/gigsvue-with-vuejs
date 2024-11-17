import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Projects from '@/views/Projects.vue';
import Project from '@/views/Project.vue';
import AddProject from '@/views/AddProject.vue';
import EditProject from '@/views/EditProject.vue';
import NotFound from '@/views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
    },
    {
      path: '/projects/:id',
      name: 'project',
      component: Project,
    },
    {
      path: '/projects/edit/:id',
      name: 'edit-project',
      component: EditProject,
    },
    {
      path: '/projects/add',
      name: 'add-project',
      component: AddProject,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFound,
    },
  ],
});

export default router;
