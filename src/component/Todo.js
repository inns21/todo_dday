import '../App.css';
import { useState } from 'react';

const Todo = ({ data, setChecked }) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckbox = () => {
        setIsChecked(!isChecked);
        setChecked(data.id, !isChecked);
      }

    return (
        <div className='ml-6 mr-6 p-2 d-flex flex-column'>
            <input type="checkbox" id={`todo-${data.id}`} onClick={handleCheckbox}/>
            <label htmlFor={`todo-${data.id}`} className={`p-2 text-gray-700 ${isChecked ? "line-through" : ""}`}>{data.text}</label>
            <hr className='mt-2 border-gray-400'></hr>
        </div>
    );
};

export default Todo;
