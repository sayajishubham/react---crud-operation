import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Description() {
  const param = useParams();
  const [get, setGet] = useState({});

  const data = () => {
    axios
      .get(`http://localhost:3000/Product/${param.id}`)
      .then((res) => setGet(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    data();
  }, []);
  return (
    <div>
      <div className="card" style={{ marginTop: "50px" }}>
        <h1>{get.id}</h1>
        <img src={get.image} alt={get.id} height={300} width={300} />
        <>
          <h1>{get.title}</h1>
          <h2>{get.price}</h2>
        </>
        <p></p>
      </div>
    </div>
  );
}

export default Description;
