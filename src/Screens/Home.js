import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
export default function Home() {
  const [person, setperson] = useState([]);
  const [companies,setCompanies]=useState([]);
  const [search,setSearch]=useState('')

  const loadData = async () => {
    let response = await fetch('http://localhost:5000/api/personData', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    response = await response.json()
    setperson(response[0]);
    
     
    
  }
  const loadcomp=()=>{
    let comp=person.map((data)=>data.company);
    setCompanies(comp);
  }

  useEffect(() => {
    loadData();
    
  }, []
  )
  console.log(person);
  
  return (
    <div>
      <Navbar /><br /><br /><br /><br />
      <div class="container">
        
        <div>
        
            <div class="d-flex justify-content-center">
              <h6><b>Search by Company</b></h6>
              <select value={search} onClick={()=>{loadcomp()}} onChange={(e)=>{setSearch(e.target.value)}} class="form-control me-2" placeholder='Search by Company'>
                {
                   companies?companies.filter((itm,pos,self)=>{ return self.indexOf(itm) == pos}).map((comp)=>{
                    return(
                      <option value={comp}>{comp}</option>
                    )
                  }):""
                  
                }
              </select>
               <button class="btn btn-outline-success text-white bg-success" type="submit">Search</button> 
            </div>
          
       
          
        </div>
         <div className="row">
          {
          person !== []
            ? person.filter((data)=>(data.company.toLowerCase().includes(search.toLowerCase()))).
            map(data => {
              return (
                
                <div className="col-12 col-md-4 ">
                  <Card key={data.name} name={data.name} email={data.email} data={data}/>
                </div>
              
              
              )
            }) : <div><h1>Server Not Connected</h1></div>
          }
            </div>
        
      </div>

    </div>
  )
}

