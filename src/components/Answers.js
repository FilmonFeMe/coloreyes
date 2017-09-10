import React, { Component } from 'react';

class Answers extends Component {
  render(){
    return (
      <div className ="answer-form">
      <form>
      <label htmlFor="anser">Answer</label>
      <input
        className="form-control"
        type="input"
        name="zipcode"/>
        <button type="submit" className='btn btn-success'>Choose Answer</button>
        </form>
        </div>
    );
  }
}

export default Answers;