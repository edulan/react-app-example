import { useStrict } from 'mobx';

import ViewStore from './view';
import UsersStore from './users';

// Force strict mode so mutations are only allowed within actions.
useStrict(true);

export const view = new ViewStore();
export const users = new UsersStore();
