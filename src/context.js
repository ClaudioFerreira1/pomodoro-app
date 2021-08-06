import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [pomodoro, setPomodoro] = useState(true);
  const [shortBreak, setShortBreak] = useState(false);
  const [longBreak, setLongBreak] = useState(false);
  const [selectedFont, setSelectedFont] = useState('Kumbh Sans');
  const [actionText, setActionText] = useState('PAUSE');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [colorChoosed, setColorChoosed] = useState("#F87070")

  return <AppContext.Provider value={{ pomodoro, setPomodoro, shortBreak, setShortBreak, longBreak, setLongBreak, selectedFont, actionText, isModalOpen, setIsModalOpen, colorChoosed }}>{children}</AppContext.Provider>
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }