import './App.css';
import { Footer } from './MyComponents/Footer';
import { Header } from './MyComponents/Header'
import { Todos } from './MyComponents/Todos';
import React, { useState, useEffect } from 'react';
import { AddTodo } from './MyComponents/AddTodo';

import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import { About } from './MyComponents/About';
import Temp from './MyComponents/Temp';
function App() {
  let initTodo;
  if (localStorage.getItem('todos')) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e != todo;
    }));
  };

  const addTodo = (title, desc) => {
    let sno = todos.length === 0 ? 1 : (todos[todos.length - 1]['sno'] + 1);

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    };
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState([]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={true} />
        <Temp></Temp>
        <Routes>
          <Route path="/" element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }>
          </Route>
          <Route exact path="/about" element={ <About /> }>
           
          </Route>

        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;

