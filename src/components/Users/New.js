import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Form from './Form';

@inject('view', 'people') @observer class New extends Component {
  constructor(props) {
    super(props);

    this.createUser = this.createUser.bind(this);
  }

  createUser(person) {
    this.props.people.create(person)
      .then(() => {
        this.props.view.showUsers();
      })
      .catch(() => {
        // TODO: Implement
      });
  }

  render() {
    return (
      <div>
        <h3>New user</h3>
        <Form onSubmit={this.createUser} />
      </div>
    );
  }
}

export default New;
