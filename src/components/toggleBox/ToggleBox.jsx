import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showLogin, showRegister } from '../../redux/slices/slice'

const ToggleBox = () => {
  const dispatch = useDispatch()
  return (
    <div className="toggle_box absolute w-full h-full">
      <div className="toggle_panel toggle_left absolute left-0 w-[50%] h-full flex flex-col items-center justify-center text-white z-[2] duration-[0.6s] ease-in-out delay-[1.2s]">
        <h1 className="text-[2rem] -my-[10px] mx-0 font-bold">
          Hello, Welcome!
        </h1>
        <p className="text-[14.5px] my-[15px] mx-0">Don't have an account?</p>
        <button
          onClick={() => dispatch(showRegister())}
          className="btn register_btn w-[160px] h-[46px] bg-transparent border-[2px] border-solid border-white shadow-none rounded-[8px] font-bold"
        >
          Register
        </button>
      </div>
      <div className="toggle_panel toggle_right absolute -right-[50%] w-[50%] h-full flex flex-col items-center justify-center text-white z-[2] duration-[0.6s] ease-in-out delay-[0.6s]">
        <h1 className="text-[2rem] -my-[10px] mx-0 font-bold">Welcome Back!</h1>
        <p className="text-[14.5px] my-[15px] mx-0">Already have an account?</p>
        <button
          onClick={() => dispatch(showLogin())}
          className="btn login_btn w-[160px] h-[46px] bg-transparent border-[2px] border-solid border-white shadow-none rounded-[8px] font-bold"
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default ToggleBox
