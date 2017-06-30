import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = [
  {task: 'pooping', completed: false},
  {task: 'poop', completed: false},
  {task: 'shitting', completed: true}
]

class Todo extends React.Component {
  render() {
    return (
      <li>
        <button>X</button>
        {this.props.completed ?
          <strike>{this.props.todo}</strike>:
          this.props.todo}
      </li>


    )
  }
}

class TodoList extends React.Component {
  render() {
    return(
      <div>
        <h2>First Todo List</h2>
        <ul>
          {this.props.dummyData.map((todo, key) => <Todo todo={todo.task} key={key} completed={todo.completed}/>)}

        </ul>
      </div>
    )
  }
}

class InputLine extends React.Component{
  render() {
    return (
      <form>
        <input type="text" placeholder="task" />
        <input type="submit" value="Add todo" />
      </form>
    )
  }
}

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

ReactDOM.render(<TodoApp />, document.getElementById('root'))
