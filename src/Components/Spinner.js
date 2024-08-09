import React, { Component } from 'react';
import Spin from './images/Spin.gif';

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={Spin} alt="Loading..." />
      </div>
    );
  }
}

export default Spinner;
