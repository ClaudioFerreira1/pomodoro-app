import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [pomodoro, setPomodoro] = useState(true);
  const [shortBreak, setShortBreak] = useState(false);
  const [longBreak, setLongBreak] = useState(false);
  const [selectedFont, setSelectedFont] = useState('Kumbh Sans');

  return <AppContext.Provider value={{ pomodoro, setPomodoro, shortBreak, setShortBreak, longBreak, setLongBreak, selectedFont }}>{children}</AppContext.Provider>
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }