import { createApp } from 'vue';
import { store } from './store/Store';
import App from './App.vue';

createApp(App).mount('#app').use(store);
