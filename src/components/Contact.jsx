import axios from "axios";
import { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const HandleSubmit = (e) => {
    e.preventDefault();
    e.preventDefault();
    const myObj = {
      email,
      password,
    };
    axios
      .post("https://reqres.in/api/login", myObj)
      .then((response) => {
        let token = response.data.token;
        console.log(token);
        localStorage.setItem("token", token);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div style={{ marginTop: "60px" }}>
      <form onSubmit={HandleSubmit}>
        <input
          placeholder="Enter your name"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Enter your Email"
          onChange={(e) => setPass(e.target.value)}
        />
        <button style={{ color: "white" }}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
