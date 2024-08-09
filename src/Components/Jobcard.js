import React, { useState } from 'react'
import Jobpopup from './Popup/Jobpopup';

export default function Jobcard(props) {
       
    const [open, setopen] = useState(false);

    const deleteJob=async(id)=>{
        const response = await fetch('http://localhost:5000/api/job/job/'+id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('authToken')}`
            },
            body: JSON.stringify()
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
                    <h6 style={{float:'right'}}>~<i>{props.data.user_id.name}</i></h6>
                </div>
                <div class="card-body">
                    <h5 class="card-title">{props.data.company}</h5>
                    <p class="card-text">{props.data.description}</p>
                    {
                        props.flag ? <button onClick={()=>{
                            if(window.confirm("Are you sure you want to delete this job?")){
                                deleteJob(props.data._id)
                            }
                        }} className='bg-danger btn'>Delete</button>: <button className='bg-primary btn' onClick={()=>setopen(true)}>Apply</button>
                    }
                </div>
            </div>
            {
                open ? <Jobpopup closepop={()=>setopen(false)} job_id={props.data._id} /> : ""
            }
        </div>
    )
}
