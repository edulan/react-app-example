import { migrate } from './db';

export default function bootstrap(run) {
  migrate().then(() => run());
}
