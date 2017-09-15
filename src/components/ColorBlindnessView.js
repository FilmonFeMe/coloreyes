import React, { Component } from 'react';
import '../stylesheets/components/simulator.css';

class ColorBlindnessView extends Component {

  componentWillMount() {
    const script1 = document.createElement("script");
    script1.src = "jsColorblindSimulator/panZoomImage.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "jsColorblindSimulator/hcirn_colorblind_simulation.js";
    script2.async = true;
    document.body.appendChild(script2);

    const script3 = document.createElement("script");
    script3.src = "jsColorblindSimulator/colorblind.js";
    script3.async = true;
    document.body.appendChild(script3);

    const script4 = document.createElement("script");
    script4.src = "jsColorblindSimulator/colorblindViewInterface.js";
    script4.async = true;
    document.body.appendChild(script4);
  };

  render(){
    var displayNone = {
      display: 'none'
    };
    var height100 = {
      height: '100%'
    };

    return (
      <div id="simulator">
        <h1>Try the simulator!</h1>
        <div id="aboutBox" className="boxed">
        </div>
        <div className="container">
          <div>
            <label className="fileContainer">Click here
            <input type="file" id="fileInput"/></label><span id="loadingIndicator" style={displayNone}>&nbsp;&nbsp;&nbsp;Computing...</span>
            <br />
            <ul id="viewOptions">
            <li><label><input type="radio" name="colorblindType" value="Normal" id="defaultCheck"/> Normal</label></li>
            <li><label><input type="radio" name="colorblindType" value="Protanopia"/> Protanopia</label></li>
            <li><label><input type="radio" name="colorblindType" value="Protanomaly"/> Protanomaly</label></li>
            <li><label><input type="radio" name="colorblindType" value="Deuteranopia"/> Deuteranopia</label></li>
            <li><label><input type="radio" name="colorblindType" value="Deuteranomaly"/> Deuteranomaly</label></li>
            <li><label><input type="radio" name="colorblindType" value="Tritanopia"/> Tritanopia</label></li>
            <li><label><input type="radio" name="colorblindType" value="Tritanomaly"/> Tritanomaly</label></li>
            <li><label><input type="radio" name="colorblindType" value="Achromatopsia"/> Achromatopsia</label></li>
            <li><label><input type="radio" name="colorblindType" value="Achromatomaly"/> Achromatomaly</label></li>
            </ul>
          </div>
          <div>
            <hr/>
          </div>
          <div style={height100} id="canvasDiv">
            <div id="dropNotification" className="boxed" style={displayNone}><h1>Drop your image to load it</h1></div>
            <canvas id="outCanvas">Your Browser does not support &lt;canvas&gt;.</canvas>
          </div>
        </div>
      </div>
      );
  }
}

export default ColorBlindnessView;
