import React, { useEffect, useState } from 'react'
import Login from '../Screens/Login';
import Navbar from './Navbar';
import Jobcard from './Jobcard';
import { useNavigate } from 'react-router-dom';

export default function UploadJob() {
    const [flag, setFlag] = useState(false);
    const [flag2, setFlag2] = useState(false);
    const [position, setPosition] = useState('')
    const [description, setDescription] = useState('')
    const [company, setCompany] = useState('')
    const [jobs, setJobs] = useState();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/job/job', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('authToken')}`
            },
            body: JSON.stringify({ position, description, company })
        })
        const json = await response.json()
        console.log(json)
        if (json.success) {
            alert("Job Uploaded")
        }
        if (!json.success) {
            alert("Job Not Uploaded")
        }
        setFlag2(!flag2)
    }

    useEffect(() => {
        const authUser = localStorage.getItem('authUser');
        if(!authUser){
            setFlag(false);
            navigate('/login');
        }else{
            setFlag(true);
        }
        if (flag === true) {
            const loaddata = async () => {
                const token = localStorage.getItem('authToken');
                let data = await fetch('http://localhost:5000/api/job/job', {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })
                data = await data.json();
                if(data.success){
                    setJobs(data.data);
                } else {
                    navigate('/login');
                    alert("Please login first!");
                }

            }
            loaddata();
        }
    }, [flag, flag2])

    return (
        <div><br /><br /><br /><br />
            {
                    <div>
                        <Navbar />
                        <div className='container w-50'>
                            <form onSubmit={handleSubmit}>
                                <div class="form-group ">
                                    <label >Company Name</label>
                                    <input required value={company} onChange={(e) => { setCompany(e.target.value) }} type="text" class="form-control w-30" id="exampleFormControlInput1" />
                                    <label >Position</label>
                                    <input required value={position} onChange={(e) => { setPosition(e.target.value) }} type="text" class="form-control w-30" id="exampleFormControlInput1" />
                                </div>


                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Job Discription</label>
                                    <textarea required value={description} onChange={(e) => { setDescription(e.target.value) }} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div><br/>
                                <button type='submit' className='btn btn-primary btn-sm'>Add Job</button>
                            </form>
                        </div>
                        <br /><br />
                        <div className='container w-60'>
                            <h3>Jobs uploaded by you :-</h3>
                            {

                                jobs ? jobs.map((job) => {
                                    return (
                                        <>
                                            <Jobcard key={job.position} data={job} flag={flag} />
                                            <br />
                                        </>
                                    )
                                }) : ""
                            }
                        </div>
                    </div>
            }
        </div>
    )
}
