import React, { useState } from 'react'
import { GrFormEdit } from "react-icons/gr";
import { MdOutlineAddBox } from "react-icons/md";

const Header = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('Mobile App');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };


    return (
        <nav className="bg-white p-4 shadow-md flex justify-between items-center">
        <div className="flex items-center">
        {isEditing ? (
          <input
            type="text"
            value={title}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            className="text-2xl font-bold border border-gray-300 rounded p-1"
            autoFocus
          />
        ) : (
          <>
            <h1 className="text-2xl font-bold">{title}</h1>
            <button
              onClick={handleEditClick}
              className="ml-2 text-gray-500 hover:text-gray-700"
            >
              <GrFormEdit className='text-[#5030E5] bg-[#CCCCFF] mt-1'/>
            </button>
          </>
        )}
      </div>

        <div className="flex -space-x-4 rtl:space-x-reverse">
        <div className='flex gap-1 mr-6 mt-2'>
        <MdOutlineAddBox className='text-[#5030E5] bg-[#CCCCFF] mt-1'/>
        <h3 className='text-[#5030E5]'>Invite</h3>
        </div>
          <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" alt="Rounded avatar"/>
          <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Rounded avatar"/>
          <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="Rounded avatar"/>
          <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="Rounded avatar"/>
          <a className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="/">+2</a>
        </div>
      </nav>
    )
}

export default Header;