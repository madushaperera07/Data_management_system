import React, { useEffect, useState } from 'react';


function Read() {

  const [apiId , setapiId] = useState("")
  const [myData , setMydata] = useState({})
  const [submit , setSubmit] = useState(false)


    useEffect(()=>{

              const apiData = async()=>{
          const res = await fetch(`http://localhost:9000/saveData/${apiId}`)
          const data = await res.json()
  
          if(data){
            setMydata(data)
          }
        }
      
        
      if(apiId.length>0){

        apiData()
      }
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