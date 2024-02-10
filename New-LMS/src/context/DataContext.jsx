import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const DataContext = createContext();


export const Data = ({ children }) => {
    useEffect(() => {
        callUsers();
        callCategory();
        callCourse();
    }, [])
    const callCourse = () => {
        const token = localStorage.getItem('token')
        axios.get('http://localhost:5000/course/all-course', { headers: { "auth-token": token } }).then((value) => {
            setCourseData(value.data)
        })
    }
    const callUsers = () => {
        const token = localStorage.getItem('token')
        axios.post('http://localhost:5000/auth/fetchallusers', {}, { headers: { "auth-token": token } }).then((value) => {
            setUserData(value.data)
        })
    }
    const callCategory = () => {
        const token = localStorage.getItem('token')
        axios.get('http://localhost:5000/category/all-categories', { headers: { "auth-token": token } }).then((value) => {
            setCategoryData(value.data)
        })
    }
    const [categoryData, setCategoryData] = useState([]);
    const [userData, setUserData] = useState([]);
    const [courseData, setCourseData] = useState([]);

    return (
        <DataContext.Provider value={{
            categoryData, setCategoryData,
            userData, setUserData,
            courseData, setCourseData, callUsers, callCategory, callCourse
        }}>
            {children}
        </DataContext.Provider>
    );
};

