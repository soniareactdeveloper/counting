import { useState } from 'react'
import { IoIosAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";
import './App.css'

function App() {
 const [data , setdata] = useState(0)

 const handleAdd = ()=>{
   setdata (data + 1)
 }
  
 const handleRemove = ()=>{
  setdata (data - 1)
}

  return (
   <>
     <div className="flex gap-9">
      <button onClick={handleRemove} className='p-1 bg-white border-4 border-solid border-red-900 rounded-lg text-6xl hover:bg-red-900 transition-all'>    <IoIosRemove /> </button>
      <h1 className='text-6xl text-red-900 font-bold'>{data}</h1>
      <button onClick={handleAdd } className='p-1 bg-white border-4 border-solid border-green-900 rounded-lg text-6xl hover:bg-green-900 transition-all'> <IoIosAdd /> </button>
     </div>
   </>
  )
}

export default App
