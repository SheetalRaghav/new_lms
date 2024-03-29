import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/Authentication'
import toast, { Toaster } from 'react-hot-toast'
const Login = () => {
    const {setIsAuthenticated}=useContext(AuthContext)
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/')
        }
    }, [])
    const handleSubmit = (e) => {

        e.preventDefault();
        axios.post('http://localhost:5000/auth/login', login).then((value) => {
            const token = value.data.authToken;
            localStorage.setItem('token', token)
            setIsAuthenticated(true)
            navigate('/')
            setLogin({ email: "", password: "" })
        }).catch((error)=>{
            if(error.response.data.blocked){
                toast.error('You are blocked!')
            }
        })
    }
    return (
        <>
         <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
            <div className="relative flex flex-col justify-center h-screen overflow-hidden lg:px-10 sm:px-6 px-4 gap-5">
                <div className="w-full p-6  rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg mx-auto">
                    <h1 className="text-3xl font-semibold text-center text-gray-700">Login</h1>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="label">
                                <span className="text-base text-gray-500">Email</span>
                            </label>
                            <input type="text" placeholder="Email Address" className="w-full input input-bordered" value={login.email} onChange={(e) => { setLogin((prev) => { return { ...prev, email: e.target.value } }) }} />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base text-gray-500">Password</span>
                            </label>
                            <input type="password" placeholder="Enter Password"
                                className="w-full input input-bordered" value={login.password} onChange={(e) => { setLogin((prev) => { return { ...prev, password: e.target.value } }) }} />
                        </div>
                        <div>
                            <button className="btn btn-block mt-4 bg-gray-900 text-white hover:bg-gray-700 transition-all shadow-sm shdaow-gray-300">Login</button>
                        </div>
                    </form>

                </div>

            </div>
        </>
    )
}

export default Login
