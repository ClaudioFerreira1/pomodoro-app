import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [selectedController, setSelectedController] = useState('pomodoro')
  const [pomodoroTime, setPomodoroTime] = useState(30)
  const [shortBreakTime, setShortBreakTime] = useState(5)
  const [longBreakTime, setLongBreakTime] = useState(15)
  const [selectedFont, setSelectedFont] = useState('Kumbh Sans');
  const [actionText, setActionText] = useState('PAUSE');
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [colorChoosed, setColorChoosed] = useState("#F87070")

  return <AppContext.Provider value={{ selectedController, setSelectedController, selectedFont, actionText, isModalOpen, setIsModalOpen, colorChoosed, pomodoroTime, shortBreakTime, longBreakTime, setPomodoroTime, setShortBreakTime, setLongBreakTime, setSelectedFont }}>{children}</AppContext.Provider>
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }