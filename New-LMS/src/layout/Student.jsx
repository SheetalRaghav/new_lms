import React from "react";

import { Outlet } from "react-router-dom";
import SidebarWithBurgerMenu from "../components/Student/StudentNavbar";

const Student = () => {
  return (
    <>
    <div className="flex w-full">
    <SidebarWithBurgerMenu />
      <Outlet /></div>
      
    </>
  );
};

export default Student;
