import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { observer } from 'mobx-react';

import Login from '../Login/';
import Home from '../Home/';
import NotFound from '../NotFound/';

import { getLoginUrl, getHomeUrl } from '../../routes';

const sectionMap = {
  login: Login,
  home: Home,
};

/**
 * App component acts as the application layout.
 *
 * TODO: Delegate section rendering to a section manager component
 */
@observer class App extends Component {
  renderSection(sectionName) {
    const Section = sectionMap[sectionName] || NotFound;

    return <Section {...this.props} />;
  }

  render() {
    const { section } = this.props.app;

    return (
      <div>
        <header>
          <Navbar className="inverse fixedTop">
            <Nav>
              <NavItem eventKey={1} href={getLoginUrl()}>Login</NavItem>
              <NavItem eventKey={2} href={getHomeUrl()}>Home</NavItem>
            </Nav>
          </Navbar>
        </header>
        <main role="main">
          {this.renderSection(section)}
        </main>
      </div>
    );
  }
}

export default App;
