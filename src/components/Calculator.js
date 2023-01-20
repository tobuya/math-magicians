import React, { Component } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { total: 0, next: null, operation: null };
  }

  onKeyPress = (e) => {
    const keyValue = e.target.innerText;
    const result = calculate(this.state, keyValue);
    this.setState(result);
  };

  render() {
    const { total, operation, next } = this.state;
    return (
      <section className="container">
        <div className="result">
          {total}
          {operation}
          {next}
        </div>
        <button type="button" onClick={this.onKeyPress}> AC </button>
        <button type="button" onClick={this.onKeyPress}> +/- </button>
        <button type="button" onClick={this.onKeyPress}> % </button>
        <button type="button" className="ver" onClick={this.onKeyPress}> &#247; </button>
        <button type="button" onClick={this.onKeyPress}> 7 </button>
        <button type="button" onClick={this.onKeyPress}> 8 </button>
        <button type="button" onClick={this.onKeyPress}> 9 </button>
        <button type="button" className="ver" onClick={this.onKeyPress}> x </button>
        <button type="button" onClick={this.onKeyPress}> 4 </button>
        <button type="button" onClick={this.onKeyPress}> 5 </button>
        <button type="button" onClick={this.onKeyPress}> 6 </button>
        <button type="button" className="ver" onClick={this.onKeyPress}> - </button>
        <button type="button" onClick={this.onKeyPress}> 1 </button>
        <button type="button" onClick={this.onKeyPress}> 2 </button>
        <button type="button" onClick={this.onKeyPress}> 3 </button>
        <button type="button" className="ver" onClick={this.onKeyPress}> + </button>
        <button type="button" className="zero" onClick={this.onKeyPress}> 0 </button>
        <button type="button" onClick={this.onKeyPress}> . </button>
        <button type="button" className="ver" onClick={this.onKeyPress}> = </button>
      </section>
    );
  }
}

export default Calculator;
