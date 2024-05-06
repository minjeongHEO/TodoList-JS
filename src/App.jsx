import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoListMain from './components/TodoList/TodoListMain';
import TodoListInput from './components/TodoList/TodoListInput';
import { DarkModeContext } from './context/DarkModeContext.jsx';

const filters = ['All', 'Active', 'Completed'];

const InitTodo = () => {
    const savedTodo = localStorage.getItem('todoItem');
    return savedTodo ? JSON.parse(savedTodo) : { Active: [], Completed: [] };
};
export default function App() {
    const { isDarkMode } = useContext(DarkModeContext);
    const [todoItem, setTodoItem] = useState(InitTodo());
    const [filterType, setFilterType] = useState('All');

    useEffect(() => {
        localStorage.setItem('todoItem', JSON.stringify(todoItem));
    }, [todoItem]);

    return (
        <div id="main" className={isDarkMode ? 'dark' : 'light'}>
            <div className="container">
                <Header filters={filters} filterType={filterType} setFilterType={setFilterType} />
                <main>
                    <TodoListMain filterType={filterType} todoItem={todoItem} setTodoItem={setTodoItem} />
                    <TodoListInput setTodoItem={setTodoItem} />
                </main>
            </div>
        </div>
    );
}
