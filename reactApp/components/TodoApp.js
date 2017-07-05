import React from 'react';
import axios from 'axios';
import InputLine from './InputLine';
import TodoList from './TodoList';

const dbUrl = "http://localhost:3000/db";


class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos:[]
    }
  }

  addTodo(todo) {

    axios.post(dbUrl + '/add', {
        task: todo,
        completed: false
      })
      .then((response) => {
        this.setState({todos: this.state.todos.concat(response.data)})
      })
      .catch((error) => {
        console.log(error);
      })
  }

  removeTodo(id) {
    axios.post(dbUrl + '/remove', {
        id: id
      })
      .then((response) => {
        var ind;
        this.state.todos.forEach((todo, index) => {
          ind = todo._id == id ?
            index:
            ind
        })
        this.setState({
          todos: this.state.todos.slice(0, ind).concat(this.state.todos.slice(ind + 1))
        })
      })
  }

  completeTodo(id) {

    axios.post(dbUrl + '/toggle', {
        id: id
      })
      .then((response) => {
        var ind;
        this.state.todos.forEach((todo, index) => {
          ind = todo._id == id ?
            index:
            ind
        })
        console.log(response)
        this.setState({
          todos: this.state.todos.slice(0, ind).concat([response.data], this.state.todos.slice(ind + 1))
        })
      })
  }

  componentDidMount() {

    axios.get(dbUrl + '/all')
      .then((response) => {
        this.setState({
          todos: response.data
        })
      })
  }



  render() {
    return(
      <div>
        <h1>Your to do list today:</h1>
        <InputLine submit={(text) => this.addTodo(text)}/>
        <TodoList
          todos={this.state.todos}
          todoXClick={(id) => this.removeTodo(id)}
          completeTodo={(id) => this.completeTodo(id)}
        />
      </div>
    )
  }
}

export default TodoApp;
