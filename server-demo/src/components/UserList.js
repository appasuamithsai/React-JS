import React, { useState, useEffect } from "react";
import axios from "axios";
export const UserList = () => {
  const [person, setPerson] = useState([]);
  const [id, setid] = useState('');
  const [name, setname] = useState("");
  const [username,setusername]=useState("");
  const [email,setemail]=useState("");




  const update=()=>{

    axios
      .get(`http://localhost:8000/user`)
      .then((response) => {
        setPerson(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(update,[]);

  const addUser=()=>{




    setid('');
    setname('');
    setemail('');
    setusername('');

    axios
      .post(`http://localhost:8000/user/`,{
        "id": id,
        "name": name,
        "username": username,
        "email": email
    })
      .then((response) => {
        console.log(response.data);
        update();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  return (
    <>
      <ol>
        {
        person.map((e) => (
          <li key={e.id}>{e.name}</li>
        ))}
      </ol>
      <br />
      <h4>Enter ID :: </h4>
      <input type='number' value={id} onChange={(e)=>setid(e.target.value)} />
      <br />
      <h4>Enter name :: </h4>
      <input value={name} onChange={(e)=>setname(e.target.value)} />
      <br />
      <h4>Enter username :: </h4>
      <input value={username} onChange={(e)=>setusername(e.target.value)}  />
      <br />
      <h4>Enter email :: </h4>
      <input value={email} onChange={(e)=>setemail(e.target.value) } />
      <br />

      <button style={{marginTop:"5px"}} onClick={addUser}>Add User </button>

    </>
  );
};
export default UserList;
