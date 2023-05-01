import { useState } from 'react'
import './App.css'
import Clock from './Clock'

function App() {
  

  return (
    <>
      <h1>25 + 5 Clock</h1>
      <Clock 
        type="session"
      />
      <Clock
        type="break"
      />
    </>
  )
}

export default App
