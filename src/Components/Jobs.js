import React, { useEffect, useState } from 'react'
import Jobcard from './Jobcard'
import Navbar from './Navbar'

export default function Jobs() {
    const [jobs,setJobs]=useState();
    

    const loaddata=async ()=>{
      const token = localStorage.getItem('authToken');
        let data=await fetch('http://localhost:5000/api/job/jobs', {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          })
        data=await data.json();
        setJobs(data);
     
    }
  
    useEffect(()=>{
        loaddata();
    },[])
  return (
    <div>
        <Navbar/>
        <div className='container'><br /><br /><br /><br />
        <h1 style={{textAlign:'center'}}>Jobs available in Your Senior's Organization</h1>
        <h3 style={{textAlign:'center'}}>Ask for a Referal ;)</h3>
        <br /><br />
        {
            jobs ? jobs.map((job)=>{
                return(
                    <>
                    <Jobcard key={job._id} data={job}/> 
                    <br />
                    </>
                )
            }) : ""
        }
        </div>
    </div>
  )
}
