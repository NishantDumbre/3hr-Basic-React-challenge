import React from "react";
import Button from "../UI/Button"

const NoteItem = (props) =>{

    const deleteButton = () =>{
        
    }

    return(
        <li>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <button onClick={deleteButton} >Delete</button>
        </li>
    )
}


export default NoteItem