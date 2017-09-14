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
        { subject: 'Hue 1', A: this.props.row1Score, fullMark: 22 },
        { subject: 'Hue 2', A: this.props.row2Score, fullMark: 22 },
        { subject: 'Hue 3', A: this.props.row3Score, fullMark: 22 },
        { subject: 'Hue 4', A: this.props.row4Score, fullMark: 22 }
        ]}>
        <Radar name="Results" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
        {/* <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6}/> */}
        <PolarGrid />
        <Legend />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 22]}/>
    </RadarChart>
        );
    }
}

export default Chart;