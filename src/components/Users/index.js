import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ButtonToolbar, Button } from 'react-bootstrap';

import { getNewUserUrl } from '../../routes';

import UserList from './UserList';
import Modal from '../Modal';

@inject('people') @observer class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };

    this.onOpen = this.onOpen.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  componentDidMount() {
    // TODO: Investigate why this action is not logged on devtools
    this.props.people.getAll();
  }

  onOpen() {
    this.setState({showModal: true});
  }

  onClose() {
    this.setState({showModal: false});
  }

  renderLoading() {
    if (!this.props.people.loading) {
      return null;
    }

    return (
      <p>Loading ...</p>
    );
  }

  renderActions() {
    return (
      <ButtonToolbar>
        <Button bsStyle='primary' href={getNewUserUrl({prefixed: true})}>
          Create new
        </Button>
      </ButtonToolbar>
    );
  }

  renderUsers() {
    if (this.props.people.loading) {
      return null;
    }

    if (this.props.people.isEmpty) {
      return (
        <p>No users found</p>
      );
    }

    return <UserList people={this.props.people} />;
  }

  renderModal() {
    return (
      <Modal isShown={this.state.showModal} onClose={this.onClose}>
        <p>Foo bar foo</p>
      </Modal>
    );
  }

  render() {
    return (
      <div>
        <h3>Users list</h3>
        <div>
          {this.renderActions()}
        </div>
        <div>
          {this.renderLoading()}
          {this.renderUsers()}
          {this.renderModal()}
        </div>
      </div>
    );
  }
}

export default Users;
