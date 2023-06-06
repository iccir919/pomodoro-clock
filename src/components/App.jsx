import { useState, useRef } from 'react'
import Timer from './Timer'
import Controller from './Controller'
import Alarm from './Alarm'

const initialSessionLength = 25
const initalBreakLength = 5

function App() {
  const [sessionLength, setSessionLength] = useState(initialSessionLength)
  const [breakLength, setBreakLength] = useState(initalBreakLength)
  const [currentIntervalType, setCurrentIntervalType] = useState("session")
  const [currentLength, setCurrentLength] = useState(initialSessionLength * 60)
  const [currentStatus, setCurrentStatus] = useState("stopped")
  const intervalRef = useRef(null)
  const audioRef = useRef(null)

  function handleTimerLengthChange(type, amount) {
    if (type === "session") {
      setSessionLength(sessionLength + amount)
      if (currentIntervalType === "session") setCurrentLength((sessionLength + amount) * 60)
    }

    if (type === "break") {
      setBreakLength(breakLength + amount)
      if (currentIntervalType === "break") setCurrentLength((sessionLength + amount) * 60)
    }
  }

  function handleResetEvent() {
    setSessionLength(initialSessionLength)
    setBreakLength(initalBreakLength)
    setCurrentLength(initialSessionLength * 60)
    setCurrentStatus("stopped")
    setCurrentIntervalType("session")
    clearInterval(intervalRef.current)
    audioRef.current.pause()
    audioRef.current.currentTime = 0
  }

  function handleStatusChange() {
    if (currentStatus === "stopped") {
      setCurrentStatus("active")
      intervalRef.current = setInterval(() => {
        setCurrentLength(currentLength => {
          if (currentLength === 0) {
            audioRef.current.play()
            setCurrentIntervalType(currentIntervalType => currentIntervalType === "session" ? "break" : "session")
            return currentIntervalType === "session" ? breakLength * 60 : sessionLength * 60
          } else {
            return currentLength - 1
          }
        })
      }, 1000)
    } else if (currentStatus === "active") {
      setCurrentStatus("stopped")
      clearInterval(intervalRef.current)
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
        onResetButtonClick={handleResetEvent}
      />
      <div className="row">
        <Timer 
          type="session"
          length={sessionLength}
          status={currentStatus}
          onIncrementChange={handleTimerLengthChange}
        />
        <Timer
          type="break"
          length={breakLength}
          status={currentStatus}
          onIncrementChange={handleTimerLengthChange}
        />
      </div>
      <Alarm 
        ref={audioRef}
      />
    </div>
  )
}

export default App
