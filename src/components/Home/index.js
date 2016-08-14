import React, { Component } from 'react';
import { observer } from 'mobx-react';

import User from './User';

import { getUsers } from '../../actions/';

@observer class Home extends Component {
  componentWillMount() {
    getUsers();
  }

  renderLoading() {
    if (!this.props.users.loading || this.props.users.entities.length > 0) {
      return null;
    }

    return (
      <p>Loading ...</p>
    );
  }

  renderUsers() {
    if (this.props.users.entities.length === 0) {
      return (
        <p>No users found</p>
      );
    }

    return this.props.users.entities.map((user, id) => <User key={id} user={user} />);
  }

  render() {
    return (
      <div>
        <h1>This is home</h1>
        {this.renderLoading()}
        <div>
          {this.renderUsers()}
        </div>
        <p>Try a <a href='#/non-existing-route'>non existing route</a></p>
      </div>
    );
  }
}

export default Home;
