import React, { useContext, useState } from 'react'
import wave from '../../assets/wave.svg'
import { FaUser } from "react-icons/fa";
import { SiStudyverse } from "react-icons/si";
import { BiSolidCategory } from "react-icons/bi";
import { Link } from 'react-router-dom'
import CourseList from './CourseList';
import { DataContext } from '../../context/DataContext';
import { AgChartsReact } from 'ag-charts-react';
import LectureList from './LectureList';
function BookIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    )
  }
  
  
  function GraduationCapIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    )
  }
  
  
  function UserIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  }
const AdminDash = () => {
    function getData() {
        return [
            {
                quarter: "Front End",
                student:30,
                batch:2
            },
            {
                quarter: "Back End",
               student:10,
               batch:1
            },
            {
                quarter: "Full stack",
               student:50,
               batch:5
            },
        ];
    }
    const [options, setOptions] = useState({
        title: {
          text: "Data of courses",
        },
        subtitle: {
          text: "Number of student & batches",
        },
        data: getData(),
        series: [
          {
            type: "bar",
            xKey: "quarter",
            yKey: "batch",
            yName: "Batch",
          },
          {
            type: "bar",
            xKey: "quarter",
            yKey: "student",
            yName: "Student",
          },
        ],
      })
    const { userData, courseData, categoryData } = useContext(DataContext)
    return (
        <div className='w-full lg:px-10 mt-5 px-5'>
        {/*  */}
        <section className="w-full px-4">
      <div className="flex items-center justify-center py-4 ">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:w-auto w-full place-items-center">
          <button className='flex bg-blue-500 w-[170px] max-w-[170px] gap-2 shadow-md shadow-gray-400 text-white font-semibold text-lg justify-center items-center px-2 py-1 rounded-md' >
            <UserIcon className="h-4 w-4" />
            User
          </button>
          <button  className='flex bg-blue-500 w-[170px] max-w-[170px] gap-2 shadow-md shadow-gray-400 text-white font-semibold text-lg justify-center items-center px-2 py-1 rounded-md' >
            <BookIcon className="h-4 w-4" />
            Curriculum
          </button>
          <button className='flex bg-blue-500 w-[170px] max-w-[170px] gap-2 shadow-md shadow-gray-400 text-white font-semibold text-lg justify-center items-center px-2 py-1 rounded-md' >
            <GraduationCapIcon className="h-4 w-4" />
            Courses
          </button>
        </div>
      </div>
    </section>
    <div className="divider"></div> 
        {/*  */}
            <div className="flex w-full justify-center items-center gap-5 flex-wrap ">
                <div className="flex-1 min-w-[250px] max sm:min-h-[200px] min-h-[180px] h-auto rounded-md shadow-md py-4 shadow-gray-400 backdrop-blur-md  cursor-pointer flex justify-between flex-col items-end px-4 " style={{ background: `url(${wave})` }}>
                    <h1 className='text-2xl text-gray-700 font-bold'>Users</h1>
                    <div className=' w-12 h-12 rounded-full bg-red-400 flex justify-center items-center'>
                        <FaUser size={25} color='white' />
                    </div>
                    <h3 className='text-2xl text-gray-600 font-semibold'>{userData.length}</h3>
                </div>
                <div className="flex-1 min-w-[250px] max sm:min-h-[200px] min-h-[180px] h-auto rounded-md shadow-md py-4 shadow-gray-400 backdrop-blur-md  cursor-pointer flex justify-between flex-col items-end px-4 " style={{ background: `url(${wave})` }}>
                    <h1 className='text-2xl text-gray-700 font-bold'>Category</h1>
                    <div className=' w-12 h-12 rounded-full bg-blue-400 flex justify-center items-center'>
                        <BiSolidCategory size={25} color='white' />
                    </div>
                    <h3 className='text-2xl text-gray-600 font-semibold'>{categoryData.length}</h3>
                </div>
                <div className="flex-1 min-w-[250px] max sm:min-h-[200px] min-h-[180px] h-auto rounded-md shadow-md py-4 shadow-gray-400 backdrop-blur-md  cursor-pointer flex justify-between flex-col items-end px-4 " style={{ background: `url(${wave})` }}>
                    <h1 className='text-2xl text-gray-700 font-bold'>Courses</h1>
                    <div className=' w-12 h-12 rounded-full bg-green-400 flex justify-center items-center'>
                        <SiStudyverse size={25} color='white' />
                    </div>
                    <h3 className='text-2xl text-gray-600 font-semibold'>{courseData.length}</h3>
                </div>

            </div>
            {/*quick action buttons  */}
            <div className="w-full min-h-[300px]  flex justify-center items-center gap-10 lg:flex-row flex-col">
            
            <div className='max-w-[1000px] md:w-[70%] w-full mx-auto mt-10 bg-white shadow-md rounded-md p-2 shadow-gray-300'> <AgChartsReact options={options} /></div>
           </div>
            
            <div className="flex justify-between w-full lg:flex-row gap-5 flex-col mt-10"><CourseList />
            <LectureList/>
            </div>
            {/* courses list */}
            
        </div>
    )
}

export default AdminDash
