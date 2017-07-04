import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';

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
    console.log(todo, 'has been added and dummyData looks like', dummyData)
    dummyData.push({
      task: todo,
      completed: false
    })
    this.setState({
      todos: dummyData
    })
  }

  removeTodo(index) {
    dummyData.splice(index, 1)
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
        />
      </div>
    )
  }
}

export default TodoApp;
