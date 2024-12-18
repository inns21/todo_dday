import { useState } from 'react';
import './App.css';
import Colorbox from './component/Colorbox';

function App() {
  const [modal, setModal] = useState(false);
  const [bgColor, setbgColor] = useState('bg-yellow-100');

  let toggleModal = () => {
    setModal(!modal);
  };

  let handleColorChange = (colorClass) =>{
    setbgColor(colorClass);
  }
  return (
    <div className={`h-screen ${bgColor} m-6 gap-x-4`}>
      <div className='flex'>
        <input
          placeholder="할 일"
          className="mt-8 ml-6 m-4 h-10 min-w-0 flex-auto rounded-md px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink-200 sm:text-sm/6"
        />
        <button
          type="submit"
          className="mt-8 mr-6 m-4 h-10 rounded-md bg-gray-100 px-3.5 pb-3 text-2xl text-gray-500 focus-visible:outline focus-visible:outline-2"
        >
          +
        </button>
      </div>
      <div className='flex m-6'>
        여기에 할일 목록이 나오도록 하기 체크 박스로 디데이도 나오면 좋겠다!
      </div>
      <button className='absolute bottom-1 right-12 rounded' onClick={toggleModal}>
        <img src='/colorChangeButton.png'></img>
      </button>
      {modal && <Colorbox onColorChange={handleColorChange}></Colorbox>}
    </div>
  );
}

export default App;
