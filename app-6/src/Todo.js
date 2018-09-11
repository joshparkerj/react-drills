import React from 'react';

function Todo(props){
  return (
    <div className="Todo">
      <ul>
        {props.tasksArray.map(e => {
          return (
            <li>{e}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default Todo;