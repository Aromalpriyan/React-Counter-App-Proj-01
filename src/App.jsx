import { useState } from "react";
import img from "./assets/imgbg.jpg"

const App = ()=>{
  const [count, setCount] = useState(0)


  const increment = () =>{
    count === 10 ? count : setCount(count+1)

  }
  return(
    <div className="bg-white text-stone-300 min-h-screen h-full text-xl px-10 py-20 flex flex-col items-center relative ">
      <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover "/>
      <h1 className="text-8xl font-counter font-bold relative ">Counter</h1>
    <div className="mt-10 relative">
      <div className="font-0 text-7xl font-bold text-white text-center">{count}</div>
      
      <div className="flex gap-10 mt-4">

      <div onClick={increment} className="text-6xl cursor-pointer hover:text-green-500 rounded-md bg-stone-700 px-2">+</div>

      <div onClick={()=>{setCount(0)}} className="font-counter text-4xl cursor-pointer hover:text-blue-500  bg-stone-700 rounded-md px-4 py-4 ">Reset</div>
        
       <div onClick={()=>{count === 0 ? count : setCount(count-1)}} className="text-6xl cursor-pointer hover:text-red-500 rounded-md bg-stone-700 px-4 ">-</div>

      </div>

    </div>

    </div>
  )

  
}
export default App