import NewTodoForm from './NewTodoForm';
import React, { useState } from "react";
import {v4 as uuid} from "uuid"
import Todo from './Todo';

function TodoList(){

    const [todos, setTodos] = useState([])

    const handleSetTodos = (data) => {
      setTodos((currTodos) => {
        return [...currTodos, {id : uuid(), data : data}]
      })
    }

    const handleDeleteTodos = (id) => {
        setTodos((currTodos) => {
            return currTodos.filter((todo) => {
                if(todo.id !== id){
                    return todo;
                }
            })
        })
    }


    return(
        <div>
            <NewTodoForm handleSetTodos={handleSetTodos} />
            {todos.map((todo) => { 
                return <Todo data={todo.data} id={todo.id} key={todo.id} handleDeleteTodos={handleDeleteTodos} /> 
            })}
        </div>
    )
}

export default TodoList