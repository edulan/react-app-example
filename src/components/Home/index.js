import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ButtonToolbar, Button } from 'react-bootstrap';

import User from './User';
import Modal from '../Modal';

import { getUsers } from '../../actions/';

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
    getUsers();
  }

  onOpen() {
    this.setState({showModal: true});
  }

  onClose() {
    this.setState({showModal: false});
  }

  renderLoading() {
    if (!this.props.users.loading || this.props.users.entities.length > 0) {
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
    if (this.props.users.entities.length === 0) {
      return (
        <p>No users found</p>
      );
    }

    return this.props.users.entities.map((user, id) => <User key={id} user={user} />);
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
