import React, { Component } from 'react';
import * as d3 from "d3";
import { Link } from 'react-router-dom';

class Logo extends Component {

  render() {
    return (
      <Link to="/">
        <svg width="500" height="500">
        </svg>
      </Link>
    )
  };

  componentDidMount() {

    // set svg variable; enable reference for scaling
    let svg = d3.select("svg"),
      width = +svg.attr("width"),
      height = +svg.attr("height"),
      angles = d3.range(0, 2 * Math.PI, Math.PI / 200);

    // create iris
    svg.append("circle")
      .attr("class", "iris")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
      .attr("r", width * .27)
      .attr("fill", "black")

    // create flare
    svg.append("circle")
      .attr("class", "iris")
      .attr("transform", "translate(" + (6/5) * width / 2 + "," + (4/5) * height / 2 + ")")
      .attr("r", width * .053)
      .attr("fill", "white")

      // create outer ring
    svg.append("circle")
      .attr("class", "outer-ring")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
      .attr("r", width * .35)
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-width", 0.5)


    let path = svg.append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
      .attr("fill", "none")
      .attr("stroke-width", 5)
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
        let speed = d3.now() / 1500;
        let circumference = width * .35;
        let waveAmplitude = width * .03;
        let waveFrequency = width * .02;
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

export default Logo;
