import React from 'react';

import './components/Todo.css'

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      todos: todos
    }
  }

  // Class methods to update state
  toggleTodo = (clickedOnId) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if(item.id === clickedOnId) {
          return {
            ...item,
            completed: !item.completed,
          }
        } else {
          return item
        }
      })
    })
  }

  addTodo = (todoName) => {
    const newTodo = {
      task: todoName,
      id: new Date(),
      completed: false,
    }
    this.setState({
      todos: [ ...this.state.todos, newTodo ],
    })
  }

  removeCompleted = () => {
    const newTodos = this.state.todos.filter(item => {
      return(!item.completed)
    })

    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h1>Todo List</h1>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList toggleTodo={this.toggleTodo} remove={this.removeCompleted} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
