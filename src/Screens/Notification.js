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
          <div className='d-flex justify-content-between'>
          <h2>Messages</h2>&nbsp;&nbsp;
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10000 500">
          <path d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l96 0 0 80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0z"/>
          </svg>
          </div>
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
