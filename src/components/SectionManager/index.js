import React from 'react';
import { inject, observer } from 'mobx-react';

import Login from '../Login/';
import Users from '../Users/';
import UsersNew from '../Users/New';
import NotFound from '../NotFound/';

const viewMap = {
  login: Login,
  users: Users,
  new_user: UsersNew,
};

function getViewComponent(currentView) {
  const { name } = currentView;

  return viewMap[name] || NotFound;
}

function SectionManager({ view }) {
  const View = getViewComponent(view.currentView) ;

  return <View />;
}

export default inject('view')(observer(SectionManager));
