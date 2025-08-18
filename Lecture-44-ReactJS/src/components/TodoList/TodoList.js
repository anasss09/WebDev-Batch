import React from 'react'
import TodoItem from '../TodoItem/TodoItem'

function TodoList({tasks, Increase, Decrease, Delete}) {
  return (
    <div>
        <ul>
            {tasks.map((task, indx) => (
                <TodoItem key={indx} 
                taskName={task}
                Increase = {Increase}
                Decrease = {Decrease}
                Delete = {Delete} />
            ))}
        </ul>
    </div>
  )
}

export default TodoList