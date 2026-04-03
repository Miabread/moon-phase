import { createApp } from 'vue';
import App from './layout/navigation/App.vue';

// Force the version check / data validation to run before any attempt at rendering
import './data';

createApp(App).mount('#app');
