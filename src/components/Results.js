import React, { Component } from 'react';
import SocialMedia from './SocialMedia.js';
import ScoreBar from './ScoreBar.js';
import '../stylesheets/components/results.css';


class Result extends Component {

  constructor(props) {
    super(props);

    this.state = {
      score: (this.props.numCorrect - 1)/(this.props.numberOfQuestions - 1),
      disclaimer: "*This test result is not a diagnosis. Only an optometrist is fit to evaluate your visual acuity.",
      errorMessage: "The answer provided indicates difficulty viewing and/or interpreting the illustration.",
      severe: "Severe difficulty in identifying the patterns. You may be color blind.",
      moderate: "Moderate difficulty with identifying the patterns. You may be red or green color blind.",
      mild: "Mild difficulty with identifying the patterns. You may be red or green color blind.",
      normal: "The results show a normal ability to distinguish between red and green colors.",
      perfect: "Perfect score! Your visual acuity is higher than the average!"
    };
  }

  render() {
    if (this.state.score < 0) {
      return(
        <div className="results">
          <ScoreBar score={0}/>
          <br />
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
          <br />
          <div id="interpretation">{this.state.severe}</div>
          <br />
          <div id="details">
            <p>The answers provided indicate that you may have difficulty distinguishing between red and green colors.  Red and green may appear as one color to you, or simply as grey.  Colors that contain hues of red and green may also be impacted.  For example, purple is a mixture of both red and blue; therefore, purple may appear to be indistinguishable from blue.</p>
            <p>The color of light is determined by its wavelength.  The human eye enables the brain to perceive these waves of light through 'photoreceptors'.  The type of photoreceptor interpreting color is called a 'cone'.  Of these cones, there are three types:</p>
            <ol>
              <li>Long wavelength (red)</li>
              <li>Medium wavelength (green)</li>
              <li>Short wavelength (blue)</li>
            </ol>
            <p>Red-green color blindness is caused by mutated or missing long/medium cones, most often inherited from the mother’s x-chromosome.  Color blindness may also be acquired later in life, due to aging, diseases, eye trauma, or as a side effect of certain medications.</p>
            <p>Early in life, color vision deficiencies can affect development, as color is oftentimes used as a learning reference tool.  There is no cure for inherited color blindness, but learning adaptive methods and reference points early on can have a profound impact.  Consult with your physician or healthcare professional for further testing.</p>
          </div>
          <br/>
          <SocialMedia message={this.state.severe}/>
          <br/>
          <div id="disclaimer">{this.state.disclaimer}</div>
        </div>
        );
    }else if (this.state.score < .70) {
      return(
        <div className="results">
          <ScoreBar score={this.state.score}/>
          <br />
          <div id="interpretation">{this.state.moderate}</div>
          <br />
          <div id="details">
            <p>The answers provided indicate that you may have difficulty distinguishing between red and green colors.  Red and green may appear as one color to you, or simply as grey.  Colors that contain hues of red and green may also be impacted.  For example, purple is a mixture of both red and blue; therefore, purple may appear to be indistinguishable from blue.</p>
            <p>The color of light is determined by its wavelength.  The human eye enables the brain to perceive these waves of light through 'photoreceptors'.  The type of photoreceptor interpreting color is called a 'cone'.  Of these cones, there are three types:</p>
            <ol>
              <li>Long wavelength (red)</li>
              <li>Medium wavelength (green)</li>
              <li>Short wavelength (blue)</li>
            </ol>
            <p>Red-green color blindness is caused by mutated or missing long/medium cones, most often inherited from the mother’s x-chromosome.  Color blindness may also be acquired later in life, due to aging, diseases, eye trauma, or as a side effect of certain medications.</p>
            <p>Early in life, color vision deficiencies can affect development, as color is oftentimes used as a learning reference tool.  There is no cure for inherited color blindness, but learning adaptive methods and reference points early on can have a profound impact.  Consult with your physician or healthcare professional for further testing.</p>
          </div>
          <br/>
          <SocialMedia message={this.state.moderate}/>
          <br/>
          <div id="disclaimer">{this.state.disclaimer}</div>
        </div>
      );
    }else if (this.state.score < .85) {
      return(
        <div className="results">
          <ScoreBar score={this.state.score}/>
          <br />
          <div id="interpretation">{this.state.mild}</div>
          <br />
          <div id="details">
            <p>The answers provided indicate that you may have difficulty distinguishing between red and green colors.  Red and green may appear as one color to you, or simply as grey.  Colors that contain hues of red and green may also be impacted.  For example, purple is a mixture of both red and blue; therefore, purple may appear to be indistinguishable from blue.</p>
            <p>The color of light is determined by its wavelength.  The human eye enables the brain to perceive these waves of light through 'photoreceptors'.  The type of photoreceptor interpreting color is called a 'cone'.  Of these cones, there are three types:</p>
            <ol>
              <li>Long wavelength (red)</li>
              <li>Medium wavelength (green)</li>
              <li>Short wavelength (blue)</li>
            </ol>
            <p>Red-green color blindness is caused by mutated or missing long/medium cones, most often inherited from the mother’s x-chromosome.  Color blindness may also be acquired later in life, due to aging, diseases, eye trauma, or as a side effect of certain medications.</p>
            <p>Early in life, color vision deficiencies can affect development, as color is oftentimes used as a learning reference tool.  There is no cure for inherited color blindness, but learning adaptive methods and reference points early on can have a profound impact.  Consult with your physician or healthcare professional for further testing.</p>
          </div>
          <br/>
          <SocialMedia message={this.state.mild}/>
          <br/>
          <div id="disclaimer">{this.state.disclaimer}</div>
        </div>
      );
    }else if (this.state.score == 1) {
      return(
        <div className="results">
          <ScoreBar score={this.state.score}/>
          <br />
          <div id="interpretation">{this.state.perfect}</div>
          <br />
          <SocialMedia message={this.state.perfect}/>
          <br/>
          <div id="disclaimer">{this.state.disclaimer}</div>
        </div>
        );
    }else {
      return(
        <div className="results">
          <ScoreBar score={this.state.score}/>
          <br />
          <div id="interpretation">{this.state.normal}</div>
          <br/>
          <SocialMedia message={this.state.normal}/>
          <br/>
          <div id="disclaimer">{this.state.disclaimer}</div>
        </div>
      );
    }
  }
}

export default Result;
