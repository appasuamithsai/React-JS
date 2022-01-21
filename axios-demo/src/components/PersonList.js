import React, { useState, useEffect } from "react";
import axios from "axios";
const PersonList = () => {
  const [person, setPerson] = useState([]);
  const [post,setPost]=useState({});
  const [id,setId]=useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        setPerson(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <>
    <ol>
      {person.map((e) => (
        <li key={e.id}>{e.name}</li>
      ))}
    </ol>
    <br />
    <h2>Enter Any Number :: </h2>
      <input  onChange={(e)=>setId(e.target.value)}/>
      <br />
        {id}.{post.name}
    </>
  );
};
export default PersonList;
