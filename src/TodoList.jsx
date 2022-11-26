import React from 'react'

function TodoList({ todos, onTodoChange, onTodoDelete }) {
    return <ul>
        {todos.map(todo => <li key={todo.id}>
            <Todo todo={todo} onChange={onTodoChange} onDelete={onTodoDelete} />
        </li>)}
    </ul>
}

function Todo({ todo, onChange, onDelete }) {

    return <>
        <div className="checkbox-wrapper">
            <label htmlFor={`${todo.id}-done`} className="container">
                <input type="checkbox" className="checkbox" name={`${todo.id}-done`} id={`${todo.id}-done`} checked={todo.done} onChange={(e) => {
                    onChange({ ...todo, done: e.target.checked });
                }} />
                <span className="checkmark"></span>
            </label>
            {todo.todoText}
            <span className='deleteTodo' onClick={(e) => {
                onDelete(todo);
            }}>x</span>
        </div>


    </>
}

export default TodoList
