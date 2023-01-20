import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  const onKeyPress = (e) => {
    const keyValue = e.target.innerText;
    const result = calculate(state, keyValue);
    setState(result);
  };

  const { total, next, operation } = state;

  return (
    <section className="container">
      <div className="result">
        {total}
        {operation}
        {next}
      </div>
      <button type="button" onClick={onKeyPress}> AC </button>
      <button type="button" onClick={onKeyPress}> +/- </button>
      <button type="button" onClick={onKeyPress}> % </button>
      <button type="button" className="ver" onClick={onKeyPress}> &#247; </button>
      <button type="button" onClick={onKeyPress}> 7 </button>
      <button type="button" onClick={onKeyPress}> 8 </button>
      <button type="button" onClick={onKeyPress}> 9 </button>
      <button type="button" className="ver" onClick={onKeyPress}> x </button>
      <button type="button" onClick={onKeyPress}> 4 </button>
      <button type="button" onClick={onKeyPress}> 5 </button>
      <button type="button" onClick={onKeyPress}> 6 </button>
      <button type="button" className="ver" onClick={onKeyPress}> - </button>
      <button type="button" onClick={onKeyPress}> 1 </button>
      <button type="button" onClick={onKeyPress}> 2 </button>
      <button type="button" onClick={onKeyPress}> 3 </button>
      <button type="button" className="ver" onClick={onKeyPress}> + </button>
      <button type="button" className="zero" onClick={onKeyPress}> 0 </button>
      <button type="button" onClick={onKeyPress}> . </button>
      <button type="button" className="ver" onClick={onKeyPress}> = </button>
    </section>
  );
};

export default Calculator;
