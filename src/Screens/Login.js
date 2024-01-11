import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'

export default function Login({setFlag,setEmail2}) {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');


  const handleSubmit=async(e)=>{
    e.preventDefault();
    const response=await fetch('http://localhost:5000/api/loginuser',{
      method:'POST',
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify({email:email,password:password})
    })

    const json=await response.json()
      console.log(json)
      if(!json.success)
      {
          alert("Enter valid credentials")
      }
      if(json.success)
      {
        setFlag(true);
        console.log("logged in")
      }
     
  }
  useEffect(()=>{
    setEmail2(email);
   }
    ,[email])
  return (
    <div className='container'>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" class="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" class="form-control w-50" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
