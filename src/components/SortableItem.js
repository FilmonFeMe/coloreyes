import React, {Component} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import {connect} from 'react-redux'
import * as actions from '../actions'

const SortableItem = SortableElement(({value}) =>
  <div className="SortableItem">{value}</div>
);

const SortableList = SortableContainer(({items}) => {
  return (
    <div className="SortableList">
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </div>
  );
});

class SortableComponent extends Component {
  state = {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
  };

  componentWillMount(){
    this.props.HuesList();
  }

  renderList = (hues) =>{
    if(hues){
      console.log(hues+" from render list function")
      return hues.map((hue)=>{
        console.log(hue["row-1"][0]["RGB Hex"]+" from map function")
        return (
            <div key={hue.id}>
              <SortableList hue={hue} key={hue.id} onSortEnd={this.onSortEnd} />;
            </div>
        )
      })
    }  
  }

  render() {
    return (
      <div>
       <h1>Hue Test</h1>
          {this.renderList(this.props.hues)}
      </div>
    );
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };
}
function mapStateToProps(state){
  console.log(state)
  return {
    hues:state.hues
  }
}
export default connect(mapStateToProps,actions)(SortableComponent);