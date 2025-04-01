import React, { useState } from 'react'

const Todoform = (closemodel) => {
    const [task, settask] = useState("")
  return (
    
    <div className='fixed inset-0 bg-slate-300 bg-opacity-50 flex items-center justify-center '>
       <div className=' flex gap-2 border-2 rounded-xl border-black p-2 w-3xl'>
        <form onSubmit={(e)=>e.preventDefault()} className='flex flex-col gap-2 w-full' action="">
            <h1 className='text-2xl'>Task name</h1>
            <input className="border-1 border-black rounded-xl p-2 w-full focus:outline-none focus:ring-2 focus:ring-red-200 " placeholder={task==="" && "buy me a pen" } value={task} onChange={(e)=>settask(e.target.value)}  onFocus={null} type="text" />
    
            <button onClick={closemodel.closemodel} className='border-2 items-center justify-center hover:scale-110 rounded-4xl p-2 m-auto border-black bg-amber-500' type='submit'>Add task</button>
        </form>
       </div>
    </div>
  )
}

export default Todoform