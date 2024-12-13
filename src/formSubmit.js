import { useState } from "react";

function FormSubmit(){

    const [formData, setFormData] = useState({firstName:"", email:""})
    function handleSubmit(e){
        e.preventDefault();
        console.log(JSON.stringify(formData))
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={formData.firstName} placeholder="name" onChange={(e)=>setFormData({...formData, firstName: e.target.value})}/>
            <input type="text" value={formData.email} placeholder="email" onChange={(e)=>setFormData({...formData, email: e.target.value})}/>
            <button type="submit" >Submit</button>
        </form>
    );
}


export default FormSubmit;