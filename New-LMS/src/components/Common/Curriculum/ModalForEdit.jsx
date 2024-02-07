import { useEffect, useRef, useState } from "react";

const ModalForEdit = ({ title, index, updateItem, updateClicked }) => {
    const SaveForm = useRef();
    const closeTheModal = useRef();
    const [newData, setNewData] = useState(title)
    useEffect(() => {
        setNewData(title)
    }, [updateClicked])
    const handleEdit = (e) => {
        e.preventDefault()
        updateItem(index, newData)
        closeTheModal.current.click();
    }
    return (<>
        <dialog id={`edit_modal_${index}`} className="modal" onClick={(e) => {
            if (e.target === e.currentTarget) {
                closeTheModal.current.click()
            }
        }}>
            <div className="modal-box">
                <form className="flex flex-col gap-3 justify-start items-start" onSubmit={handleEdit}>
                    <input required type="text" placeholder="Enter Title" className="input input-bordered w-full " value={newData} onChange={(e) => { setNewData(e.target.value) }} />
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
export default ModalForEdit;