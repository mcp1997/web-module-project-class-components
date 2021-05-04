import React from 'react';

import './components/Todo.css'

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import tasks from './components/tasks'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      tasks: tasks,
    }
  }

  addTask = (task) => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false,
    }
    
    const newTodoList = [...this.state.tasks, newTask]

    this.setState({
      tasks: newTodoList,
    })
  }

  toggleTask = (id) => {
    const newTodoList = this.state.tasks.map(item => {
      if(item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        }
      } else {
        return item
      }
    })

    this.setState({
      tasks: newTodoList,
    })
  }

  clearCompleted = () => {
    const newTodoList = this.state.tasks.filter(item => {
      return(item.completed === false)
    })

    this.setState({
      tasks: newTodoList,
    })
  }

  render() {
    console.log(this.state.tasks)
    return (
      <div>
        <div className='heading'>
          <h2>My To-Do's</h2>
          <h3>"The best way to get things DONE is to simply begin."</h3>
        </div>
        <TodoList toggleTask={this.toggleTask} tasks={this.state.tasks} />
        <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
