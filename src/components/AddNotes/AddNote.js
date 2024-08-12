import React, {useState} from "react";
import Button from "../UI/Button";
import NewInput from "../UI/NewInput";


const AddNote = (props) => {

    const addNoteHandler = () =>{
        props.addNoteFunction()
    }
    
    const [titleValue, setTitleValue] = useState('')
    const [descValue, setDescValue] = useState('')
    

    return (
        <div>
            <form onSubmit={addNoteHandler}  >
                <NewInput
                    input='text'
                    type='text'
                    title='Note Title'
                    required={true}
                    value={titleValue}
                    onChangeValue={setTitleValue}
                    inputClassName='a' />
                <NewInput
                    input='textarea'
                    title='Note Desc'
                    required={true}
                    value={descValue}
                    onChangeValue={setDescValue}
                    inputClassName='a' />
                <Button type='submit' >Add to Book</Button>
                {console.log(titleValue, 'title')}
                {console.log(descValue, 'desc')}
            </form>
            
        </div>
    )
}


export default AddNote