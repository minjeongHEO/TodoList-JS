import React, { useState } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

export default function TodoListMain({ filterType, todoItem, setTodoItem }) {
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
        setTodoItem((prev) => ({ ...prev, active: [...prev.active, { id, value: input }] }));
        setInput('');
    };

    const activeEnter = ({ key }) => {
        if (key === 'Enter') addTodoList();
    };
    return (
        <>
            <ul className="main_list">
                {(filterType === 'All' || filterType === 'Active') && <TodoList todoItem={todoItem} setTodoItem={setTodoItem} type={'active'} />}
                {(filterType === 'All' || filterType === 'Completed') && (
                    <TodoList todoItem={todoItem} setTodoItem={setTodoItem} type={'completed'} />
                )}
            </ul>

            <div className="input_container">
                <input type="text" onChange={handleChange} value={input} onKeyDown={(e) => activeEnter(e)} placeholder="📓 MY TODO LIST"></input>
                <button onClick={addTodoList}>Add</button>
            </div>
        </>
    );
}
