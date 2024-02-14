import React, { useContext, useEffect, useRef, useState } from 'react'
import { DataContext } from '../../../context/DataContext';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Lecture = ({ data, lectureIndex, courseIndex }) => {
  const {selectedCourse}=useContext(DataContext)
  useEffect(()=>{

  },[selectedCourse])
  useEffect(()=>{
console.log(data)
  },[])
  const [link,setLink]=useState('');
  const [time,setTime]=useState('')
  const handleSubmit=()=>{
    // patch request with link and time
  }
  const closeTheModal = useRef();
  return (
    <div className="space-y-4 ml-7 w-full">
      <div className="flex items-center space-x-4 justify-between shadow-sm shadow-gray-100 rounded-sm py-2 ">
        <div className="flex items-center space-x-2">
          <PlayIcon className="w-6 h-6 text-gray-500" />
          <p className="text-base font-medium tracking-wide dark:text-gray-400 md:w-[300px]">{lectureIndex + 1}.  {data.title}</p>
        </div>
        <div className="ml-auto flex items-center space-x-2 md:w-[300px]">
          <button
            className="rounded-md w-1/2 p-1 border border-gray-200  hover:bg-gray-100 hover:text-gray-900  dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50"
            size="sm"
            variant="ghost"
            onClick={() => document.getElementById(`edit_modal_live_${courseIndex}_${lectureIndex}`).showModal()}
          >
            Schedule
          </button>
          {/*  */}
          <dialog id={`edit_modal_live_${courseIndex}_${lectureIndex}`} className="modal" onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeTheModal.current.click()
            }
          }}>
            <div className="modal-box">
              <form className="flex flex-col gap-3 justify-start items-start" >
                <input type="datetime-local" id="birthdaytime" name="birthdaytime" onChange={(e) => { console.log(e.target.value) }} />
                <input required type="text" placeholder="Meeting Link" className="input input-bordered w-full " value={lectureIndex+" "+courseIndex}/>
                <button className="hidden">ok</button>
              </form>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn" ref={closeTheModal}>Close</button>
                </form>
                <button className="btn">Save</button>
              </div>
            </div>
          </dialog>
          {/*  */}


        </div>
      </div>
    </div>)
}
const SkillBtn = ({
  selectedSkills,
  SetSelectedSkills,
  skill,
  setSearchTerm,
}) => {
  const handleAddSkill = (skillToAdd) => {
    setSearchTerm("");
    if (selectedSkills.includes(skillToAdd)) {
      return;
    } else {
      SetSelectedSkills([...selectedSkills, skillToAdd]);
    }
  };
  return (
    <button
      onClick={() => handleAddSkill(skill)}
      className="p-2 w-full text-start hover:bg-gray-700 duration-200 rounded-lg"
    >
      {skill}
    </button>
  );
};
const SkillsInput = ({ data }) => {
  const { userData } = useContext(DataContext)
  const [selectedSkills, SetSelectedSkills] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [skills, setSkill] = useState([]);
  const [filteredSkills, SetFilteredSkills] = useState(skills);
  useEffect(() => {
    setSkill(userData?.value?.map((elem) => {
      return elem.name
    }))
  }, [userData])
  useEffect(() => {
    SetSelectedSkills(data)
    // console.log(data)
  }, [])
  const{batch}=useParams()
 useEffect(()=>{
  const token=localStorage.getItem('token')
axios.patch('http://localhost:5000/batch/edit-batch', {
  identity: batch,
  student:selectedSkills
}, { headers: { "auth-token": token } }).then((value)=>{
 console.log(value)
})
 },[selectedSkills])
  useEffect(() => {
    SetFilteredSkills(skills);
  }, [skills]);
  const handleRemoveSkill = (indexToRemove) => {
    const updatedSkills = selectedSkills.filter(
      (_, index) => index !== indexToRemove
    );
    SetSelectedSkills(updatedSkills);
  };
  const handleFilter = (searchTerm) => {
    setSearchTerm(searchTerm); // Update the searchTerm state
  };
  useEffect(() => {
    if (!searchTerm.trim()) {
      // If searchTerm is empty or contains only whitespace, return all skills
      SetFilteredSkills(skills);
    } else {
      const filteredSkills = skills.filter((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );
      SetFilteredSkills(filteredSkills);
    }
  }, [searchTerm]);
  return (
    <div className="space-y-2 md:min-w-[600px] min-w-[300px] max-w-4xl mx-auto">
      <h3 className="text-blue-600 text-lg font-medium text-center">Add Students</h3>
      <div className="group relative">
        {selectedSkills?.length !== 0 ? (
          <div className="min-h-[5vh] w-full border border-gray-400 p-2 rounded-md flex flex-wrap justify-start items-center gap-2 relative">
            {selectedSkills?.map((skill, index) => {
              return (
                <div className="bg-gray-100 px-2 py-1 rounded-lg flex justify-center items-center gap-4">
                  <span
                    onClick={() => handleRemoveSkill(index)}
                    className="font-bold text-xs my-auto hover:cursor-pointer text-red-400"
                  >
                    x
                  </span>{" "}
                  {skill}
                </div>
              );
            })}
            <input
              onChange={(event) => handleFilter(event.target.value)}
              placeholder="Search & Add skills here"
              className="outline-none border border-gray-400 p-2 rounded-md w-1/2"
            />
 
          </div>
        ) : (
          <input
            onChange={(event) => handleFilter(event.target.value)}
            placeholder="Search & Add Students here"
            className="outline-none border border-gray-400 p-2 rounded-md w-full"
          />
        )}
        <div className="absolute left-0 top-full w-full bg-gray-600 text-white rounded-lg h-0 overflow-hidden group-focus-within:h-[20vh] group-focus-within:overflow-auto group-focus-within:p-2 duration-200">
          {selectedSkills?.length !== 0
            ? filteredSkills
              ?.filter((skill) => {
                return !selectedSkills.includes(skill);
              })
              ?.map((skill) => {
                return (
                  <SkillBtn
                    selectedSkills={selectedSkills}
                    SetSelectedSkills={SetSelectedSkills}
                    skill={skill}
                    setSearchTerm={setSearchTerm}
                  />
                );
              })
            : filteredSkills?.map((skill) => {
              return (
                <SkillBtn
                  selectedSkills={selectedSkills}
                  SetSelectedSkills={SetSelectedSkills}
                  skill={skill}
                  setSearchTerm={setSearchTerm}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
const ScheduleLectures = () => {
  const {selectedCourse,setSelectedCourse}=useContext(DataContext)
  const [data, setData] = useState('');
  const [render,setRender]=useState(false)
  const { id, batch } = useParams();
  useEffect(() => {
    const token = localStorage.getItem('token')
    axios.get(`http://localhost:5000/batch/single-batch/${batch}`, { headers: { "auth-token": token } }).then((value) => {
      setData(value.data.batch[0])
      setRender(true)
    })
  }, [])
  useEffect(()=>{
    setSelectedCourse(data)
  },[data])
  return (
    <>
{render?<><div className="w-full px-10 flex flex-col gap-5">
        {/*  */}
        <SkillsInput data={data.student} />

        {/*  */}
        <div className="container mx-auto grid w-full px-4 gap-6 py-6 md:gap-8 md:px-6">

          {data?.courseDetails?.data.map((elem, index) => {
            return <div className="space-y-2" key={index}>
              <h1 className="text-2xl font-bold leading-none mb-5">{elem.title}</h1>
              {elem.curriculum?.map((lecture, lectureIndex) => {
                return <Lecture data={lecture} key={lectureIndex + 1} courseIndex={index} lectureIndex={lectureIndex}  />
              })}
            </div>
          })}


        </div>
      </div></>:<></>}
      
    </>
  )
}
function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}
export default ScheduleLectures
