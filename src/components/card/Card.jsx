import React from "react";
import stl from './card.module.scss'

import { Checkbox } from "antd";
import { useTodoList } from "../../zustand/index";
import { Button } from "antd";
import { EditOutlined } from '@ant-design/icons'



function Card({task}) {
  const { deleteTask, setCompleted, editTask } = useTodoList();

  const editName = (id) =>{
    const newName = prompt('input edited task: ')
    editTask({name: newName, id: id})
  }

  
  

  return (
    <div className={stl.card}>
      <h3>{task.name}</h3>
      <Checkbox className={task.completed ? stl.active : stl.check} checked={task.completed} onClick={() => setCompleted(task.id)}></Checkbox>
      <div className={stl.buttons}>
        <Button style={{background: 'orange', border: 'none', color: 'white'}} onClick={() =>deleteTask(task.id)}>
          Delete
        </Button>
        <Button
          onClick={()=>editName(task.id)}
          shape="square"
          style={{color: 'orange'}}
          icon={<EditOutlined/>}
        />
      </div>
    </div>
  );
}

export default Card;
