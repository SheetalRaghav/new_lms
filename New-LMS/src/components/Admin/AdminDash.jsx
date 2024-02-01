import React from 'react'
import wave from '../../assets/wave.svg'
import { FaUser } from "react-icons/fa";
import { SiStudyverse } from "react-icons/si";
import { BiSolidCategory } from "react-icons/bi";
import {Link} from 'react-router-dom'
import { IoMdAddCircle } from "react-icons/io";
const AdminDash = () => {
    return (
        <div className='w-full lg:px-10 mt-5 px-5'>
            <div className="flex w-full justify-center items-center gap-5 flex-wrap ">
                <div className="flex-1 min-w-[250px] min-h-[200px] h-auto rounded-md shadow-lg py-4 shadow-gray-300 border-l-[4px] border-black flex justify-between flex-col items-end px-4 " style={{ background: `url(${wave})` }}>
                    <h1 className='text-2xl text-gray-700 font-bold'>Users</h1>
                    <div className=' w-12 h-12 rounded-full bg-red-400 flex justify-center items-center'>
                        <FaUser size={25} color='white' />
                    </div>
                    <h3 className='text-2xl text-gray-600 font-semibold'>7</h3>
                </div>
                <div className="flex-1 min-w-[250px] min-h-[200px] h-auto rounded-md shadow-lg py-4 shadow-gray-300 border-l-[4px] border-black flex justify-between flex-col items-end px-4 " style={{ background: `url(${wave})` }}>
                    <h1 className='text-2xl text-gray-700 font-bold'>Category</h1>
                    <div className=' w-12 h-12 rounded-full bg-blue-400 flex justify-center items-center'>
                        <BiSolidCategory size={25} color='white' />
                    </div>
                    <h3 className='text-2xl text-gray-600 font-semibold'>11</h3>
                </div>
                <div className="flex-1 min-w-[250px] min-h-[200px] h-auto rounded-md shadow-lg py-4 shadow-gray-300 border-l-[4px] border-black flex justify-between flex-col items-end px-4 " style={{ background: `url(${wave})` }}>
                    <h1 className='text-2xl text-gray-700 font-bold'>Courses</h1>
                    <div className=' w-12 h-12 rounded-full bg-green-400 flex justify-center items-center'>
                        <SiStudyverse size={25} color='white' />
                    </div>
                    <h3 className='text-2xl text-gray-600 font-semibold'>15</h3>
                </div>

            </div>
            <h2 className='text-2xl text-gray-500 font-semibold mt-5'>Quick Actions</h2>
            <div className="quick-actions flex justify-start items-center gap-5 my-5">
                <Link to="/register" class="box-border relative z-30 inline-flex items-center justify-center w-auto sm:px-8 px-3 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-blue-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-blue-300 ring-offset-indigo-200 hover:ring-offset-blue-500 ease focus:outline-none">
                    <span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span class="relative z-20 flex gap-2 items-center text-sm">
                    <IoMdAddCircle size={22}/>
                       Add user
                    </span>
                </Link>
                <Link to="/add-course" class="box-border relative z-30 inline-flex items-center justify-center w-auto sm:px-8 px-3 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-blue-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-blue-300 ring-offset-indigo-200 hover:ring-offset-blue-500 ease focus:outline-none">
                    <span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span class="relative z-20 flex gap-2 items-center text-sm">
                        <IoMdAddCircle size={22}/>
                       Add Course
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default AdminDash
