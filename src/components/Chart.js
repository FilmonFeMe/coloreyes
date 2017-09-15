import React, {Component} from 'react';
import Recharts, {Radar, RadarChart, PolarGrid, Legend,
    PolarAngleAxis, PolarRadiusAxis} from 'recharts';
import HueResult from './HueResult';

class Chart extends Component{
    constructor(props) {
        super(props);
      }
      
    render () { 
        let [green, yellow, red, blue] = ["#ff1100", "#fff300", "#00ff6e", "#0037ff"]; 
    return (
    <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={[
        { subject: 'Yellow - Red', A: this.props.row1Score, B:this.props.row2Score, fullMark: 20 },
        { subject: 'Green - Yellow', B: this.props.row2Score, C:this.props.row3Score, fullMark: 20 },
        { subject: 'Green - Blue', C: this.props.row3Score, D:this.props.row4Score, fullMark: 20 },
        { subject: 'Blue - Red', D: this.props.row4Score, A:this.props.row1Score, fullMark: 20 }
        ]}>
        <Radar name="Green Acuity" dataKey="A" stroke={green} fill={green} fillOpacity={0.6}/>
        <Radar name="Yellow Acuity" dataKey="B" stroke={yellow} fill={yellow} fillOpacity={0.6}/>
        <Radar name="Red Acuity" dataKey="C" stroke={red} fill={red} fillOpacity={0.6}/>
        <Radar name="Blue Acuity" dataKey="D" stroke={blue} fill={blue} fillOpacity={0.6}/>
        <PolarGrid />
        <Legend />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={90} domain={[0, 20]}/>
    </RadarChart>
        );
    }

}

export default Chart;