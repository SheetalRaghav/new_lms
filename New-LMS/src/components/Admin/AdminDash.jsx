import React from 'react'
import wave from '../../assets/wave.svg'
import { FaUser } from "react-icons/fa";
import { SiStudyverse } from "react-icons/si";
import { BiSolidCategory } from "react-icons/bi";
const AdminDash = () => {
    return (
        <div className='w-full px-5 mt-5'>
            <div className="flex w-full justify-center items-center gap-5 flex-wrap ">
                <div className="flex-1 min-w-[250px] min-h-[200px] h-auto rounded-md shadow-lg py-4 shadow-gray-300 border-l-[4px] border-black flex justify-between flex-col items-end px-4 " style={{ background: `url(${wave})` }}>
                    <h1 className='text-2xl text-gray-700 font-bold'>Users</h1>
                    <div className=' w-12 h-12 rounded-full bg-red-400 flex justify-center items-center'>
                        <FaUser size={25} color='white'/>
                    </div>
                    <h3 className='text-2xl text-gray-600 font-semibold'>7</h3>
                </div>
                <div className="flex-1 min-w-[250px] min-h-[200px] h-auto rounded-md shadow-lg py-4 shadow-gray-300 border-l-[4px] border-black flex justify-between flex-col items-end px-4 " style={{ background: `url(${wave})` }}>
                    <h1 className='text-2xl text-gray-700 font-bold'>Category</h1>
                    <div className=' w-12 h-12 rounded-full bg-blue-400 flex justify-center items-center'>
                        <BiSolidCategory size={25} color='white'/>
                    </div>
                    <h3 className='text-2xl text-gray-600 font-semibold'>11</h3>
                </div>
                <div className="flex-1 min-w-[250px] min-h-[200px] h-auto rounded-md shadow-lg py-4 shadow-gray-300 border-l-[4px] border-black flex justify-between flex-col items-end px-4 " style={{ background: `url(${wave})` }}>
                    <h1 className='text-2xl text-gray-700 font-bold'>Courses</h1>
                    <div className=' w-12 h-12 rounded-full bg-green-400 flex justify-center items-center'>
                        <SiStudyverse size={25} color='white'/>
                    </div>
                    <h3 className='text-2xl text-gray-600 font-semibold'>15</h3>
                </div>
                
            </div>
            <div className="quick-actions"></div>
        </div>
    )
}

export default AdminDash
