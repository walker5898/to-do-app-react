import React from 'react'
import "./ToDoList.css";
import { BsFillTrashFill } from 'react-icons/bs'

function ToDoList({id, todo, todos, setTodos,index, checked}) {
    const deleteToDo = () => {
        const filtered = todos.filter(item=>item.id!==id)
        setTodos(filtered)
    }

    // checked
    const checkToDoHandler = (e) => {
        const checkedToDo = todos.map(item=> {
            return item.id === id ? {...item,checked: !item.checked} : item
        })
        setTodos(checkedToDo)
    }
  return (
    <div className='todo-list'>
        <h1 style={{textDecoration:checked ? "line-through":"none"}}>
            {index+1}. {todo}
        </h1>
        <div className='check-icon'>
            <input checked={checked} onChange={checkToDoHandler} type="checkbox" />
            <BsFillTrashFill className="icon" onClick={deleteToDo} />
        </div>
    </div>
  )
}

export default ToDoList