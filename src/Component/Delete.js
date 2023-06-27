import React, { useEffect, useState } from 'react';





const Delete=()  => {


  const [apiId , setapiId] = useState("")
  const [myData , setMydata] = useState({})
  const [submit , setSubmit] = useState(false)

  const ReadData=()=>{
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

  }

    useEffect(()=>{
      ReadData()
       // eslint-disable-next-line
    },[submit])


    const deleteData=(id)=>{
      fetch(`http://localhost:9000/saveData/${id}`,{
        method : "DELETE"
      }).then((data)=>{
        data.json()
          ReadData()
          alert(`Deleted ${id}`)
      })
    }


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

<div>
        <button type='delete' onClick={()=>{
          deleteData(myData.id)
        }} >Delete</button>
      </div>
    </div>
  );
}

export default Delete;