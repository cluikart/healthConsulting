import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "./components/router";
import Menu from "./components/menu";

function App() {
  return (
    <div className="App">
      <Router/>
      <Menu/>
      
    </div>
  );
}

export default App;
