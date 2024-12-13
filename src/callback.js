import React, {useState} from 'react';

function ChangeColor({getColor}){
    const [activecolor,setActiveColor] = useState();

    const handleChange = (e) =>{
        // const {value} = e.target
        setActiveColor(e.target.value)
        getColor(e.target.value)
    }

    return (
        <input type="text" onChange={handleChange} value={activecolor}></input>
    )
}


export default ChangeColor;