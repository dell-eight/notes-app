import React from 'react'
import {RiDeleteBin2Line} from 'react-icons/ri'
const Notes = ({ id, text, date, deleteNote }) => {

  return ( 
    <div className='bg-yellow-300 rounded h-80 min-h-0 px-8 py-5 flex flex-col justify-between divide-y divide-yellow-400 dark:bg-yellow-500'>
      <p className='md:text-xl sm:text-lg break-all whitespace-pre-wrap '>{text}</p>
      <div className='flex items-center justify-between '>
        <h3 className='sm:text-base md:text-lg mt-4'>{date}</h3>
        <RiDeleteBin2Line className='md:text-xl sm:text-base rounded-full cursor-pointer mt-4 hover:scale-125' onClick={() => deleteNote(id)}/>
      </div>  
    </div>
  )
}

export default Notes