import { migrateDb } from './db';
import { enroute } from './router';
import { setSession } from './session';

export default function bootstrap(run) {
  Promise.resolve()
    .then(() => migrateDb())
    .then(() => setSession())
    .then(() => enroute())
    .then(() => run())
    .catch((e) => {
      console.error(`App bootstrap failed: ${e}`);
    });
}
