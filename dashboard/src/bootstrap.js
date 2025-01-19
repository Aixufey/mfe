import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

const mount = (e) => {
  const app = createApp(Dashboard);
  app.mount(e);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#dev-root-dashboard');
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
