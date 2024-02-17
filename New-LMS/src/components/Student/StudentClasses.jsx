import React from 'react'
import { Link } from 'react-router-dom'

const StudentClasses = () => {
  return (
    <div className='ml-[80px] w-full py-10 px-5'>
{/*  */}
<h1 className='text-2xl text-gray-700 font-semibold'>Upcoming classes: </h1>
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-4 md:p-6">
      <div className="border border-gray-200 rounded-lg overflow-hidden flex flex-col">
        <div className="p-4 flex-1 grid gap-2">
          <h3 className="text-lg font-semibold">Biology 101</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">March 24th, 2023</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">10:00 AM - 11:30 AM</p>
        </div>
        <div className="border-t border-gray-200 p-4">
          <Link
            className="flex items-center justify-center w-full rounded-md border bg-green-600 text-white border-gray-200  text-center text-sm py-2 transition-colors hover:bg-green-300 hover:text-gray-900 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-white"
            href="#"
          >
            Join Class
          </Link>
        </div>
      </div>
      <div className="border border-gray-200 rounded-lg overflow-hidden flex flex-col">
        <div className="p-4 flex-1 grid gap-2">
          <h3 className="text-lg font-semibold">Biology 101</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">March 24th, 2023</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">10:00 AM - 11:30 AM</p>
        </div>
        <div className="border-t border-gray-200 p-4">
          <Link
            className="flex items-center justify-center w-full rounded-md border bg-green-600 text-white border-gray-200  text-center text-sm py-2 transition-colors hover:bg-green-300 hover:text-gray-900 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-white"
            href="#"
          >
            Join Class
          </Link>
        </div>
      </div>
      <div className="border border-gray-200 rounded-lg overflow-hidden flex flex-col">
        <div className="p-4 flex-1 grid gap-2">
          <h3 className="text-lg font-semibold">History 201</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">April 10th, 2023</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">2:00 PM - 3:30 PM</p>
        </div>
        <div className="border-t border-gray-200 p-4">
          <Link
            className="flex items-center justify-center w-full rounded-md border bg-green-600 text-white border-gray-200  text-center text-sm py-2 transition-colors hover:bg-green-300 hover:text-gray-900 dark:border-gray-800  dark:hover:bg-gray-800 dark:hover:text-white"
            href="#"
          >
            Join Class
          </Link>
        </div>
      </div>
      <div className="border border-gray-200 rounded-lg overflow-hidden flex flex-col">
        <div className="p-4 flex-1 grid gap-2">
          <h3 className="text-lg font-semibold">Mathematics 301</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">April 28th, 2023</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">11:00 AM - 12:30 PM</p>
        </div>
        <div className="border-t border-gray-200 p-4">
          <Link
            className="flex items-center justify-center w-full rounded-md border bg-green-600 text-white border-gray-200  text-center text-sm py-2 transition-colors hover:bg-green-300 hover:text-gray-900 dark:border-gray-800  dark:hover:bg-gray-800 dark:hover:text-white"
            href="#"
          >
            Join Class
          </Link>
        </div>
      </div>
    </section>
    <div className="divider"></div>
<h1 className='text-2xl text-gray-700 font-semibold'>Completed classes: </h1>
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-4 md:p-6">
      <div className="border border-gray-200 rounded-lg overflow-hidden flex flex-col">
        <div className="p-4 flex-1 grid gap-2">
          <h3 className="text-lg font-semibold">Biology 101</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">March 24th, 2023</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">10:00 AM - 11:30 AM</p>
        </div>
        <div className="border-t border-gray-200 p-4">
          <Link
            className="flex items-center justify-center w-full rounded-md border border-gray-200  text-center text-sm py-2 transition-colors hover:bg-blue-300 bg-blue-600 text-white hover:text-gray-900 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-white"
            href="#"
          >
      View lecture
          </Link>
        </div>
      </div>
      <div className="border border-gray-200 rounded-lg overflow-hidden flex flex-col">
        <div className="p-4 flex-1 grid gap-2">
          <h3 className="text-lg font-semibold">Biology 101</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">March 24th, 2023</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">10:00 AM - 11:30 AM</p>
        </div>
        <div className="border-t border-gray-200 p-4">
          <Link
            className="flex items-center justify-center w-full rounded-md border border-gray-200  text-center text-sm py-2 transition-colors hover:bg-blue-300 bg-blue-600 text-white hover:text-gray-900 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-white"
            href="#"
          >
      View lecture
          </Link>
        </div>
      </div>
      <div className="border border-gray-200 rounded-lg overflow-hidden flex flex-col">
        <div className="p-4 flex-1 grid gap-2">
          <h3 className="text-lg font-semibold">History 201</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">April 10th, 2023</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">2:00 PM - 3:30 PM</p>
        </div>
        <div className="border-t border-gray-200 p-4">
          <Link
            className="flex items-center justify-center w-full rounded-md border border-gray-200  text-center text-sm py-2 transition-colors hover:bg-blue-300 bg-blue-600 text-white hover:text-gray-900 dark:border-gray-800  dark:hover:bg-gray-800 dark:hover:text-white"
            href="#"
          >
                View lecture

          </Link>
        </div>
      </div>
      <div className="border border-gray-200 rounded-lg overflow-hidden flex flex-col">
        <div className="p-4 flex-1 grid gap-2">
          <h3 className="text-lg font-semibold">Mathematics 301</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">April 28th, 2023</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">11:00 AM - 12:30 PM</p>
        </div>
        <div className="border-t border-gray-200 p-4">
          <Link
            className="flex items-center justify-center w-full rounded-md border border-gray-200  text-center text-sm py-2 transition-colors hover:bg-blue-300 bg-blue-600 text-white hover:text-gray-900 dark:border-gray-800  dark:hover:bg-gray-800 dark:hover:text-white"
            href="#"
          >
            View lecture

          </Link>
        </div>
      </div>
    </section>
    <div className="divider"></div>
<h1 className='text-2xl text-gray-700 font-semibold'>All classes: </h1>
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-4 md:p-6">
      <div className="border border-gray-200 rounded-lg overflow-hidden flex flex-col">
        <div className="p-4 flex-1 grid gap-2">
          <h3 className="text-lg font-semibold">Biology 101</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">March 24th, 2023</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">10:00 AM - 11:30 AM</p>
        </div>
    
      </div>
      <div className="border border-gray-200 rounded-lg overflow-hidden flex flex-col">
        <div className="p-4 flex-1 grid gap-2">
          <h3 className="text-lg font-semibold">History 201</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">April 10th, 2023</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">2:00 PM - 3:30 PM</p>
        </div>

      </div>
      <div className="border border-gray-200 rounded-lg overflow-hidden flex flex-col">
        <div className="p-4 flex-1 grid gap-2">
          <h3 className="text-lg font-semibold">History 201</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">April 10th, 2023</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">2:00 PM - 3:30 PM</p>
        </div>

      </div>
      <div className="border border-gray-200 rounded-lg overflow-hidden flex flex-col">
        <div className="p-4 flex-1 grid gap-2">
          <h3 className="text-lg font-semibold">Mathematics 301</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">April 28th, 2023</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">11:00 AM - 12:30 PM</p>
        </div>

      </div>
    </section>
{/*  */}
    </div>
  )
}

export default StudentClasses
