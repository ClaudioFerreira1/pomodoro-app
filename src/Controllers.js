import { useGlobalContext } from "./context"

const Controllers = () => {
  const { pomodoro, setPomodoro, shortBreak, setShortBreak, longBreak, setLongBreak, selectedFont } = useGlobalContext();

  const handlePomodoro = () => {
    setPomodoro(true);
    setShortBreak(false);
    setLongBreak(false);
  }

  const handleShortBreak = () => {
    setPomodoro(false);
    setShortBreak(true);
    setLongBreak(false);
  }

  const handleLongBreak = () => {
    setPomodoro(false);
    setShortBreak(false);
    setLongBreak(true);
  }

  return (
    <div className="controllers-div" id="test">
      <button className={pomodoro ? "button-selected btn" : "btn"} onClick={() => handlePomodoro()} style={{ fontFamily: selectedFont }}>pomodoro</button>
      <button className={shortBreak ? "button-selected btn" : "btn"} onClick={() => handleShortBreak()} style={{ fontFamily: selectedFont }}>short break</button>
      <button className={longBreak ? "button-selected btn" : "btn"} onClick={() => handleLongBreak()} style={{ fontFamily: selectedFont }}>long break</button>
    </div>
  )
}

export default Controllers