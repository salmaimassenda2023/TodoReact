import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export const ToDo=({task,toggleComplete,deleteTask,editTodo})=>{
    return(
        <div className="Todo">
            <p onClick={()=>toggleComplete(task.id)}  className={`${task.completed ? 'completed':"" }`}>
                {task.task}
            </p>
            <div>
                <FontAwesomeIcon  onClick={()=>editTodo(task.id)}  icon={faPenToSquare}  />
                <FontAwesomeIcon onClick={()=>deleteTask(task.id)}  icon={faTrash} />
            </div>
        </div>
    )

}