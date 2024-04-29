import React, { useState } from 'react';

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
  
    const addTask = () => {
      setTasks([...tasks, task]);
      setTask('');
    };
  
    const removeTask = (index) => {
      const newTasks = [...tasks];
      newTasks.splice(index, 1); // Remove the task at the specific index
      setTasks(newTasks);
    };
  
    return (
      <div>
        <h1>To-Do List</h1>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        <button onClick={addTask}>Add Task</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task} <button onClick={() => removeTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Todo;
