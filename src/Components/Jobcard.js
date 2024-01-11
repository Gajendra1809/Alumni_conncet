import React, { useState } from 'react'

export default function Jobcard(props) {

    const [name,setName]=useState(props.data.name);
    const [position,setPosition]=useState(props.data.position);
       
    const deleteJob=async()=>{
       
        
       
        const response = await fetch('http://localhost:5000/api/deletejob', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,position})
        })
        const json = await response.json()
        console.log(json)
        if (json.success) {
            alert("Job Deleted")
        }
        if (!json.success) {
            alert("Job Not Deleted")
        }
  
    }
    return (
        <div>
            <div class="card">
                <div class="card-header ">
                    <h5 ><b>{props.data.position}</b></h5>
                    <h6 style={{float:'right'}}>~<i>{props.data.name}</i></h6>
                </div>
                <div class="card-body">
                    <h5 class="card-title">{props.data.company}</h5>
                    <p class="card-text">{props.data.skills}</p>
                    {
                        props.flag ? <button onClick={()=>deleteJob()} className='bg-danger btn'>Delete</button>: <button className='bg-primary btn'>Apply</button>
                    }
                    
                </div>
            </div>
        </div>
    )
}
