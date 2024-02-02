import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa';
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from 'react-icons/md';
const TableRow = ({number,category,id,time}) => {
  const token = localStorage.getItem('token')
  const deleteItem=()=>{
    axios.delete('http://localhost:5000/category/delete-category',{headers:{"auth-token":token}}).then((value)=>{
      console.log(value)
    })
  }
  return (
    <tr>

      <td class="px-4 py-4 sm:text-base text-sm whitespace-nowrap md:block hidden">
        <div>
          <h4 class="text-gray-700 dark:text-gray-200 ">{number}</h4>
        </div>
      </td>
      <td class="px-4 py-4 sm:text-base text-sm whitespace-nowrap">
        <div>
          <h4 class="text-gray-700 dark:text-gray-200">{category}</h4>
        </div>
      </td>
      <td class="px-4 py-4 sm:text-base text-sm whitespace-nowrap">
        <h4 class="text-gray-700 dark:text-gray-200">{id.slice(0,8)}...</h4>
      </td>
      <td class="px-4 py-4 sm:text-base text-sm whitespace-nowrap md:block hidden">
        <h4 class="text-gray-700 dark:text-gray-200">{time}</h4>
      </td>

      <td class="px-4 py-4 sm:text-base text-sm whitespace-nowrap">
        <div className='flex gap-2 items-center '><div class="flex items-center cursor-pointer"><FaEdit color='#4e7ad9' size={18} /></div>
          <div class="flex items-center cursor-pointer"><MdDelete color='#d94e57' size={18} onClick={deleteItem} /></div></div>
      </td>
    </tr>
  );
};
const CategoryPage = () => {
  const [title, setTitle] = useState('')
  const [data, setData] = useState([])
  useEffect(() => {
    const token = localStorage.getItem('token')
    axios.get('http://localhost:5000/category/all-categories', { headers: { "auth-token": token } }).then((value)=>{
    setData(value.data.categories)  
    })
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token')
    axios.post('http://localhost:5000/category/add-category', { title: title }, { headers: { "auth-token": token } }).then((value) => {
      console.log(value)
    })
  }
  return (
    <div>
      <div className='lg:px-10 sm:px-5 px-2 w-full mt-5 flex flex-col items-center justify-center h-auto'>
        <form className='flex gap-5 sm:max-w-2xl max-w-[xl] w-full mx-auto relative justify-center items-center ' onSubmit={handleSubmit}>
          <input type="text" placeholder="Add Category" className="input input-bordered w-full relative" value={title} onChange={(e) => { setTitle(e.target.value) }} required />
          <button className='absolute right-3 hover:bg-gray-200 cursor-pointer rounded-full'>
            <IoMdAdd size={25} />
          </button>
        </form>


        <section class="my-5 max-w-full w-full mx-auto sm:px-5 px-1">
          <div class="mt-6 md:flex md:items-center md:justify-between">
          </div>
          <div class="flex flex-col mt-6">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div class="overflow-hidden  md:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-100 dark:divide-gray-400">
                    <thead class="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          class="px-4 py-3.5 sm:text-base text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 md:block hidden"
                        >
                          S no.
                        </th>
                        <th
                          scope="col"
                          class="px-4 py-3.5 sm:text-base text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Category
                        </th>

                        <th
                          scope="col"
                          class="px-4 py-3.5 sm:text-base text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-40"
                        >
                          Id
                        </th>
                        <th
                          scope="col"
                          class="px-4 py-3.5 sm:text-base text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-40 md:block hidden"
                        >
                          Created At
                        </th>



                        <th
                          scope="col"
                          class="px-4 py-3.5 sm:text-base text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {data?.map((elem,index)=>{
                      return <TableRow
                      id={elem._id}
                      category={elem.title}
                      time={elem.date}
                      number={index+1}
                       />
                    })}
                      
                   
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default CategoryPage
