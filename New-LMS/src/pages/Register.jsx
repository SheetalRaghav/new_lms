import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
const Register = () => {
  const navigate = useNavigate();
  const [render, setRender] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .post(
          "http://localhost:5000/auth/getuser",
          {},
          {
            headers: {
              "auth-token": token,
            },
          }
        )
        .then((value) => {
          if (value.data.value.role === "Admin") {
            setRender(true);

          }
          else {
            navigate('/')
          }
        })
        .catch((err) => {
          navigate("/");
          localStorage.removeItem("token");
        });
    } else {
      setRender(false);
      navigate("/login");
    }
  }, []);
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    role: "Admin",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/auth/newuser", register).then((value) => {
      toast.success('User created!')
      setRegister({ email: "", password: "", name: "", role: 'Admin' });
    });
  };
  return (
    <>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
      <div className="relative flex flex-col justify-start sm:mt-[100px] mt-[3%] py-3 overflow-hidden gap-5 lg:px-10 sm:px-6 px-4">
        <div className="flex gap-6 justify-center items-center w-full mt-10">
          <button
            className={`btn btn-outline ${register.role == "Admin" ? "text-gray-900" : "text-gray-500"} `}
            onClick={() => {
              setRegister((prev) => {
                return { ...prev, role: "Admin" };
              });
            }}
          >
            Admin
          </button>
          <button
            className={`btn btn-outline ${register.role == "Tutor" ? "text-gray-900" : "text-gray-500"} `}
            onClick={() => {
              setRegister((prev) => {
                return { ...prev, role: "Tutor" };
              });
            }}
          >
            Tutor
          </button>
          <button
            className={`btn btn-outline ${register.role == "Student" ? "text-gray-900" : "text-gray-500"} `}
            onClick={() => {
              setRegister((prev) => {
                return { ...prev, role: "Student" };
              });
            }}
          >
            Student
          </button>
        </div>
        <div className="w-full p-6 mx-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl ">
          <h1 className="text-3xl font-semibold text-center text-gray-700">
            Add New {register.role}
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="label">
                <span className="text-base text-gray-500">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="w-full input input-bordered"
                value={register.name}
                onChange={(e) => {
                  setRegister((prev) => {
                    return { ...prev, name: e.target.value };
                  });
                }}
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base text-gray-500">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email Address"
                className="w-full input input-bordered"
                value={register.email}
                onChange={(e) => {
                  setRegister((prev) => {
                    return { ...prev, email: e.target.value };
                  });
                }}
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base text-gray-500">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered"
                required
                value={register.password}
                onChange={(e) => {
                  setRegister((prev) => {
                    return { ...prev, password: e.target.value };
                  });
                }}
              />
            </div>
            <div>
              <button className="btn btn-block mt-5 bg-gray-900 text-white hover:bg-gray-700 transition-all shadow-sm shdaow-gray-300">Add</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
