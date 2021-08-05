import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [pomodoro, setPomodoro] = useState(true);
  const [shortBreak, setShortBreak] = useState(false);
  const [longBreak, setLongBreak] = useState(false);

  return <AppContext.Provider value={{ pomodoro, setPomodoro, shortBreak, setShortBreak, longBreak, setLongBreak }}>{children}</AppContext.Provider>
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }