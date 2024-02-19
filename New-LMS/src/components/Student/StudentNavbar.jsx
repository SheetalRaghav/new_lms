import { HiMenuAlt2 } from "react-icons/hi"; 
import { AiOutlineMenu } from "react-icons/ai"; 
import { FiLogOut } from "react-icons/fi"; 
import { MdOutlineHelp } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import React from "react";
import { useNavigate } from "react-router-dom";
const StudentNavbar = () => {
  const navigate=useNavigate();
  return (
    <div className="md:p-0 p-1 md:mt-0 mt-2 md:max-h-full max-h-[40px]">
    <HiMenuAlt2 size={30} className="md:hidden" />
      <div className="h-full fixed md:flex hidden max-h-[100vh] md:w-[80px] bg-gray-50 border border-gray-100 shadow-md shadow-gray-200  flex-col justify-between items-end py-4">

        <ul className="flex flex-col py-4">
          <li onClick={() => { navigate('/') }} className="tooltip  tooltip-right" data-tip="Courses">
            <div className="flex justify-start gap-3 px-5 items-center transition-all hover:scale-105 cursor-pointer py-3"><div className="p-2 shadow-md shadow-gray-300 rounded-md"><BsFillJournalBookmarkFill size={30} /></div></div>
          </li>
          <li onClick={() => { navigate('/all-classes') }} className="tooltip  tooltip-right" data-tip="Classes">
            <div className="flex justify-start gap-3 px-5 items-center transition-all hover:scale-105 cursor-pointer py-3"><div className="p-2 shadow-md shadow-gray-300 rounded-md"><SiGoogleclassroom size={30} /></div></div>
          </li>
          <li onClick={() => { navigate('/contact-us') }} className="tooltip  tooltip-right" data-tip="Contact-Us">
            <div className="flex justify-start gap-3 px-5 items-center transition-all hover:scale-105 cursor-pointer py-3"><div className="p-2 shadow-md shadow-gray-300 rounded-md"><MdOutlineHelp size={30} /></div></div>
          </li>
        </ul>

        <div  className="tooltip  tooltip-right" data-tip="Logout">
            <div onClick={() => { localStorage.removeItem('token'); navigate('/login') }} className="flex justify-start gap-3 px-5 items-center transition-all hover:scale-105 cursor-pointer py-3"><div className="p-2 shadow-md shadow-gray-300 rounded-md"><FiLogOut size={30} /></div></div>
          </div>

      </div>
    </div>
  );
};

export default StudentNavbar;
