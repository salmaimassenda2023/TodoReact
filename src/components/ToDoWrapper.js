import React, {useState} from "react";
import {ToDoForm} from "./ToDoForm";
import { v4 as uuidv4 } from 'uuid';
import {ToDo} from "./ToDo";
import {EditToDoForm} from "./EditToDoForm";

export const ToDoWrapper=()=>{
    const [items,setItems]=useState([]);

    //ajouter une tache
    const addTask=(todo)=>{
        setItems([...items,{id:uuidv4(),task:todo,completed:false,isEditing:false}]);
    }
    //supprimer une tache : on applique un filtre
    const deleteTask=(id)=>{
        setItems(items.filter(item=>item.id!=id));
    }
    //Editer letat d une tache
    const editTodo=(id)=>{
        setItems(items.map(item=>item.id===id ? {...item,isEditing:!item.isEditing}:item));

    }
    //Editer une tache
    const editTask=(tache,id)=>{
        setItems(items.map(item=>item.id===id ? {...item,task:tache,isEditing:!item.isEditing}:item));

    }

    // changer l'etat d'une tahce
    const toggleComplete=(id)=>{
        setItems(items.map(item => item.id===id ? {...item,completed:!item.completed}:item ));
    }

    return(
        <div className="TodoWrapper">
            <h1>Get Things Donne!</h1>
            <ToDoForm addToDo={addTask}/>
            {
                items.map(
                    (item,index)=>{
                        return item.isEditing ? ( <EditToDoForm editTask={editTask} task={item}/>
                            ):(
                            <ToDo task={item} key={index}
                                  toggleComplete={toggleComplete}
                                  deleteTask={deleteTask}
                                  editTodo={editTodo}/>

                        )

                    }
                )
            }
        </div>

    )
}