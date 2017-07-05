import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    return(
      <div>
        <h2>First Todo List</h2>
        <ul>
          {this.props.todos.map((todo, index) =>
            <Todo
              todo={todo.task}
              key={todo._id}
              completed={todo.completed}
              xClick={() => this.props.todoXClick(todo._id)}
              completeTodo={() => this.props.completeTodo(todo._id)} />
          )}
        </ul>
      </div>
    )
  }
}

export default TodoList;
