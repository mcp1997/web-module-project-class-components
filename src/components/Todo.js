import React from 'react'

const Todo = props => {

  const handleClick = () => {
    props.toggleTask(props.todo.id)
  }

  return (
    <div onClick={handleClick} className={`task${props.todo.completed ? ' completed' : ''}`}>
      <ul>
        <li>{props.todo.task}</li>
      </ul>
    </div>
  )
}

export default Todo