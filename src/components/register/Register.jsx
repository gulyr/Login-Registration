import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa6'
import { IoLockClosed } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import SocialIcons from '../socialIcons/SocialIcons'
import { useDispatch } from 'react-redux'
import { activate } from '../../redux/slices/slice'

const Register = () => {
  const dispatch = useDispatch()
  return (
    <div className="form_box register">
      <form action="">
        <h1>Registration</h1>
        <div className="input_box">
          <span className="icon">
            <FaUser className="icon" />
          </span>
          <input
            type="text"
            required
          />
          <label>Username</label>
        </div>
        <div className="input_box">
          <span className="icon">
            <FaEnvelope className="icon" />
          </span>
          <input
            type="email"
            required
          />
          <label>Email</label>
        </div>
        <div className="input_box">
          <span className="icon">
            <IoLockClosed className="icon" />
          </span>
          <input
            type="password"
            required
          />
          <label>Password</label>
        </div>
        <button
          type="submit"
          className="btn"
        >
          Register
        </button>
        <p>or register with social platform</p>
        <SocialIcons />
      </form>
    </div>
  )
}

export default Register
