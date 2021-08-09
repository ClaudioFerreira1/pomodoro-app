import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [selectedController, setSelectedController] = useState('pomodoro');
  const [pomodoroTime, setPomodoroTime] = useState(30);
  const [shortBreakTime, setShortBreakTime] = useState(5);
  const [longBreakTime, setLongBreakTime] = useState(15);
  const [selectedFont, setSelectedFont] = useState('Kumbh Sans');
  const [actionText, setActionText] = useState('START');
  const [clockStatus, setClockStatus] = useState('Stopped');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [colorChoosed, setColorChoosed] = useState("#F87070");
  const [secondsRemaining, setSecondsRemaining] = useState(1800);
  const [progressBarPercentage, setProgressBarPercentage] = useState(100);

  const timeOfSelectedControler = () => {
    if (selectedController === "pomodoro") {
      setSecondsRemaining(pomodoroTime * 60)
    } else if (selectedController === "short break") {
      setSecondsRemaining(shortBreakTime * 60)
    } else if (selectedController === "long break") {
      setSecondsRemaining(longBreakTime * 60)
    }
  }

  return <AppContext.Provider value={{ selectedController, setSelectedController, selectedFont, actionText, isModalOpen, setIsModalOpen, colorChoosed, pomodoroTime, shortBreakTime, longBreakTime, setPomodoroTime, setShortBreakTime, setLongBreakTime, setSelectedFont, setColorChoosed, clockStatus, setClockStatus, setActionText, secondsRemaining, setSecondsRemaining, timeOfSelectedControler, progressBarPercentage, setProgressBarPercentage }}>{children}</AppContext.Provider>
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }