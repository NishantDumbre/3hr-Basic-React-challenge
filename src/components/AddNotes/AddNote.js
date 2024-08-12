import React, { useState, useRef } from "react";
import Button from "../UI/Button";


const AddNote = ({onSetFormNotes }) => {

    const title = useRef('')
    const description = useRef('')

    const addNoteHandler = (event) => {
        event.preventDefault()
        onSetFormNotes((prevState) => {
            return [...prevState, { title: title.current.value, description: description.current.value }]
        })
    }



    return (
        <div>
            <form onSubmit={addNoteHandler}  >
                <label>Title</label>
                <input type="text" ref={title} ></input>
                <label>Desc</label>
                <textarea ref={description} ></textarea>
                <button type="submit">Add</button>
            </form>

        </div>
    )
}


export default AddNote