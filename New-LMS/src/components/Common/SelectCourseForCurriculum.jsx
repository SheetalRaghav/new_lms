import React, { useContext, useState,useEffect } from 'react'
import { DataContext } from '../../context/DataContext'
import { Link } from 'react-router-dom'
const SelectCourseForCurriculum = () => {
  const { courseData } = useContext(DataContext)
  const [fetchedCourseData, setFetchedCourseData] = useState([])
  useEffect(() => {
    if (courseData.success) {
      setFetchedCourseData(courseData?.course)
      return;
    }
    else{
      return;
    }
  }, [courseData])
  return (
    <>
      <div className="flex flex-col gap-6 px-10 py-6">
        <h1 className='text-2xl text-gray-700 font-semibold'>Select course</h1>
        <div className="divider my-1"></div>
        <div className="grid gap-4">
          {fetchedCourseData?.map((elem) => {
            return (
              <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm shadow-gray-300">
                <h2 className="text-lg font-semibold max-w-[40%]">{elem.title}</h2>
                <Link to={`${elem._id}`} className="bg-gray-900 text-white md:px-4 px-2 md:py-2 py-1 md:text-base text-sm rounded-md">Add Curriculum</Link>
              </div>)
          })}
        </div>
      </div>
    </>
  )
}

export default SelectCourseForCurriculum
