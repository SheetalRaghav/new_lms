import { AiFillRightCircle } from "react-icons/ai"; 
import React, { useState } from "react";

const StudentDash = () => {
  const [selected, setSelected] = useState('All')
  
  const allData = [
    {
      title: "Web development",
      description: "This course includes all about web development which is all this",
      link: "web-development"
    },
    {
      title: "Web development",
      description: "This course includes all about web development which is all this",
      link: "web-development"
    },
    {
      title: "Web development",
      description: "This course includes all about web development which is all this",
      link: "web-development"
    },
    {
      title: "Web development",
      description: "This course includes all about web development which is all this",
      link: "web-development"
    },
    {
      title: "Web development",
      description: "This course includes all about web development which is all this",
      link: "web-development"
    },
    {
      title: "Web development",
      description: "This course includes all about web development which is all this",
      link: "web-development"
    },
    {
      title: "Web development",
      description: "This course includes all about web development which is all this",
      link: "web-development"
    },
    {
      title: "Web development",
      description: "This course includes all about web development which is all this",
      link: "web-development"
    },
    {
      title: "Web development",
      description: "This course includes all about web development which is all this",
      link: "web-development"
    },
    {
      title: "Web development",
      description: "This course includes all about web development which is all this",
      link: "web-development"
    },
    {
      title: "Web development",
      description: "This course includes all about web development which is all this",
      link: "web-development"
    },
    {
      title: "Web development",
      description: "This course includes all about web development which is all this",
      link: "web-development"
    },
    {
      title: "Web development",
      description: "This course includes all about web development which is all this",
      link: "web-development"
    },
    {
      title: "Web development",
      description: "This course includes all about web development which is all this",
      link: "web-development"
    },
    {
      title: "Web development",
      description: "This course includes all about web development which is all this",
      link: "web-development"
    },
    {
      title: "Web development",
      description: "This course includes all about web development which is all this",
      link: "web-development"
    },
    {
      title: "Web development",
      description: "This course includes all about web development which is all this",
      link: "web-development"
    },
    {
      title: "Web development",
      description: "This course includes all about web development which is all this",
      link: "web-development"
    },
    {
      title: "Web development",
      description: "This course includes all about web development which is all this",
      link: "web-development"
    },
    {
      title: "Web development",
      description: "This course includes all about web development which is all this",
      link: "web-development"
    },
    {
      title: "Web development",
      description: "This course includes all about web development which is all this",
      link: "web-development"
    },
  ]
  const myData = [
    {
      title: "Web development",
      description: "This course includes all about web development which is all this",
      link: "web-development"
    },
    {
      title: "Web development",
      description: "This course includes all about web development which is all this",
      link: "web-development"
    },
  ]
  const [data,setData]= useState(allData)
  return (
    <div className="md:ml-[80px] sm:py-10 py-5 sm:px-5 px-2 w-full">
      <div className=" flex flex-col justify-center items-center w-full">
        <h1 className="md:text-4xl sm:text-3xl text-2xl text-black font-semibold jost">{selected} Courses</h1>
        <div className="md:w-[500px] w-full gap-3 flex justify-evenly items-center lg:my-8 my-4">
          <h3 className={`cursor-pointer p-2 ${selected === 'All' ? ' border-b-4 border-black' : 'border-none'} transition-all`} onClick={() => { setSelected('All'); setData(allData) }}>All courses</h3>
          <h3 className={`cursor-pointer p-2 ${selected === 'My' ? ' border-b-4 border-black' : 'border-none'} transition-all`} onClick={() => { setSelected('My'); setData(myData) }}>My courses</h3>
        </div>
        {/* cards */}
        <div className="flex flex-wrap gap-5 flex-row w-full justify-center items-center max-w-[1200px]">
          {data.map((elem, index) => {
            return <div className={`border ${index%2===0?"bg-blue-gray-50":"bg-neutral-50"} border-black rounded-md w-[200px] h-[250px]  p-3 flex flex-col gap-3 justify-start items-center`}>
              <h2 className="text-xl !font-medium anta-regular text-black">{elem.title}</h2>
              <h2 className="text-base anta-regular  text-gray-600">{elem.description}</h2>
              <AiFillRightCircle size={50} className="mt-auto cursor-pointer"/>
            </div>
          })}
        </div>
        {/* end of crads */}
      </div>
    </div>
  );
};

export default StudentDash;
