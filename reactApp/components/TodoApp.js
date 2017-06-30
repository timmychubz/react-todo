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
        <InputLine />
        <TodoList dummyData={this.state.todos}/>
      </div>
    )
  }
}

export default TodoApp;
