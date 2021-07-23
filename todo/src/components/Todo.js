import React from 'react';
import * as Icon from 'react-feather';

const Todo = ( {text, todo, todos, setTodos} ) => {
    // Events
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id ))
    } 
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) return {...item, complete: !item.complete}
            return item;
        }))
    } 

    return (
        <div className={`todo flex bg-white max-w-screen-sm mx-auto p-4 mb-1 rounded-md ${todo.show ? '':'hidden'}  ${todo.complete ? 'bg-green-100 text-green-800' : ''}`}>
            <li className={`todo-item flex-1`}>{text}</li>
            <div className="actions flex w-16 justify-between">
                <button onClick={completeHandler} className='complete-btn '>
                <Icon.Check className='stroke-current text-green-500' size={24}/>
                </button>
                <button onClick={deleteHandler} className='trash-btn'>
                <Icon.Trash className='stroke-current text-red-500' size={24}/>
                </button>
            </div>
        </div>
    );
}

export default Todo;