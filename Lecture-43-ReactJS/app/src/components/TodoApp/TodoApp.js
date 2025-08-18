import React, { useState } from "react";
import TodoList from "../TodoList/TodoList";

const TodoApp = () => {
	let initialTask = ["Cricet", "Batminton", "Chess"];
	const [tasks, setTask] = useState(initialTask);

	function decreasePriority(task) {
		let newTask = [...tasks];
		let indx = newTask.indexOf(task);
		if (indx < newTask.length - 1) {
			let temp = newTask[indx];
			newTask[indx] = newTask[indx + 1];
			newTask[indx + 1] = temp;
            setTask(newTask)
		}
        // console.log("Decrease" , task);
        
	}

    function increasePriority(task) { 
        // console.log("Increase" , task);
        let newTask = [...tasks];
        let indx = newTask.indexOf(task)
        if(indx > 0) {
            let temp = newTask[indx]
            newTask[indx] = newTask[indx-1]
            newTask[indx - 1] = temp
            setTask(newTask);
        } 
    }

    function deleteTask(task) { 
        // console.log("Increase" , task);
        task = tasks.filter((t)=> t !== task)
        setTask(task)
    }

	return (
		<div>
			<h1>TodoApp</h1>
			<ul>
				<TodoList 
                    tasks={tasks}
                    decreasePriority={decreasePriority}
                    increasePriority={increasePriority}
                    deleteTask={deleteTask}
                />
			</ul>
		</div>
	);
};

export default TodoApp;
