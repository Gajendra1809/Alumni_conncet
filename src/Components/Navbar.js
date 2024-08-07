import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div class="container-fluid">
    <Link class="navbar-brand" href="#"><b><i>A</i>lumni<i>C</i>onnect</b></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/jobs">Jobs</Link>
        </li>
        {
            localStorage.getItem('authToken') ? "":
            <li class="nav-item">
              <Link class="nav-link" to="/alumini">Alumini?</Link>
            </li>
        }
        {
            localStorage.getItem('authToken') ?
            <li class="nav-item">
                <Link class="nav-link" to="/uploadjobs">UploadJobs</Link>
            </li>
             : ""
        }
        {
            localStorage.getItem('authToken') ?
            <li class="nav-item">
                <Link class="nav-link" to="/notifications">Notifications</Link>
            </li>
             : ""
        }
        
        {
            localStorage.getItem('authToken') ?
            <li class="nav-item">
                <button className='btn btn-danger' onClick={() => { localStorage.removeItem('authToken'); localStorage.removeItem('authUser'); window.location.href = "/"}}>Logout</button>
            </li> :
            <li class="nav-item">
                <Link class="nav-link" to="/login">Login</Link>
            </li>
        }
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
