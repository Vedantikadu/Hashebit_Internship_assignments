import React, { useEffect, useState } from 'react'
import './todo.css'

const ToDo = () => {
    const[input, setInput] = useState('');
    const[list, setList] = useState(() => {
        const saved = sessionStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        sessionStorage.setItem("tasks", JSON.stringify(list));
    },[list]);


    const addTodo = () => {
        if(input.trim() === "") return;
        const addtask = [...list, input].sort();
        setList(addtask);
        setInput("");
    };

    const deleteTodo = (index) =>
    {
        setList(list.filter((_, i) =>i !== index))
    }
  return (
    <div className='App'>
    <h1 className='heading'>ToDoList</h1>
    
    <div className='input'>
        <input
            type='text'
            className='inupt_box'
            placeholder='Enter your Todo'
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
        <button className='btn' onClick={addTodo}>Add</button>
    </div>

    <div className='list'>
    {list.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
    </div>
    </div>
  )
}

export default ToDo