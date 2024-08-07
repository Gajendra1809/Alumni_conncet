import React from 'react'

export default function Messagecard(props) {
  return (
    <div className='container'>
    <div class="card">
        <div class="card-header" style={{display:'flex',justifyContent:'space-between'}}>
            <h5 ><b>By- {props.data.name}</b></h5>
            <p>{props.data.createdAt}</p>
        </div>
        <div class="card-body">
            <p class="card-text">{props.data.message} <a>~Reply</a></p>
        </div>
    </div>
    <br/>
    </div>
  )
}
