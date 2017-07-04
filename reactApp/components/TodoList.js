import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    return(
      <div>
        <h2>First Todo List</h2>
        <ul>
          {this.props.dummyData.map((todo, index) =>
            <Todo
              todo={todo.task}
              key={"todo"+index}
              completed={todo.completed}
              xClick={() => this.props.todoXClick(index)}
              completeTodo={() => this.props.completeTodo(index)}
            />)}
        </ul>
      </div>
    )
  }
}

export default TodoList;
