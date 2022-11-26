import React, { useReducer } from 'react'
import { useState } from 'react';
import AddToDo from './AddToDo';
import TodoList from './TodoList';
import { format } from 'date-fns'




function todoReducer(todos, action) {
    switch (action.type) {
        case 'change':
            return todos.map(t => {
                if (t.id === action.todo.id) {
                    return action.todo;
                }
                else
                    return t;
            });
            break;
        case 'add':
            return [...todos, {
                id: nextID++,
                todoText: action.text,
                done: false
            }];
            break;
        case 'delete':
            return todos.filter((t) => t.id !== action.todo.id);
            break;
        default:
            return todos;
            break;
    }
}

function ToDoApp() {
    const [todos, dispatch] = useReducer(todoReducer, initialTodos);

    function handleAddTodo(text) {
        if (!(text === null || text === "")) {
            dispatch({ type: 'add', text: text });
        }
        else {
            var al = alert('Please add some text to your To Do!');
        }
    }

    function handleTodoChange(updatedTodo) {
        dispatch({ type: 'change', todo: updatedTodo });

    }

    function handleTodoDelete(updatedTodo) {
        dispatch({ type: 'delete', todo: updatedTodo });
    }
    return <>
        <h2 className="todo-title">To Do's:</h2>
        <AddToDo onAddTodo={handleAddTodo} />
        <h3 className="date">{format(new Date(), 'MMM dd, yyyy')}</h3>
        <TodoList todos={todos} onTodoChange={handleTodoChange} onTodoDelete={handleTodoDelete} />
    </>
}

let nextID = 4;
const initialTodos = [
    { id: 1, todoText: "Learn Javascript", done: true },
    { id: 2, todoText: "Build Spotify Clone using Javascript", done: true },
    { id: 3, todoText: "Learn React", done: false },
];


export default ToDoApp