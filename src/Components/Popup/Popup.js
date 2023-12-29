import React from 'react'
import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "./popup.css"
export default function Popup({closepop, ...props}) {

    useEffect(() => emailjs.init("iHbUpyytmStY8Pjh3"), []);
    const emailRef = props.data.email;
    const nameRef = props.data.name;
    const [loading, setLoading] = useState(false);
    const [cred,setcred]=useState({name:"",email:"",college:"",messege:""})

    const handleemail = async (e) => {

        e.preventDefault();
        const serviceId = "service_f1qo0m6";
        const templateId = "template_t266yaf";
        try {
            setLoading(true);
            await emailjs.send(serviceId, templateId, {
                to_name: props.data.name,
                rec: "chilhategajendra@gmail.com",
                from_name: cred.name,
                college: cred.college,
                from_email: cred.email

            });
            alert("Email Sent Successfully");
        } catch (error) {
            alert("Email not sent")
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    const onChange = (event) => {
        setcred({ ...cred, [event.target.name]: event.target.value })
      }
  return (
    <div className="popup-container">
     <div className="popup-body"><br />
      <h1>Fill this form</h1>&nbsp;
     
      <form  onSubmit={handleemail} disabled={loading} >
        
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
