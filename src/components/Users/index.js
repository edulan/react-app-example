import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Row, Col, Form, FormGroup, FormControl, ButtonToolbar, Button } from 'react-bootstrap';
import debounce from 'lodash.debounce';

import { getNewUserUrl } from '../../routes';

import UserList from './UserList';
import Modal from '../Modal';

@inject('users') @observer class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };

    this.onOpen = this.onOpen.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onChange = this.onChange.bind(this);
    this.performSearch = debounce(this.performSearch.bind(this), 300);
  }

  componentDidMount() {
    // TODO: Investigate why this action is not logged on devtools
    this.props.users.getAll();
  }

  onOpen() {
    this.setState({showModal: true});
  }

  onClose() {
    this.setState({showModal: false});
  }

  onChange(event) {
    event.preventDefault();

    this.performSearch({name: event.target.value})
  }

  performSearch(criteria) {
    this.props.users.getBy(criteria);
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
      <Row>
        <Col md={8}>
          <ButtonToolbar>
            <Button bsStyle='primary' href={getNewUserUrl({prefixed: true})}>
              Create new
            </Button>
          </ButtonToolbar>
        </Col>
        <Col md={4}>
          <Form onSubmit={(event) => event.preventDefault()} inline>
            <FormGroup>
              <FormControl type="text" placeholder="Search" onChange={this.onChange} />
            </FormGroup>
          </Form>
        </Col>
      </Row>
    );
  }

  renderUsers() {
    if (this.props.users.loading) {
      return null;
    }

    if (this.props.users.isEmpty) {
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

export default Users;
