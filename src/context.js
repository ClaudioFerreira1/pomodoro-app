import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [pomodoro, setPomodoro] = useState(true);
  const [shortBreak, setShortBreak] = useState(false);
  const [longBreak, setLongBreak] = useState(false);
  const [selectedFont, setSelectedFont] = useState('Kumbh Sans');
  const [actionText, setActionText] = useState('START')

  return <AppContext.Provider value={{ pomodoro, setPomodoro, shortBreak, setShortBreak, longBreak, setLongBreak, selectedFont, actionText }}>{children}</AppContext.Provider>
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }