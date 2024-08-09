import React, { useState } from 'react';
import "./popup.css";

export default function Jobpopup({ closepop, job_id }) {
  const [loading, setLoading] = useState(false);
  const [cred, setCred] = useState({ name: "", email: "", phone: "", resume: null });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('name', cred.name);
    formData.append('email', cred.email);
    formData.append('phone', cred.phone);
    formData.append('resume', cred.resume);
    formData.append('job_id', job_id);

    const response = await fetch('http://localhost:5000/api/application/application', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
      },
      body: formData,
    });

    const json = await response.json();
    if (json.success) {
      alert('Application Sent!');
      closepop();
    } else {
      alert(json.error);
    }
    setLoading(false);
  };

  const onChange = (event) => {
    const { name, value, files } = event.target;
    setCred(prevCred => ({
      ...prevCred,
      [name]: files ? files[0] : value,
    }));
  };

  return (
    <div className="popup-container">
      <div className="popup-body"><br />
        <h1>Fill this form</h1>&nbsp;
        <form disabled={loading} onSubmit={handleSubmit} encType="multipart/form-data">
          <div>
            <label htmlFor="name">Name: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input required type="text" name="name" value={cred.name} onChange={onChange} />
          </div>&nbsp;
          <div>
            <label htmlFor="name">Email: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input required type="text" name="email" value={cred.email} onChange={onChange} />
          </div>&nbsp;
          <div>
            <label htmlFor="name">Phone: </label>&nbsp;&nbsp;
            <input required type="text" name="phone" value={cred.phone} onChange={onChange} />
          </div>&nbsp;
          <div>
            <label htmlFor="name">Upload Resume: </label>&nbsp;&nbsp;
            <input required type="file" name="resume" onChange={onChange} />
          </div>&nbsp;
          <br />
          <button type='submit' className="btn btn-success">Send Application</button>&nbsp;
          <button type='button' onClick={closepop} className="btn btn-danger">X</button>
        </form>
      </div>
    </div>
  );
}
