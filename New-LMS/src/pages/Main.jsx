import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Admin from "../layout/Admin";
import Tutor from "../layout/Tutor";
import Student from "../layout/Student";
import { AuthContext } from "../context/Authentication";

const Main = () => {
  const [render, setRender] = useState(false);
  const { setIsAuthenticated, setAuthRole, setUserId } = useContext(AuthContext);
  const [role, setRole] = useState("");
  useEffect(() => {
    setAuthRole(role);
  }, [role]);
  const navigate = useNavigate();
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
          setRole(value.data.value.role);
          setUserId(value.data.value._id)
          setIsAuthenticated(true);
          setRender(true);
        })
        .catch((err) => {
          navigate("/login");
          setIsAuthenticated(false);
          localStorage.removeItem("token");
        });
    } else {
      setRender(false);
      setIsAuthenticated(false);
      navigate("/login");
    }
  }, []);
  return (
    <>
      {render ? (
        <>
          {role == "Admin" ? (
            <>
              <Admin />
            </>
          ) : (
            <>
              {role == "Tutor" ? (
                <>
                  <Tutor />
                </>
              ) : (
                <>
                  {role == "Student" ? (
                    <>
                      <Student />
                    </>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Main;
