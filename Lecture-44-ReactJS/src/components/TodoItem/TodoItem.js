import React from 'react'

function TodoItem({taskName, Increase, Decrease, Delete}) {


  return (
    <div>
        <div>{taskName}</div>

        <div>
            <button onClick={() => {Increase(taskName)}}>⬆</button>
            <button onClick={() => {Decrease(taskName)}}>⬇</button>
            <button onClick={() => {Delete(taskName)}}>X</button>
        </div>
    </div>
  )
}

export default TodoItem