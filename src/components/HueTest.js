import React, {Component} from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import HueResult from './HueResult';

const SortableItem = SortableElement(({value}) =>
  // console.log({this.index})
  <div className="SortableItem" style={{"backgroundColor":value}}></div>
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

const shuffleArray = function(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  // console.log(array);
  return array;
};

const hues1 = ["#ac7672","#ab756d","#aa7469","#aa7365","#a77161","#a57260","#a4725c","#a47258","#a37356","#a27554","#a37752","#a37951","#a47b4e","#a27b49","#a17d48","#a28149","#9f844a","#9a8347","#9c8a4c","#9a8a4c","#95894c","#8f8c4a"];
const hues2 = ["#8f8c4a","#8e8f57","#8b9058","#88915c","#859360","#809262","#7e9566","#7e9568","#78966a","#75966c","#71986d","#6a9871","#699973","#699a77","#609877","#5a947a","#5b967e","#589681","#599784","#559685","#549988","#549789"];
const hues3 = ["#549789","#52968c","#50978f","#499892","#459995","#4b9997","#4b9898","#50999d","#5597a0","#5496a2","#5996a3","#5f95a5","#6695a4","#6792a5","#6c92a9","#6b8da6","#7290aa","#728da9","#768daa","#788aa8","#7985a2","#8088a5"];
const hues4 = ["#8088a5","#8489a6","#8888a6","#8a88a4","#8f88a4","#9287a3","#9386a0","#98859f","#98849c","#9b8198","#a08298","#9d7c91","#a37e92","#a77e90","#a77b8c","#a87988","#aa7784","#ac7982","#ac757e","#ab757a","#a97375","#ad7776"];

class HueTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      row1:shuffleArray(["#ac7672","#ab756d","#aa7469","#aa7365","#a77161","#a57260","#a4725c","#a47258","#a37356","#a27554","#a37752","#a37951","#a47b4e","#a27b49","#a17d48","#a28149","#9f844a","#9a8347","#9c8a4c","#9a8a4c","#95894c","#8f8c4a"]),
      row2:shuffleArray(["#8f8c4a","#8e8f57","#8b9058","#88915c","#859360","#809262","#7e9566","#7e9568","#78966a","#75966c","#71986d","#6a9871","#699973","#699a77","#609877","#5a947a","#5b967e","#589681","#599784","#559685","#549988","#549789"]),
      row3:shuffleArray(["#549789","#52968c","#50978f","#499892","#459995","#4b9997","#4b9898","#50999d","#5597a0","#5496a2","#5996a3","#5f95a5","#6695a4","#6792a5","#6c92a9","#6b8da6","#7290aa","#728da9","#768daa","#788aa8","#7985a2","#8088a5"]),
      row4:shuffleArray(["#8088a5","#8489a6","#8888a6","#8a88a4","#8f88a4","#9287a3","#9386a0","#98859f","#98849c","#9b8198","#a08298","#9d7c91","#a37e92","#a77e90","#a77b8c","#a87988","#aa7784","#ac7982","#ac757e","#ab757a","#a97375","#ad7776"]),
      row1Score:0,
      row2Score:0,
      row3Score:0,
      row4Score:0,
      results:false
    };
    this.generateResults = this.generateResults.bind(this);
  }

  generateResults(){
    var score1=0, score2=0, score3=0, score4 = 0;
    for(var i=0; i < this.state.row1.length; i++){
      if(hues1[i] == this.state.row1[i]){
        score1++;
      }
    }
    for(var i=0; i < this.state.row2.length; i++){
      if(hues2[i] == this.state.row2[i]){
        score2++;
      }
    }
    for(var i=0; i < this.state.row3.length; i++){
      if(hues3[i] == this.state.row3[i]){
        score3++;
      }
    }
    for(var i=0; i < this.state.row4.length; i++){
      if(hues4[i] == this.state.row4[i]){
        score4++;
      }
    }
    // console.log(score)
    this.setState({
      row1Score:score1,
      row2Score:score2,
      row3Score:score3,
      row4Score:score4,
      results:true
    });
  }

  render() {
    if(this.state.results){
      return(
        <HueResult {...this.state}/>
      )
    }
    return (
      <div className="Hues">
       <h1>Hue Test</h1>
        <div className="instructions">
          <h2>Instructions:</h2>
          <ul>
            <li>Sort all chips in each colum by color hue.</li>
            <li>The top and bottom chips are fixed.</li>
            <li>Click "Done" once you finish sorting.</li>
          </ul>
        </div>
        <div id="container-hue">
        <SortableList row={this.state.row1} onSortEnd={this.onSortEnd1} firstBox={"#ac7672"} lastBox={"#8f8c4a"}/>
        <SortableList row={this.state.row2} onSortEnd={this.onSortEnd2} firstBox={"#8f8c4a"} lastBox={"#549789"}/>
        <SortableList row={this.state.row3} onSortEnd={this.onSortEnd3} firstBox={"#549789"} lastBox={"#8088a5"}/>
        <SortableList row={this.state.row4} onSortEnd={this.onSortEnd4} firstBox={"#8088a5"} lastBox={"#ad7776"}/>
        <button type="button" onClick={this.generateResults}>Done</button>
      </div>
      </div>
    );
  }

  onSortEnd1 = ({oldIndex, newIndex}) => {
    this.setState({
      row1: arrayMove(this.state.row1, oldIndex, newIndex)
    });
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

export default HueTest;