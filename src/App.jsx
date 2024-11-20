import React from 'react'
import './assets/css/style.css'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import ToggleBox from './components/ToggleBox/ToggleBox.jsx'
import { useSelector } from 'react-redux'

const App = () => {
  const isActive = useSelector((state) => state.container.isActive)
  return (
    <div className={`container ${isActive ? 'active' : ''}`}>
      <Login />
      <Register />
      <ToggleBox />
    </div>
  )
}

export default App
