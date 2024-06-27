import React, { act, useEffect, useRef, useState } from 'react';
import './styles.css'


const ToDoAdding = ({activate, disable})=>
{
    const [newTaskText, setNewTaskText] = useState('');
    const textAreaRef = useRef(null);
    const [addNewTask, setAddNewTask] = useState(false);

    function addTask(text) {
        if (text.trim() === '') return;
    
        if (!localStorage.getItem('countTasks')) {
          localStorage.setItem('countTasks', 1);
        }
        var countTasks = Number(localStorage.getItem('countTasks'));
        localStorage.setItem('todoItem' + countTasks, text);
        localStorage.setItem('todoItem' + countTasks + 'status', 0);
        localStorage.setItem('countTasks', countTasks + 1);
        setAddNewTask(false);
        disable()
        setNewTaskText('');
      }

    useEffect(() => {
        if (addNewTask && textAreaRef.current) {
          textAreaRef.current.focus();
        }
      }, [addNewTask]);

      useEffect(() => {
        setAddNewTask(activate)
      }, [activate]);
    

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault(); // Предотвращает добавление новой строки в текстовое поле
          addTask(newTaskText);
        }
      };
    return(
        <div className={`newTask ${addNewTask ? 'vis' : 'hid'}`}>
            <textarea 
            ref={textAreaRef}
            type="text" 
            id='newTask' 
            value={newTaskText} 
            onChange={(e) => setNewTaskText(e.target.value)} 
            onKeyDown={handleKeyDown}
            />
            <button 
            className='ToDoItemBtn' 
            onClick={() => addTask(newTaskText)}
            >✔️</button>
        </div>
    );
};

export default ToDoAdding;