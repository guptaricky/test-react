import { useState } from "react";

function ToggleText(){

    const [visibility, setVisibility] = useState(true);
    return(
        <>
            <button onClick={() => setVisibility((!visibility))}>
                {(visibility) ? "Hide" : "Show"} Text
            </button>

            {visibility && <p>This is the text</p>}



        </>
    );
}

export default ToggleText;