import React from 'react'

export default function JobApplicationCard(props) {
  return (
    <div>
         <div class="card">
                <div class="card-header" style={{display:'flex',justifyContent:'space-between'}}>
                    <h5 ><b>{props.data.name}</b></h5>
                    <p>{props.data.createdAt}</p>
                </div>
                <div class="card-body">
                    <h5 class="card-title">{props.data.resume}</h5>
                    <p class="card-text">{props.data.job_id}</p>
                    <p class="card-text">Click here to follow up the application</p>
                </div>
            </div><br/>
    </div>
  )
}
