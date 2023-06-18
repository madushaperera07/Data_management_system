import React, { useEffect, useState } from 'react';

import axios from 'axios';

import "./List.css"

const List = () => {

  const [myData , setMydata] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:9000/saveData" ).then((data)=>{
      setMydata(data.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])



  return (
    <div className='list-container'>

      <h1 className='list-header'>DATA LIST</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Index No</th>
          <th>Name</th>
          <th>Course</th>
          <th>Phone No</th>
          <th>City</th>
        </tr>
      </thead>
          <tbody>
            {
              myData.map((user , index)=>{
                return(
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.index}</td>
                    <td>{user.name}</td>
                    <td>{user.course}</td>
                    <td>{user.phone}</td>
                    <td>{user.city}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
    </div>
  );
}

export default List;