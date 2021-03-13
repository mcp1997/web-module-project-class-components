import React from 'react'

import Todo from './Todo'

const TodoList = props => {

  const handleClick = () => {
    props.remove()
  }

  return (
    <div className='todo-list'>
      {props.todos.map(item => (
        <Todo key={item.id} todo={item} toggleTodo={props.toggleTodo} />
      ))}
      <button onClick={handleClick} className='clear-btn'>Clear Completed</button>
    </div>
  )
}

export default TodoList
