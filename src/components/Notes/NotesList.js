import React from "react";
import NoteItem from "./NoteItem";


const  NotesList = (props) =>{

    if (!props.notes) {
        return 
      }

    return(
        <div>
            <ul>
                {console.log(props.notes)}
                {props.notes.map((note) =>{
                    return (
                        <NoteItem 
                    key={note.id}
                    title={note.title}
                    description={note.description} />
                    )
                })}
            </ul>
        </div>
    )
}


export default NotesList