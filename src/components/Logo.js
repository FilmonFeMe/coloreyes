import React, { Component } from 'react';
import * as d3 from "d3";
import '../stylesheets/components/logo.css';

class NavbarLogo extends Component {

  render() {
    return (
        <svg width="500" height="500">
        </svg>
    )
  };

  componentDidMount() {

    // set svg variable; enable reference for scaling
    let svg = d3.select("svg"),
      width = +svg.attr("width"),
      height = +svg.attr("height"),
      angles = d3.range(0, 2 * Math.PI, Math.PI / 200);


    // create iris
    let irisGradient = svg.append("defs")
    .append("radialGradient")
    .attr("id", "iris-gradient");

    irisGradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#000000");

    irisGradient.append("stop")
    .attr("offset", "33%")
    .attr("stop-color", "#000000");

    irisGradient.append("stop")
    .attr("offset", "42%")
    .attr("stop-color", "#42d2ff");

    irisGradient.append("stop")
    .attr("offset", "93%")
    .attr("stop-color", "#000000");

    irisGradient .append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#000000");

      svg.append("circle")
      .attr("class", "iris")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
      .attr("r", width * .27)
      .attr("stroke", "black")
      .attr("stroke-width", 0)
      .attr("fill", "url(#iris-gradient)")


    // create flare
    let flareGradient = svg.append("defs")
    .append("radialGradient")
    .attr("id", "flare-gradient");

    flareGradient.append("stop")
    .attr("offset", "10%")
    .attr("stop-color", "#e0e0e0");

    flareGradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#000000");

    svg.append("circle")
      .attr("class", "iris")
      .attr("transform", "translate(" + 1.06 * width / 2 + "," + .94 * height / 2 + ")")
      .attr("r", width * .02)
      .attr("fill", "url(#flare-gradient)")


    let path = svg.append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
      .attr("fill", "none")
      .attr("stroke-width", 6)
      .attr("stroke-linejoin", "round")
    .selectAll("path")
    .data(["cyan", "magenta", "yellow"])
    .enter().append("path")
    .attr("stroke", function(d) { return d; })
    .style("mix-blend-mode", "darken")
    .datum(function(d, i) {
      return d3.radialLine()
      .curve(d3.curveLinearClosed)
      .angle(function(a) {
        return a;
      })
      .radius(function(a) {
        let speed = d3.now() / 1042;
        let circumference = width * .303;
        let waveAmplitude = width * .021;
        let waveFrequency = width * .014;
        return circumference + Math.cos(a * waveFrequency - i * 2 * Math.PI / 3 + speed) * Math.pow((1.05 + Math.cos(a - speed)) / 2, 12) * waveAmplitude;
      });
    });

    d3.timer(function() {
      path.attr("d", function(d) {
        return d(angles);
      });
    });
  }
}

export default NavbarLogo;
