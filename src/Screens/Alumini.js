import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { Client, Storage, ID } from "appwrite";

export default function Alumini() {
  const [cred, setCred] = useState({ name: "", email: "", password: "", phone: "", company: "", yop: "", instagram: "", linkedin: "", github: "", college: "", designation: "", img: "" })
  const [imgId, setImgId] = useState();
  const [imgUrl,setImgUrl]=useState();
  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('659e86ce7fe49d3bd110');

  const storage = new Storage(client);
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(cred.img);
    const response = await fetch('http://localhost:5000/api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: cred.name, email: cred.email, password: cred.password, phone: cred.phone, company: cred.company, yop: cred.yop, instagram: cred.instagram, linkedin: cred.linkedin, github: cred.github, college: cred.college, designation: cred.designation, img: imgUrl })
    })
    const json = await response.json()
    console.log(json)
    if (!json.success) {
      alert("Enter valid credentials")
    }
    if (json.success) {
      alert("Registration Done")
    }
  }

  const imgFun =async () => {
    const storage = new Storage(client);

    const promise =await storage.createFile(
      '659e86fbd448772071fd',
      ID.unique(),
      document.getElementById('pic').files[0]
    );
      console.log(promise.$id);
    try {
      const result=await storage.getFileDownload('659e86fbd448772071fd', promise.$id)
    console.log(result.href);
    setImgUrl(result.href)
    } catch (error) {
      console.log(error);
    }
    
    console.log("fun called")

  }


  const onChange = (event) => {
    setCred({ ...cred, [event.target.name]: event.target.value })
  }


  return (
    <div >
      <Navbar /><br /><br /><br /><br />


      <div class="container">
        <form class="conatiner" onSubmit={handleSubmit}>

          <div class="formbold-form-title">
            <h2 class="">Register as an Alumini</h2>
            <p>
              Please provide your details accuratly for better understanding of your juniors that who you are and where you work
            </p>
          </div>

          <div class="formbold-input-flex">
            <div>
              <label for="name" class="formbold-form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                class="formbold-form-input"
                required
                value={cred.name}
                onChange={onChange}
              />
            </div>
            <div>
              <label for="password" class="formbold-form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                class="formbold-form-input"
                required
                value={cred.password}
                onChange={onChange}
              />
            </div>

          </div>

          <div class="formbold-input-flex">
            <div>
              <label for="email" class="formbold-form-label"> Email </label>
              <input
                type="email"
                name="email"
                id="email"
                class="formbold-form-input"
                required
                value={cred.email}
                onChange={onChange}
              />
            </div>
            <div>
              <label for="phone" class="formbold-form-label"> Phone number </label>
              <input
                type="text"
                name="phone"
                id="phone"
                class="formbold-form-input"
                required
                value={cred.phone}
                onChange={onChange}
              />
            </div>
            <div>
            <label for="pic" class="formbold-form-label"> Upload Your Pic </label>
            <input
              type="file"
              name="pic"
              id="pic"
              class="formbold-form-input"
              onChange={imgFun}
            />
          </div>
          </div>
          <div>
            <label for="college" class="formbold-form-label"> College </label>
            <input
              type="text"
              name="college"
              id="college"
              class="formbold-form-input"
              required
              value={cred.college}
              onChange={onChange}
            />
          </div>

          <div class="formbold-mb-3">
            <label for="city" class="formbold-form-label">
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              class="formbold-form-input"

              onChange={onChange}
            />
          </div>



          <div>
            <label for="company" class="formbold-form-label"> Company </label>
            <input
              type="text"
              name="company"
              id="company"
              class="formbold-form-input"
              required
              value={cred.company}
              onChange={onChange}
            />
          </div>
          <div>
            <label for="designation" class="formbold-form-label"> Designation </label>
            <input
              type="text"
              name="designation"
              id="designation"
              class="formbold-form-input"
              required
              value={cred.designation}
              onChange={onChange}
            />
          </div>
          <div class="formbold-input-flex">
            <div>
              <label for="dob" class="formbold-form-label"> DOB </label>
              <input
                type="text"
                name="dob"
                id="dob"
                class="formbold-form-input"
                onChange={onChange}
              />
            </div>
            <div>
              <label for="yop" class="formbold-form-label"> Year of Passing </label>
              <input
                type="text"
                name="yop"
                id="yop"
                class="formbold-form-input"
                required
                value={cred.yop}
                onChange={onChange}
              />
            </div>

          </div>
          <div>
            <label for="linkedin" class="formbold-form-label"> LinkedIN URL </label>
            <input
              type="text"
              name="linkedin"
              id="linkedin"
              class="formbold-form-input"
              required
              value={cred.linkedin}
              onChange={onChange}
            />
          </div>
          <div>
            <label for="instagram" class="formbold-form-label"> Instagram URL </label>
            <input
              type="text"
              name="instagram"
              id="instagram"
              class="formbold-form-input"
              required
              value={cred.instagram}
              onChange={onChange}
            />
          </div>
          <div>
            <label for="github" class="formbold-form-label"> GitHub URL</label>
            <input
              type="text"
              name="github"
              id="github"
              class="formbold-form-input"
              required
              value={cred.github}
              onChange={onChange}
            />
          </div>
          
          <div>
            <label for="resume" class="formbold-form-label"> Upload Your Resume </label>
            <input
              type="file"
              name="resume"
              id="resume"
              class="formbold-form-input"
              onChange={onChange}
            />
          </div>


          <button class="formbold-btn" type="submit">Register Now</button>
        </form>
      </div>
    </div>




  )
}
