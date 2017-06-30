import React from 'react';

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

export default Todo;
