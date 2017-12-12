import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React with Redux</h1>
        </div>
        <div className="Todo-App">
          <TodoForm
            changeCurrent={this.props.changeCurrent}
            currentTodo={this.props.currentTodo} />
          <TodoList todos={this.props.todos} />
        </div>
      </div>
    );
  }
}

export default App;
