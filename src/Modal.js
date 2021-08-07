import { useGlobalContext } from "./context";
import iconClose from './assets/icon-close.svg';

const Modal = () => {
  const { isModalOpen, setIsModalOpen, colorChoosed, selectedFont, pomodoroTime, shortBreakTime, longBreakTime } = useGlobalContext();

  return (
    <div className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}>
      <section className='modal-container'>
        <header className='header-modal'>
          <h2 style={{ fontFamily: selectedFont }}>Settings</h2>
          <img className="closing-icon" src={iconClose} onClick={() => { setIsModalOpen(false) }} alt="closing-icon" />
        </header>

        <main>
          <div className="main-div-modal">
            <h4 style={{ fontFamily: selectedFont }} className="main-title-modal">TIME(MINUTES)</h4>
            <div className="div-controllers-modal" style={{ fontFamily: selectedFont }}>
              <div>
                pomodoro
                <input type="number" min="1" max="99" step="1" value={pomodoroTime} style={{ fontFamily: selectedFont }} />
              </div>
              <div>
                short break
                <input type="number" min="1" max="99" step="1" value={shortBreakTime} style={{ fontFamily: selectedFont }} />
              </div>
              <div>
                long break
                <input type="number" min="1" max="99" step="1" value={longBreakTime} style={{ fontFamily: selectedFont }} />
              </div>
            </div>
            <div>FONT</div>
            <div>COLOR</div>
          </div>
          <button className="apply-button" style={{ backgroundColor: colorChoosed, fontFamily: selectedFont }}>Apply</button>
        </main>
      </section>
    </div>
  )
}


export default Modal;