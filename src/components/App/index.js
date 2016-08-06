import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Login from '../Login/';
import Home from '../Home/';
import NotFound from '../NotFound/';

import './styles/';

const sectionToComponentMap = {
  login: Login,
  home: Home,
};

@observer class App extends Component {
  renderSection(sectionName) {
    const Section = sectionToComponentMap[sectionName] || NotFound;

    return <Section {...this.props} />;
  }

  render() {
    const { section } = this.props.app;

    return (
      <div className='App'>
        {this.renderSection(section)}
      </div>
    );
  }
}

export default App;
