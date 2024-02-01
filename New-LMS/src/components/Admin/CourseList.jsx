import React from "react";
import { Link } from "react-router-dom";
const TableRow = () => {
    return (
        <tr>
            <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                <div>
                    <h2 class="font-medium text-gray-800 dark:text-white ">Circooles</h2>
                </div>
            </td>
            <td class="px-4 py-4 text-sm whitespace-nowrap">
                <div>
                    <h4 class="text-gray-700 dark:text-gray-200">Design software</h4>
                </div>
            </td>
            <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                <div class="inline px-3 py-1 text-sm font-normal text-gray-500 bg-gray-100 rounded-full dark:text-gray-400 gap-x-2 dark:bg-gray-800">
                    Churned
                </div>
            </td>
            <td class="px-4 py-4 text-sm whitespace-nowrap">
                <div>
                    <h4 class="text-gray-700 dark:text-gray-200">Design software</h4>
                    <p class="text-gray-500 dark:text-gray-400">Super lightweight design app</p>
                </div>
            </td>
            <td class="px-4 py-4 text-sm whitespace-nowrap">
                <div class="flex items-center">Jatin</div>
            </td>
        </tr>
    );
};
const CourseList = () => {
    return (
        <>
            <section class="my-5 w-full">
                <div class="mt-6 md:flex md:items-center md:justify-between">
                    <div class="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
                        <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm dark:bg-gray-800 dark:text-gray-300">
                            View all
                        </button>

                        <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                            Approved
                        </button>

                        <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                            Pending
                        </button>

                        <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                            Rejected
                        </button>
                    </div>
                </div>
                <div class="flex flex-col mt-6">
                    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead class="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            <th
                                                scope="col"
                                                class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                <button class="flex items-center gap-x-3 focus:outline-none">
                                                    <span>Name</span>
                                                </button>
                                            </th>
                                            <th
                                                scope="col"
                                                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Category
                                            </th>

                                            <th
                                                scope="col"
                                                class="px-[60px] py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Status
                                            </th>

                                            <th
                                                scope="col"
                                                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                About
                                            </th>

                                            <th
                                                scope="col"
                                                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Instructor
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        <TableRow />
                                        <TableRow />
                                        <TableRow />
                                        <TableRow />
                                        <TableRow />
                                    </tbody>
                                </table>
                            </div>
                            <Link to="/courses" class="inline-flex items-center justify-center px-2 mt-1 py-1 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-sm shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-rounded="rounded-sm" data-primary="blue-600" data-primary-reset="{}">
                                View All
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CourseList;
