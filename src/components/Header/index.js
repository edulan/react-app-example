import React from 'react';
import { inject, observer } from 'mobx-react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import { getLoginUrl, getHomeUrl } from '../../routes';

function renderLoginLink(section) {
  if (section !== 'login') return null;

  return (
    <NavItem eventKey={1} href={getLoginUrl({prefixed: true})}>
      Login
    </NavItem>
  );
}

function renderHomeLink(section) {
  if (section !== 'users') return null;

  return (
    <NavItem eventKey={2} href={getHomeUrl({prefixed: true})}>
      Home
    </NavItem>
  );
}

function Header({ view }) {
  const { name } = view.currentView;

  return (
    <Navbar className="inverse fixedTop">
      <Nav>
        {renderLoginLink(name)}
        {renderHomeLink(name)}
      </Nav>
    </Navbar>
  );
}

export default inject('view')(observer(Header));
