import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
const TableRow = ({ title, status }) => {
    return (
        <tr>
            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                <div>
                    <h2 className="font-medium text-gray-800 dark:text-white ">{title}</h2>
                </div>
            </td>
            
            <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                <div
                    className={`inline px-3 py-1 text-sm  rounded-full text-black font-medium ${status === "Approved" ? "bg-green-200" : ""
                        } ${status === "Rejected" ? "bg-red-200" : ""}${status === "Pending" ? "bg-gray-200" : ""
                        } shadow-sm shadow-gray-400`}>
                    {status}
                </div>
            </td>
           

        </tr>
    );
};
const CourseList = () => {
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
    return (
        <div className="lg:w-[49%] w-full">
            <section className="bg-white shadow-md p-4 rounded-md shadow-gray-400">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <div className="flex items-center gap-x-3">
                            <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">Courses</h2>
                        </div>
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
                                                className="px-[60px] py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Status
                                            </th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        {fetchedCourseData?.map((elem, index) => {
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
