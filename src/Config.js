import iconSettings from "./assets/icon-settings.svg"
import { useGlobalContext } from "./context"

const Config = () => {
  const { setIsModalOpen } = useGlobalContext();

  return (
    <div className="config-div">
      <img src={iconSettings} alt="icon-settings" onClick={() => setIsModalOpen(true)} />
    </div>
  )
}

export default Config