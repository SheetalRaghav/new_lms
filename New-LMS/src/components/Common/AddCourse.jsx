import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/Authentication'
import { DataContext } from '../../context/DataContext';
import axios from 'axios';
const AddCourse = () => {
  const {userId}=useContext(AuthContext);
  const [formData,setFormData]=useState({
    title:'',
    description:'',
    categoryId:'',
    userId:userId
  })
  const token=localStorage.getItem('token')
  const handleSubmit=(e)=>{
e.preventDefault();
axios.post('http://localhost:5000/course/add-course',{...formData},{headers:{"auth-token":token}}).then((value)=>{
  console.log(value)
  callCourse();
  setFormData({ title:'',
  description:'',
  categoryId:'',
  userId:userId})
})
  }
const {categoryData,callCourse}=useContext(DataContext)
const [fetchedCategoryData, setFetchedCategoryData] = useState([])
useEffect(() => {
     if (categoryData.success) {
       setFetchedCategoryData(categoryData?.categories)
       return;
     }
     else{
       return;
     }
   }, [categoryData])
  return (
    <div className='lg:px-10 px-5 w-full mt-5'>
      <h1 className='text-xl font-semibold text-center my-5 '>Add New Course</h1>
      <form className='flex flex-col gap-5 max-w-xl mx-auto px-5 py-10 bg-gray-50 shadow-md shadow-gray-300 rounded-md ' onSubmit={handleSubmit}>
        <div className="label p-0">
          <span className="text-lg">Title  :</span>

        </div>
        <input required type="text" placeholder="Enter Title" className="input input-bordered w-full " value={formData.title} onChange={(e)=>{setFormData((prev)=>{return {...prev,title:e.target.value}})}} />
        <div className="label p-0">
          <span className="text-lg">Category :</span>

        </div>
        <select required className="select select-bordered w-full max-w-xl" value={fetchedCategoryData?.find((elem)=>{return elem===formData.categoryId})?.title} onChange={(e)=>{setFormData((prev)=>{return {...prev,categoryId:e.target.value}})}} >
          {fetchedCategoryData?.map((elem)=>{
            return <option value={elem._id}>{elem.title}</option>
          })}
        </select>
        <div className="label p-0">
          <span className="text-lg">Description :</span>

        </div>
        <textarea required value={formData.description} onChange={(e)=>{setFormData((prev)=>{return {...prev,description:e.target.value}})}} placeholder="Description" className="textarea textarea-bordered textarea-lg w-full max-w-xl h-32" style={{ resize: "none" }} id='desc'></textarea>
        <button className='bg-gray-300 text-black min-w-[120px] max-w-[150px] mx-auto px-2 py-1 rounded-md hover:bg-blue-gray-100 font-semibold'>Add</button>
      </form>
    </div>
  )
}

export default AddCourse
