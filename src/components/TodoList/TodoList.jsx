import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function TodoList({ todoItem, setTodoItem, type }) {
    const items = todoItem[type];

    if (!items || items.length === 0) return null;

    const deleteItem = (targetId) => {
        if (todoItem.active.some(({ id }) => id === targetId)) {
            setTodoItem((prev) => ({ ...prev, active: prev.active.filter(({ id }) => id !== targetId) }));
            return;
        }

        setTodoItem((prev) => ({ ...prev, completed: prev.completed.filter(({ id }) => id !== targetId) }));
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

    return (
        <>
            {items.map((activeItem) => (
                <li key={activeItem.id}>
                    <input
                        type="checkbox"
                        id={activeItem.id}
                        value={activeItem.value}
                        onChange={changeCheckBox}
                        checked={type === 'completed' ? true : false}
                    />
                    <span className={type === 'completed' ? 'strike-through' : ''}>{activeItem.value}</span>
                    <FaTrashAlt className="pointer_cursor" onClick={() => deleteItem(activeItem.id)} />
                </li>
            ))}
        </>
    );
}
