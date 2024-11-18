import React from 'react'
import { useDispatch } from 'react-redux'
import { activate, deactivate } from '../../redux/slices/slice'

const ToggleBox = () => {
  const dispatch = useDispatch()
  return (
    <div className="toggle_box">
      <div className="toggle_panel toggle_left">
        <h1>Hello, Welcome!</h1>
        <p>Don't have an account?</p>
        <button
          className="btn register_btn"
          onClick={() => dispatch(activate())}
        >
          Register
        </button>
      </div>
      <div className="toggle_panel toggle_right">
        <h1>Welcome Back!</h1>
        <p>Already have an account?</p>
        <button
          className="btn login_btn"
          onClick={() => dispatch(deactivate())}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default ToggleBox
