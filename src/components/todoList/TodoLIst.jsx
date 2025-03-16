import React, { useState } from "react";
import { useTodoList } from "../../zustand/index";
import Card from "../card/Card";
import stl from './todoList.module.scss'

import { Radio } from "antd";

function TodoLIst() {
  const { list } = useTodoList();

  const [type, setType] = useState("all");

  const changedList = list.filter((task) =>{
    if (type === "all") return task;
    
    
    else if(type === "uncompleted") return !task.completed;
    else return task.completed
  })
  console.log(list);
  

  return (
    <div>
      <Radio.Group className={stl.chooseBar} value={type} onChange={(e) => setType(e.target.value)}>
        <Radio.Button className={type === 'all' ? stl.active : stl.choose} value="all">All</Radio.Button>
        <Radio.Button className={type === 'completed' ? stl.active : stl.choose} value="completed">Completed</Radio.Button>
        <Radio.Button className={type === 'uncompleted' ? stl.active : stl.choose} value="uncompleted">Uncompleted</Radio.Button>
      </Radio.Group>

      <h2 className={stl.title}>Todo List</h2>
      {
        changedList.map((task) => {
          console.log(task);
          return <Card key={task.id} task={task} />
          
          
          }
        )}
    </div>
  );
}

export default TodoLIst;
