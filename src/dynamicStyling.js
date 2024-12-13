import { useState } from "react";

function DynamicStyliing(){

    const [bgColor, setBgColor] = useState(null)

    const handleBg = () =>{
        setBgColor(`#${Math.floor(Math.random() * 12345678).toString(16)}`)
    }
    return(
        <>
            <div style={{ backgroundColor : bgColor, padding: "20px"}}></div>
            <button onClick={handleBg}>Change Color</button>
        </>
    );
}

export default DynamicStyliing;