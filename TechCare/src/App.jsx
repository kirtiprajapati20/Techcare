import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        
      </Routes>
    </>
  )
}

export default App
