import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
export default function Home() {
  const [person, setperson] = useState([]);

  const loadData = async () => {
    let response = await fetch('http://localhost:5000/api/personData', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    response = await response.json()
    setperson(response[0])
  }

  useEffect(() => {
    loadData();
  }, []
  )
  console.log(person);
  return (
    <div>
      <Navbar />
      <div class="container">
        

         <div className="row">
          {
          person !== []
            ? person.map(data => {
              return (
                
                <div className="col-12 col-md-4 ">
                  <Card name={data.name} email={data.email} data={data}/>
                </div>
              
              
              )
            }) : <div><h1>Server Not Connected</h1></div>
          }
            </div>
        
      </div>

    </div>
  )
}

