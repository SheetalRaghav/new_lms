import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Admin from "../layout/Admin";
import Tutor from "../layout/Tutor";
import Student from "../layout/Student";

const Main = () => {
  const [render, setRender] = useState(false);
  const [role, setRole] = useState("");
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
          setRender(true);
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
