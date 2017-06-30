import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = ['pooping', 'shitting', 'poopers']

class Todo extends React.Component {
  render() {
    return (
      <li>
        <button>X</button>
        {this.props.todo}
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
          {dummyData.map((todo, key) => <Todo todo={todo} key={key} />)}

        </ul>
      </div>
    )
  }
}

class InputLine extends React.Component{
  render() {
    return (
      <form>
        <input type="text" />
        <input type="submit" />
      </form>
    )
  }
}

class TodoApp extends React.Component {
  render() {
    return(
      <div>
        <h1>Your to do list today:</h1>
        <InputLine />
        <TodoList />
      </div>
    )
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'))
