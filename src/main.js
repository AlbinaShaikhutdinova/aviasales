import { createApp } from 'vue';
import { store } from './store/Store.js';
import { router } from './Router/Router';
import App from './App.vue';

const app = createApp(App);
app.use(router);
app.use(store);

app.mount('#app');
