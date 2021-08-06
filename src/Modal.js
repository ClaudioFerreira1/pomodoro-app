import { useGlobalContext } from "./context";
import iconClose from './assets/icon-close.svg';

const Modal = () => {
  const { isModalOpen, setIsModalOpen, colorChoosed, selectedFont } = useGlobalContext();

  return (
    <div className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}>
      <div className='modal-container'>
        <img className="closing-icon" src={iconClose} onClick={() => { setIsModalOpen(false) }} alt="closing-icon" />
        <button className="apply-button" style={{ backgroundColor: colorChoosed, fontFamily: selectedFont }}>Apply</button>
      </div>
    </div>
  )
}


export default Modal;