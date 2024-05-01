import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function TodoList({ todoItem, deleteItem, changeCheckBox, type }) {
    const items = todoItem[type];

    if (!items || items.length === 0) return null;

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
