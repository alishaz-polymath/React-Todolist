import { useState } from 'react';
// import './App.css';
// importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <div className="App w-screen h-screen bg-indigo-50">
      <header className="p-4 mx-auto text-center">
        <h1 className="text-2xl md:text-4xl lg:text-6xl">My Todo List</h1>
      </header>

      <Form todos = {todos} setTodos = {setTodos} inputText= {inputText} setInputText={setInputText}/>

      <TodoList setTodos={setTodos} todos = {todos}/>
    </div>
  );
}

export default App;
