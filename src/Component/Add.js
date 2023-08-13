import React, { useState } from 'react';
import "./Add.css"
import axios from 'axios';

function Add() {

  const [index,setIndex] = useState("")
  const [name,setName] = useState("")
  const [course,setCourse] = useState("")
  const [phone,setPhone] = useState("")
  const [city,setCity] = useState("")


  return (
    <div className='add_container'>
      <div class="head_class">
        <h1 className='add_header'>Add Data</h1>
      </div>

      <div class="center_container" >
        <form action='POST'>
        <div className='input_container' id='input_container'>
        <label>Index Number</label>
      <input type='text' value={index}
      onChange={(e)=>{
        setIndex(e.target.value)
      }}/>
        </div>
        <div className='input_container'>
        <label>Names with initials</label>
      <input type='text' value={name} 
      onChange={(e)=>{
        setName(e.target.value)
      }}/>
        </div>
        <div className='input_container'>
        <label>Course</label>
      <input type='text'value={course}
      onChange={(e)=>{
        setCourse(e.target.value)
      }}/>
        </div>
        <div className='input_container'>
        <label>Phone Number</label>
      <input type='name' value={phone}
      onChange={(e)=>{
        setPhone(e.target.value)
      }}/>
        </div>
        <div className='input_container'>
        <label>City</label>
      <input type='name' value={city}
      onChange={(e)=>{
        setCity(e.target.value)
      }}/>
        </div>
        <div class="button_container">
          <input type='submit' class="btn btn-success button_data" 
        onClick={(e)=>{
          e.preventDefault()

          

          axios.post("http://localhost:9000/saveData" ,{
          index,
          name,
          course,
          phone,
          city
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
        }}/></div>
        </form>


      </div>


    </div>
  );
}

export default Add;