import React, {useState} from "react";


export const EditToDoForm=({editTask,task})=>{

    const [input,setInput]=useState(task.task);

    //Fonctions Gestionnaires
    const HandleOnSubmit=(e)=> {
        e.preventDefault();
        editTask(input,task.id);
        setInput("");
    }
    const HandleOnChange=(e)=> {
        setInput(e.target.value);
    }

    return(
        <form className="TodoForm " onSubmit={HandleOnSubmit}>
            <input type="text" className="todo-input" placeholder="Update Task " value={input} onChange={HandleOnChange}/>
            <button type="submit" className="todo-btn">Update Task</button>
        </form>
    )

}