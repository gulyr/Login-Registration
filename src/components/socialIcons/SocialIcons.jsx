import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SocialIcons = () => {
  return (
    <div className="social_icons mt-[25px]">
      <ul className="p-0 m-0 flex justify-center">
        <li className="list-none my-0 mx-[10px]">
          <Link
            to=""
            className="relative w-[50px] h-[50px] rounded-full bg-white text-center flex items-center justify-center duration-[0.5s] translate-x-0 translate-y-0 hover:rotate-0 hover:skew-0 hover:translate-x-0 hover:translate-y-[-10px] hover:bg-[#3b5999]"
          >
            <FaFacebookF className="icon text-[#888] text-[30px] duration-[0.5s] leading-[50px]" />
          </Link>
        </li>
        <li className="list-none my-0 mx-[10px]">
          <Link
            to=""
            className="relative w-[50px] h-[50px] rounded-full bg-white text-center flex items-center justify-center duration-[0.5s] translate-x-0 translate-y-0 hover:rotate-0 hover:skew-0 hover:translate-x-0 hover:translate-y-[-10px] hover:bg-[#e4405f]"
          >
            <FaYoutube className="icon text-[#888] text-[30px] duration-[0.5s] leading-[50px]" />
          </Link>
        </li>
        <li className="list-none my-0 mx-[10px]">
          <Link
            to=""
            className="relative w-[50px] h-[50px] rounded-full bg-white text-center flex items-center justify-center duration-[0.5s] translate-x-0 translate-y-0 hover:rotate-0 hover:skew-0 hover:translate-x-0 hover:translate-y-[-10px] hover:bg-[#000]"
          >
            <FaGithub className="icon text-[#888] text-[30px] duration-[0.5s] leading-[50px]" />
          </Link>
        </li>
        <li className="list-none my-0 mx-[10px]">
          <Link
            to=""
            className="relative w-[50px] h-[50px] rounded-full bg-white text-center flex items-center justify-center duration-[0.5s] translate-x-0 translate-y-0 hover:rotate-0 hover:skew-0 hover:translate-x-0 hover:translate-y-[-10px] hover:bg-[#0077b5]"
          >
            <FaLinkedinIn className="icon text-[#888] text-[30px] duration-[0.5s] leading-[50px]" />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SocialIcons
