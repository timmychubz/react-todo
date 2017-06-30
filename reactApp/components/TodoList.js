import React from 'react';
import Todo from './Todo';

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

export default TodoList;
