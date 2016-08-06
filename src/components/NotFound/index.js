import React, { Component } from 'react';
import { getHomeUrl } from '../../routes';

class NotFound extends Component {
  render() {
    return (
      <div>
        Not Found :(
        <p>
          Go back to <a href={getHomeUrl()}>home page</a>
        </p>
      </div>
    );
  }
}

export default NotFound;
