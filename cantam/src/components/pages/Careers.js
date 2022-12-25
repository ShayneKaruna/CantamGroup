import React, {useState} from "react";

export default function Careers() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      alert("submitted")
    } catch {
      alert("error");
    }
  }
  return (
  <div>
    <h1>Careers</h1>
    <p>Work with us!</p>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          value = {name}
          onChange = {(e) => setName(e.target.value)}
          type = "text"
          placeholder= "Enter name"
        />
      </div>
      <div>
        <label>Email</label>
        <input
          value = {email}
          onChange = {(e) => setEmail(e.target.value)}
          type = "text"
          placeholder= "Enter email"
        />
      </div>
    </form>
  </div>
)
}
