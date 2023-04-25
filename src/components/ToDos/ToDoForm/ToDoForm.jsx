import React from 'react'
import "./ToDoForm.css"
import { nanoid } from 'nanoid';

function ToDoForm({ setTodos }) {
  const addToDo = (e) => {
    e.preventDefault();
    const todoForm = new FormData(e.target)
    const { todo } = Object.fromEntries(todoForm.entries())
    const newTodo = { todo, id:nanoid()}

    setTodos(p=>[...p,newTodo])
  }

  return (
    <form onSubmit={addToDo}>
      <input name='todo' type="text" placeholder='write task...'/>
      <button>Add</button>
    </form>
  )
}

export default ToDoForm