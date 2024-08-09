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

  const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${props.data.email}&su=Reply to your message&body=${encodeURIComponent("Hi, I would like to call you regarding your job."+props.data.job_id)}`;

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
                    <a class="btn btn-success btn-sm" href={gmailComposeLink} target="_blank">Accept and Send Email</a>&nbsp;&nbsp;
                    <button class="btn btn-danger btn-sm" onClick={() => {
                      if(window.confirm("Are you sure you want to reject this application?")){
                        markAsRead()
                      }
                    }}>Reject</button>
                </div>
            </div><br/>
    </div>
  )
}
