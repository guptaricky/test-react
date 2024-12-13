import { useState } from "react";


    function Parent(){
        const [text, changeText] = useState("this is from Parent")

        return(
            <>
                <div> {text}</div>
                <Child updateParent = {changeText} />
            </>
        );
    }


    function Child({updateParent}){
        const [bgColor, setBgColor] = useState(null)

        const handleChange = () =>{
            updateParent("hello from Child")
        }
        return(
            <>
                <button onClick={handleChange}>Change Text</button>
            </>
        );
    }



export default Parent;