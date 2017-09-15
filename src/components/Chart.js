import React, {Component} from 'react';
import Recharts, {Radar, RadarChart, PolarGrid, Legend,
    PolarAngleAxis, PolarRadiusAxis} from 'recharts';
import HueResult from './HueResult';

class Chart extends Component{
    constructor(props) {
        super(props);
      }
      
    render () { 
    return (
    <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={[
        { subject: 'Green spectrum', A: this.props.row1Score, A:this.props.row2Score, fullMark: 40 },
        { subject: 'Cyan spectrum', A: this.props.row2Score, A:this.props.row3Score, fullMark: 40 },
        { subject: 'Magenta spectrum', A: this.props.row3Score, A:this.props.row4Score, fullMark: 40 },
        { subject: 'Orange spectrum', A: this.props.row4Score, A:this.props.row1Score, fullMark: 40 }
        ]}>
        <Radar name="Visual Acuity" dataKey="A" stroke="#5492f7" fill="#5492f7" fillOpacity={0.6}/>
        <PolarGrid />
        <Legend />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={90} domain={[0, 40]}/>
    </RadarChart>
        );
    }

}

export default Chart;