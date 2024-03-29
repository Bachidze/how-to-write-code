'use client'
import React, { useState } from 'react'
type TodoType = {
    id:number,
    title:string,
    active:boolean
}
export default function Todo() {
    const [input,setinput] = useState('')
    const [todo,setTodo] = useState<TodoType[]>([])
    const handeSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        const newTodo = {
            id:Math.random(),
            title:input,
            active:false
        }
        setTodo(prev => [newTodo,...prev])
        setinput('')
    } 
    const handleDelete = (id:number) => {
        const deleteTodo = todo.filter(el=>el.id != id)
        setTodo(deleteTodo)
    }

    const handleActive = (id:number) => {
        setTodo(prev => prev.map(el=>{
            if(el.id === id){
                return {...el,active:!el.active}
            }else{
                return el
            }
        }))
    }
  return (
    <>
    <h1 className='mt-[120px]'>TODO</h1>
    <form onSubmit={handeSubmit}>
        <input className='border-2 border-black' type="text" value={input} onChange={(e) => setinput(e.target.value)} />
        <button>ADD</button>
        {todo.map(el=>(
            <div key={el.id} className={` ${el.active ? 'border-2 border-white' : 'border-2 border-black'} `}>
                <h2>{el.title}</h2> 
                <button onClick={() => handleDelete(el.id)}>Delete</button>
                <button onClick={() => handleActive(el.id)}>Active</button>
            </div>
        ))}
    </form>
    </>
  )
}
