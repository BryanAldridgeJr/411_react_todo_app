import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      isClicked: true,
      inputValue: "",
      listOfTodos: []
    }
  }

  handleClick = (index) => {
    const updatedTodos = [...this.state.listOfTodos];
    updatedTodos.splice(index, 1);

    this.setState({ listOfTodos: updatedTodos });
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      inputValue: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({listOfTodos: [...this.state.listOfTodos, this.state.inputValue]})
    this.setState({inputValue: ""})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Enter Todos Below</h1>
         
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.inputValue} onChange={this.handleChange} id="input"/>
            <button type="submit">Submit</button>
          </form>
          <ol>{this.state.listOfTodos.map((todo, index) => {
            return <li key={index}>
              {todo}
              <button id="button" onClick={() => this.handleClick(index)}>Delete</button>
              </li>
          })}</ol>
          
        </header>
      </div>
    );
  }
}

export default App;
