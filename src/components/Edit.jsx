import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function Edit() {
  const param = useParams();
  const init = {
    title: "",
    image: "",
    price: "",
    description: "",
    category: "",
  };
  const [lock, setLock] = useState(init);
  console.log(lock);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLock({ ...lock, [name]: value });
  };
  const handleSumbit = () => {
    axios
      .post(`http://localhost:3000/Product/${param.id}`, lock)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div style={{ marginTop: "50px" }}>
      <form onSubmit={handleSumbit}>
        <input
          name="Title"
          placeholder="Update Title"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          name="Image"
          placeholder="Update Image"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          name="Price"
          placeholder="Update Price"
          onChange={handleChange}
        />
        <br />
        <br />
        <button
          style={{ backgroundColor: "white", border: "1px solid black" }}
          onChange={handleChange}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Edit;
