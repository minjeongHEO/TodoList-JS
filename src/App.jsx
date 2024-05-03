import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoListMain from './components/TodoList/TodoListMain';
import TodoListInput from './components/TodoList/TodoListInput';
import { DarkModeProvider } from './context/DarkModeContext.jsx';

const filters = ['All', 'Active', 'Completed'];

const InitTodo = () => {
    const savedTodo = localStorage.getItem('todoItem');
    return savedTodo ? JSON.parse(savedTodo) : { Active: [], Completed: [] };
};
export default function App() {
    const [todoItem, setTodoItem] = useState(InitTodo());
    const [filterType, setFilterType] = useState('All');

    useEffect(() => {
        localStorage.setItem('todoItem', JSON.stringify(todoItem));
    }, [todoItem]);

    return (
        <DarkModeProvider>
            <div className="container">
                <Header filters={filters} filterType={filterType} setFilterType={setFilterType} />
                <main>
                    <TodoListMain filterType={filterType} todoItem={todoItem} setTodoItem={setTodoItem} />
                    <TodoListInput setTodoItem={setTodoItem} />
                </main>
            </div>
        </DarkModeProvider>
    );
}
