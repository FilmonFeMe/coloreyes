import React, { Component } from 'react';
import ProgressBar from 'react-progressbar.js';
var Circle = ProgressBar.SemiCircle;

class Bar extends Component{
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
      from: {color: '#FFEA82'},
      to: {color: '#ED6A5A'},
      // Set default step function for all animate calls
      step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
        var value = Math.round(bar.value() * 100);
        if (value === 0) {
          bar.setText('');
        } else {
          bar.setText(value+"%");
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
        progress={this.props.progress}
        text={'test'}
        options={options}
        initialAnimate={true}
        containerStyle={containerStyle}
        containerClassName={'.progressbar'} />
    );
  }
};

export default Bar;
