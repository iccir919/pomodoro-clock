import { useState } from 'react'
import Timer from './Timer'
import Controller from './Controller'

function App() {
  const [sessionLength, setSessionLength] = useState(25)
  const [breakLength, setBreakLength] = useState(5)
  const [currentIntervalType, setCurrentIntervalType] = useState("session")
  const [currentLength, setCurrentLength] = useState(1500)
  const [currentStatus, setCurrentStatus] = useState("stopped")
  const [currentIntervalId, setCurrentIntervalId] = useState(null)

  function handleLengthChange(type, amount) {
    if (type === "session") {
      if (sessionLength === 1 && amount < 0) return 1
      if (sessionLength === 60 && amount > 0) return 60
      setSessionLength(sessionLength + amount)
      setCurrentLength((sessionLength + amount) * 60)
    }

    if (type === "break") {
      if (breakLength === 1  && amount < 0) return 1
      if (breakLength === 60  && amount > 0) return 60
      setBreakLength(breakLength + amount)
    }
  }

  function handleStatusChange() {
    if (currentStatus === "stopped") {
      setCurrentStatus("started")
      let intervalId = setInterval(() => {
        setCurrentLength(currentLength => {
          if (currentLength === 0) {
            setCurrentIntervalType(currentIntervalType => currentIntervalType === "session" ? "break" : "session")
            return currentIntervalType === "session" ? breakLength * 60 : sessionLength * 60
          } else {
            return currentLength - 1
          }
        })
      }, 1000)
      setCurrentIntervalId(intervalId)
    } else if (currentStatus === "started") {
      setCurrentStatus("stopped")
      clearInterval(currentIntervalId)
    }
  }

  return (
    <div className="container text-center">
      <h1>25 + 5 Clock</h1>
      <Controller 
        currentType={currentIntervalType}
        currentLength={currentLength}
        currentStatus={currentStatus}
        onStatusButtonClick={handleStatusChange}
      />
      <div className="row">
        <Timer 
          type="session"
          length={sessionLength}
          onButtonClick={handleLengthChange}
        />
        <Timer
          type="break"
          length={breakLength}
          onButtonClick={handleLengthChange}
          
        />
      </div>
    </div>
  )
}

export default App
