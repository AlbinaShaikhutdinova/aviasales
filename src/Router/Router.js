import { createRouter, createWebHashHistory } from 'vue-router';

import BookingPage from '../components/BookingPage/BookingPage';
import SearchPage from '../components/SearchPage/SearchPage';
const routes = [
  { path: '/', components: { default: SearchPage } },
  { path: '/booking', components: { default: BookingPage } },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
