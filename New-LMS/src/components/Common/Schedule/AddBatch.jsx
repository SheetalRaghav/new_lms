import { BiRightArrowCircle } from "react-icons/bi";
import React, { useContext, useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from 'react-icons/md';
import { Link, useParams } from "react-router-dom";
const AddBatch = () => {
  const [title, setTitle] = useState('')
  const [update, setUpdate] = useState('')
  const [fetchedData, setFetchedData] = useState([])
  const token = localStorage.getItem('token')
  const { id } = useParams()
  const callBatches = () => {
    axios.get(`http://localhost:5000/batch/all-batch/${id}`, { headers: { "auth-token": token } }).then((value) => {
      setFetchedData(value.data.batch)

    })
  }
  useEffect(() => {
    callBatches();
  }, [update])

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/batch/add-batch', { title: title, courseId: id }, { headers: { "auth-token": token } }).then((value) => {
      setTitle('')
      setUpdate(value)
    })
  }

  return (
    <div>
      <div className='lg:px-10 sm:px-5 px-2 w-full mt-5 flex flex-col items-center justify-center h-auto'>
        <form className='flex gap-5 sm:max-w-2xl max-w-[xl] w-full mx-auto relative justify-center items-center ' onSubmit={handleSubmit}>
          <input type="text" placeholder="Add New Batch" className="input input-bordered w-full relative" value={title} onChange={(e) => { setTitle(e.target.value) }} required />
          <button className='absolute right-3 hover:bg-gray-200 cursor-pointer rounded-full'>
            <IoMdAdd size={25} />
          </button>
        </form>


        <section className="my-5 max-w-full w-full mx-auto sm:px-5 px-1">
          <div className="mt-6 md:flex md:items-center md:justify-between">
          </div>
          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden  md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-100 dark:divide-gray-400">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="px-4 py-3.5 sm:text-base text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Name
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 sm:text-base text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-40"
                        >
                          Students
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 sm:text-base text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-40 md:block hidden"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 sm:text-base text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          Actions
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 sm:text-base text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {fetchedData?.map((elem, index) => {
                        return <TableRow
                        key={index}
                          id={elem._id}
                          category={elem.title}
                          date={elem.date.slice(0,10)}
                          setUpdate={setUpdate}
                          student={elem.student}
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

const TableRow = ({ date, category, id, setUpdate, student }) => {
  const [newCategory, setNewCategory] = useState('')
  const openTheModal = useRef();
  const closeTheModal = useRef();
  const saveForm = useRef();

  // Convert to IST (Indian Standard Time)


  // Format the date

  const token = localStorage.getItem('token')

  const deleteItem = () => {
    axios.delete(`http://localhost:5000/batch/delete-batch/${id}`, { headers: { "auth-token": token } }).then((value) => {
      setUpdate(value)
    })
  }
  const EditItem = (e) => {
    e.preventDefault();
    axios.patch('http://localhost:5000/batch/edit-batch', {
      identity: id,
      newTitle: newCategory
    }, { headers: { "auth-token": token } }).then((value)=>{
      setUpdate(value)
      closeTheModal.current.click();
    })
  }
  return (
    <>
      <tr>


        <td className="px-4 py-4 sm:text-base text-sm whitespace-nowrap">
          <div>
            <h4 className="text-gray-700 dark:text-gray-200">{category}</h4>
          </div>
        </td>
        <td className="px-4 py-4 sm:text-base text-sm whitespace-nowrap">
          <h4 className="text-gray-700 dark:text-gray-200">{student.length}</h4>
        </td>
        <td className="px-4 py-4 sm:text-base text-sm whitespace-nowrap md:block hidden">
          <h4 className="text-gray-700 dark:text-gray-200">{date}</h4>
        </td>

        <td className="px-4 py-4 sm:text-base text-sm whitespace-nowrap">
          <div className='flex gap-2 items-center '><div className="flex items-center cursor-pointer">
            <FaEdit color='#4e7ad9' size={18} onClick={() => { openTheModal.current.click(); setNewCategory(category) }} /></div>
            <div className="flex items-center cursor-pointer">
              <MdDelete color='#d94e57' size={18} onClick={deleteItem} /></div></div>
        </td>
        <td className="px-4 py-4 sm:text-base text-sm whitespace-nowrap">
          <div className='flex gap-2 items-center '>
            <Link to={`${id}`}><BiRightArrowCircle size={25} className="cursor-pointer" /></Link>
          </div>
        </td>
      </tr>

      <button className="btn hidden" onClick={() => document.getElementById(`edit_modal_${id}`).showModal()} ref={openTheModal}>Open</button>
      <dialog id={`edit_modal_${id}`} className="modal" onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeTheModal.current.click();
        }
      }}>
        <div className="modal-box">
          <form onSubmit={EditItem}>
            <input required type="text" placeholder="Enter Title" className="input input-bordered w-full " value={newCategory} onChange={(e) => { setNewCategory(e.target.value) }} />
            <button className='hidden' type='submit' ref={saveForm}>Save</button>
          </form>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" ref={closeTheModal}>Close</button>
            </form>
            <button className="btn" onClick={() => { saveForm.current.click(); }}>Save</button>
          </div>
        </div>
      </dialog>
    </>
  );
};
export default AddBatch
