import React from 'react'
import Form from './Form'
import TodoList from './TodoList'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  handleAdd = newTask => {
    const newTodo = {
      id: this.state.todos[0] ? this.state.todos[this.state.todos.length - 1].id + 1 : 0,
      task: newTask,
      completed: false
    }

    this.setState({
      ...this.state,
      todos: [
        ...this.state.todos,
        newTodo
      ]
    })
  }

  handleComplete = clickedID => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if(todo.id === clickedID) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo
        }
      })
    })
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => todo.completed === false)
    })
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} handleComplete={this.handleComplete} />
        <Form todos={this.state.todos} handleAdd={this.handleAdd} handleClear={this.handleClear} />
      </div>
    )
  }
}
