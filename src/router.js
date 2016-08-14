import { Router } from 'director';
import { session } from './stores/';
import { navigateTo } from './actions/';

const routes = {
  '/home': 'home',
  '/login': 'login',
};

function isPublic(route) {
  return route.indexOf('login') !== -1;
}

function canNavigateTo(route) {
  if (isPublic(route)) return true;

  return session.loggedIn;
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
