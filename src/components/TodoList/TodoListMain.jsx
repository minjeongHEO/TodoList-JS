import TodoList from './TodoList';

export default function TodoListMain({ filterType, todoItem, setTodoItem }) {
    return (
        <>
            <ul className="main_list">
                {(filterType === 'All' || filterType === 'Active') && <TodoList todoItem={todoItem} setTodoItem={setTodoItem} type={'Active'} />}
                {(filterType === 'All' || filterType === 'Completed') && (
                    <TodoList todoItem={todoItem} setTodoItem={setTodoItem} type={'Completed'} />
                )}
            </ul>
        </>
    );
}
