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
        <div className='col-md-6' style={{ height: '600px', overflowY: 'scroll' }}>
          <h2>Messages</h2>
          {
            messages && messages.length > 0? messages.map(data => (
              <Messagecard key={data._id} data={data} loadData={() => loadData()} />
            )) : <div><h6>No unread messages</h6></div>
          }
        </div>
        <div className='col-md-6' style={{ height: '600px', overflowY: 'scroll' }}>
          <h2>Job Applications</h2>
          {
            jobApplications && jobApplications.length > 0 ? jobApplications.map(data => (
              <JobApplicationCard key={data._id} data={data} loadData={() => loadData()}/>
            )) : <div><h6>No unseen job applications</h6></div>
          }
        </div>
      </div>
    </div>
  );
}
