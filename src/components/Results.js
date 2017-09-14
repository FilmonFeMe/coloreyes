import React, { Component } from 'react';
import SocialMedia from './SocialMedia.js'
import ScoreBar from './ScoreBar.js'

class Result extends Component {

  constructor(props) {
    super(props);

    this.state = {
      score: (this.props.numCorrect - 1)/(this.props.numberOfQuestions - 1),
      disclaimer: "This test result is not a diagnosis. Only an optometrist is fit to evaluate your visual acuity."
    };
  }

  render() {
    if (this.state.score < 0) {
      return(
        <div className="results">
          <ScoreBar score={0}/>
          <div id="interpretation">The answer provided indicates difficulty viewing and/or interpreting the illustration.</div>
          <SocialMedia message="The answer provided indicates difficulty viewing and/or interpreting the illustration."/>
          <div id="disclaimer">{this.state.disclaimer}</div>
        </div>
      );
    }else if (this.state.score < .50) {
      return(
        <div className="results">
          <ScoreBar score={this.state.score}/>
          <div id="interpretation">Severe difficulty in identifying the patters. You're probably color blind.</div>
          <SocialMedia message="The answer provided indicates difficulty viewing and/or interpreting the illustration."/>
          <div id="disclaimer">{this.state.disclaimer}</div>
        </div>
        );
    }else if (this.state.score < .70) {
      return(
        <div className="results">
          <ScoreBar score={this.state.score}/>
          <div id="interpretation">Moderate difficulty in identifying the patters. You might be red or green color blind.</div>
          <SocialMedia message="The answers provided indicate a difficulty interpreting red and green colors."/>
          <div id="disclaimer">{this.state.disclaimer}</div>
        </div>
      );
    }else if (this.state.score < .85) {
      return(
        <div className="results">
          <ScoreBar score={this.state.score}/>
          <div id="interpretation">Mild difficulty in identifying the patters. It's possible that you are red or green color blind.</div>
          <SocialMedia message="The answers provided indicate a difficulty interpreting red and green colors."/>
          <div id="disclaimer">{this.state.disclaimer}</div>
        </div>
      );
    }else if (this.state.score == 1) {
      return(
        <div className="results">
          <ScoreBar score={this.state.score}/>
          <div id="interpretation">Perfect score! Your visual acuity is higher than the avarege!</div>
          <SocialMedia message="The answer provided indicates difficulty viewing and/or interpreting the illustration."/>
          <div id="disclaimer">{this.state.disclaimer}</div>
        </div>
        );
    }else {
      return(
        <div className="results">
          <ScoreBar score={this.state.score}/>
          <div id="interpretation">The answers provided indicate a normal ability to distinguish between red and green colors.</div>
          <SocialMedia message="The answers provided indicate an normal ability to distinguish between red and green colors."/>
          <div id="disclaimer">{this.state.disclaimer}</div>
        </div>
      );
    }
  }
}

export default Result;
