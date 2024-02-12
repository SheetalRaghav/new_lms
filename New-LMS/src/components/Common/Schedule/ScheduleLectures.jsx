import React from 'react'
const Lecture=()=>{
    return (<div className="space-y-4 ml-7">
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <PlayIcon className="w-6 h-6 text-gray-500" />
        <p className="text-base font-medium tracking-wide dark:text-gray-400 md:w-[300px]">1. Understanding the Market</p>
      </div>
      <div className="ml-auto flex items-center space-x-2 md:w-[300px]">
        <button
          className="rounded-md w-1/2 p-1 border border-gray-200  hover:bg-gray-100 hover:text-gray-900  dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50"
          size="sm"
          variant="ghost"
        >
          Live
        </button>
        <div className="divider divider-horizontal"></div>
        <button
          className="rounded-md w-1/2 p-1 border border-gray-200  hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800  dark:hover:bg-gray-800 dark:hover:text-gray-50"
          size="sm"
          variant="ghost"
        >
          Record
        </button>
      </div>
    </div>
  </div>)
}
const ScheduleLectures = () => {
  return (
    <>
     <div className="w-full px-10">
      <div className="container grid max-w-5xl px-4 gap-6 py-6 md:gap-8 md:px-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold leading-none mb-5">Introduction to Marketing</h1>
        <Lecture/>
        <Lecture/>
        <Lecture/>
        <Lecture/>
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold leading-none mb-5">Introduction to Marketing</h1>
        <Lecture/>
        <Lecture/>
        <Lecture/>
        <Lecture/>
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold leading-none mb-5">Introduction to Marketing</h1>
        <Lecture/>
        <Lecture/>
        <Lecture/>
        <Lecture/>
        </div>
      </div>
    </div> 
    </>
  )
}
function PlayIcon(props) {
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
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    )
  }
export default ScheduleLectures
