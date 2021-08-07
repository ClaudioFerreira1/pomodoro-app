import { useGlobalContext } from "./context"

const Controllers = () => {
  const { selectedFont, selectedController, setSelectedController } = useGlobalContext();

  return (
    <div className="controllers-div" id="test">
      <button className={selectedController === "pomodoro" ? "button-selected" : ""} onClick={() => setSelectedController("pomodoro")} style={{ fontFamily: selectedFont }}>pomodoro</button>
      <button className={selectedController === "short break" ? "button-selected" : ""} onClick={() => setSelectedController("short break")} style={{ fontFamily: selectedFont }}>short break</button>
      <button className={selectedController === "long break" ? "button-selected" : ""} onClick={() => setSelectedController("long break")} style={{ fontFamily: selectedFont }}>long break</button>
    </div>
  )
}

export default Controllers