import React, { useState } from 'react';
import style from './Calculator.module.css';
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
    <section className={style.section}>
      <h4 className={style.h4}>Let&apos;s do some Maths!</h4>
      <div className={style.container}>
        <div className={style.result}>
          {total}
          {operation}
          {next}
        </div>
        <button type="button" onClick={onKeyPress}> AC </button>
        <button type="button" onClick={onKeyPress}> +/- </button>
        <button type="button" onClick={onKeyPress}> % </button>
        <button type="button" className={style.ver} onClick={onKeyPress}> &#247; </button>
        <button type="button" onClick={onKeyPress}> 7 </button>
        <button type="button" onClick={onKeyPress}> 8 </button>
        <button type="button" onClick={onKeyPress}> 9 </button>
        <button type="button" className={style.ver} onClick={onKeyPress}> x </button>
        <button type="button" onClick={onKeyPress}> 4 </button>
        <button type="button" onClick={onKeyPress}> 5 </button>
        <button type="button" onClick={onKeyPress}> 6 </button>
        <button type="button" className={style.ver} onClick={onKeyPress}> - </button>
        <button type="button" onClick={onKeyPress}> 1 </button>
        <button type="button" onClick={onKeyPress}> 2 </button>
        <button type="button" onClick={onKeyPress}> 3 </button>
        <button type="button" className={style.ver} onClick={onKeyPress}> + </button>
        <button type="button" className={style.zero} onClick={onKeyPress}> 0 </button>
        <button type="button" onClick={onKeyPress}> . </button>
        <button type="button" className={style.ver} onClick={onKeyPress}> = </button>
      </div>
    </section>
  );
};

export default Calculator;
