import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem = ({ task, decreasePriority, increasePriority, deleteTask }) => {
	return (
		<div className={classes['TodoItem']}>
			<div>{task}</div>
			<div className={classes['BtnGrp']}>
				<button className={classes["upBtn"]} onClick={()=>increasePriority(task)}>⬆</button>
				<button className={classes["downBtn btn"]} onClick={() => decreasePriority(task)}>⬇</button>
				<button className={classes["deleteBtn btn"]} onClick={() => deleteTask(task)}>x</button>
			</div>
		</div>
	);
};

export default TodoItem;
