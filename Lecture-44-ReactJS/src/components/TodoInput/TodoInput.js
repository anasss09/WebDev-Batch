import React, { useRef } from 'react'

function TodoInput({ addTask }) {

    const taskName = useRef();


    function addToHandle() {
        console.log(taskName.current.value)
        addTask(taskName.current.value)
    }

  return (
    <div>
        <input ref={taskName} type='text' placeholder='Item to Add' />

        <button onClick={addToHandle}>Add Todo</button> 
    </div>
  )
}

export default TodoInput