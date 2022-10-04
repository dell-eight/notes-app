import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'


const SearchBar = ({ setSearchText }) => {
  return (
    <div className='border-2 h-10 px-4 text-lg border-slate-300 rounded-full flex justify-center items-center focus-within:border-black'>
        <input type="text" className='w-full outline-none dark:bg-slate-800 dark:text-white' placeholder='Search ...' onChange={(e) => setSearchText(e.target.value)}/> 
        <BiSearchAlt className='text-xl text-slate-500 focus-visible:ring'/>
    </div>
  )
}

export default SearchBar 