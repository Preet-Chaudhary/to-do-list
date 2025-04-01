import React from "react";
import { useState } from "react";
import taskdt from "../constants/const1.json"
import Todoform from "./todoform";

const Body = () => {
const [isopen,setisopen]=useState(false)

  return (
    <div className="flex flex-col lg:flex-row justify-between min-h-screen p-4">
      {/* Left Section */}
      <div className="flex-grow-0 w-3/4">
        <h1 className="text-3xl p-2 rounded-2xl bg-slate-300 m-2 text-slate-700">
          Tasks
        </h1>
        <div className="m-2 flex-col gap-2 p-2 border-2 rounded-2xl border-purple-600 bg-gradient-to-bl from-violet-800 via-pink-500 to-fuchsia-400 w-full  ">
        

{taskdt.tasks.map(
    (elem)=>(
        

        <div key={elem.id} className="flex gap-1">
              <input
      id="ripple-on"
      type="checkbox"
      className="peer relative h-5 w-5 top-2 cursor-pointer appearance-none rounded border border-slate-300 shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity checked:border-slate-800 checked:bg-slate-800 checked:before:bg-slate-400 hover:before:opacity-10"
      />
            <h1 className="text-3xl font-myfont">{elem.name}</h1>
        </div>
    
    )
)}
            
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-grow-0 w-1/4">
        <button onClick={()=>setisopen(true)} className="border-2 border-black p-3 px-6 m-2 rounded-full bg-purple-600">
          Add a task
        </button>
        {isopen && <Todoform closemodel={()=>{setisopen(false)}} />}
      </div>
    </div>
  );
};

export default Body;
