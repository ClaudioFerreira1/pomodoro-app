import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [pomodoro, setPomodoro] = useState(true);
  const [shortBreak, setShortBreak] = useState(false);
  const [longBreak, setLongBreak] = useState(false);
  const [selectedFont, setSelectedFont] = useState('Space Mono');
  const [actionText, setActionText] = useState('PAUSE');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return <AppContext.Provider value={{ pomodoro, setPomodoro, shortBreak, setShortBreak, longBreak, setLongBreak, selectedFont, actionText, isModalOpen, setIsModalOpen }}>{children}</AppContext.Provider>
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }