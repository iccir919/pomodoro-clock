import { useState } from 'react'
import './App.css'
import Timer from './Timer'

function App() {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);

  

  return (
    <>
      <h1>25 + 5 Clock</h1>
      <Timer 
        type="session"
        length={sessionLength}
      />
      <Timer
        type="break"
        length={breakLength}
      />
    </>
  )
}

export default App
