import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiOutlineFile } from "react-icons/ai";
import React, { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../../context/DataContext";
import { useParams } from "react-router-dom";
import axios from "axios";
import ModalForEdit from "./Curriculum/ModalForEdit";
import ModalForLectureEdit from "./Curriculum/ModalForLectureEdit";
const AddCurriculum = () => {
  // for modules ******************************************************************************************
  const openAdd = useRef();
  const [addTitle, setAddTitle] = useState("");
  const [updateClicked, setUpdateClicked] = useState(false);
  const closeAdd = useRef();
  const saveAdd = useRef();
  const [course, setCourse] = useState({});
  const [data, setData] = useState([]);
  const { courseData, callCourse } = useContext(DataContext);
  const { id } = useParams();
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
  useEffect(() => {
    setCourse(fetchedCourseData?.find((course) => course._id === id));
  }, [fetchedCourseData]);

  useEffect(() => {
    setData(course?.data);
  }, [course]);

  const setDataInDB = (data) => {
    const token = localStorage.getItem("token");
    axios
      .patch(
        "http://localhost:5000/course/edit-course",
        { data: data, identity: id },
        { headers: { "auth-token": token } }
      )
      .then((value) => {
        callCourse();
      });
  };

  // for adding a new module
  function addItem(title) {
    const newItem = { title: title, curriculum: [] };
    const gettingData = data;
    gettingData.push(newItem);
    setDataInDB(gettingData);
  }
  // delete module from data
  function deleteItem(index) {
    const gettingData = data;
    if (index >= 0 && index < gettingData.length) {
      gettingData.splice(index, 1);
      setDataInDB(gettingData);
      return true;
    }
    return false;
  }
  // updating module from data
  function updateItem(index, newTitle) {
    const gettingData = data;
    if (index >= 0 && index < gettingData.length) {
      gettingData[index].title = newTitle;
      setDataInDB(gettingData);
      return true;
    }
    return false;
  }
  // function for adding module on submiting form
  const handleNewAdd = (e) => {
    e.preventDefault();
    addItem(addTitle);
    setAddTitle("");
    closeAdd.current.click();
  };
  // for lectures ******************************************************************************************
  const saveAddLecture = useRef()
  const closeAddLecture = useRef()
  const [lecture, setLecture] = useState('')
  const [selectedModule, setSelectedModule] = useState(null)
  // for adding a new module
  function addLecture(title, modIndex) {
    const newItem = { title: title };
    const gettingData = data;
    gettingData[modIndex].curriculum.push(newItem);
    setDataInDB(gettingData);
    setLecture('');
  }
  // delete module from data
  function deleteLecture(modIndex, lecIndex) {
    const gettingData = data;
    if (lecIndex >= 0 && lecIndex < gettingData[modIndex].curriculum.length) {
      gettingData[modIndex].curriculum.splice(lecIndex, 1);
      setDataInDB(gettingData);
      return true;
    }
    return false;
  }
  // updating module from data
  function updateLecture(lecIndex, modIndex, newTitle) {
    const gettingData = data;
    if (lecIndex >= 0 && lecIndex < gettingData[modIndex].curriculum.length) {
      gettingData[modIndex].curriculum[lecIndex].title = newTitle;
      setDataInDB(gettingData);
      return true;
    }
    return false;
  }
  const handleLectureAdd = (mobIndex) => {
    addLecture(lecture, mobIndex)
  }

  return (
    <>
      <div className="flex justify-start items-start flex-col gap-3 max-w-[1200px] w-full mx-auto px-2">
        {data?.map((elem, index) => {
          return (
            <div
              className="flex flex-col py-5 px-3 justify-start items-start max-w-[1200px] w-full bg-gray-50 border border-gray-700  mx-auto"
              key={elem._id}
            >
              <div className="flex gap-2 justify-start items-center mb-4 w-full">
                <h3 className="text-lg text-black font-semibold">Section {index + 1}:</h3>
                <AiOutlineFile />
                <p className="text-lg text-black">{elem.title}</p>
                <div className="flex items-center ml-auto gap-2 justify-center">
                  <AiOutlineEdit
                    size={20}
                    className="hover:text-black text-gray-500 cursor-pointer"
                    onClick={() => {
                      document.getElementById(`edit_modal_${index}`).showModal();
                      setUpdateClicked((prev) => {
                        return !prev;
                      });
                    }}
                  />
                  <AiOutlineDelete
                    size={20}
                    className="hover:text-black text-gray-500 cursor-pointer"
                    onClick={() => {
                      deleteItem(index);
                    }}
                  />
                  {/* modal for edit module */}

                  <ModalForEdit
                    index={index}
                    title={elem.title}
                    updateItem={updateItem}
                    updateClicked={updateClicked}
                  />
                  {/* end of modal for edit */}
                </div>
              </div>
              <div className="flex flex-col w-[95%] mt-3  ml-auto justify-start items-start gap-2">
                {elem?.curriculum?.map((cur, curIndex) => {
                  return (
                    <div className=" flex gap-2 justify-start items-center py-1 px-2 w-full bg-white min-h-[50px] border border-black" key={cur + curIndex}>
                      <AiFillCheckCircle />
                      <h2 className="text-base text-black">Lecture {curIndex + 1}:</h2>
                      <AiOutlineFile />
                      <p className="text-base text-black">{cur.title}</p>
                      <div className="flex items-center ml-auto gap-2 justify-center">
                        <AiOutlineEdit
                          size={20}
                          className="hover:text-black text-gray-500 cursor-pointer"
                          onClick={() => {
                            document.getElementById(`lecture_modal_${curIndex}_${cur.title}`).showModal();
                            setSelectedModule(index);
                            setUpdateClicked((prev) => { return !prev })
                          }}
                        />
                        <AiOutlineDelete
                          size={20}
                          className="hover:text-black text-gray-500 cursor-pointer"
                          onClick={() => { deleteLecture(index, curIndex) }}
                        />
                        {/* modal for edit lectures */}
                        <ModalForLectureEdit lectureIndex={curIndex} moduleIndex={selectedModule} title={cur.title} updateLecture={updateLecture} updateClicked={updateClicked} />
                        {/* end of modal for edit lectures */}
                      </div>
                    </div>
                  );
                })}
                <button
                  className="bg-white border gap-1 mt-3 border-black flex justify-center items-center py-1 px-1"
                  onClick={() => { document.getElementById(`lecture_modal_adding_${index}`).showModal(); setSelectedModule(index) }}
                >
                  <AiOutlinePlus size={20} color="black" />{" "}
                  <h3 className="text-base text-gray-900 font-semibold">Curriculum item</h3>
                </button>
                {/* lecture adding modal */}
                <dialog
                  id={`lecture_modal_adding_${index}`}
                  className="modal"
                  onClick={(e) => {
                    if (e.target === e.currentTarget) {
                      closeAddLecture.current.click();
                    }
                  }}
                >
                  <div className="modal-box">
                    <form className="flex flex-col gap-3 justify-start items-start" onSubmit={(e) => { e.preventDefault(); handleLectureAdd(selectedModule); closeAddLecture.current.click(); }}>
                      <input
                        required
                        type="text"
                        placeholder="Enter Title"
                        className="input input-bordered w-full "
                        value={lecture}
                        onChange={(e) => { setLecture(e.target.value) }}
                      />
                      <button className="hidden" ref={saveAddLecture}>
                        ok
                      </button>
                    </form>
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn" ref={closeAddLecture}>
                          Close
                        </button>
                      </form>
                      <button
                        className="btn"
                        onClick={() => {
                          saveAddLecture.current.click();
                        }}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </dialog>
                {/* lecture adding modal close  */}
              </div>
            </div>
          );
        })}
        <button
          onClick={() => {
            openAdd.current.click();
          }}
          className="bg-white border gap-1 mt-3 border-black flex justify-center items-center py-1 px-1"
        >
          <AiOutlinePlus size={20} color="black" />{" "}
          <h3 className="text-base text-gray-900 font-semibold">Section</h3>
        </button>
      </div>
      {/* add new section modal */}
      <button
        className="btn hidden"
        onClick={() => document.getElementById(`edit_modal_add`).showModal()}
        ref={openAdd}
      >
        Open
      </button>
      <dialog
        id={`edit_modal_add`}
        className="modal"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            closeAdd.current.click();
          }
        }}
      >
        <div className="modal-box">
          <form className="flex flex-col gap-3 justify-start items-start" onSubmit={handleNewAdd}>
            <input
              required
              type="text"
              placeholder="Enter Title"
              className="input input-bordered w-full "
              value={addTitle}
              onChange={(e) => {
                setAddTitle(e.target.value);
              }}
            />
            <button className="hidden" ref={saveAdd}>
              ok
            </button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" ref={closeAdd}>
                Close
              </button>
            </form>
            <button
              className="btn"
              onClick={() => {
                saveAdd.current.click();
              }}
            >
              Save
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default AddCurriculum;
