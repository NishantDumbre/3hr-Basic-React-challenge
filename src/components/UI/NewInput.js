import React, { useState } from "react";


const NewInput = (props) => {

    const [newValue, setNewValue] = useState('')
    const changeValue = (event) =>{
        setNewValue(event.target.value)
        if (props.onChangeValue) { 
            props.onChangeValue(event.target.value);
          }
    }
   

    return (
        <div>
            <div>
                <label className={props.labelClassName}>{props.title}</label>
            </div>
            <div>
                {(props.input !== 'textarea') && <input type={props.type} value={newValue} onChange={changeValue} className={props.inputClassName} {...(props.required ? { required: true } : {})}></input>}
                {(props.input === 'textarea') && <textarea value={newValue} onChange={changeValue} className={props.inputClassName} {...(props.required ? { required: true } : {})}></textarea>}
            </div>
        </div>
    )
}


export default NewInput