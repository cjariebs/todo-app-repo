import React from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import TodoApi from './TodoApi';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {list: []};
  }

  componentDidMount() {
    const api = new TodoApi();
    api.getListData().then(data => {
      this.setState({list: data});
    });
  }

  handleSubmit = input => {
    const newTodo = {
      title: input,
      content: input,
    };
    const api = new TodoApi();
    api.addListItem(newTodo);

    this.setState(state => {
      return {list: [...state.list, newTodo], input: ''};
    });
  };

  handleDelete = id => {
    const newList = this.state.list.filter((i) => (i.id !== id));
    this.setState({list: newList});

    const api = new TodoApi();
    api.removeListItem(id);
  };

  render() {
    return (
      <div className="App">
        <TodoInput handleSubmit={this.handleSubmit} />
        <TodoList list={this.state.list} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
