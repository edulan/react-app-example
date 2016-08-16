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
        <h3>Users list</h3>
        {this.renderLoading()}
        <div>
          {this.renderUsers()}
        </div>
      </div>
    );
  }
}

export default Home;
