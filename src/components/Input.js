import {useState} from "react";

export const UseInput = (props) => {
    const [value, setValue] = useState(props.value || '');
    return (
        <input type="text" onChange={e => setValue(e.target.value)} name={props.name} placeholder={props.name} value={value} className="form-control"/>
    )
};