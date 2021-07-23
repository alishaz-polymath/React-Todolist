import React from 'react';
import * as Icon from 'react-feather';

const Form = ({todos, setTodos, inputText, setInputText}) => {
    // JS function goes here
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const submitTodohandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, complete:false, id:Math.random() * 1000, show: true }
        ]);
        setInputText('');
    }
    const filterHandler = (e) => {
        console.log(e.target.value);
        setTodos(todos.map((item) => {
            console.log(item);
            if(e.target.value === 'all') return {...item, show: true}
            else if(e.target.value === 'pending' && !item.complete) return {...item, show: true}
            else if(e.target.value === 'complete' && item.complete) return {...item, show: true}
            else return {...item, show: false}
        }))
    }
    

    return(
        <form className='mt-8 flex justify-evenly max-w-screen-sm mx-auto'>
            <div className='flex'>
                <input value={inputText} onChange={inputTextHandler} type='text' className='flex-1 p-2 pl-3 rounded-md bg-white text-gray-600 focus:outline-none focus:ring focus:border-blue-300' />
                <button onClick={submitTodohandler} className='p-2 ml-1 bg-gray-50 rounded-md' type='submit'>
                    {/* <Icon.PlusSquare color="red" size={48} /> */}
                    <Icon.Plus className='stroke-current text-indigo-500' size={28}/>
                </button>
            </div>
            <div className=''>
                <select name='todos' onChange={filterHandler} className='p-3 rounded-md focus:outline-none focus:ring focus:border-blue-300'>
                    <option value="all">All</option>
                    <option value="complete">Completed</option>
                    <option value="pending">Pending</option>
                </select>
            </div>
        </form>
    );
}

export default Form;