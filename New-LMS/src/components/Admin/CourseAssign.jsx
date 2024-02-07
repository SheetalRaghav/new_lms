import Select from 'react-select';
import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataContext';
import axios from 'axios';

const Student = ({name,email}) => {
    const { courseData,callUser } = useContext(DataContext)
    const [options, setOptions] = useState([])
    useEffect(() => {
        setOptions(courseData?.map((elem) => {
            return { value: elem._id, label: elem.title }
        }))
    }, [courseData])
    const [selectedOption, setSelectedOption] = useState(null);
    useEffect(() => {
        const token=localStorage.getItem('token')
        axios.patch('http://localhost:5000/auth/updateuser',{courses:selectedOption?.map(item => item.value)},{headers:{"auth-token":token}}).then((value)=>{
            callUser();
        })
        
    }, [selectedOption])
    return (
        <div className="flex items-center p-4 gap-4 last:mb-0 w-full h-full">
            <div className="flex items-center space-x-4 w-[20%] min-w-[150px]">
                <div className="flex flex-col">
                    <span className="text-sm font-medium tracking-tighter">{name}</span>
                    <span className="text-sm text-gray-500 tracking-tighter">{email}</span>
                </div>
            </div>
            <div className="max-w-[700px] w-[80%]">
                <Select
                    isMulti
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                />
            </div>
        </div>
    )
}
const CourseAssign = () => {
    const { userData } = useContext(DataContext)
    return (
        <>
            <div className="flex flex-col h-screen mt-5s mx-auto">
                <div className="flex-1 grid w-full max-w-7xl px-4 items-start gap-4 mx-auto">
                    <div className="grid w-full border rounded-lg divide-y">
                    {userData?.filter(user => user.role === "Student")?.map((elem)=>{
                       return <Student name={elem.name} email={elem.email}/>
                    })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseAssign
