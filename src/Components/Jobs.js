import React, { useEffect, useState } from 'react'
import Jobcard from './Jobcard'
import Navbar from './Navbar'

export default function Jobs() {
    const [jobs,setJobs]=useState();
    

    const loaddata=async ()=>{
        let data=await fetch('http://localhost:5000/api/jobs', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            }
          })
        data=await data.json();
        setJobs(data[0]);
        console.log(data[0])
     
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
