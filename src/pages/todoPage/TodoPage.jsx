import React from 'react'
import Form from '../../components/form/Form'
import TodoLIst from '../../components/todoList/TodoLIst'
import stl from './todos.module.scss'

function TodoPage() {
  return (
    <div>
        <h1 className={stl.title}>Ainazik's TODO</h1>
        <Form/>
        <TodoLIst/>
    </div>
  )
}

export default TodoPage