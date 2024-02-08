import React, { useContext, useState } from 'react'
import wave from '../../assets/wave.svg'
import { FaUser } from "react-icons/fa";
import { SiStudyverse } from "react-icons/si";
import { BiSolidCategory } from "react-icons/bi";
import { Link } from 'react-router-dom'
import { IoMdAddCircle } from "react-icons/io";
import CourseList from './CourseList';
import { DataContext } from '../../context/DataContext';
import { AgChartsReact } from 'ag-charts-react';
const AdminDash = () => {
    function getData() {
        return [
            {
                quarter: "Q1'18",
                iphone: 140,
                mac: 16,
                ipad: 14,
                wearables: 12,
                services: 20,
            },
            {
                quarter: "Q2'18",
                iphone: 124,
                mac: 20,
                ipad: 14,
                wearables: 12,
                services: 30,
            },
            {
                quarter: "Q3'18",
                iphone: 112,
                mac: 20,
                ipad: 18,
                wearables: 14,
                services: 36,
            },
            {
                quarter: "Q4'18",
                iphone: 118,
                mac: 24,
                ipad: 14,
                wearables: 14,
                services: 36,
            },
        ];
    }
    const [options, setOptions] = useState({
        title: {
          text: "Apple's Revenue by Product Category",
        },
        subtitle: {
          text: "In Billion U.S. Dollars",
        },
        data: getData(),
        series: [
          {
            type: "bar",
            xKey: "quarter",
            yKey: "iphone",
            yName: "iPhone",
          },
          {
            type: "bar",
            xKey: "quarter",
            yKey: "mac",
            yName: "Mac",
          },
          {
            type: "bar",
            xKey: "quarter",
            yKey: "ipad",
            yName: "iPad",
          },
          {
            type: "bar",
            xKey: "quarter",
            yKey: "wearables",
            yName: "Wearables",
          },
          {
            type: "bar",
            xKey: "quarter",
            yKey: "services",
            yName: "Services",
          },
        ],
      })
    const { userData, courseData, categoryData } = useContext(DataContext)
    return (
        <div className='w-full lg:px-10 mt-5 px-5'>
            <div className="flex w-full justify-center items-center gap-5 flex-wrap ">
                <div className="flex-1 min-w-[250px] max sm:min-h-[200px] min-h-[180px] h-auto rounded-md shadow-lg py-4 shadow-gray-300 border-l-[4px] border-black flex justify-between flex-col items-end px-4 " style={{ background: `url(${wave})` }}>
                    <h1 className='text-2xl text-gray-700 font-bold'>Users</h1>
                    <div className=' w-12 h-12 rounded-full bg-red-400 flex justify-center items-center'>
                        <FaUser size={25} color='white' />
                    </div>
                    <h3 className='text-2xl text-gray-600 font-semibold'>{userData.length}</h3>
                </div>
                <div className="flex-1 min-w-[250px] max sm:min-h-[200px] min-h-[180px] h-auto rounded-md shadow-lg py-4 shadow-gray-300 border-l-[4px] border-black flex justify-between flex-col items-end px-4 " style={{ background: `url(${wave})` }}>
                    <h1 className='text-2xl text-gray-700 font-bold'>Category</h1>
                    <div className=' w-12 h-12 rounded-full bg-blue-400 flex justify-center items-center'>
                        <BiSolidCategory size={25} color='white' />
                    </div>
                    <h3 className='text-2xl text-gray-600 font-semibold'>{categoryData.length}</h3>
                </div>
                <div className="flex-1 min-w-[250px] max sm:min-h-[200px] min-h-[180px] h-auto rounded-md shadow-lg py-4 shadow-gray-300 border-l-[4px] border-black flex justify-between flex-col items-end px-4 " style={{ background: `url(${wave})` }}>
                    <h1 className='text-2xl text-gray-700 font-bold'>Courses</h1>
                    <div className=' w-12 h-12 rounded-full bg-green-400 flex justify-center items-center'>
                        <SiStudyverse size={25} color='white' />
                    </div>
                    <h3 className='text-2xl text-gray-600 font-semibold'>{courseData.length}</h3>
                </div>

            </div>
            {/*quick action buttons  */}
            <div className="w-full min-h-[300px] mt-5 flex justify-between items-center gap-10 lg:flex-row flex-col"><div className="flex-col justify-center items-center w-1/2"><h2 className='text-2xl text-gray-700 font-semibold mt-5 text-center'>Quick Actions</h2>
            <div className="quick-actions flex justify-center items-center gap-5 my-5">
                <Link to="/register" class="flex gap-2 justify-center items-center px-3 py-1 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">
                    <IoMdAddCircle size={22} />
                    Add User
                </Link>
                <Link to="/new-course" class="flex gap-2 justify-center items-center px-3 py-1 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">
                    <IoMdAddCircle size={22} />
                    Add Course
                </Link></div>

            </div>
            <AgChartsReact options={options} /></div>
            
            
            {/* courses list */}
            <CourseList />
        </div>
    )
}

export default AdminDash
