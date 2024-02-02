import React from 'react'
const AddCourse = () => {
  return (
    <div className='lg:px-10 px-5 w-full mt-5'>
      <h1 className='text-xl font-semibold text-center my-5 '>Add New Course</h1>
      <form className='flex flex-col gap-5 max-w-xl mx-auto px-5 py-10 bg-gray-50 shadow-md shadow-gray-300 rounded-md '>
        <div className="label p-0">
          <span className="text-lg">Title  :</span>

        </div>
        <input type="text" placeholder="Enter Title" className="input input-bordered w-full " />
        <div className="label p-0">
          <span className="text-lg">Category :</span>

        </div>
        <select className="select select-bordered w-full max-w-xl">
          <option disabled selected>Select Category</option>
          <option>Web Dev</option>
          <option>Science</option>
        </select>
        <div className="label p-0">
          <span className="text-lg">Description :</span>

        </div>
        <textarea placeholder="Description" className="textarea textarea-bordered textarea-lg w-full max-w-xl h-32" style={{ resize: "none" }} id='desc'></textarea>
        <button className='bg-gray-300 text-black min-w-[120px] max-w-[150px] mx-auto px-2 py-1 rounded-md hover:bg-blue-gray-100 font-semibold'>Add</button>
      </form>
    </div>
  )
}

export default AddCourse
