import React, { Component } from 'react';
import Spin from './images/Spin.gif';

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center" >
        <img style={{height:"60px",width:"60px"}} src={Spin} alt="Loading..." />
      </div>
    );
  }
}

export default Spinner;
