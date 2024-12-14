import React, { useState } from "react";
import axios from "axios";

function Add() {
  const init = {
    title: "",
    image: "",
    description: "",
    id: "",
  };
  const [data, setData] = useState(init);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/Product", data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    value = "";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="title"
          value={data.title}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          name="image"
          placeholder="image"
          value={data.image}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          name="description"
          placeholder="description"
          value={data.description}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          name="id"
          placeholder="id"
          value={data.id}
          onChange={handleChange}
        />
        <br />
        <button type="submit" style={{ backgroundColor: "whiteSmoke" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Add;
