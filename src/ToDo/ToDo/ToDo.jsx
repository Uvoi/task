import React, { useEffect, useState } from 'react';
import './styles.css';
import ToDoItem from '../ToDoItem/ToDoItem';
import ToDoAdding from '../ToDoAdding/ToDoAdding';

const ToDo = () => {
  const [tasks, setTasks] = useState({});
  const [updateTasks, setUpdateTasks] = useState(false);

  const [addNewTask, setAddNewTask] = useState(false);



  function getTasks() {
    var Tasks = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('todoItem') && !key.endsWith('status')) {
        const index = key.replace('todoItem', '');
        const text = localStorage.getItem(key);
        const status = localStorage.getItem(key + 'status');
        Tasks[index] = [text, Number(status)];
      }
    }
    setTasks(Tasks);
  }

  useEffect(() => {
    getTasks();
  }, [updateTasks, addNewTask]);




  return (
    <div className='ToDo'>
      <h1>To Do</h1>
      {Object.keys(tasks).map(key => (
        <ToDoItem 
          key={key} 
          itemId={`todoItem${key}`} 
          task={tasks[key][0]} 
          checked={tasks[key][1]} 
          updateToDoList={() => setUpdateTasks(!updateTasks)}
        />
      ))}
      <button className='ToDoMainBtn ToDoAddNew' onClick={() =>setAddNewTask(true)}>+</button>
      <button className='ToDoMainBtn ToDoDeleteAll' onClick={() => { localStorage.clear(); setUpdateTasks(!updateTasks); }}>‒</button>

      <ToDoAdding activate={addNewTask} disable={()=>setAddNewTask(false)}/>
    </div>
  );
};

export default ToDo;
