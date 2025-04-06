import React, { useState } from 'react'

const Todoform = (props) => {
    const [task, settask] = useState("")
    const handlesubmit=(e)=>{
      e.preventDefault();
      props.addtask(task);
      settask("");
      props.closemodel();

    }
  return (
    
    <div className='fixed inset-0 bg-transparent flex items-center justify-center backdrop-blur-xs '>
       <div className=' flex gap-2 border-2 bg-purple-300 rounded-xl border-black p-2 w-3xl'>
        <form onSubmit={handlesubmit} className='flex flex-col gap-2 w-full' action="">
            <h1 className='text-2xl'>Task name</h1>
            <input  className="border-1 border-black rounded-xl p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-400 " placeholder={task==="" && "buy me a pen" } value={task} onChange={(e)=>settask(e.target.value)}  onFocus={null} type="text" />
    
            <button  className='border-2 items-center justify-center hover:scale-110 rounded-4xl p-2 m-auto border-black bg-violet-500' type='submit'>Add task</button>
        </form>
       </div>
    </div>
  )
}

export default Todoform