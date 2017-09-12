import React, { Component } from 'react';

class Result extends Component {
  render() {
    return(
      <div className="results">
        <div>Quiz completed.</div>
        <div>Correct answers: {this.props.numCorrect}/{this.props.numberOfQuestions}</div>
        <div class="fb-share-button" data-href="https://secret-citadel-79719.herokuapp.com" data-layout="button" data-size="large" data-mobile-iframe="false"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsecret-citadel-79719.herokuapp.com%2F&amp;src=sdkpreparse"><img className="fb-share" src="images/fb_share2.jpeg" alt="Share"></img></a></div>
      </div>
      );
  }
}

export default Result;
