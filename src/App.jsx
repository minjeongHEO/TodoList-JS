import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoListMain from './components/TodoList/TodoListMain';
import TodoListInput from './components/TodoList/TodoListInput';

const filters = ['All', 'Active', 'Completed'];

export default function App() {
    const getInitialTodo = () => {
        const savedTodo = localStorage.getItem('todoItem');
        return savedTodo && savedTodo.Active ? JSON.parse(savedTodo) : { Active: [], Completed: [] };
    };
    const [todoItem, setTodoItem] = useState(getInitialTodo);
    const [filterType, setFilterType] = useState('All');

    useEffect(() => {
        localStorage.setItem('todoItem', JSON.stringify(todoItem));
    }, [todoItem]);

    return (
        <div className="container">
            <Header filters={filters} filterType={filterType} setFilterType={setFilterType} />
            <main>
                <TodoListMain filterType={filterType} todoItem={todoItem} setTodoItem={setTodoItem} />
                <TodoListInput setTodoItem={setTodoItem} />
            </main>
        </div>
    );
}
