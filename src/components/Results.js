import React, { Component } from 'react';
import SocialMedia from './SocialMedia.js';
import ScoreBar from './ScoreBar.js';


class Result extends Component {

  constructor(props) {
    super(props);

    this.state = {
      score: (this.props.numCorrect - 1)/(this.props.numberOfQuestions - 1),
      disclaimer: "This test result is not a diagnosis. Only an optometrist is fit to evaluate your visual acuity.",
      errorMessage: "The answer provided indicates difficulty viewing and/or interpreting the illustration.",
      severe: "Severe difficulty in identifying the patters. You're probably color blind.",
      moderate: "Moderate difficulty in identifying the patters. You might be red or green color blind.",
      mild: "Mild difficulty in identifying the patters. It's possible that you are red or green color blind.",
      normal: "You have a normal ability to distinguish between red and green colors.",
      perfect: "Perfect score! Your visual acuity is higher than the avarege!"
    };
  }

  render() {
    if (this.state.score < 0) {
      return(
        <div className="results">
          <ScoreBar score={0}/>
          <div id="interpretation">{this.state.errorMessage}</div>
          <br />
          <SocialMedia message={this.state.errorMessage}/>
          <div id="disclaimer">{this.state.disclaimer}</div>
        </div>
      );
    }else if (this.state.score < .50) {
      return(
        <div className="results">
          <ScoreBar score={this.state.score}/>
          <div id="interpretation">{this.state.severe}</div>
          <br />
          <SocialMedia message={this.state.severe}/>
          <div id="disclaimer">{this.state.disclaimer}</div>
        </div>
        );
    }else if (this.state.score < .70) {
      return(
        <div className="results">
          <ScoreBar score={this.state.score}/>
          <div id="interpretation">{this.state.moderate}</div>
          <br />
          <SocialMedia message={this.state.moderate}/>
          <div id="disclaimer">{this.state.disclaimer}</div>
        </div>
      );
    }else if (this.state.score < .85) {
      return(
        <div className="results">
          <ScoreBar score={this.state.score}/>
          <div id="interpretation">{this.state.mild}</div>
          <br />
          <SocialMedia message={this.state.mild}/>
          <div id="disclaimer">{this.state.disclaimer}</div>
        </div>
      );
    }else if (this.state.score == 1) {
      return(
        <div className="results">
          <ScoreBar score={this.state.score}/>
          <div id="interpretation">{this.state.perfect}</div>
          <br />
          <SocialMedia message={this.state.perfect}/>
          <div id="disclaimer">{this.state.disclaimer}</div>
        </div>
        );
    }else {
      return(
        <div className="results">
          <ScoreBar score={this.state.score}/>
          <div id="interpretation">{this.state.normal}</div>
          <br />
          <SocialMedia message={this.state.normal}/>
          <div id="disclaimer">{this.state.disclaimer}</div>
        </div>
      );
    }
  }
}

export default Result;
