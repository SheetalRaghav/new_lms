import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { DataContext } from "../../context/DataContext";
const TableRow = ({ title, category, status, instructor, id }) => {
    return (
        <tr>
            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                <div>
                    <h2 className="font-medium text-gray-800 dark:text-white ">{title}</h2>
                </div>
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div>
                    <h4 className="text-gray-700 dark:text-gray-200">{category}</h4>
                </div>
            </td>
            <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                <div
                    className={`inline px-3 py-1 text-sm  rounded-full text-black font-medium ${status === "Approved" ? "bg-green-200" : ""
                        } ${status === "Rejected" ? "bg-red-200" : ""}${status === "Pending" ? "bg-gray-200" : ""
                        } shadow-sm shadow-gray-400`}
                >
                    {status}
                </div>
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center">{instructor}</div>
            </td>

        </tr>
    );
};
const CourseList = () => {
    const { courseData } = useContext(DataContext)
    const [selected, setSelected] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [keyword, setKeyword] = useState("");
    useEffect(() => {
        function searchCourses(searchTerm) {
            if (searchTerm.trim() === "") {
                return courseData; // Return all data if search term is empty
            }

            const searchResults = courseData.filter((course) =>
                course.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            return searchResults;
        }
        setFiltered(searchCourses(keyword));
    }, [keyword]);


    return (
        <div>
            <section className="w-full">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <div className="flex items-center gap-x-3">
                            <h2 className="text-lg font-medium text-gray-800 dark:text-white">Courses</h2>
                        </div>
                    </div>
                </div>

                <div className="mt-6 md:flex md:items-center md:justify-between">
                    <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
                        <button
                            onClick={() => {
                                setSelected("");
                            }}
                            className={`px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 ${selected === "" ? "bg-gray-100" : ""
                                } sm:text-sm dark:bg-gray-800 dark:text-gray-300`}
                        >
                            View all
                        </button>

                        <button
                            onClick={() => {
                                setSelected("Approved");
                            }}
                            className={`px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 ${selected === "Approved" ? "bg-gray-100" : ""
                                } sm:text-sm dark:bg-gray-800 dark:text-gray-300`}
                        >
                            Approved
                        </button>

                        <button
                            onClick={() => {
                                setSelected("Pending");
                            }}
                            className={`px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 ${selected === "Pending" ? "bg-gray-100" : ""
                                } sm:text-sm dark:bg-gray-800 dark:text-gray-300`}
                        >
                            Pending
                        </button>
                        <button
                            onClick={() => {
                                setSelected("Rejected");
                            }}
                            className={`px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 ${selected === "Rejected" ? "bg-gray-100" : ""
                                } sm:text-sm dark:bg-gray-800 dark:text-gray-300`}
                        >
                            Rejected
                        </button>
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
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        {selected === ""
                                            ? filtered?.map((elem, index) => {
                                                return (
                                                    <TableRow
                                                        key={index}
                                                        title={elem.title}
                                                        category={elem.category}
                                                        status={elem.status}
                                                        instructor={elem.instructor}
                                                        id={index + 1}
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
                                                            category={elem.category}
                                                            status={elem.status}
                                                            instructor={elem.instructor}
                                                            id={index + 1}
                                                        />
                                                    );
                                                })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/courses" class="flex gap-2 justify-center items-center max-w-[90px] px-2 py-1 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 mt-2 shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">
                    View All
                </Link>
            </section>
        </div>
    );
};

export default CourseList;
