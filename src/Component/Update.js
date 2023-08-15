
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./Update.css"

function Update() {

  const [apiId, setapiId] = useState("")
  const [index, setindex] = useState("")
  const [name, setname] = useState("")
  const [course, setcourse] = useState("")
  const [phone, setphone] = useState("")
  const [city, setcity] = useState("")
  const [submit, setSubmit] = useState(false)



  useEffect(() => {
    axios.get(`http://localhost:9000/saveData/${apiId}`)
      .then((res) => {
        setindex(res.data.index)
        setname(res.data.name)
        setcourse(res.data.course)
        setphone(res.data.phone)
        setcity(res.data.city)
      }).catch((err) => {
        return err
      })
  }, [submit])


  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedItem = { index, name, course, phone, city };
    axios.put(`http://localhost:9000/saveData/${apiId}`, updatedItem).then(res => {
      alert(`Updated ${apiId}`)
    }).catch(err => {
      console.log(err)
    })

    setindex(pre => {
      if (pre.length > 1) {
        return ""
      } else {
        return pre
      }
    })
    setname(pre => {
      if (pre.length > 1) {
        return ""
      } else {
        return pre
      }
    })
    setcourse(pre => {
      if (pre.length > 1) {
        return ""
      } else {
        return pre
      }
    })
    setphone(pre => {
      if (pre.length > 1) {
        return ""
      } else {
        return pre
      }
    })
    setcity(pre => {
      if (pre.length > 1) {
        return ""
      } else {
        return pre
      }
    })

  }






  return (
    <div >
      <div class="update_container">
      <div class="header_container"><h2>Update Data</h2></div>
      <div>
        <div class="input_id">
          <span>Enter Input Id : </span>
          <input type='text' value={apiId} onChange={(e) => {
            e.preventDefault()
            setapiId(e.target.value)
          }} />
        </div>
        <div class="search_container">
          <button type='submit' class="btn btn-primary" onClick={() => setSubmit((pre) => pre === false ? true : false)}>Search</button>
        </div>
      </div>
      </div>
      

      <form action='PUT' onSubmit={handleSubmit}>
        <div class="all_updates" >
          <div class="update_center">
            <label>Index Number</label>
            <input type='text' value={index}
              onChange={(e) => {
                setindex(e.target.value)
              }}
            />
          </div>
          <div class="read_data">

            <div class="name_container">
              <div class="datas">
                <label>Names with initials</label>
                <input type='text' value={name}
                  onChange={(e) => {
                    setname(e.target.value)
                  }}
                />
              </div>
              <div class="datas">
                <label>Course</label>
                <input type='text' value={course}
                  onChange={(e) => {
                    setcourse(e.target.value)
                  }}
                />
              </div>
            </div>

            <div class="phone_container">
              <div class="datas">
                <label>Phone Number</label>
                <input type='text' value={phone}
                  onChange={(e) => {
                    setphone(e.target.value)
                  }}
                />
              </div>
              <div class="datas"> 
                <label>City</label>
                <input type='text' value={city}
                  onChange={(e) => {
                    setcity(e.target.value)
                  }}
                />
              </div>
            </div>



          </div>
        </div>


        <div class="update_button">
          <button type='submit' class="btn btn-warning" >Submit</button>
        </div>
      </form>


    </div>
  );
}

export default Update;