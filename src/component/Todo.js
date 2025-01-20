import '../App.css';

const Todo = ({ data, setChecked, deleteTodo }) => {
    const handleCheckbox = (e) => {
        setChecked(data.id, e.target.checked);
    }

    const todoDelete = () => {
        deleteTodo(data.id);
    }

    // 남은 날짜 계산 함수
    const calculateDaysLeft = (endDate) => {
    const today = new Date();
    const targetDate = new Date(endDate);
    const diffTime = targetDate - today; // 밀리초 단위 차이
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // 일 단위로 변환
    return diffDays >= 0 ? ` D-${diffDays}` : " 마감일 지남";
    };

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
                <div className={`mt-2 ${data.checked ? "line-through" : ""}`}>
                    {calculateDaysLeft(data.endDate)}
                </div>
                <button type="submit" className="text-xl w-20" onClick={todoDelete}>ㅡ</button>
            </div>
            <hr className="ml-6 mr-6 border-gray-400" />
        </>

    );
};




export default Todo;
