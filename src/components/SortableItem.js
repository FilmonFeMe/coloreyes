import React, {Component} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import {connect} from 'react-redux'
import * as actions from '../actions'

const SortableItem = SortableElement(({value}) =>
  <div className="SortableItem" style={{"background-color":value}}>{value}</div>
);

const SortableList = SortableContainer(({row1}) => {
  return (
    <div className="SortableList">
      {row1.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </div>
  );
});

class SortableComponent extends Component {
  
  state = {
    row1:["#ac7672","#ab756d","#aa7469","#aa7365","#a77161","#a57260","#a4725c","#a47258","#a37356","#a27554","#a37752","#a37951","#a47b4e","#a27b49","#a17d48","#a28149","#9f844a","#9a8347","#9c8a4c","#9a8a4c","#95894c","#8f8c4a"],
    row2:["#8f8c4a","#8e8f57","#8b9058","#88915c","#859360","#809262","#7e9566","#7e9568","#78966a","#75966c","#71986d","#6a9871","#699973","#699a77","#609877","#5a947a","#5b967e","#589681","#599784","#559685","#549988","#549789"],
    row3:["#549789","#52968c","#50978f","#499892","#459995","#4b9997","#4b9898","#50999d","#5597a0","#5496a2","#5996a3","#5f95a5","#6695a4","#6792a5","#6c92a9","#6b8da6","#7290aa","#728da9","#768daa","#788aa8","#7985a2","#8088a5"],
    row4:["#8088a5","#8489a6","#8888a6","#8a88a4","#8f88a4","#9287a3","#9386a0","#98859f","#98849c","#9b8198","#a08298","#9d7c91","#a37e92","#a77e90","#a77b8c","#a87988","#aa7784","#ac7982","#ac757e","#ab757a","#a97375","#ad7776"]
  };

  // componentWillMount(){
  //   this.props.HuesList();
  // }

  // renderList = (hues) =>{
  //   if(hues){
  //     // console.log(hues+" from render list function")
  //     return hues.map((hueSection)=>{
  //       // console.log(hueSection+" from map function")
  //       return hueSection.map((hue)=>{
  //         // console.log(hue.id+" from sublevel function")
  //         return (
  //           // console.log(this.props)
  //           <div key={hue.id}>
  //             <SortableList hue={hue} key={hue.id} onSortEnd={this.onSortEnd} />;
  //           </div>
  //       )
  //       })
  //     })
  //   }  
  // }

  render() {
    return (
      <div>
       <h1>Hue Test</h1>
          {/* {this.renderList(this.props.hues)} */}
          <SortableList row1={this.state.row1} onSortEnd={this.onSortEnd} />;
      </div>
    );
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      row1: arrayMove(this.state.row1, oldIndex, newIndex),
    });
  };
}

// function mapStateToProps(state){
//   return {
//     hues:state.hues
//   }
// }

export default SortableComponent;
// render(<SortableComponent/>, document.getElementById('root'));
// export default connect(mapStateToProps,actions)(SortableComponent);