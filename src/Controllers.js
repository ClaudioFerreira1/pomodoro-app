import { useGlobalContext } from "./context"

const Controllers = () => {
  const { selectedFont, selectedController, setSelectedController, colorChoosed, setSecondsRemaining, pomodoroTime, shortBreakTime, longBreakTime, setClockStatus, setActionText, setProgressBarPercentage } = useGlobalContext();

  const changeControllerAndTime = (controllerName) => {
    setSelectedController(controllerName);
    if (controllerName === "pomodoro") {
      setSecondsRemaining(pomodoroTime * 60)
      setProgressBarPercentage(pomodoroTime * 60)
    } else if (controllerName === "short break") {
      setSecondsRemaining(shortBreakTime * 60)
      setProgressBarPercentage(shortBreakTime * 60)
    } else if (controllerName === "long break") {
      setSecondsRemaining(longBreakTime * 60)
      setProgressBarPercentage(longBreakTime * 60)
    }
    setClockStatus('Stopped')
    setActionText('START')
  }

  return (
    <div className={`${colorChoosed.replace('#', 'A')} controllers-div`}>
      <button className={selectedController === "pomodoro" ? "button-selected" : ""} onClick={() => changeControllerAndTime("pomodoro")} style={{ fontFamily: selectedFont }}>pomodoro</button>
      <button className={selectedController === "short break" ? "button-selected" : ""} onClick={() => changeControllerAndTime("short break")} style={{ fontFamily: selectedFont }}>short break</button>
      <button className={selectedController === "long break" ? "button-selected" : ""} onClick={() => changeControllerAndTime("long break")} style={{ fontFamily: selectedFont }}>long break</button>
    </div>
  )
}

export default Controllers