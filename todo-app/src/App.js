import React from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import TodoApi from './services/TodoApi';

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
      text: input,
    };

    const api = new TodoApi();
    api.addListItem(newTodo).then(todo => {
      this.setState(state => {
        return {list: [...state.list, todo], input: ''};
      });
    });
  };

  handleDelete = id => {
    const newList = this.state.list.filter(i => i.id !== id);
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
