import React, { Component } from 'react';
import SocialMedia from './SocialMedia.js'

class Result extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    if (this.props.numCorrect == 0){
      return(
        <div className="results">
          <p>The answer provided indicates a difficulty viewing and/or interpreting the illustration.</p>
          <p><strong>Disclaimer:</strong> The information provided by Filmon Mengisteab is not a substitute for professional medical advice, diagnosis, or treatment; it is intended only for general informational purposes.   If you have any concerns or questions about your health, you must consult with your physician or health-care professional.</p>
          <SocialMedia message="The answer provided indicates a difficulty viewing and/or interpreting the illustration."/>
        </div>
      );
    }
    else if ((this.props.numCorrect / this.props.numberOfQuestions) < .90) {
      return(
        <div className="results">
          <p>The answers provided indicate a difficulty interpreting red and green colors.  Red and/or green may appear as one color, or as grey.  Colors which contain hues of red or green may also be impacted.  For example, purple is a mixture of both red and blue; therefore, purple may appear indistinguishable from blue to someone affected by red-green colorblindness.</p>
          <p><strong>Disclaimer:</strong> The information provided by Filmon Mengisteab is not a substitute for professional medical advice, diagnosis, or treatment; it is intended only for general informational purposes.   If you have any concerns or questions about your health, you must consult with your physician or health-care professional.</p>
          <div>Correct answers: {this.props.numCorrect}/{this.props.numberOfQuestions}</div>
          <SocialMedia message="The answers provided indicate a difficulty interpreting red and green colors."/>
        </div>
      );
    }
    else {
      return(
        <div className="results">
          <p>The answers provided indicate an normal ability to distinguish between red and green colors.</p>
          <p><strong>Disclaimer:</strong> The information provided by Filmon Mengisteab is not a substitute for professional medical advice, diagnosis, or treatment; it is intended only for general informational purposes.   If you have any concerns or questions about your health, you must consult with your physician or health-care professional.</p>
          <SocialMedia message="The answers provided indicate an normal ability to distinguish between red and green colors."/>
        </div>
      );
    }
  }
}

export default Result;
