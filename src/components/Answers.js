import React, { Component } from 'react';

class Answers extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.props.onAnswerClicked(event.target.value);
    console.log("Save answer and move to next plate! User selected: " + event.target.value);
  }

  render(){
    return (
      <div className ="answer-form">
        <label>Select an option: </label><br/><br/>
        <ul className="options">
          {[1,4,7,2,5,8,3,6,9].map((i) =>
            <li key={i}>
              <input type="radio" id={"radio"+i} value={i} onChange={this.handleChange}/>
              <label htmlFor={"radio"+i}>{i}</label>
            </li>
          )}
        </ul>
        <input type="radio" id="radio-pass" value="pass" onChange={this.handleChange}/>
        <label id="radio-pass-label" htmlFor="radio-pass">Pass</label>
      </div>
    );
  }
}

export default Answers;
