


import React from 'react'
import '../../App.css';
import Firsthalf from './Firsthalf';
import Secondhalf from './Second_half';
function Header() {
  return (
    <div className="header">
      <Firsthalf className="first_half" />
      <Secondhalf className="Second_half" />
    </div>
  );
}
export default Header