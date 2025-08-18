import React from "react";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({tasks, decreasePriority, increasePriority, deleteTask}) => {

  return (
    <div>
        {tasks.map((task, indx) => {
                    return <TodoItem 
                        key={indx} 
                        task = {task}
                        decreasePriority={decreasePriority}
                        increasePriority={increasePriority}
                        deleteTask={deleteTask}
                    />
                })}
    </div>
  );
};

export default TodoList;
