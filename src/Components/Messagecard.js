import React from 'react'

export default function Messagecard(props) {
  return (
    <div className='container'>
    <div class="card">
        <div class="card-header ">
            <h5 ><b>By- {props.data.name}</b></h5>
        </div>
        <div class="card-body">
            <p class="card-text">{props.data.message} <a>~Reply</a></p>
        </div>
    </div>
    </div>
  )
}
