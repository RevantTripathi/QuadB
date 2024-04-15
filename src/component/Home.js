import React, { useState } from 'react'
import './home.css'
import { MdDelete } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction } from '../action/TodoAction';


function Home(){

const [todo,setTodo]= useState();

const dispatch = useDispatch();

const Todo =useSelector((state)=> state.Todo);
const {todos} = Todo;

const handleSubmit =(e)=>{
  e.preventDefault()
  dispatch(AddTodoAction(todo));

}

const removehandle = (t)=>{
  dispatch(RemoveTodoAction(t));

}





   
    return(
      <div className='home'>

        <header className="App-header">
          <h1>Task Manager</h1>

          <form onSubmit={handleSubmit}>
            <input className='task-in' type='text' onChange={(e)=>setTodo(e.target.value)} />
            <button type='sumbit' className='add-task'>ADD</button>
          </form>
          <ul className='list-sec'>
            {
              todos && todos.map( (t)=>(
                <li key={t.id} className='task-list' >
                  <span className='todo-text'>{t.todo}</span>
                  <MdDelete className='at' onClick={
                    ()=>removehandle(t)}/>
                  
                  <MdDone className='at'  />
                </li>
              ))
            }

            
          </ul>

        </header>
      </div>
    )
}

export default Home;