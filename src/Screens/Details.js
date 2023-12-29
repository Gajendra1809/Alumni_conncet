import React from 'react'
import Navbar from '../Components/Navbar'
import { useLocation } from 'react-router-dom'
import { useState } from 'react';
import Popup from '../Components/Popup/Popup';

export default function Details(props) {

    const location = useLocation();
    console.log(location)

   

    const [open, setopen] = useState(false);



    //   // Accessing data from URL parameters
    //   const searchParams = new URLSearchParams(location.search);
    //   const name = searchParams.get('name');
    //   const email = searchParams.get('email');

    //   // Accessing data from state
    //   const { state } = location;
    //   const nameFromState = state ? state.name : null;
    //   const emailFromState = state ? state.email : null;

 

    return (
        <div>
            <Navbar /><br /><br />
            <div class="emp-profile py-4">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="card shadow-sm">
                                <div class="card-header bg-transparent text-center">
                                    <img class="profile_img" src="human.jpg" alt="emp dp" />
                                    <h3>{location.state.name}</h3>
                                </div>
                                <div class="card-body">
                                    <p class="mb-0"><strong class="pr-1">Email:</strong>{location.state.email}</p><br />
                                    <p class="mb-0"><strong class="pr-1">Phone:</strong>{location.state.data.phone}</p><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <a style={{ color: 'black' }} href={location.state.data.instagram} target='_blank'><i class="fa fa-instagram" style={{ fontSize: "36px" }}></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a style={{ color: 'black' }} href={location.state.data.linkedin} target='_blank'><i class="fa fa-linkedin-square" style={{ fontSize: "36px" }}></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a style={{ color: 'black' }} href={location.state.data.github} target='_blank'><i class="fa fa-github" style={{ fontSize: "36px" }}></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a style={{ color: 'black' }} href={location.state.data.twitter} target='_blank'><i class="fa fa-twitter" style={{ fontSize: "36px" }}></i></a>





                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="card shadow-sm">
                                <div class="card-header bg-transparent border-0">
                                    <h3 class="mb-0"><i class="fa fa-clone pr-1"></i>General Information</h3>
                                </div>
                                <div class="card-body pt-0">
                                    <table class="table table-bordered">
                                        <tr>
                                            <th width="30%">Year of Passing</th>
                                            <td width="2%">:</td>
                                            <td>{location.state.data.yop}</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Company</th>
                                            <td width="2%">:</td>
                                            <td>{location.state.data.company}</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Designation</th>
                                            <td width="2%">:</td>
                                            <td>{location.state.data.designation}</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Skills</th>
                                            <td width="2%">:</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th width="30%">College</th>
                                            <td width="2%">:</td>
                                            <td>{location.state.data.college}</td>
                                        </tr>
                                    </table>

                                    <button type="button" class="btn btn-primary" >Resume</button>&nbsp;&nbsp;&nbsp;
                                    <button type="button" class="btn btn-secondary" onClick={() => setopen(true)}>Request a 1:1 session</button>

                                    {/* <button type="button" class="btn btn-secondary" onClick={handleemail} disabled={loading}>Request a 1:1 session</button> */}
                                </div>
                            </div>

                            <div style={{ height: "26px" }}></div>
                            <div class="card shadow-sm">
                                <div class="card-header bg-transparent border-0">
                                    <h3 class="mb-0"><i class="fa fa-clone pr-1"></i>Other Information</h3>
                                </div>
                                <div class="card-body pt-0">
                                    <p>{location.state.data.about}</p>
                                    <p><b>1.</b> Ask for Referral</p>
                                    <p><b>2.</b> Ask for Resume review</p>
                                    <p><b>3.</b> Ask for Mock Interview</p>
                                    <p><b>4.</b> Need Project Guid</p>


                                </div>
                            </div>
                        </div>
                        {
                            open ? <Popup closepop={() => setopen(false)} data={location.state.data}/> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
