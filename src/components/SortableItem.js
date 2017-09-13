import React, {Component} from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) =>
  // console.log({this.index})
  <div className="SortableItem" style={{"backgroundColor":value}}>{this.index}</div>
);

const SortableList = SortableContainer(({row, firstBox, lastBox}) => {
  return (
    <div style={{"display":"inline-block"}}>
      <div className="SortableList">
      <div className="SortableItem" style={{"backgroundColor":firstBox,"marginBottom":"5px"}}></div>
        {row.map((value, index) => (
          <SortableItem key={`item-${index}`} index={index} value={value} />
        ))}
      <div className="SortableItem" style={{"backgroundColor":lastBox,"marginTop":"5px"}}></div>        
      </div>
    </div>
  );
});


const firstValues = ["#ac7672", "#8f8c4a", "#549789", "#8088a5"];
const lastValues = ["#8f8c4a", "#549789", "#8088a5", "#ad7776"];


class SortableComponent extends Component {
  
  state = {
    row1:["#ac7672","#ab756d","#aa7469","#aa7365","#a77161","#a57260","#a4725c","#a47258","#a37356","#a27554","#a37752","#a37951","#a47b4e","#a27b49","#a17d48","#a28149","#9f844a","#9a8347","#9c8a4c","#9a8a4c","#95894c","#8f8c4a"],
    row2:["#8f8c4a","#8e8f57","#8b9058","#88915c","#859360","#809262","#7e9566","#7e9568","#78966a","#75966c","#71986d","#6a9871","#699973","#699a77","#609877","#5a947a","#5b967e","#589681","#599784","#559685","#549988","#549789"],
    row3:["#549789","#52968c","#50978f","#499892","#459995","#4b9997","#4b9898","#50999d","#5597a0","#5496a2","#5996a3","#5f95a5","#6695a4","#6792a5","#6c92a9","#6b8da6","#7290aa","#728da9","#768daa","#788aa8","#7985a2","#8088a5"],
    row4:["#8088a5","#8489a6","#8888a6","#8a88a4","#8f88a4","#9287a3","#9386a0","#98859f","#98849c","#9b8198","#a08298","#9d7c91","#a37e92","#a77e90","#a77b8c","#a87988","#aa7784","#ac7982","#ac757e","#ab757a","#a97375","#ad7776"]
  };

  render() {
    // this.shuffleRows;
    return (
      <div calssName="Hues">
       <h1>Hue Test</h1>
          <SortableList row={this.state.row1} onSortEnd={this.onSortEnd1} firstBox={"#ac7672"} lastBox={"#8f8c4a"}/>
          <SortableList row={this.state.row2} onSortEnd={this.onSortEnd2} firstBox={"#8f8c4a"} lastBox={"#549789"}/>
          <SortableList row={this.state.row3} onSortEnd={this.onSortEnd3} firstBox={"#549789"} lastBox={"#8088a5"}/>
          <SortableList row={this.state.row4} onSortEnd={this.onSortEnd4} firstBox={"#8088a5"} lastBox={"#ad7776"}/>
      </div>
    );
  }

  onSortEnd1 = ({oldIndex, newIndex}) => {
    this.setState({
      row1: arrayMove(this.state.row1, oldIndex, newIndex)
    });
    console.log(oldIndex+" "+newIndex)
  }

  onSortEnd2 = ({oldIndex, newIndex}) => {
    this.setState({
      row2: arrayMove(this.state.row2, oldIndex, newIndex)
    });
  }

  onSortEnd3 = ({oldIndex, newIndex}) => {
    this.setState({
      row3: arrayMove(this.state.row3, oldIndex, newIndex)
    });
  }

  onSortEnd4 = ({oldIndex, newIndex}) => {
    this.setState({
      row4: arrayMove(this.state.row4, oldIndex, newIndex)
    });
  }
}

export default SortableComponent;