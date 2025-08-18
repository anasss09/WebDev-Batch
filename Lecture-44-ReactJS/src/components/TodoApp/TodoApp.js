import React, { useState } from 'react'
import TodoList from '../TodoList/TodoList';
import TodoItem from '../TodoItem/TodoItem';
import TodoInput from '../TodoInput/TodoInput';

function TodoApp() {

    let initialTask = ['Cricket', 'Football', 'Dance']
    const [tasks, setTask] = useState(initialTask);

    function addTask(newTask) {
        setTask([newTask, ...tasks])
    }


    function Decrease(taskName) {
        let newTask = [...tasks];
        let index = newTask.indexOf(taskName);
        if(index < newTask.length -1) {
            let temp = newTask[index];
            newTask[index] = newTask[index+1]
            newTask[index+1] = temp;
            setTask(newTask)
        }
        console.log("Decrease Value", taskName);
    }

    function Increase(taskName) {

        let newTask = [...tasks];
        let index = newTask.indexOf(taskName);
        if(index > 0) {
            let temp = newTask[index];
            newTask[index] = newTask[index - 1]
            newTask[index - 1] = temp;
            setTask(newTask)
        }
        console.log("Increase Value", taskName)
    }

    function Delete(taskName) {
        let newTask = tasks.filter(t => t !== taskName)
        setTask(newTask)
        console.log("Delete Value", taskName)
    }


  return (
    <div >   
        <h1>Todo App</h1>

        <div >
            <TodoInput addTask = {addTask} />

            <TodoList  tasks = {tasks} 
            Increase = {Increase}
            Decrease= {Decrease}
            Delete = {Delete}
             />
        </div>
    </div>
    )
}

export default TodoApp