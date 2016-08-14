import { Router } from 'director';
import { navigateTo } from './actions/';

const routes = {
  '/home': 'home',
  '/login': 'login',
};

function canNavigateTo(route) {
  // TODO: Implement authentication
  return true;
}

function prepareRoutes(routes) {
  return Object.keys(routes).reduce((memo, route) => {
    const section = routes[route];

    memo[route] = () => navigateTo(section);

    return memo;
  }, {});
}

// eslint-disable-next-line
const router = Router(prepareRoutes(routes));

router.configure({
  before: () => canNavigateTo(router.getRoute()),
  notfound: () => navigateTo('notFound'),
});

export default router;

export function enroute() {
  router.init();
  router.setRoute('/login');

  return Promise.resolve(router);
}
