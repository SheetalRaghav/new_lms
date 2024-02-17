import React, { useState } from "react";

const StudentDash = () => {
  const [selected,setSelected]=useState('All')
  const allData=[
    {

    },
  ]
  return (
    <div className="ml-[80px] py-10 px-5 w-full">
      <div className=" flex flex-col justify-center items-center w-full">
        <h1 className="md:text-4xl sm:text-3xl text-2xl text-black font-semibold">{selected} Courses</h1>
        <div className="w-[500px] flex justify-evenly items-center lg:my-8 my-4">
          <h3 className={`cursor-pointer p-2 ${selected==='All'?' border-b-4 border-black':'border-none'} transition-all`} onClick={()=>{setSelected('All')}}>All courses</h3>
          <h3 className={`cursor-pointer p-2 ${selected==='My'?' border-b-4 border-black':'border-none'} transition-all`} onClick={()=>{setSelected('My')}}>My courses</h3>
        </div>
        {/* cards */}
        <div className="flex flex-wrap gap-5 flex-row w-full justify-start items-center max-w-[1000px]">
<div className="border border-black rounded-md w-[200px] h-[250px] bg-pink-100"></div>
<div className="border border-black rounded-md w-[200px] h-[250px] bg-blue-100"></div>
<div className="border border-black rounded-md w-[200px] h-[250px] bg-green-100"></div>
<div className="border border-black rounded-md w-[200px] h-[250px] bg-red-100"></div>
<div className="border border-black rounded-md w-[200px] h-[250px] bg-yellow-100"></div>
</div>
        {/* end of crads */}
      </div>
    </div>
  );
};

export default StudentDash;
