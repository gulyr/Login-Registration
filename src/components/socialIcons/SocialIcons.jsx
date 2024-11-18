import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SocialIcons = () => {
  return (
    <div className="social_icons">
      <ul>
        <li>
          <Link to={''}>
            <FaFacebookF className="icon" />
          </Link>
        </li>
        <li>
          <Link to={''}>
            <FaYoutube className="icon" />
          </Link>
        </li>
        <li>
          <Link to={''}>
            <BsGithub className="icon" />
          </Link>
        </li>
        <li>
          <Link to={''}>
            <FaLinkedinIn className="icon" />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SocialIcons
