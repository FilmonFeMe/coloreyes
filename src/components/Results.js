import React, { Component } from 'react';

class Result extends Component {
  render() {
    return(
      <div htmlClass="results">
        <div>Quiz completed.</div>
        <div>Correct answers: {this.props.numCorrect}/{this.props.numberOfQuestions}</div>
        <div className="fb-share-button" data-href="http://enchroma.com/" data-layout="button" data-size="large" data-mobile-iframe="true"><a className="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fenchroma.com%2F&amp;src=sdkpreparse"><img className="fb-share" src="images/fb_share2.jpeg"></img></a></div>
      </div>
      );
  }
}

export default Result;
