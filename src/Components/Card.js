import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';




export default function Card(props) {
  const [imgUrl,setImgUrl]=useState(props.data.img?props.data.img:'human.jpg')
  

 
    const navigate = useNavigate();

    const handleDetailsClick = () => {
      navigate('/details', { state: { id: props.data._id} });
    };
  return (
    <div>
        <div class="card-container">
            <img class="round" src={imgUrl} alt="user" style={{height: "200px"}}/>
            <h3>{props.name}</h3>
            <h6>{props.data.designation}</h6>
            <p>{props.email}</p>
            <div class="buttons">
                <button class="primary">
                    Message
                </button>&nbsp;&nbsp;
                <button class="primary ghost" onClick={handleDetailsClick} >
                    Details
                </button>
            </div>
            
        </div>
    </div>
  )
}
