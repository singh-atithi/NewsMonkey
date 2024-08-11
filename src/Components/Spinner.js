import React from 'react';
import Spin from './images/Spin.gif';

const Spinner=()=> {
  
    return (
      <div className="text-center" >
        <img style={{height:"60px",width:"60px"}} src={Spin} alt="Loading..." />
      </div>
    );
  
}

export default Spinner;
