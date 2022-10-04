import React, { useState } from 'react'
import {MdDarkMode} from 'react-icons/md'

const Header = ({ toggleDarkMode }) => {
  
  return (
    <>
    <div className='flex justify-between items-center py-5'>
      <h1 className="  big-text-font sm:text-4xl md:text-6xl dark:text-white">Notes</h1>
        <div className='flex justify-center items-center sm:gap-5 md:gap-20'>
          <MdDarkMode onClick={() => toggleDarkMode((prev) => !prev)} className='sm:text-2xl md:text-4xl cursor-pointer transition duration-300 delay-250 ease-out hover:scale-125 dark:text-white'/>
      </div>
    </div>
    </>
  )
}

export default Header