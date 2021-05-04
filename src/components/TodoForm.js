import React from 'react'

class TodoForm extends React.Component {
  constructor() {
    super()
    this.state = {
      input: '',
    }
  }

  handleChanges = e => {
    this.setState({
      input: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addTask(this.state.input)
  }

  handleCompleted = () => {
    this.props.clearCompleted()
  }

  render() {
    return (
      <div className='form'>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChanges} type='text' name='task' />
          <button>Add Task</button>
        </form>
        <button onClick={this.handleCompleted} >Clear Completed</button>
      </div>
    )
  }
}

export default TodoForm