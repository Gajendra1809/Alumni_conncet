import React from 'react';

export default function Messagecard(props) {
  const { name, createdAt, message, email } = props.data;

  const markAsRead = async () => {
    const token = localStorage.getItem('authToken');
    let response = await fetch(`http://localhost:5000/api/message/markasread/${props.data._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    response = await response.json()
    if (response.success) {
      props.loadData();
      alert("Marked as read")
    }
  };

  // Construct Gmail compose link
  const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Reply to your message&body=${encodeURIComponent(message)}`;

  return (
    <div className='container'>
      <div className="card">
        <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h5><b>By- {name}</b></h5>
          <p>{createdAt}</p>
        </div>
        <div className="card-body" style={{display:'flex',justifyContent:'space-between'}}>
          <p className="card-text">
            {message} <a href={gmailComposeLink} target="_blank" rel="noopener noreferrer">~Reply</a>
          </p>
          <h6 onClick={markAsRead}>Mark as read</h6>
        </div>
      </div>
      <br />
    </div>
  );
}
