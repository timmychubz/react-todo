import React from 'react';

class Todo extends React.Component {
  render() {
    return (
      <li>
        <button onClick={this.props.xClick}>X</button>
        <span onClick={this.props.completeTodo}>
          {this.props.completed ?
            <strike>{this.props.todo}</strike>:
            this.props.todo}
        </span>
      </li>
    )
  }
}

export default Todo;
