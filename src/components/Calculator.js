import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    return (
      <section className="container">
        <div className="result" />
        <button type="button" className="ac"> AC </button>
        <button type="button" className="pm"> +/- </button>
        <button type="button" className="modulo"> % </button>
        <button type="button" className="divide ver"> &#247; </button>
        <button type="button" className="seven"> 7 </button>
        <button type="button" className="eight"> 8 </button>
        <button type="button" className="nine"> 9 </button>
        <button type="button" className="multiple ver"> x </button>
        <button type="button" className="four"> 4 </button>
        <button type="button" className="five"> 5 </button>
        <button type="button" className="six"> 6 </button>
        <button type="button" className="minus ver"> - </button>
        <button type="button" className="one"> 1 </button>
        <button type="button" className="two"> 2 </button>
        <button type="button" className="three"> 3 </button>
        <button type="button" className="plus ver"> + </button>
        <button type="button" className="zero"> 0 </button>
        <button type="button" className="dot"> . </button>
        <button type="button" className="equal ver"> = </button>
      </section>
    );
  }
}

export default Calculator;
