import { Router } from 'director';
import { session } from './stores/';
import { navigateTo } from './actions/';
import { getLoginUrl } from './routes';

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
  before: () => {
    if (canNavigateTo(router.getRoute())) return true;
    // Redirect to login
    setRoute(getLoginUrl());
    return false;
  },
  notfound: () => navigateTo('notFound'),
});

export default router;

export function setRoute(path) {
  router.setRoute(path);
}

export function enroute() {
  router.init(getLoginUrl());

  return Promise.resolve(router);
}
