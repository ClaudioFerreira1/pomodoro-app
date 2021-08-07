import { useGlobalContext } from "./context";
import iconClose from './assets/icon-close.svg';
import arrowUp from './assets/icon-arrow-up.svg';
import arrowDown from './assets/icon-arrow-down.svg';


const Modal = () => {
  const { isModalOpen, setIsModalOpen, colorChoosed, selectedFont, pomodoroTime, shortBreakTime, longBreakTime, setPomodoroTime, setShortBreakTime, setLongBreakTime, setSelectedFont } = useGlobalContext();



  return (
    <div className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}>
      <section className='modal-container'>
        <header className='header-modal'>
          <h2 style={{ fontFamily: selectedFont }}>Settings</h2>
          <img className="closing-icon" src={iconClose} onClick={() => { setIsModalOpen(false) }} alt="closing-icon" />
        </header>

        <main>
          <div className="main-div-modal">
            <p style={{ fontFamily: selectedFont }} className="subtitle-modal">TIME (MINUTES)</p>
            <div className="div-controllers-modal" style={{ fontFamily: selectedFont }}>
              <div>
                <h5>pomodoro</h5>
                <input id="input-number-modal" type="number" min="1" max="60" value={pomodoroTime} style={{ fontFamily: selectedFont }} readOnly />
                <div className="arrows-input-div">
                  <img className={pomodoroTime === 60 ? "dissapear" : ""} src={arrowUp} alt="arrow-up" onClick={() => setPomodoroTime(pomodoroTime + 1)} />
                  <img className={pomodoroTime === 1 ? "dissapear" : ""} src={arrowDown} alt="arrow-down" onClick={() => setPomodoroTime(pomodoroTime - 1)} />
                </div>
              </div>
              <div>
                <h5>short break</h5>
                <input id="input-number-modal" type="number" min="1" max="99" step="1" value={shortBreakTime} style={{ fontFamily: selectedFont }} readOnly />
                <div className="arrows-input-div">
                  <img className={shortBreakTime === 60 ? "dissapear" : ""} src={arrowUp} alt="arrow-up" onClick={() => setShortBreakTime(shortBreakTime + 1)} />
                  <img className={shortBreakTime === 1 ? "dissapear" : ""} src={arrowDown} alt="arrow-down" onClick={() => setShortBreakTime(shortBreakTime - 1)} />
                </div>
              </div>
              <div>
                <h5>long break</h5>
                <input id="input-number-modal" type="number" min="1" max="99" step="1" value={longBreakTime} style={{ fontFamily: selectedFont }} readOnly />
                <div className="arrows-input-div">
                  <img className={longBreakTime === 60 ? "dissapear" : ""} src={arrowUp} alt="arrow-up" onClick={() => setLongBreakTime(longBreakTime + 1)} />
                  <img className={longBreakTime === 1 ? "dissapear" : ""} src={arrowDown} alt="arrow-down" onClick={() => setLongBreakTime(longBreakTime - 1)} />
                </div>
              </div>
            </div>
            <div className="div-font">
              <p className="subtitle-modal" style={{ fontFamily: selectedFont }}>
                FONT
              </p>
              <div className="div-font-buttons">
                <button className={selectedFont === 'Kumbh Sans' ? "selected" : ""} onClick={() => setSelectedFont('Kumbh Sans')}>Aa</button>
                <button className={selectedFont === 'Roboto Slab' ? "selected" : ""} style={{ fontFamily: 'Roboto Slab' }} onClick={() => setSelectedFont('Roboto Slab')}>Aa</button>
                <button className={selectedFont === 'Space Mono' ? "selected" : ""} style={{ fontFamily: 'Space Mono' }} onClick={() => setSelectedFont('Space Mono')}>Aa</button>
              </div>
            </div>
            <div>
              <p className="subtitle-modal" style={{ fontFamily: selectedFont }}>
                COLOR
              </p>
            </div>
          </div>
          <button className="apply-button" style={{ backgroundColor: colorChoosed, fontFamily: selectedFont }}>Apply</button>
        </main>
      </section>
    </div>
  )
}


export default Modal;