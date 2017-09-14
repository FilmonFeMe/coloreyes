import React, {Component} from 'react';

class HueResult extends Component {
    constructor(props) {
      super(props);
    }
  
    render(){
        console.log(this.props);
      return (
        <div>
            <h1>Results</h1>
       </div>
      );
    }
  }
  
  export default HueResult;



//   setRowScore(hueSet,rowSet, rowScore){
//     var score = 0;
//     for(var i=0; i < rowSet.length; i++){
//       if(hueSet[i] == rowSet[i]){
//         score++;
//       }
//     }
//     this.setState({
//       rowScore: score
//     });
//     console.log(this.state.row1Score)
//   }

//   generateResults(){
//     this.setRowScore(hues1,this.state.row1,"row1Score")
//     this.setRowScore(hues2,this.state.row2,"row2Score")
//     this.setRowScore(hues3,this.state.row3,"row3Score")
//     this.setRowScore(hues4,this.state.row4,"row4Score")   
//     console.log("scores: 1: "+this.state.row1Score+" 2: "+this.state.row2Score+" 3: "+this.state.row3Score+" 4: "+this.state.row4Score) 
//   }