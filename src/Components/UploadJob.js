import React, { useEffect, useState } from 'react'
import Login from '../Screens/Login';
import Navbar from './Navbar';
import Jobcard from './Jobcard';

export default function UploadJob() {
    const [flag, setFlag] = useState(false);
    const [flag2, setFlag2] = useState(false);
    const [position, setPosition] = useState('')
    const [skills, setSkills] = useState('')
    const [company, setCompany] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail2] = useState('')
    const [jobs, setJobs] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/createjob', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, position, skills, company, email })
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
        if (flag === true) {



            const loaddata = async () => {
                let data = await fetch('http://localhost:5000/api/jobs', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                data = await data.json();
                setJobs(data[0]);
                console.log(data[0])

            }
            loaddata();

        }
    }, [flag, flag2])

    return (
        <div><br /><br /><br /><br />
            {
                flag ?
                    <div>
                        <Navbar />
                        <div className='container w-50'>
                            <form onSubmit={handleSubmit}>
                                <div class="form-group ">
                                    <label >Name</label>
                                    <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" class="form-control w-30" id="exampleFormControlInput1" />
                                    <label >Email</label>
                                    <input value={email} onChange={(e) => { setEmail2(e.target.value) }} type="text" class="form-control w-30" id="exampleFormControlInput1" />
                                    <label >Company Name</label>
                                    <input value={company} onChange={(e) => { setCompany(e.target.value) }} type="text" class="form-control w-30" id="exampleFormControlInput1" />
                                    <label >Position</label>
                                    <input value={position} onChange={(e) => { setPosition(e.target.value) }} type="text" class="form-control w-30" id="exampleFormControlInput1" />
                                </div>


                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Job Discription</label>
                                    <textarea value={skills} onChange={(e) => { setSkills(e.target.value) }} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <button type='submit' className='danger'>Add Job</button>
                            </form>
                        </div>
                        <br /><br />
                        <div className='container w-60'>
                            <h3>Jobs uploaded by you :-</h3>
                            {

                                jobs ? jobs.filter((job) => (job.email === email)).map((job) => {
                                    return (
                                        <>
                                            <Jobcard key={job.position} data={job} flag={flag} />
                                            <br />
                                        </>
                                    )
                                }) : ""

                            }
                        </div>
                    </div> : 
                    <div>
                        <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Only Alumni can LogIn</h5>
                    <Login setFlag={setFlag} setEmail2={setEmail2} />
                    </div>
            }
        </div>
    )
}
