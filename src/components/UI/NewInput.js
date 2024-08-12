import React from "react";


const Input = (props) => {

    return (
        <div>
            <div>
                <label>{props.title}</label>
            </div>
            <div>
                {(props.input !== 'textarea') && <input type={props.type} {...(props.required ? { required: true } : {})}></input>}
                {(props.input === 'textarea') && <textarea {...(props.required ? { required: true } : {})}></textarea>}
            </div>
        </div>
    )
}


export default Input