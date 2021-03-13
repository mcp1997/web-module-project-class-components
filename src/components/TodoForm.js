import React, { Component } from 'react'

class TodoForm extends Component {
  constructor() {
    super()
    this.state = {
      itemText: '',
    }
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state.itemText)
    this.setState({
      itemText: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type='text' 
          name='itemText' 
          value={this.state.itemText}
          onChange={this.handleChanges}
        />
        <button>Add Todo</button>
      </form>
    )
  }
}

export default TodoForm