import React from 'react'
import { useState } from 'react';


function AddToDo({ onAddTodo }) {
    const [text, setText] = useState("");
    return <>
        <input type="text" name="newTodo" id="newTodo" value={text} onChange={(e) => setText(e.target.value)} />
        <button className="add" onClick={() => {
            onAddTodo(text);
            setText("");
        }}>Add</button>
    </>
}

export default AddToDo
