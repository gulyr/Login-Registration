import React from 'react'
import { FaUser } from 'react-icons/fa6'
import { IoLockClosed } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import SocialIcons from '../SocialIcons/SocialIcons'
import { useDispatch } from 'react-redux'
import { deactivate } from '../../redux/slices/slice'

const Login = () => {
  const dispatch = useDispatch()
  return (
    <div className="form_box login">
      <form action="">
        <h1>Login</h1>
        <div className="input_box">
          <span className="icon_container">
            <FaUser className="icon" />
          </span>
          <input
            type="text"
            required
          />
          <label>Username</label>
        </div>
        <div className="input_box">
          <span className="icon_container">
            <IoLockClosed className="icon" />
          </span>
          <input
            type="password"
            required
          />
          <label>Password</label>
        </div>
        <div className="forgot_link">
          <Link to={''}>Forgot password?</Link>
        </div>
        <button
          type="submit"
          className="btn"
        >
          Login
        </button>
        <p>or login with social platforms</p>
        <SocialIcons />
      </form>
    </div>
  )
}

export default Login
