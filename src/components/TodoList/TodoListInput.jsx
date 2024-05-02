import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TodoListInput({ setTodoItem }) {
    const [input, setInput] = useState('');

    const handleChange = ({ target }) => {
        const { value } = target;
        setInput(value);
    };

    // Add
    const addTodoList = () => {
        if (input.trim() === '') {
            setInput('');
            return;
        }
        const id = uuidv4();
        setTodoItem((prev) => ({ ...prev, Active: [...prev.Active, { id, value: input }] }));
        setInput('');
    };

    const activeEnter = ({ key }) => {
        if (key === 'Enter') addTodoList();
    };

    return (
        <>
            <div className="input_container">
                <input type="text" onChange={handleChange} value={input} onKeyDown={(e) => activeEnter(e)} placeholder="📓 MY TODO LIST"></input>
                <button onClick={addTodoList}>Add</button>
            </div>
        </>
    );
}
