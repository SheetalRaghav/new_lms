import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import { Authentication } from "./context/Authentication.jsx";
import { Data } from "./context/DataContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Authentication>
    <Data>
    <RouterProvider router={router} />
    </Data>
    </Authentication>
  </>
);
