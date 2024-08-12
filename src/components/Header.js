import React, { useEffect, useState } from "react";


function Header({count, setCount, formNotes, onSetFilteredResults, setIsFiltered}){

    const [filter, setFilter] = useState('')


    function searchFilter(event){
        setFilter(event.target.value)
        const filteredNotes = formNotes.filter(item => item.title.includes(event.target.value))
        console.log(filteredNotes)
        onSetFilteredResults(filteredNotes)
        setIsFiltered(filteredNotes.length > 0);
        setCount(filteredNotes.length); 
    }

    return(
        <React.Fragment>
            <input value={filter} onChange={searchFilter}></input>
            <h1>Notebook</h1>
            <p>Total {formNotes.length}</p>
            <p>Count {count}</p>
        </React.Fragment>
    )
}


export default Header