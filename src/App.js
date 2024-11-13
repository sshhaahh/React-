import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [count,setCount]=useState(0);
  function decHandler(){
    setCount(count-1);
  }

  function incHandler(){
    setCount(count+1);
  }
  
  function resetHandler(){
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#1e2f4a]  flex-col gap-10">
      <div className='text-[#a2d2ff] font-medium text-2xl '>
        Increment && Decrement
      </div>
      <div className="bg-white flex flex-row justify-center items-center gap-12 py-2 rounded-sm text-[25px] text-[#1e2f4a]">
        <button className='px-5 border-r-2 text-[30px] border-black' onClick={decHandler}>-</button>
        <div className='w-7 flex items-center justify-center'>{count}</div>
        <button className='px-5 border-l-2 border-black ' onClick={incHandler}>+</button>
      </div>
      <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700" onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default App;
