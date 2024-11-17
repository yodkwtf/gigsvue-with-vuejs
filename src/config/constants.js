export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Add Project', path: '/projects/add' },
];

// API URL based on env production or development
export const API_URL =
  import.meta.env.MODE === 'development'
    ? '/api/projects'
    : 'https://my-json-server.typicode.com/yodkwtf/gigsvue-with-vuejs/projects';
