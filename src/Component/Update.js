
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Update() {

  const [apiId , setapiId] = useState("")
  const [myData , setMydata] = useState({})
  const [submit , setSubmit] = useState(false)



    useEffect(()=>{
      axios.get(`http://localhost:9000/saveData/${apiId}`)
      .then((res)=>{
        setMydata({ ...myData , 
        index : res.data.index,
        name: res.data.name,
        course: res.data.course,
        phone: res.data.phone,
        city: res.data.city})
      }).catch((err)=>{
        return err
      })
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
        <button type='submit' onClick={()=>setSubmit((pre)=>pre===false?true:false)}>Search</button>
      </div>
      <div>{
        myData&&(<div>
          <div>
            <label>Index Number</label>
          <input type='text' value={myData.index}
          onChange={(e)=>{
            setMydata({...myData, index: e.target.value})
          }}
          />
          </div>
          <div>
          <label>Names with initials</label>
          <input type='text' value={myData.name}
          onChange={(e)=>{
            setMydata({...myData, name: e.target.value})
          }}
          />
          </div>
          <div>
          <label>Course</label>
          <input type='text' value={myData.course}
          onChange={(e)=>{
            setMydata({...myData, course: e.target.value})
          }}
          />
          </div>
          <div>          
            <label>Phone Number</label>
          <input type='text' value={myData.phone}
          onChange={(e)=>{
            setMydata({...myData, phone: e.target.value})
          }}
          />
          </div>
          <div>          
            <label>City</label>
          <input type='text' value={myData.city}
          onChange={(e)=>{
            setMydata({...myData, city: e.target.value})
          }}
          />
          </div>
          <div>
          <button type='submit'>Submit</button>
          </div>

        </div>)
        }</div>

    </div>
  );
}

export default Update;