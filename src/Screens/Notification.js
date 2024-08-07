import React from 'react'
import Navbar from '../Components/Navbar'
import { useState, useEffect } from 'react'
import Messagecard from '../Components/Messagecard'
import JobApplicationCard from '../Components/JobApplicationCard'

export default function Notification() {

  const [messages, setMessages] = useState()
  const [jobApplications, setJobApplications] = useState()
  
  const loadData = async () => {
    const token = localStorage.getItem('authToken');
    let messages = await fetch('http://localhost:5000/api/message/message', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    messages = await messages.json()
    if(messages.success){
      setMessages(messages.data);
      console.log(messages)
    } else {
      alert("Server Not Connected")
    }

    let jobApplications = await fetch('http://localhost:5000/api/application/application', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    jobApplications = await jobApplications.json()
    if(jobApplications.success){
      setJobApplications(jobApplications.data);
      console.log(jobApplications)
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
          {
            jobApplications ? jobApplications.map(data => (
              <JobApplicationCard key={data._id} data={data} />
            )) : <div><h1>No Job Applications Found</h1></div>
          }
        </div>
      </div>
    </div>
  );
}
