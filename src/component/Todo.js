import '../App.css';
import { useState } from 'react';

const Todo = ({ data, setChecked, deleteTodo }) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckbox = () => {
        setIsChecked(!isChecked);
        setChecked(data.id, !isChecked);
    }

    const todoDelete = () => {
        deleteTodo(data.id);
    }

    return (
    <div className="ml-6 mr-6 p-2 flex">
        <div className="flex-1 flex items-center">
            <input type="checkbox" id={`todo-${data.id}`} onClick={handleCheckbox} />
            <label
            htmlFor={`todo-${data.id}`}
            className={`p-2 text-gray-700 ${isChecked ? "line-through" : ""}`}
            >
            {data.text}
            </label>
        </div>
        <button type="submit" className="text-xl w-20" onClick={todoDelete}>ㅡ</button>
        <hr className="mt-2 border-gray-400" />
    </div>

    );
};

export default Todo;
