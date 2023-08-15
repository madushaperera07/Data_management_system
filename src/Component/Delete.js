import React, { useEffect, useState } from 'react';


import "./Delete.css"


const Delete = () => {


  const [apiId, setapiId] = useState("")
  const [myData, setMydata] = useState({})
  const [submit, setSubmit] = useState(false)

  const ReadData = () => {
    const apiData = async () => {
      const res = await fetch(`http://localhost:9000/saveData/${apiId}`)
      const data = await res.json()

      if (data) {
        setMydata(data)
      }
    }


    if (apiId.length > 0) {

      apiData()
    }

  }

  useEffect(() => {
    ReadData()
    // eslint-disable-next-line
  }, [submit])


  const deleteData = (id) => {
    fetch(`http://localhost:9000/saveData/${id}`, {
      method: "DELETE"
    }).then((data) => {
      data.json()
      ReadData()
      alert(`Deleted ${id}`)
    })
  }


  return (
    <div class="delete_container">
      <div class="header_container"><h2>Delete Data</h2></div>

      <div>
        <div class="input_id">
          <span>Enter Input Id : </span>
          <input
            type="text"
            value={apiId}
            onChange={(e) => {
              e.preventDefault();
              setapiId(e.target.value);
            }}
          />
        </div>
        <div class="button_container">
          <button
            type="submit"
            class="btn btn-primary data_button"
            onClick={() => setSubmit((pre) => (pre === false ? true : false))}
          >
            Search
          </button>
        </div>
      </div>
      <div><div class="data_container">
        <div>
          <div class="index_container">
            <div>
              <h4>Index Number</h4>
              <h5>{myData.index}</h5>
            </div>
          </div>
          <div class="name_line">
            <div>
              <h6>Names with initials</h6>
              <p>{myData.name}</p>
            </div>
            <div>
              <h6>Course</h6>
              <p>{myData.course}</p>
            </div>
          </div>
          <div class="name_line">
            <div>
              <h6>Phone Number</h6>
              <p>{myData.phone}</p>
            </div>
            <div>
              <h6>City</h6>
              <p>{myData.city}</p>
            </div>
          </div>
        </div>
      </div></div>

      <div class="delete_button">
        <button type='delete' class="btn btn-danger" onClick={() => {
          deleteData(myData.id)
          setapiId((pre) => {
            if (pre) {
              return ""
            } else {
              return pre
            }
          })
        }} >Delete</button>
      </div>
    </div>
  );
}

export default Delete;