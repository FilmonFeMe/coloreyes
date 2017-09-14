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
        { subject: "Muesli - Coral Tree", A: this.props.row1Score, B:this.props.row2Score, fullMark: 22 },
        { subject: 'Coral Tree - Half Baked', B: this.props.row2Score, C:this.props.row3Score, fullMark: 22 },
        { subject: 'Half Baked - Ship Cove', C: this.props.row3Score, D:this.props.row4core, fullMark: 22 },
        { subject: 'Ship Cove - Turkish Rose', D: this.props.row4Score, A:this.props.row1Score, fullMark: 22 }
        ]}>
        <Radar name="Muesli" dataKey="A" stroke="#ac7672" fill="#ac7672" fillOpacity={0.6}/>
        <Radar name="Coral Tree" dataKey="B" stroke="#8f8c4a" fill="#8f8c4a" fillOpacity={0.6}/>
        <Radar name="Half Baked" dataKey="C" stroke="#549789" fill="#549789" fillOpacity={0.6}/>
        <Radar name="Ship Cove" dataKey="D" stroke="#8088a5" fill="#8088a5" fillOpacity={0.6}/>
        <Radar name="Turkish Rose" stroke="#ad7776" fill="#ad7776" fillOpacity={0.6}/>
        <PolarGrid />
        <Legend />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={45} domain={[0, 22]}/>
    </RadarChart>
        );
    }

}

export default Chart;