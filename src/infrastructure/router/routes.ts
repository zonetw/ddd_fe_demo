import Home from '../../presentation/pages/home/index.vue';
import Counter from '../../presentation/pages/counter/Counter.vue';

export const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Counter',
    component: Counter
  }
];
