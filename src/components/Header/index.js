import React from 'react';
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
  if (section !== 'home') return null;

  return (
    <NavItem eventKey={2} href={getHomeUrl({prefixed: true})}>
      Home
    </NavItem>
  );
}

export default ({ section }) => {
  return (
    <Navbar className="inverse fixedTop">
      <Nav>
        {renderLoginLink(section)}
        {renderHomeLink(section)}
      </Nav>
    </Navbar>
  );
}
