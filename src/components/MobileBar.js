import React, { Component } from 'react';
import ProgressBar from 'react-progressbar.js';
var Line = ProgressBar.Line;

class MobileBar extends Component{
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
      svgStyle: {width: '100%', height: '100%'},
      text: {
        style: {
          // Text color.
          // Default: same as stroke color (options.color)
          color: '#999',
          position: 'absolute',
          right: '0',
          top: '30px',
          padding: 0,
          margin: 0,
          transform: null
          },
        autoStyleContainer: false
      },
      from: {color: '#FFEA82'},
      to: {color: '#ED6A5A'},
      // Set default step function for all animate calls
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    };

    var containerStyle = {
        margin: '20px',
        width: '50%',
        height: '8px',
        position: 'relative',
        left: '25%'
    };

    return (
      <Line
        progress={this.props.progress}
        text={'test'}
        options={options}
        initialAnimate={true}
        containerStyle={containerStyle}
        containerClassName={'.progressbar'} />
    );
  }
};

export default MobileBar;
