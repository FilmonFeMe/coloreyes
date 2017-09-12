import React, {Component} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

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
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };
  render() {
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;
  }
}

export default SortableComponent;