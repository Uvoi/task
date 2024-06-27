import React, { useRef, useState } from 'react';
import './styles.css';

const ToDoItem = ({ task, itemId, checked, updateToDoList }) => {
  const [isChecked, setIsChecked] = useState(checked === 1);
  const inputRef = useRef(null);

  const handleDelete = () => {
    localStorage.removeItem(itemId);
    localStorage.removeItem(itemId + "status");
    updateToDoList()
  };

  const handleStatus = () => {
    const newCheckedStatus = !isChecked;
    setIsChecked(newCheckedStatus);
    localStorage.setItem(itemId + "status", newCheckedStatus ? 1 : 0);
    if (inputRef.current) {
      newCheckedStatus?inputRef.current.classList.add('checked'):inputRef.current.classList.remove('checked');
      }
  };

  return (
    <div className='ToDoItem'>
      
        <label className="toDoCheckboxWrapper" htmlFor={itemId}>
          <input
            ref={inputRef}
            checked={isChecked}
            type="checkbox"
            id={itemId}
            onChange={handleStatus}
          />
          <p className={isChecked ? 'checked' : ''}>{task}</p>
        </label>
      
      <button className='ToDoItemBtn' onClick={handleDelete}>❌</button>
    </div>
  );
};

export default ToDoItem;
