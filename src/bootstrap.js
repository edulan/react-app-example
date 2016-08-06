import { migrate } from './db';
import { enroute } from './router';

export default function bootstrap(run) {
  migrate().then(() => enroute()).then(() => run());
}
