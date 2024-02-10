import React, { useEffect, useRef, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import axios from "axios";
const TableRow = ({ title, category, status, instructor, id, description }) => {
    const { categoryData, userData, callCourse } = useContext(DataContext)
    const [fetchedUserData, setFetchedUserData] = useState([])
    const [fetchedCategoryData, setFetchedCategoryData] = useState([])
 useEffect(() => {
      if (userData.success) {
        setFetchedUserData(userData.value)
        return;
      }
      else{
        return;
      }
    }, [userData])
 useEffect(() => {
      if (categoryData.success) {
        setFetchedCategoryData(categoryData?.categories)
        return;
      }
      else{
        return;
      }
    }, [categoryData])
    const [newData, setNewData] = useState({
        title: '',
        description: '',
        status: ''
    })
    const SaveForm = useRef()
    const token = localStorage.getItem('token')
    const handleDelete = () => {
        axios.delete(`http://localhost:5000/course/delete-course/${id}`, { headers: { "auth-token": token } }).then((value) => {
            console.log(value)
            callCourse();
        })
    }
    const handleEdit = (e) => {
        e.preventDefault()
        axios.patch('http://localhost:5000/course/edit-course', { ...newData }, { headers: { "auth-token": token } }).then((value) => {
            console.log(value)
            callCourse();
            closeTheModal.current.click()
        })
    }
    const closeTheModal = useRef()
    const openTheModal = useRef()
    return (
        <tr>
            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                <div>
                    <h2 className="font-medium text-gray-800 dark:text-white ">{title}</h2>
                </div>
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div>
                    <h4 className="text-gray-700 dark:text-gray-200">{fetchedCategoryData?.find(course => course._id === category)?.title}</h4>
                </div>
            </td>
            <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                <div
                    className={`inline px-3 py-1 text-sm  rounded-full text-black font-medium ${status === "Approved" ? "bg-green-200" : ""
                        } ${status === "Rejected" ? "bg-red-200" : ""}${status === "Pending" ? "bg-gray-300" : ""
                        } shadow-sm shadow-gray-400`}
                >
                    {status}
                </div>
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center">{fetchedUserData?.find(user => user._id === instructor)?.name}</div>
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex gap-2 items-center ">
                    <button
                        className="flex items-center cursor-pointer"
                        id={id}
                        onClick={(e) => {
                            openTheModal.current.click();
                            setNewData({ title: title, description: description, status: status, identity: id })
                        }}
                    >
                        <FaEdit color="#4e7ad9" size={18} className="pointer-events-none" />
                    </button>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn hidden" onClick={() => document.getElementById(`edit_modal_${id}`).showModal()} ref={openTheModal}>Open</button>
                    <dialog id={`edit_modal_${id}`} className="modal" onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            closeTheModal.current.click()
                        }
                    }}>
                        <div className="modal-box">
                            <form className="flex flex-col gap-3 justify-start items-start" onSubmit={handleEdit}>
                                <div className="label p-0">
                                    <span className="text-lg">New Title :</span>

                                </div>
                                <input required type="text" placeholder="Enter Title" className="input input-bordered w-full " value={newData.title} onChange={(e) => { setNewData((prev) => { return { ...prev, title: e.target.value } }) }} />
                                <hr />
                                <div className="label p-0">
                                    <span className="text-lg">New Description :</span>

                                </div>
                                <textarea required placeholder="Description" className="textarea textarea-bordered textarea-md text-base w-full max-w-xl h-32" style={{ resize: "none" }} value={newData.description} onChange={(e) => { setNewData((prev) => { return { ...prev, description: e.target.value } }) }}></textarea>
                                <hr />

                                <div className="label p-0">
                                    <span className="text-lg">Status :</span>

                                </div>
                                <select className="select select-bordered w-full max-w-xl" value={newData.status} onChange={(e) => { setNewData((prev) => { return { ...prev, status: e.target.value } }) }}>
                                    <option value={'Approved'}>Approved</option>
                                    <option value={'Pending'}>Pending</option>
                                    <option value={'Rejected'}>Rejected</option>
                                </select>
                                <hr />

                                <button className="hidden" ref={SaveForm}>ok</button>
                                {/* add button for form submit */}
                            </form>

                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn" ref={closeTheModal}>Close</button>
                                </form>
                                <button className="btn" onClick={() => { SaveForm.current.click() }}>Save</button>
                            </div>
                        </div>
                    </dialog>
                    <button
                        className="flex items-center cursor-pointer"
                        onClick={() => {
                            handleDelete();
                        }}
                    >
                        <MdDelete color="#d94e57" size={18} className="pointer-events-none" />
                    </button>
                </div>
            </td>
        </tr>
    );
};
const AllCourses = () => {
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

    const [selected, setSelected] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        setFiltered(fetchedCourseData)
    }, [fetchedCourseData])
    useEffect(() => {
        function searchCourses(searchTerm) {
            if (searchTerm.trim() === "") {
                return fetchedCourseData; // Return all data if search term is empty
            }

            const searchResults = fetchedCourseData?.filter((course) =>
                course.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            return searchResults;
        }
        setFiltered(searchCourses(keyword));
    }, [keyword]);
    return (
        <div>
            <section className="lg:px-10 px-5 w-full">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <div className="flex items-center gap-x-3">
                            <h2 className="text-lg font-medium text-gray-800 dark:text-white">Courses</h2>

                            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
                                {fetchedCourseData?.length} Courses
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-6 md:flex md:items-center md:justify-between">
                    <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
                        <button
                            onClick={() => {
                                setSelected("");
                            }}
                            className={`px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 ${selected === "" ? "bg-gray-300" : ""
                                } sm:text-sm dark:bg-gray-800 dark:text-gray-300`}
                        >
                            View all
                        </button>

                        <button
                            onClick={() => {
                                setSelected("Approved");
                            }}
                            className={`px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 ${selected === "Approved" ? "bg-gray-300" : ""
                                } sm:text-sm dark:bg-gray-800 dark:text-gray-300`}
                        >
                            Approved
                        </button>

                        <button
                            onClick={() => {
                                setSelected("Pending");
                            }}
                            className={`px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 ${selected === "Pending" ? "bg-gray-300" : ""
                                } sm:text-sm dark:bg-gray-800 dark:text-gray-300`}
                        >
                            Pending
                        </button>
                        <button
                            onClick={() => {
                                setSelected("Rejected");
                            }}
                            className={`px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 ${selected === "Rejected" ? "bg-gray-300" : ""
                                } sm:text-sm dark:bg-gray-800 dark:text-gray-300`}
                        >
                            Rejected
                        </button>
                    </div>

                    <div className="relative flex items-center mt-4 md:mt-0">
                        <span className="absolute">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>
                        </span>

                        <input
                            value={keyword}
                            onChange={(e) => {
                                setKeyword(e.target.value);
                            }}
                            type="text"
                            placeholder="Search"
                            className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                </div>

                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                <button className="flex items-center gap-x-3 focus:outline-none">
                                                    <span>Title</span>
                                                </button>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Category
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-[60px] py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Status
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Instructor
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        {selected === ""
                                            ? filtered?.map((elem, index) => {
                                                return (
                                                    <TableRow
                                                        key={index}
                                                        title={elem.title}
                                                        category={elem.categoryId}
                                                        status={elem.status}
                                                        instructor={elem.userId}
                                                        id={elem._id}
                                                        description={elem.description}
                                                    />
                                                );
                                            })
                                            : filtered
                                                ?.filter((course) => course.status === selected)
                                                .map((elem, index) => {
                                                    return (
                                                        <TableRow
                                                            key={index}
                                                            title={elem.title}
                                                            category={elem.categoryId}
                                                            status={elem.status}
                                                            instructor={elem.userId}
                                                            id={elem._id}
                                                            description={elem.description}
                                                        />
                                                    );
                                                })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllCourses;
