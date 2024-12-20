import '../App.css';

const Todo = ({ data, setChecked, deleteTodo }) => {
    const handleCheckbox = (e) => {
        setChecked(data.id, e.target.checked);
    }

    const todoDelete = () => {
        deleteTodo(data.id);
    }

    return (
        <>
            <div className="ml-6 mr-6 p-2 flex">
                <div className="flex-1 flex items-center">
                    <input type="checkbox" id={`todo-${data.id}`} checked={data.checked} onChange={handleCheckbox} />
                    <label
                    htmlFor={`todo-${data.id}`}
                    className={`p-2 text-gray-700 ${data.checked ? "line-through" : ""}`}
                    >
                    {data.text}
                    </label>
                </div>
                <button type="submit" className="text-xl w-20" onClick={todoDelete}>ㅡ</button>
            </div>
            <hr className="ml-6 mr-6 border-gray-400" />
        </>

    );
};

export default Todo;
