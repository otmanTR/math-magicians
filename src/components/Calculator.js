import React from 'react';
import '../App.css';
import ChildResult from './ChildResult';

function Calculator() {
  return (
    <div className="container flex">
      <ChildResult />
      <div className="child flex">
        <button type="button" className="button key">AC</button>
        <button type="button" className="button key">÷/-</button>
        <button type="button" className="button key">%</button>
        <button type="button" className="button operator">÷</button>
      </div>
      <div className="child flex">
        <button type="button" className="button key">7</button>
        <button type="button" className="button key">8</button>
        <button type="button" className="button key">9</button>
        <button type="button" className="button operator">x</button>
      </div>
      <div className="child flex">
        <button type="button" className="button key">4</button>
        <button type="button" className="button key">5</button>
        <button type="button" className="button key">6</button>
        <button type="button" className="button operator">-</button>
      </div>
      <div className="child flex">
        <button type="button" className="button key">1</button>
        <button type="button" className="button key">2</button>
        <button type="button" className="button key">3</button>
        <button type="button" className="button operator">+</button>
      </div>
      <div className="child flex">
        <button type="button" className="button key zero">0</button>
        <button type="button" className="button operator equal">=</button>
      </div>
    </div>
  );
}

export default Calculator;
