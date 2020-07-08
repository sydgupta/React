import React from "react";
import ToDoList from "./ToDoList";
import './ToDo.scss';
import SubmitForm from './SubmitForm';

class ToDo extends React.Component {
  state = {
    tasks: ['task 1', 'task 2', 'task 3']
  };

  handleSubmit = task => {
    this.setState({tasks: [...this.state.tasks, task]});
  }

  handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({tasks: newArr});
  }

  render() {
    return(
      <div className="todo-list-container">
        <div className="heading">ToDo App</div>
        <SubmitForm onFormSubmit={this.handleSubmit} />
        <ToDoList tasks={this.state.tasks} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default ToDo;
