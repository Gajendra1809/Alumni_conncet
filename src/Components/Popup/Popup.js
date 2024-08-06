import React from 'react'
import { useRef, useEffect, useState } from "react";
import "./popup.css"
export default function Popup({closepop}) {

    const [loading, setLoading] = useState(false);
    const [cred,setcred]=useState({name:"",email:"",college:"",messege:""})

 
    const onChange = (event) => {
        setcred({ ...cred, [event.target.name]: event.target.value })
      }
  return (
    <div className="popup-container">
     <div className="popup-body"><br />
      <h1>Fill this form</h1>&nbsp;
     
      <form disabled={loading} >
        
        <div>
            <label htmlFor="name">Name : </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" name="name" value={cred.name} onChange={onChange}/>
        </div>&nbsp;
        <div>
            <label htmlFor="name">Email : </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" name="email" value={cred.email} onChange={onChange}/>
        </div>&nbsp;
        <div>
            <label htmlFor="name">College : </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" name="college" value={cred.college} onChange={onChange}/>
        </div>&nbsp;
        <div>
            <label htmlFor="name">Messege : </label>&nbsp;&nbsp;
            <input type="text" name="messege" value={cred.messege} onChange={onChange}/>
        </div>&nbsp;<br />
        <button type='submit' class="btn btn-success">Send Mail</button>&nbsp;
        <button onClick={closepop} class="btn btn-danger">X</button>
      </form>
      
     </div>
    </div>
  )
}
