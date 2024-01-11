import React, { useState } from 'react'
import { Client, Storage,ID } from "appwrite";




export default function Signup() {
  const [imgUrl,setImgUrl]=useState('');
  const [imgId,setImgId]=useState();
  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('659e86ce7fe49d3bd110');

  const storage = new Storage(client);

  const fun = (e) => {
    e.preventDefault();
    const storage = new Storage(client);

    const promise = storage.createFile(
      '659e86fbd448772071fd',
      ID.unique(),
      document.getElementById('uploader').files[0]
    );

    promise.then(function (response) {
      console.log(response.$id);
    //  setImgId(response.$id) // Success
    }, function (error) {
      console.log(error,"failed"); // Failure
    });

    console.log("fun called")
  }
  //659e93e88cc16c455b21
  const getImage=(e)=>{
    e.preventDefault();
    const result = storage.getFileDownload('659e86fbd448772071fd', imgId);
   
console.log(result.href);
setImgUrl(result.href)
  }

  return (
    <div >
      <form onSubmit={fun}>
        <input type="file" id='uploader' />
        <button type='submit'>upload</button>
      </form>

      <form onSubmit={getImage}>
        <input type="text" value={imgId} onChange={(e)=>{setImgId(e.target.value)}}/>
        <button type='submit'>GetImg</button>
      </form>
      <img src={imgUrl} alt="No Img" />
    </div>
  )
}
