import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Read.css";

function Read() {
  const [apiId, setapiId] = useState("");
  const [myData, setMydata] = useState({});
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/saveData/${apiId}`)
      .then((res) => {
        setMydata({
          ...myData,
          index: res.data.index,
          name: res.data.name,
          course: res.data.course,
          phone: res.data.phone,
          city: res.data.city,
        });
      })
      .catch((err) => {
        return err;
      });
    // eslint-disable-next-line
  }, [submit]);

  return (
    <div class="read_container">
      <div class="header_container"><h2>Read Data</h2></div>
      
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

      <div class="data_container">
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
      </div>
    </div>
  );
}

export default Read;
