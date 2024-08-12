import React, { useState } from "react";
import NoteItem from "./NoteItem";


const NotesList = ({ notes, filteredResults, isFiltered }) => {
console.log(isFiltered)

    return (
        <div>
            <ul>
                {!isFiltered && notes.map((note, index) => {
                    return (
                        <NoteItem
                        key={index}
                        title={note.title}
                        description={note.description} />
                )
                })}
                {isFiltered && filteredResults.map((note, index) => {
                    return (
                        <NoteItem
                        key={index}
                        title={note.title}
                        description={note.description} />
                )
                })}
            </ul>
        </div>
    )
}


export default NotesList