import React from 'react';

export default function JobApplicationCard(props) {

  const markAsRead = async () => {
    const token = localStorage.getItem('authToken');
    let response = await fetch(`http://localhost:5000/api/application/markasread/${props.data._id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    response = await response.json()
    if(response.success){
      props.loadData()
    } else {
      alert("Server Not Connected")
    }
  }

  return (
    <div>
         <div class="card">
                <div class="card-header" style={{display:'flex',justifyContent:'space-between'}}>
                    <h5 ><b>{props.data.name}</b></h5>
                    <p>{props.data.createdAt}</p>
                </div>
                <div class="card-body">
                    <a href={props.data.resume} target="_blank">View Resume -></a>
                    <p class="card-text">Job ID:-{props.data.job_id}</p>
                    <h6 onClick={markAsRead}>Reject</h6>
                </div>
            </div><br/>
    </div>
  )
}
