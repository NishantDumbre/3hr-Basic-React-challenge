import React from "react";
import NoteItem from "./NoteItem";


const  NotesList = (props) =>{

    return(
        <div>
            <ul>
                {props.notes.map((note) =>{
                    return <NoteItem 
                    key={note.id}
                    title={note.title}
                    description={note.description} />
                })}
            </ul>
        </div>
    )
}


export default NotesList