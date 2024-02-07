import {
  createBrowserRouter,
} from "react-router-dom";
import React from 'react'
import Register from '../pages/Register'
import Login from "../pages/Login";
import Main from '../pages/Main'
import Dashboard from "../pages/Dashboard";
import ManageUser from "../components/Admin/ManageUser";
import AllCourses from "../components/Admin/AllCourses";
import AddCourse from "../components/Common/AddCourse";
import CategoryPage from "../components/Admin/CategoryPage";
import SelectCourseForCurriculum from "../components/Common/SelectCourseForCurriculum";
import AddCurriculum from "../components/Common/AddCurriculum";
import CourseAssign from "../components/Admin/CourseAssign";
const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "users",
        element: <ManageUser></ManageUser>,
      },
      {
        path: "courses",
        element: <AllCourses></AllCourses>
      },
      {
        path: "new-course",
        element: <AddCourse />
      },
      {
        path: "category",
        element: <CategoryPage />
      },
      {
        path: "curriculum",
        element: <SelectCourseForCurriculum></SelectCourseForCurriculum>,
      },
      {
        path: "curriculum/:id",
        element: <AddCurriculum></AddCurriculum>,
      },
      {
        path: 'student-course',
        element: <CourseAssign />
      }

    ],
  }
]);
export default router