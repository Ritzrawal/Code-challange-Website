import React, { Component } from 'react';
import Navbar from './Nav-bar';

class Landing extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{ width: '100%', margin: 'auto', background : "blue" }}>
      </div>
      </div>
    )
  }
}

export default Landing;