import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from "./MyComponents/Footer";
import React, { useState } from 'react';


function App() {
  const onDelete = (todo)=> {
    console.log("I am onDelete of todo", todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done 1"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the market to get this job done 2"
    },
    {
      sno: 3,
      title: "Go to the city",
      desc: "You need to go to the market to get this job done 3"
    }
  ]);
  return (
    <>
      <Header title="My Todos List" searchBar={true}/>
      <Todos todos={todos} onDelete={onDelete}/>    
      <Footer />
    </>
  );
}

export default App;
