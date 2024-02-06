import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiOutlineFile } from "react-icons/ai";
import React, { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../../context/DataContext";
import { useParams } from "react-router-dom";
import axios from "axios";
const ModalForEdit = ({ title, index, updateItem }) => {
  const SaveForm = useRef();
  const closeTheModal = useRef();
  const [newData, setNewData] = useState(title)
  const handleEdit = (e) => {
    e.preventDefault()
    updateItem(index, newData)
  }
  return (<>
    <dialog id={`edit_modal_${newData}`} className="modal" onClick={(e) => {
      if (e.target === e.currentTarget) {
        closeTheModal.current.click()
      }
    }}>
      <div className="modal-box">
        <form className="flex flex-col gap-3 justify-start items-start" onSubmit={handleEdit}>
          <input required type="text" placeholder="Enter Title" className="input input-bordered w-full " value={newData} onChange={(e) => { setNewData(e.target.value) }} />
          <button className="hidden" ref={SaveForm}>ok</button>
        </form>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn" ref={closeTheModal}>Close</button>
          </form>
          <button className="btn" onClick={() => { SaveForm.current.click() }}>Save</button>
        </div>
      </div>
    </dialog></>
  )
}
const AddCurriculum = () => {
  const openAdd = useRef()
  const [addTitle, setAddTitle] = useState('')
  const closeAdd = useRef()
  const saveAdd = useRef()
  const [course, setCourse] = useState({});
  const [data, setData] = useState([])
  const { courseData } = useContext(DataContext);
  const { id } = useParams();
  useEffect(() => {
    setCourse(courseData?.find((course) => course._id === id));
  }, []);

  useEffect(() => {
    setData(course?.data)
  }, [course])
// useffect not working for now
  useEffect(() => {
    console.log('ok')
    const token = localStorage.getItem('token')
    axios.patch('http://localhost:5000/course/edit-course', { data: data, identity: id }, { headers: { "auth-token": token } }).then((value) => {
      console.log(value)
    })
  }, [data])
  // for adding a new module
  function addItem(title) {
    const newItem = { title: title, curriculum: [] };
    const gettingData = data
    gettingData.push(newItem);
    console.log(gettingData)
    setData(gettingData)
  }
  // for getting a specific module
  function getItem(index) {
    return data[index];
  }
  // for deleting a specific module
  function deleteItem(index) {
    const gettingData = data
    if (index >= 0 && index < gettingData.length) {
      gettingData.splice(index, 1);
      setData(gettingData)
      return true;
    }
    return false; // Return false if index is out of bounds
  }
  // for editing 
  function updateItem(index, newTitle) {
    const gettingData = data
    if (index >= 0 && index < gettingData.length) {
      gettingData[index].title = newTitle;
      setData(gettingData)
      console.log('ok')
      return true;
    }
    console.log(' not ok')

    return false; // Return false if index is out of bounds
  }

  const handleNewAdd = (e) => {
    e.preventDefault();
    addItem(addTitle);
    setAddTitle('');
    closeAdd.current.click();
  }
  // 
  return (<><div className="flex justify-start items-start flex-col gap-3 max-w-[1200px] w-full mx-auto px-2">
    {data?.map((elem, index) => {
      return (
        <div className="flex flex-col py-5 px-3 justify-start items-start max-w-[1200px] w-full bg-gray-50 border border-gray-700  mx-auto">
          <div className="flex gap-2 justify-start items-center mb-4 w-full">
            <h3 className="text-lg text-black font-semibold">Section {index + 1}:</h3>
            <AiOutlineFile />
            <p className="text-lg text-black">{elem.title}</p>
            <div className="flex items-center ml-auto gap-2 justify-center">
              <AiOutlineEdit size={20} className="hover:text-black text-gray-500 cursor-pointer" onClick={() => document.getElementById(`edit_modal_${elem.title}`).showModal()} />
              <AiOutlineDelete size={20} className="hover:text-black text-gray-500 cursor-pointer" onClick={() => { deleteItem(index) }} />
              {/* modal for edit */}

              <ModalForEdit index={index}
                title={elem.title}
                updateItem={updateItem}
              />
              {/* end of modal for edit */}
            </div>
          </div>
          <div className="flex flex-col w-[95%] mt-3  ml-auto justify-start items-start">
            {elem?.curriculum?.map((cur, index) => {
              return <div className=" flex gap-2 justify-start items-center py-1 px-2 w-full bg-white min-h-[50px] border border-black">
                <AiFillCheckCircle />
                <h2 className="text-base text-black">Lecture {index + 1}:</h2>
                <AiOutlineFile />
                <p className="text-base text-black">{cur.title}</p>
              </div>
            })}
            <button className="bg-white border gap-1 mt-3 border-black flex justify-center items-center py-1 px-1" onClick={() => { console.log('curriculum item add') }}>
              <AiOutlinePlus size={20} color="black" />{" "}
              <h3 className="text-base text-gray-900 font-semibold">Curriculum item</h3>
            </button>
          </div>
        </div>
      )
    })}
    <button onClick={() => { openAdd.current.click() }} className="bg-white border gap-1 mt-3 border-black flex justify-center items-center py-1 px-1">
      <AiOutlinePlus size={20} color="black" />{" "}
      <h3 className="text-base text-gray-900 font-semibold">Section</h3>
    </button>
  </div>
    {/* add new section modal */}
    <button className="btn hidden" onClick={() => document.getElementById(`edit_modal_add`).showModal()} ref={openAdd}>Open</button>
    <dialog id={`edit_modal_add`} className="modal" onClick={(e) => {
      if (e.target === e.currentTarget) {
        closeAdd.current.click()
      }
    }}>
      <div className="modal-box">
        <form className="flex flex-col gap-3 justify-start items-start" onSubmit={handleNewAdd}>
          <input required type="text" placeholder="Enter Title" className="input input-bordered w-full " value={addTitle} onChange={(e) => { setAddTitle(e.target.value) }} />
          <button className="hidden" ref={saveAdd}>ok</button>
        </form>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn" ref={closeAdd}>Close</button>
          </form>
          <button className="btn" onClick={() => { saveAdd.current.click() }}>Save</button>
        </div>
      </div>
    </dialog>
  </>
  );
};

export default AddCurriculum;
