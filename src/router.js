import { autorun } from 'mobx';
import { Router } from 'director';
import { view } from './stores/';
import { getLoginUrl } from './routes';

const DEFAULT_ROUTE = getLoginUrl();

const router = new Router({
  '/login': () => view.showLogin(),
  '/home': () => view.showUsers(),
});

router.configure({
  notfound: () => view.showNotFound(),
});

export function enroute() {
  router.init(DEFAULT_ROUTE);

  // We need to update the url on every view state change
  autorun(() => {
    // TODO: Improve this
    if (!view.currentView) return;

    const path = view.currentPath;

    if (path !== router.getRoute()) {
      router.setRoute(path);
    }
  });

  return Promise.resolve(router);
}
