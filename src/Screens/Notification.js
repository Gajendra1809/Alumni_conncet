import React from 'react'
import Navbar from '../Components/Navbar'
import { useState, useEffect } from 'react'
import Messagecard from '../Components/Messagecard'

export default function Notification() {

  const [messages, setMessages] = useState()
  
  const loadData = async () => {
    const token = localStorage.getItem('authToken');
    let response = await fetch('http://localhost:5000/api/message/message', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    response = await response.json()
    if(response.success){
      setMessages(response.data);
      console.log(response)
    } else {
      alert("Server Not Connected")
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className='container'>
      <Navbar /><br/><br/><br/>
      <div className='row mt-5'>
        <div className='col-md-6'>
          <h2>Messages</h2>
          {
            messages ? messages.map(data => (
              <Messagecard key={data._id} data={data} />
            )) : <div><h1>Server Not Connected</h1></div>
          }
        </div>
        <div className='col-md-6'>
          <h2>Job Applications</h2>
          {/* {
            jobApplications ? jobApplications.map(data => (
              <JobApplicationCard key={data._id} data={data} />
            )) : <div><h1>No Job Applications Found</h1></div>
          } */}
        </div>
      </div>
    </div>
  );
}
