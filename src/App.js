import { useState } from 'react';
import './App.css';
import Colorbox from './component/Colorbox';
import Todo from './component/Todo';

function App() {
  const [input, setInput] = useState(""); 
  const [todo, setTodo] = useState([]); 
  const [todoid, setTodoid] = useState(0);
  const [modal, setModal] = useState(false);
  const [bgColor, setbgColor] = useState('bg-yellow-100');
  
  const toggleModal = () => {
    setModal(!modal);
  };
  
  const handleColorChange = (colorClass) =>{
    setbgColor(colorClass);
  }

  const handleChange = (e) => {
    setInput(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (input.trim() === "") return; 
    let newTodos = [...todo];
    let newId = todoid + 1;
    newTodos.push({id:newId, text:input, checked: false})
    setTodoid(newId);
    setTodo(newTodos); 
    setInput(""); 
  };

  const setChecked = (id, check) => {
    let newTodos = [...todo];
    let index = newTodos.findIndex(item => (item.id === id));
    newTodos[index] = { id: id, text: newTodos[index].text, check};
    setTodo(newTodos);
  }
  
  let todos = todo.map((item => <Todo key={item.id} data={item} setChecked={setChecked}></Todo>))
  return (
    <div className={`h-screen ${bgColor} m-6 gap-x-4`}>
      <div className='flex'>
        <input
          value={input}
          onChange={handleChange}
          placeholder="할 일"
          className="mt-8 ml-6 m-4 h-10 min-w-0 flex-auto rounded-md px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink-200 sm:text-sm/6"
        />
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
