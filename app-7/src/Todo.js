import React from 'react';
import List from './List';

function Todo(props){
  return (
    <div className="todo">
      <ul>
        {props.taskArray.map((e,i) => {
          return (
            <List item={e} key={i} />
          )
        })}
      </ul>
    </div>
  )
}

export default Todo;