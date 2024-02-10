import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/Authentication";
import { useNavigate } from "react-router-dom";
import { FaCircle } from "react-icons/fa";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { DataContext } from "../../context/DataContext";

const TableRow = ({ blocked, number, email, role, name, id, filtered}) => {
    
const {callUsers}=useContext(DataContext);

useEffect(()=>{
    setIsChecked(blocked)
    SetNewRole(role)
},[filtered])
    const [newRole, SetNewRole] = useState('')
    const handleRoleChange = (e) => {
        const selected = e.target.value
        SetNewRole(selected)
    }
    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.post('http://localhost:5000/auth/updateUserRole', { identity: id, newRole: newRole }, {
            headers: {
                "auth-token": token
            }
        }).then((value) => {
            callUsers()
        })
    }, [newRole])
    const [isChecked, setIsChecked] = useState('')
    const handleChange = (e) => {
        const result = e.target.checked;
        const id = (e.target.id);
        const token = localStorage.getItem('token')
        setIsChecked(result);
        axios.post('http://localhost:5000/auth/blockuser', { result: result, identity: id }, { headers: { "auth-token": token } }).then((value) => {
            if (value.status === 200) {
                toast.success('Done!')
                callUsers()
            }
            else {
                toast.error('Internal error!')
                setIsChecked(false)
            }
        })
    }
    return (
        <tr className="border-b dark:border-neutral-500">
            <td className="whitespace-nowrap px-6 py-3 font-medium">{number}</td>
            <td className="whitespace-nowrap px-6 py-3">
                <div className="flex justify-start gap-3 text-base items-center">
                    <h2>{name}</h2>
                </div>
            </td>
            <td className="whitespace-nowrap px-6 py-3 text-base">{email}</td>
            <td className="whitespace-nowrap px-2 py-3 text-base">
                <select className=" max-w-[100px] select select-sm" value={newRole} onChange={handleRoleChange}>
                    <option value={'Admin'}>Admin</option>
                    <option value={'Tutor'}>Tutor</option>
                    <option value={'Student'}>Student</option>
                </select></td>

            <td className="whitespace-nowrap px-6 py-3">
                <div className="flex justify-start gap-2 text-base items-center">
                    <FaCircle color={`${isChecked ? "red" : "green"}`} size={10} />
                    <h2>{isChecked ? "blocked" : "Active"}</h2>
                </div>
            </td>
            <td className="whitespace-nowrap px-6 py-3">
                <div className="flex justify-start gap-2 text-base items-center">
                    <input id={id} type="checkbox" checked={isChecked} className={`toggle [--tglbg:white] ${isChecked ? 'bg-red-500 hover:bg-red-500 border-red-500' : 'bg-gray-300 hover:bg-gray-300 border-gray-500'}  `} onChange={handleChange} />

                </div>
            </td>
        </tr>
    );
};
const ManageUser = () => {
    
    const navigate = useNavigate();
    const { authRole } = useContext(AuthContext);
    if (authRole !== "Admin") {
        navigate("/");
    }
const {userData}=useContext(DataContext)
// 
const [fetchedUserData, setFetchedUserData] = useState([])
useEffect(() => {
      if (userData.success) {
        setFetchedUserData(userData.value)
        return;
      }
      else{
        return;
      }
    }, [userData])
// 
const [filtered, setFiltered] = useState(fetchedUserData);
const [keyword, setKeyword] = useState("");


useEffect(() => { 
    function searchCourses(searchTerm) {
        if (searchTerm.trim() === "") {
            return fetchedUserData; // Return all data if search term is empty
        }
        const searchResults = fetchedUserData?.filter((course) =>
            course.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return searchResults;
    }
    setFiltered(searchCourses(keyword));
}, [keyword,fetchedUserData]);
    return <div className="w-full mt-5">{authRole === "Admin" ? <div className="flex flex-col gap-5">
        <Toaster
            position="bottom-center"
            reverseOrder={false}
        />
        <div class="relative flex items-center mt-4 md:mt-0 self-end px-5 ">
            <span class="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </span>

            <input onChange={(e)=>{setKeyword(e.target.value)}} value={keyword} type="text" placeholder="Search" class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>
        <div className="flex flex-col overflow-x-auto">
            <div className="">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        #
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Role
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Block
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered?.map((elem, index) => {
                                    return <TableRow key={index}
                                        number={index + 1}
                                        name={elem.name}
                                        email={elem.email}
                                        role={elem.role}
                                        blocked={elem.blocked}
                                        id={elem._id}
                                        filtered={filtered}
                                    />
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div> : <></>}</div>;
};

export default ManageUser;
