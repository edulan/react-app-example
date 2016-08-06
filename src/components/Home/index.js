import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>
          This is home
        </h1>
        <p>Try a <a href='#/non-existing-route'>non existing route</a></p>
      </div>
    );
  }
}

export default Home;
