import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList(props) {
  const todos = props.tasks.map((todo, index) => {
    return <ToDoItem content={todo} key={index} id={index} onDelete={props.onDelete} />
  })
  return(
    <div style={{'width': '100%'}}>
      <div className='todo-list'>
        {todos}
      </div>
    </div>
  );
}

export default ToDoList;
