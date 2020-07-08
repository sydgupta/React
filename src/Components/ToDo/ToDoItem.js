import React from "react";

const ToDoItem = (props) => {
  return(
    <div className='list-item'>
      {props.content}
      <button className="delete is-pulled-right" onClick={() => {props.onDelete(props.id)}}>x</button>
    </div>
  );
}

export default ToDoItem;
