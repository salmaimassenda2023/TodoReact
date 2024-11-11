import React, {useState} from "react";


export const ToDoForm=({addToDo})=>{

    const [input,setInput]=useState("");

    //Fonctions Gestionnaires
    const HandleOnSubmit=(e)=> {
       e.preventDefault();
       addToDo(input);
       setInput("");
    }
    const HandleOnChange=(e)=> {
          setInput(e.target.value);
    }

    return(
        <form className="TodoForm " onSubmit={HandleOnSubmit}>
            <input type="text" className="todo-input" placeholder="What is the task today ? " value={input} onChange={HandleOnChange}/>
            <button type="submit" className="todo-btn">Add Task</button>
        </form>
    )

}