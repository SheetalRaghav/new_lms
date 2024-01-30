import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/Authentication";
import { useNavigate } from "react-router-dom";
import { FaCircle } from "react-icons/fa";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const TableRow = ({ blocked, number, email, role, name, id }) => {
    const [isChecked, setIsChecked] = useState(blocked)
    const handleChange = (e) => {
        const result = e.target.checked;
        const id = (e.target.id);
        const token = localStorage.getItem('token')
        setIsChecked(result);
        axios.post('http://localhost:5000/auth/blockuser', { result: result, identity: id }, { headers: { "auth-token": token } }).then((value) => {
            if (value.status === 200) {
                toast.success('Done!')
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
            <td className="whitespace-nowrap px-6 py-3 text-base">{role}</td>
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
const BlockUser = () => {
    const navigate = useNavigate();
    const { authRole } = useContext(AuthContext);
    if (authRole !== "Admin") {
        navigate("/");
    }
    const [allUsers, setAllUsers] = useState([])
    // const [called , setCalled]= useState(false)
    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.post('http://localhost:5000/auth/fetchallusers', {},
            {
                headers: {
                    "auth-token": token,
                },
            }).then((value) => {
                setAllUsers(value.data.value)
            })
    }, [])


    return <div className="w-full mt-5">{authRole === "Admin" ? <div >
        <Toaster
            position="bottom-center"
            reverseOrder={false}
        />
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
                                {allUsers.map((elem, index) => {
                                    return <TableRow key={index}
                                        number={index + 1}
                                        name={elem.name}
                                        email={elem.email}
                                        role={elem.role}
                                        blocked={elem.blocked}
                                        id={elem._id}
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

export default BlockUser;
