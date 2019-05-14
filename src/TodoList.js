import React, {Component} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import './Todolist.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          todos: [],
        };
        this.createTodo = this.createTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    createTodo(newtodo){
        this.setState({
            todos: [...this.state.todos, newtodo]
        })
    }

    removeTodo(id){
      this.setState({
          todos: this.state.todos.filter(todo => todo.id !== id)
      })
    }

    updateTodo(id, updatedTask){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, task: updatedTask}
            }
            return todo;
        })
        this.setState({
            todos: updatedTodos
        })
    }

    toggleCompletion(id){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, completed: !todo.completed}
            }
            return todo;
        })
        this.setState({
            todos: updatedTodos
        })
    }

    render(){
        const todos = this.state.todos.map(todo => {
            return <Todo 
                      key={todo.id} 
                      id={todo.id} 
                      task ={todo.task} 
                      completed={todo.completed}
                      removeTodo={this.removeTodo} 
                      updateTodo = {this.updateTodo}
                      toggleTodo = {this.toggleCompletion}
                    />
        })
        return (
         <div className="todolist">
            <h1>Todo List! <span>A Simple React Todo App</span></h1>
                <ul>{todos}</ul>
                <TodoForm createTodo={this.createTodo}/>
         </div>
        )
    }
}

export default TodoList;