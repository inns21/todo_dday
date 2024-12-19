import '../App.css';

const Colorbox = ({onColorChange}) => {
  const changeColor = (colorClass) => {
    onColorChange(colorClass);
  }

  return (
    <div className="fixed right-[72px] bottom-[90px] flex items-end justify-end h-[85vh] w-[40vw]">
      <div className="bg-white p-6 rounded shadow-lg z-10">
        <h2 className="text-xl font-bold">배경색</h2>
        {/* 색상 선택 버튼 */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          <button className="w-10 h-10 bg-red-200 rounded" onClick={() => changeColor('bg-red-200')}></button>
          <button className="w-10 h-10 bg-yellow-200 rounded" onClick={() => changeColor('bg-yellow-200')}></button>
          <button className="w-10 h-10 bg-green-200 rounded" onClick={() => changeColor('bg-green-200')}></button>
          <button className="w-10 h-10 bg-blue-200 rounded" onClick={() => changeColor('bg-blue-200')}></button>
          <button className="w-10 h-10 bg-indigo-200 rounded" onClick={() => changeColor('bg-indigo-200')}></button>
          <button className="w-10 h-10 bg-purple-200 rounded" onClick={() => changeColor('bg-purple-200')}></button>
          <button className="w-10 h-10 bg-pink-200 rounded" onClick={() => changeColor('bg-pink-200')}></button>
          <button className="w-10 h-10 bg-gray-200 rounded" onClick={() => changeColor('bg-gray-200')}></button>
        </div>
      </div>
    </div>
  );
}

export default Colorbox;
