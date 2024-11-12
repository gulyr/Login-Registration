import React from 'react'
import Login from './components/login/Login'
import Register from './components/Register/Register'
import ToggleBox from './components/toggleBox/ToggleBox'
import { useSelector } from 'react-redux'

const App = () => {
  const isLoginActive = useSelector((state) => state.auth.isLoginActive)
  return (
    <div
      className={`container ${isLoginActive ? '' : 'active'}
      } relative w-[850px] h-[550px] bg-white rounded-[30px] overflow-hidden m-[20px]`}
    >
      <Login />
      <Register />
      <ToggleBox />
    </div>
  )
}

export default App
