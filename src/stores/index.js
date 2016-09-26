import { useStrict } from 'mobx';

import ViewStore from './view';
import PeopleStore from './people';

// Force strict mode so mutations are only allowed within actions.
useStrict(true);

export const view = new ViewStore();
export const people = new PeopleStore();
