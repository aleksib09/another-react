import './components/bulb.css';
import React, { Component } from 'react';
import Todo from './components/Todo';
import { useState } from 'react';
import './App.css'


class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [
        {title: 'di an', isDone: false},
        {title: 'di ngu', isDone: false},
        {title: 'di hoc', isDone: false},
        {title: 'di choi', isDone: false},
        {title: 'di lam', isDone: false},
      ]
    }
  }

  onItemClicked(item) {
    return(event) => {
      const isDone = item.isDone;
      const todoList = this.state.items;
      const index = todoList.indexOf(item);
      this.setState({
        items: [...todoList.slice(0, index),
        {
          ...item, isDone: !isDone
        },
        ...todoList.slice(index + 1)
      ]})
      console.log(index)
  }
}
  render() {
      return (
      <div className="App"><h1> todo list</h1>
          {
            this.state.items.map((item, index) => <Todo key={index} item={item} onClick={this.onItemClicked(item)}/>) 
            }
      </div>
    );  
    }
  }
export default App;
