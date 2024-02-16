import { FiLogOut } from "react-icons/fi"; 
import { MdOutlineHelp } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { BiHelpCircle } from "react-icons/bi";
import { SiGoogleclassroom } from "react-icons/si";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import React from "react";
import icon from "../../assets/lmsIcon.png";
const StudentNavbar = () => {
  return (
    <div>
      <div className="h-full min-h-[100vh] w-[150px] md:w-[80px] bg-gray-50 border border-gray-100 shadow-md shadow-gray-200 flex flex-col justify-between items-end py-4">

        <ul className="flex flex-col py-4">
          <li className="tooltip  tooltip-right" data-tip="Courses">
            <div className="flex justify-start gap-3 px-5 items-center transition-all hover:scale-105 cursor-pointer py-3"><div className="p-2 shadow-md shadow-gray-300 rounded-md"><BsFillJournalBookmarkFill size={30} /></div></div>
          </li>
          <li className="tooltip  tooltip-right" data-tip="Classes">
            <div className="flex justify-start gap-3 px-5 items-center transition-all hover:scale-105 cursor-pointer py-3"><div className="p-2 shadow-md shadow-gray-300 rounded-md"><SiGoogleclassroom size={30} /></div></div>
          </li>
          <li className="tooltip  tooltip-right" data-tip="Contact-Us">
            <div className="flex justify-start gap-3 px-5 items-center transition-all hover:scale-105 cursor-pointer py-3"><div className="p-2 shadow-md shadow-gray-300 rounded-md"><MdOutlineHelp size={30} /></div></div>
          </li>
        </ul>

        <div className="tooltip  tooltip-right" data-tip="Logout">
            <div className="flex justify-start gap-3 px-5 items-center transition-all hover:scale-105 cursor-pointer py-3"><div className="p-2 shadow-md shadow-gray-300 rounded-md"><FiLogOut size={30} /></div></div>
          </div>

      </div>
    </div>
  );
};

export default StudentNavbar;
