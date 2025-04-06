import React from 'react'
import { motion } from 'framer-motion';
const Header = () => {
  const text = "Hii these are your tasks for today!!".split(" ");
  const text2="developed by Preet with ❤️".split(" ")
  return (
    <div className='flex justify-between p-4 bg-gradient-to-r from-fuchsia-300 via-fuchsia-500 to bg-fuchsia-700 rounded-xl m-2'>
        <div className='border-2 text-3xl border-amber-50 p-2 rounded-xl'>

        {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
        </div>
        <div className='border-2 items-center box-border text-sm border-amber-50 p-2 rounded-xl'>

{text2.map((el, i) => (
<motion.span
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    duration: 0.25,
    delay: i / 10,
  }}
  key={i}
>
  {el}{" "}
</motion.span>
))}
</div>
    </div>
  )
}

export default Header