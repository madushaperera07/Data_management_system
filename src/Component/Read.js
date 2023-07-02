import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Read() {

  const [apiId , setapiId] = useState("")
  const [myData , setMydata] = useState({
    index: "",
    name: "",
    course: "",
    phone: "",
    city: ""
  })
  const [submit , setSubmit] = useState(false)


    useEffect(()=>{
      axios.get(`http://localhost:9000/saveData/${apiId}`)
      .then((res)=>{
        setMydata({...myData , 
        index : res.data.index,
        name: res.data.name,
        course: res.data.course,
        phone: res.data.phone,
        city: res.data.city})
      }).catch((err)=>{
        return err
      })
      // eslint-disable-next-line
    },[submit])
    


  

  return (
    <div>
      <div>
      <span>Enter Input Id : </span>
      <input type='text' value={apiId} onChange={(e)=>{
        e.preventDefault()
        setapiId(e.target.value)
      }}/>
      </div>
      <div>
        <button type='submit' onClick={()=>setSubmit((pre)=>pre===false?true:false)}>Submit</button>
      </div>
      <div>{
        myData&&(<div>
          <h4>{myData.index}</h4>
          <p>{myData.name}</p>
          <p>{myData.course}</p>
          <p>{myData.phone}</p>
          <p>{myData.city}</p>
        </div>)
        }</div>

    </div>
  );
}

export default Read;