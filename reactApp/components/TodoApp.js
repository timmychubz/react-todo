import React from 'react';
import axios from 'axios';
import InputLine from './InputLine';
import TodoList from './TodoList';

const dbUrl = "http://localhost:3000/db";


const dummyData = [
  {task: 'pooping', completed: false},
  {task: 'poop', completed: false},
  {task: 'shitting', completed: true}
]

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos:[]
    }
  }

  addTodo(todo) {
    // console.log(todo, 'has been added and dummyData looks like', dummyData)
    // dummyData.push({
    //   task: todo,
    //   completed: false
    // })
    // this.setState({
    //   todos: dummyData
    // })

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

  removeTodo(index) {
    dummyData.splice(index, 1)
    this.setState({
      todos: dummyData
    })
  }

  completeTodo(index) {
    dummyData.splice(index, 1, {
      task: dummyData[index].task,
      completed: !(dummyData[index].completed)
    })
    this.setState({
      todos: dummyData
    })
  }

  componentDidMount() {
    this.setState(
      this.setState({
        todos: dummyData
      })
    )
  }



  render() {
    return(
      <div>
        <h1>Your to do list today:</h1>
        <InputLine submit={(text) => this.addTodo(text)}/>
        <TodoList
          dummyData={this.state.todos}
          todoXClick={(index) => this.removeTodo(index)}
          completeTodo={(index) => this.completeTodo(index)}
        />
      </div>
    )
  }
}

export default TodoApp;
