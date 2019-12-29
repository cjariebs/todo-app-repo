import React from 'react';

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: ''};
  }

  handleChange = event => {
    this.setState({input: event.target.value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.input);
  }


  render() {
    return (
      <form
        className="textInput"
        onSubmit={this.handleSubmit}>
        <label htmlFor="todoText">
          What do you need to do?
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default TodoInput;
