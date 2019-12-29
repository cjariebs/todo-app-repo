import React from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends React.Component {
  render() {
    return (
      <ul className="todoList">
        {this.props.list.map(item => (
          <TodoListItem
            key={item.title}
            item={item}
            handleDelete={this.props.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
