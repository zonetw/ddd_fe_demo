// ====================== VUE 3 ======================

import { createApp } from 'vue';
import { router } from './infrastructure/router';
import App from './presentation/App.vue'

createApp(App)
  .use(router)
  .mount('#app');

// ====================== SVELTE ======================

// import App from './App.svelte';

// const app = new App({
//   target: document.getElementById('app')
// });

// export default app;
