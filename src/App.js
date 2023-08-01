import Home from "./components/dome";
import React from "react";
import {BrowserRouter as Router,Route,Routes } from "react-router-dom";
import  Add from './components/add';
import Edit from "./components/edit";


function App() {
  return(
    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Add/>}/>
        <Route path="/edit" element={<Edit/>}/>
      </Routes>
    </Router>
  );
}

export default App;
