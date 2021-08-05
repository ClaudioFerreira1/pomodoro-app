import { useGlobalContext } from "./context"

const Controllers = () => {
  const { pomodoro, setPomodoro, shortBreak, setShortBreak, longBreak, setLongBreak } = useGlobalContext();

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
      <button className={pomodoro ? "button-selected btn" : "btn"} onClick={() => handlePomodoro()}>Pomodoro</button>
      <button className={shortBreak ? "button-selected btn" : "btn"} onClick={() => handleShortBreak()}>Short break</button>
      <button className={longBreak ? "button-selected btn" : "btn"} onClick={() => handleLongBreak()}>Long break</button>
    </div>
  )
}

export default Controllers