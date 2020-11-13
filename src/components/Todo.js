import React, {useState}from 'react';
import TodoForm from './TodoForm';
import { FaCheck, FaTrash, FaEdit } from "react-icons/fa";

function Todo({ todos, completeTodo, updatedTodo, removeTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updatedTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return (
            <TodoForm 
                edit={edit}
                onSubmit={submitUpdate}
            />
        )
    }

    return todos.map((todo, index) => (
        <div 
            className={todo.isComplete ? 
            'todo-row complete' : 
            'todo-row'} 
            key={index}
        >
            <div key={todo.id}>
                {todo.text}
            </div>

            <div className="icons">
                <FaCheck 
                    onClick={() => completeTodo(todo.id)}
                    className="complete-icon"
                />                
                <FaEdit
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className="edit-icon"
                />
                <FaTrash 
                    onClick={() => removeTodo(todo.id)}
                    className="delete-icon"
                />
            </div>


        </div>
    ));
};

export default Todo