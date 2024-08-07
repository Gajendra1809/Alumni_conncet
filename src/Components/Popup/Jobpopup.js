import React from 'react'
import { useRef, useEffect, useState } from "react";
import "./popup.css"
export default function Jobpopup({closepop, job_id}) {

    const [loading, setLoading] = useState(false);
    const [cred,setcred]=useState({name:"",email:"",phone:"",resume:""})

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/application/application', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({name:cred.name,email:cred.email,phone:cred.phone,resume:"testResume.url",job_id:job_id})
        })
        const json = await response.json();
        if (json.success) {
          alert('Application Sent!');   
          closepop();
        } else {
          alert(json.error);   
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
            <label htmlFor="name">Phone : </label>&nbsp;&nbsp;
            <input type="text" name="phone" value={cred.phone} onChange={onChange}/>
        </div>&nbsp;<br />
        <button type='submit' class="btn btn-success">Send Application</button>&nbsp;
        <button onClick={closepop} class="btn btn-danger">X</button>
      </form>
      
     </div>
    </div>
  )
}
