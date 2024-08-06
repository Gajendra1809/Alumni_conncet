import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
export default function Home() {
  const [person, setperson] = useState([]);

  const loadData = async () => {
    let response = await fetch('http://localhost:5000/api/user/users', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    response = await response.json()
    setperson(response);
  }

  useEffect(() => {
    loadData();
  }, []
  )
  
  return (
    <div>
      <Navbar /><br /><br /><br /><br />
      <div class="container">
         <div className="row">
          {
          person !== []
            ? person.
            map(data => {
              return (
                <div className="col-12 col-md-4 ">
                  <Card key={data._id} name={data.name} email={data.email} data={data}/>
                </div>
              )
            }) : <div><h1>Server Not Connected</h1></div>
          }
          </div>
      </div>
    </div>
  )
}

