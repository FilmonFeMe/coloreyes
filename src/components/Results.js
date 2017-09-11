import React, { Component } from 'react';

class Result extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.numCorrect == 0){
      return(
        <div htmlClass="results">
        <p>You're on acid</p>
        </div>
        );
    }
    else if ((this.props.numCorrect / this.props.numberOfQuestions) < .80) {
      return(
      <div htmlClass="results">

        <p>The answers provided indicate a difficulty interpreting red and green colors.  Red and/or green may appear as one color, or as grey.  Colors which contain hues of red or green may also be impacted.  For example, purple is a mixture of both red and blue; therefore, purple may appear indistinguishable from blue to someone affected by red-green colorblindness.</p>
        <div>Correct answers: {this.props.numCorrect}/{this.props.numberOfQuestions}</div>
      </div>
      );
    }

    else {
      return(
        <div htmlClass="results">
        <p>You're okay</p>
        </div>
        );
    }
  }
}

export default Result;
