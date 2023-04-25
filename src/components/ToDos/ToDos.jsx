import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ToDoForm from './ToDoForm/ToDoForm';
import ToDoList from './ToDoList/ToDoList';
import "./ToDos.css";

function ToDos() {
  // localstorage dan malumotni olib kelish
  const [todos, setTodos ] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  // localstorage ga saqlash
  useEffect(()=> {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // dones 
  const dones = todos.filter(item=>item.checked).length

  return (
    <div className='todos'>
      <div className="todos-boxes">
        <h1>ToDos</h1>
        <ToDoForm setTodos={setTodos} />
        <div className='todos-lists'>
          {todos.map((item, index)=> (
            <ToDoList key={item.id} 
                  index={index}
                  setTodos={setTodos} 
                  todos={todos} 
                  {...item}
            />
          ))}
        </div>
        <h2>All todos: {todos.length}</h2>
        <h1 className='done'>Done: {dones}</h1>
        <h1 className='not-done'>Not done: {todos.length-dones}</h1>
      </div>
    </div>
  )
}

export default ToDos;