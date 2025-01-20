import { useState, useEffect } from 'react';
import './App.css';
import Colorbox from './component/Colorbox';
import Todo from './component/Todo';

function App() {
  const [input, setInput] = useState(""); 
  const [todo, setTodo] = useState([]); 
  const [todoid, setTodoid] = useState(0);
  const [modal, setModal] = useState(false);
  const [bgColor, setbgColor] = useState('bg-yellow-100');
  const [date, setDate] = useState("");

   // 초기 데이터 로드
  useEffect(() => {
    console.log("저장데이터 불러오기")
    const savedTodos = localStorage.getItem("todos");
    const savedTodoid = localStorage.getItem("todoid");
    const savedbgColor = localStorage.getItem("bgColor");

    if (savedTodos) setTodo(JSON.parse(savedTodos));
    if (savedTodoid) setTodoid(JSON.parse(savedTodoid));
    if (savedbgColor) setbgColor(JSON.parse(savedbgColor));
  }, []);

  // todo와 todoid 변경 시 로컬 스토리지에 저장
  useEffect(() => {
    console.log("변경사항저장")
    localStorage.setItem("todos", JSON.stringify(todo));
    localStorage.setItem("todoid", JSON.stringify(todoid));
    localStorage.setItem("bgColor", JSON.stringify(bgColor));
  }, [todo, todoid, bgColor]);
  
  const toggleModal = () => {
    setModal(!modal);
  };
  
  const handleColorChange = (colorClass) =>{
    setbgColor(colorClass);
  }

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (input.trim() === "") return; 
    let newTodos = [...todo];
    let newId = todoid + 1;
    newTodos.push({id:newId, text:input, checked: false, endDate:date})
    setTodoid(newId);
    setTodo(newTodos); 
    setInput(""); 
  };

  const setChecked = (id, check) => {
    let newTodos = [...todo];
    let index = newTodos.findIndex(item => (item.id === id));
    newTodos[index] = { id: id, text: newTodos[index].text, checked:check, endDate:newTodos[index].endDate};
    setTodo(newTodos);
  }
  
  const deleteTodo = (id) =>{
    let newTodos = [...todo];
    let index = newTodos.findIndex(item => (item.id === id));
    newTodos.splice(index, 1);
    setTodo(newTodos);
  }

  let todos = todo.map((item => <Todo key={item.id} data={item} setChecked={setChecked} deleteTodo={deleteTodo}></Todo>))
  return (
    <div className={`h-screen ${bgColor} m-6 gap-x-4`}>
      <div className='flex'>
        <input
          value={input}
          onChange={handleChange}
          placeholder="할 일"
          className="mt-8 ml-6 m-2 h-10 min-w-0 flex-auto rounded-md px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink-200 sm:text-sm/6"
        />
        <p className="mt-8 h-10 min-w-0 rounded-md px-1.5 py-2 text-base outline outline-1 -outline-offset-1 outline-white/10 sm:text-sm/6"
        >마감일:</p>
        <input
          value={date}
          type='date'
          onChange={handleDateChange}
          className="mt-8 h-10 min-w-0 flex-auto rounded-md px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-white/10 sm:text-sm/6"
        >
        </input>
        <button
          type="submit"
          onClick={handleSubmit}
          className="mt-8 mr-6 m-4 h-10 rounded-md bg-gray-100 px-3.5 pb-3 text-2xl text-gray-500 focus-visible:outline focus-visible:outline-2"
        >
          +
        </button>
      </div>
      <div className=''>
        {todos}
      </div>
      <button className='absolute bottom-1 right-12 rounded' onClick={toggleModal}>
        <img src='/colorChangeButton.png'></img>
      </button>
      {modal && <Colorbox onColorChange={handleColorChange}></Colorbox>}
    </div>
  );
}

export default App;
