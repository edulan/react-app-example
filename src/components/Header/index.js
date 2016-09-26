import React from 'react';
import { inject, observer } from 'mobx-react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';

import { getLoginUrl, getHomeUrl } from '../../routes';

function renderLoginLink(view) {
  if (view.isLoggedIn) return null;

  return (
    <NavItem eventKey={1} href={getLoginUrl({prefixed: true})}>
      Login
    </NavItem>
  );
}

function renderLogoutLink(view) {
  if (!view.isLoggedIn) return null;

  function onClick() {
    view.doLogout().then(() => view.showLogin());
  }

  return (
    <NavItem eventKey={1}>
      <Button onClick={onClick}>Logout</Button>
    </NavItem>
  );
}

function renderHomeLink(view) {
  if (!view.isLoggedIn) return null;

  return (
    <NavItem eventKey={2} href={getHomeUrl({prefixed: true})}>
      Home
    </NavItem>
  );
}

function Header({ view }) {
  return (
    <Navbar className="inverse fixedTop">
      <Nav>
        {renderLoginLink(view)}
        {renderLogoutLink(view)}
        {renderHomeLink(view)}
      </Nav>
    </Navbar>
  );
}

export default inject('view')(observer(Header));
