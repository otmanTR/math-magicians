import React, { useState } from 'react';
import '../App.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  const { total, next, operation } = state;

  const calculateResult = (calculateButton) => {
    setState((state) => calculate(state, calculateButton.target.textContent));
  };

  return (
    <div className="container flex">
      <div className="child result flex">
        {total}
        {operation}
        {next}
      </div>
      <div className="child flex">
        <button type="button" className="button key" onClick={calculateResult}>AC</button>
        <button type="button" className="button key" onClick={calculateResult}>÷/-</button>
        <button type="button" className="button key" onClick={calculateResult}>%</button>
        <button type="button" className="button operator" onClick={calculateResult}>÷</button>
      </div>
      <div className="child flex">
        <button type="button" className="button key" onClick={calculateResult}>7</button>
        <button type="button" className="button key" onClick={calculateResult}>8</button>
        <button type="button" className="button key" onClick={calculateResult}>9</button>
        <button type="button" className="button operator" onClick={calculateResult}>x</button>
      </div>
      <div className="child flex">
        <button type="button" className="button key" onClick={calculateResult}>4</button>
        <button type="button" className="button key" onClick={calculateResult}>5</button>
        <button type="button" className="button key" onClick={calculateResult}>6</button>
        <button type="button" className="button operator" onClick={calculateResult}>-</button>
      </div>
      <div className="child flex">
        <button type="button" className="button key" onClick={calculateResult}>1</button>
        <button type="button" className="button key" onClick={calculateResult}>2</button>
        <button type="button" className="button key" onClick={calculateResult}>3</button>
        <button type="button" className="button operator" onClick={calculateResult}>+</button>
      </div>
      <div className="child flex">
        <button type="button" className="button key zero" onClick={calculateResult}>0</button>
        <button type="button" className="button key dot" onClick={calculateResult}>.</button>
        <button type="button" className="button operator equal" onClick={calculateResult}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
