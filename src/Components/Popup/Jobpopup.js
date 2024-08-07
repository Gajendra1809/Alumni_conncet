import React from 'react'
import { useRef, useEffect, useState } from "react";
import "./popup.css"
export default function Jobpopup({closepop, job_id}) {

    const [loading, setLoading] = useState(false);
    const [cred,setcred]=useState({name:"",email:"",message:"", user_id:user_id})

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/message/message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({name:cred.name,email:cred.email,message:cred.message,user_id:cred.user_id})
        });
        const json = await response.json();
        if (json.success) {
          alert('Message Sent!');
          closepop();
        }
        setLoading(false);
      }
 
    const onChange = (event) => {
        setcred({ ...cred, [event.target.name]: event.target.value })
      }
  return (
    <div className="popup-container">
     <div className="popup-body"><br />
      <h1>Fill this form</h1>&nbsp;
     
      <form disabled={loading} onSubmit={handleSubmit} >
        
        <div>
            <label htmlFor="name">Name : </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" name="name" value={cred.name} onChange={onChange}/>
        </div>&nbsp;
        <div>
            <label htmlFor="name">Email : </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" name="email" value={cred.email} onChange={onChange}/>
        </div>&nbsp;
        <div>
            <label htmlFor="name">Messege : </label>&nbsp;&nbsp;
            <input type="text" name="message" value={cred.message} onChange={onChange}/>
        </div>&nbsp;<br />
        <button type='submit' class="btn btn-success">Send Mail</button>&nbsp;
        <button onClick={closepop} class="btn btn-danger">X</button>
      </form>
      
     </div>
    </div>
  )
}
