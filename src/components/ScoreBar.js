import React, { Component } from 'react';
import ProgressBar from 'react-progressbar.js';
var Circle = ProgressBar.SemiCircle;

class ScoreBar extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    var options = {
      strokeWidth: 6,
      color: '#FFEA82',
      trailColor: '#eee',
      trailWidth: 1,
      easing: 'easeInOut',
      duration: 1400,
      svgStyle: null,
      text: {
        value: '',
        alignToBottom: false
      },
      from: {color: '#f44242'},
      to: {color: '#59f441'},
      // Set default step function for all animate calls
      step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
        var value = Math.round(bar.value() * 100);
        if (value === 0) {
          bar.setText('0%');
        } else {
          bar.setText("Score: "+value+"%");
        }

        bar.text.style.color = state.color;
        bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
        bar.text.style.fontSize = '2rem';
      }

    };

    var containerStyle = {
        width: '50%',
        left: '25%'
    };

    return (
      <Circle
        progress={this.props.score}
        text={'test'}
        options={options}
        initialAnimate={true}
        containerStyle={containerStyle}
        containerClassName={'.progressbar'} />
    );
  }
};

export default ScoreBar;