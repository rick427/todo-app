import React, { Component } from 'react'
import './Todo.css';

export default class Todo extends Component {
  constructor(props){
      super(props);
      this.state = {
          isEditing: false,
          task: this.props.task
      }
      this.handleRemove = this.handleRemove.bind(this);
      this.toggleForm = this.toggleForm.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleUpdate = this.handleUpdate.bind(this);
      this.handleToggle = this.handleToggle.bind(this);
  }

  handleRemove(){
      this.props.removeTodo(this.props.id)
  }

  handleUpdate(e){
    e.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task)
    this.setState({isEditing: false})
  }

  handleChange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  handleToggle(e){
    this.props.toggleTodo(this.props.id)
  }

  toggleForm(){
      this.setState({
          isEditing: !this.state.isEditing
      })
  }

  render() {
      let results;
      if(this.state.isEditing){
          results = (
              <div className="todo">
                  <form className="todo-edit-frm" onSubmit={this.handleUpdate}>
                      <input 
                         type="text" 
                         name="task"
                         onChange={this.handleChange}
                         value={this.state.task} 
                       />
                       <button>Save</button>
                  </form>
              </div>
          )
      }
      else{
          results = (
            <div className="todo">
                <li className={this.props.completed ? 'todo-task completed' : 'todo-task'} onClick={this.handleToggle}>
                  {this.props.task}
                </li>
                <div className="todo-btns">
                    <button onClick={this.toggleForm}><i className="fas fa-pen"/></button>
                    <button onClick={this.handleRemove}><i className="fas fa-trash"/></button>
                </div>
            </div>
          )
      }
    return (
      results
    )
  }
}
