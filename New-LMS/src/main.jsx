import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import { Authentication } from "./context/Authentication.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Authentication>
    <RouterProvider router={router} />
    </Authentication>
  </>
);
