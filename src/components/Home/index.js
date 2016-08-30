import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ButtonToolbar, Button } from 'react-bootstrap';

import UserList from './UserList';
import Modal from '../Modal';

@inject('users') @observer class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };

    this.onOpen = this.onOpen.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  componentWillMount() {
    this.props.users.getAll();
  }

  onOpen() {
    this.setState({showModal: true});
  }

  onClose() {
    this.setState({showModal: false});
  }

  renderLoading() {
    if (!this.props.users.loading) {
      return null;
    }

    return (
      <p>Loading ...</p>
    );
  }

  renderActions() {
    return (
      <ButtonToolbar>
        <Button bsStyle='primary' onClick={this.onOpen} disabled={this.state.showModal}>
          Create new
        </Button>
      </ButtonToolbar>
    );
  }

  renderUsers() {
    if (this.props.users.loading) {
      return null;
    }

    if (this.props.users.isEmpty === 0) {
      return (
        <p>No users found</p>
      );
    }

    return <UserList users={this.props.users} />;
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

export default Home;
