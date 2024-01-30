import React from "react";

import { Outlet } from "react-router-dom";
import SidebarWithBurgerMenu from "../components/Student/StudentNavbar";

const Student = () => {
  return (
    <>
      <SidebarWithBurgerMenu />
      <Outlet />
    </>
  );
};

export default Student;
