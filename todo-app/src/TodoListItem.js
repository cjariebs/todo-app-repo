import React from 'react';

class TodoListItem extends React.Component {
  render() {
    return (
      <li key={this.props.item.id} className="TodoListItem">
        <b>{this.props.item.title}</b> - <span>{this.props.item.content}</span>
        <button type="button" onClick={() => this.props.handleDelete(this.props.item.id)}>
          x
        </button>
      </li>
    );
  }
}

export default TodoListItem;
