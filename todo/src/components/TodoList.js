import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, setTodos}) => {
    // console.log(todos);
    return (
        <div className='todo-container mt-16'>
            <ul className='todo-list'>
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} text={todo.text} todos={todos} setTodos={setTodos} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;