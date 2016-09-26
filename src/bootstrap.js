import { migrate } from './db';
import { enroute } from './router';
import { setSession } from './session';

export default function bootstrap(run) {
  // TODO: Add catch!

  Promise.resolve()
    .then(() => migrate())
    .then(() => setSession())
    .then(() => enroute())
    .then(() => run());
}
