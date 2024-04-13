import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'

function App() {
  return (
    <Router>
    <div>
      <Navbar/>
      <Routes>
        <Route path="/"/>
      </Routes>
    </div>
   
  </Router>
  )
}

export default App
