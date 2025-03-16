import React, { useState } from 'react'
import { useTodoList } from '../../zustand/index'
import stl from './form.module.scss'



function Form() {

    const [task, setTask ] = useState('')
    const { add} = useTodoList()
    const handleSubmit =(e)=>{
        e.preventDefault()
        add({id: Date.now(), task})
        setTask('')
        
    }

  return (
    <div>
        <form onSubmit={handleSubmit} >
            <label className={stl.label}>input task's name: </label>
            <input 
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)} />
            <button>Add task</button>
        </form>
    </div>
  )
}

export default Form