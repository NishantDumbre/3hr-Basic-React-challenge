import React from "react";
import Button from "../UI/Button";


const AddNote = () =>{

    return(
        <div>
            <form>
                <label>Note Title</label>
                <input type="text" required></input>
                <label>Note Desc</label>
                <textarea required></textarea>
                <Button type={'submit'} >Add to Book</Button>
            </form>
        </div>
    )
}


export default AddNote