import { Router } from 'director';
import { navigateTo } from './actions/';

const routes = {
  '/home': () => navigateTo('home'),
  '/login': () => navigateTo('login'),
};

// eslint-disable-next-line
const router = Router(routes);

router.configure({
  notfound: () => navigateTo('notFound'),
});

export default router;

export function enroute() {
  router.init();
  router.setRoute('/login');

  return Promise.resolve(router);
}

// TODO: Add Section (Route in react-router) components to handle each route.
