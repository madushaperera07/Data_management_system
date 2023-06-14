import React, { useState } from 'react';
import "./Add.css"

function Add() {

  const [index,setIndex] = useState("")
  const [name,setName] = useState("")
  const [course,setCourse] = useState("")
  const [phone,setPhone] = useState("")
  const [city,setCity] = useState("")


  return (
    <div className='add-container'>
      <div>
        <h1>Add Data</h1>
      </div>
      <div>
      <div>
        <div className='input-container'>
        <label>Index Number</label>
      <input type='text' value={index}
      onChange={(e)=>{
        setIndex(e.target.value)
      }}/>
        </div>
        <div className='input-container'>
        <label>Names with initials</label>
      <input type='text' value={name} 
      onChange={(e)=>{
        setName(e.target.value)
      }}/>
        </div>
        <div className='input-container'>
        <label>Course</label>
      <input type='text'value={course}
      onChange={(e)=>{
        setCourse(e.target.value)
      }}/>
        </div>
        <div className='input-container'>
        <label>Phone Number</label>
      <input type='name' value={phone}
      onChange={(e)=>{
        setPhone(e.target.value)
      }}/>
        </div>
        <div className='input-container'>
        <label>City</label>
      <input type='name' value={city}
      onChange={(e)=>{
        setCity(e.target.value)
      }}/>
        </div>
        <div><button type='submit'
        onClick={(e)=>{
          e.preventDefault()

          const myData = ({
            Index_no : index,
            Name : name,
            course : course,
            Phone_no : phone,
            City : city
          })

          fetch("http://localhost:9000/saveData" ,{
            method:"POST",
            headers:{"Content-type" : "application/json"},
            body:JSON.stringify(myData)
          }).then((res)=>{
            console.log(res)
            alert("Data Saved")
          }).catch((err)=>{
            console.log(err)
          })

          setIndex((pre)=>{
            if(pre.length>1){
              return ""
            }else{
              return pre
            }
          })

          setName((pre)=>{
            if(pre.length>1){
              return ""
            }else{
              return pre
            }
          })

          setCourse((pre)=>{
            if(pre.length>1){
              return ""
            }else{
              return pre
            }
          })

          setCity((pre)=>{
            if(pre.length>1){
              return ""
            }else{
              return pre
            }
          })

          setPhone((pre)=>{
            if(pre.length>1){
              return ""
            }else{
              return pre
            }
          })
        }}>Submit</button></div>
      </div>
      </div>
    </div>
  );
}

export default Add;