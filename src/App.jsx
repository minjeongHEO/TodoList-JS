import React, { useContext, useEffect, useRef, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
import { v4 as uuidv4 } from 'uuid';

const filters = ['All', 'Active', 'Completed'];
export default function App() {
    const getInitialTodo = () => {
        const savedTodo = localStorage.getItem('todoItem');
        return savedTodo && savedTodo.active ? JSON.parse(savedTodo) : { active: [], completed: [] };
    };
    const [todoItem, setTodoItem] = useState(getInitialTodo);
    const [filterType, setFilterType] = useState('All');
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
        // const id = randomId();
        const id = uuidv4();
        setTodoItem((prev) => ({ ...prev, active: [...prev.active, { id, value: input }] }));
        setInput('');
    };

    const toCompleted = (targetId, targetValue) => {
        setTodoItem((prev) => ({
            active: prev.active.filter(({ id }) => id !== targetId),
            completed: [...prev.completed, { id: targetId, value: targetValue }],
        }));
    };
    const toActive = (targetId, targetValue) => {
        setTodoItem((prev) => ({
            active: [...prev.active, { id: targetId, value: targetValue }],
            completed: prev.completed.filter(({ id }) => id !== targetId),
        }));
    };

    // 체크박스
    const changeCheckBox = ({ target }) => {
        const targetId = target.id;
        const targetValue = target.value;
        if (target.checked) toCompleted(targetId, targetValue);
        if (!target.checked) toActive(targetId, targetValue);
    };

    const deleteItem = (targetId) => {
        if (todoItem.active.some(({ id }) => id === targetId)) {
            setTodoItem((prev) => ({ ...prev, active: prev.active.filter(({ id }) => id !== targetId) }));
            return;
        }

        setTodoItem((prev) => ({ ...prev, completed: prev.completed.filter(({ id }) => id !== targetId) }));
    };

    const activeEnter = ({ key }) => {
        if (key === 'Enter') addTodoList();
    };

    useEffect(() => {
        localStorage.setItem('todoItem', JSON.stringify(todoItem));
    }, [todoItem]);

    return (
        <div className="container">
            <Header filters={filters} filterType={filterType} setFilterType={setFilterType} />
            <main>
                <ul className="main_list">
                    {(filterType === 'All' || filterType === 'Active') && (
                        <TodoList todoItem={todoItem} deleteItem={deleteItem} changeCheckBox={changeCheckBox} type={'active'} />
                    )}
                    {(filterType === 'All' || filterType === 'Completed') && (
                        <TodoList todoItem={todoItem} deleteItem={deleteItem} changeCheckBox={changeCheckBox} type={'completed'} />
                    )}
                </ul>

                <div className="input_container">
                    <input type="text" onChange={handleChange} value={input} onKeyDown={(e) => activeEnter(e)} placeholder="📓 MY TODO LIST"></input>
                    <button onClick={addTodoList}>Add</button>
                </div>
            </main>
        </div>
    );
}
