import React, { Component } from 'react';
import '../stylesheets/components/answers.css';

class Answers extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    event.preventDefault();
    this.props.onAnswerClicked(event.target.value);
  }

  render(){
    return (
      <div className ="answer-form">
      <div id="label-id">
        <label>Select an option: </label><br/>
        </div>
        <ul className="options">
          {[1,4,7,2,5,8,3,6,9].map((i) =>
            <li key={i}>
              <input type="button" id={"button"+i} value={i} onClick={this.handleChange}/>
            </li>
          )}
        </ul>
        <input type="button" id="button-pass" value="pass" onClick={this.handleChange}/>
      </div>
    );
  }
}

export default Answers;
