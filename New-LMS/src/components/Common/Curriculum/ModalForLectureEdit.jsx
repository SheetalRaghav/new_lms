import React, { useEffect, useRef } from 'react'
import { useState } from 'react';

const ModalForLectureEdit = ({ lectureIndex, moduleIndex, title, updateLecture, updateClicked }) => {
    const SaveForm = useRef();

    const closeTheModal = useRef();

    const [newTitle, setNewTitle] = useState(title)

    useEffect(() => {
        setNewTitle(title)
    }, [updateClicked])
    const handleEditOfLecture = (e) => {
        e.preventDefault();
        updateLecture(lectureIndex,moduleIndex,newTitle);
        closeTheModal.current.click();
    }

    return (
        <>
            <dialog id={`lecture_modal_${lectureIndex}_${title}`} className="modal" onClick={(e) => {
                if (e.target === e.currentTarget) {
                    closeTheModal.current.click()
                }
            }}>
                <div className="modal-box">
                    <form className="flex flex-col gap-3 justify-start items-start" onSubmit={handleEditOfLecture} >
                        <input required type="text" placeholder="Enter Title" className="input input-bordered w-full " value={newTitle} onChange={(e) => { setNewTitle(e.target.value) }} />
                        <button className="hidden" ref={SaveForm}>ok</button>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn" ref={closeTheModal}>Close</button>
                        </form>
                        <button className="btn" onClick={() => { SaveForm.current.click() }}>Save</button>
                    </div>
                </div>
            </dialog></>
    )
}

export default ModalForLectureEdit
