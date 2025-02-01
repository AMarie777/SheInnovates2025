import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//importing react router to navigate between pages
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; //Navigation bar
import Home from './Pages/Home'; //Home page
import Trends from './Pages/Trends'; //Trends page
import Subscriptions from './Pages/Subscriptions'; //Subscriptions page

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/trends" element={<Trends />} />
        </Routes>
      </Router>
  )
}

export default App
