import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import {
  faHome,
  faInfo,
  faTools,
  faProjectDiagram,
  faContactCard,
} from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/ts-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  console.log(nav)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <React.Fragment>
      <div
        className="w-full h-32 shadow-xl shadow-gray-400 dark:shadow-md dark:shadow-gray-400"
        id="Navbar"
      >
        <div className="flex justify-between  items-center w-full h-full px-3 2xl:px-16">
          <img
            src={logo}
            className="rounded-full shadow-md shadow-gray-400 dark:shadow-md dark:shadow-gray-400 h-16 w-16"
            alt="/"
          />

          <ul className="hidden md:flex sm:justify-start">
            <a href="/" type="">
              <li className="ml-10 text-sm uppercase text-yellow-500 /">
                Home
              </li>
            </a>
            <a href="/#about">
              <li className="ml-10 text-sm uppercase  text-yellow-500 /">
                About
              </li>
            </a>
            <a href="/#skills">
              <li className="ml-10 text-sm uppercase  text-yellow-500 /">
                Skills
              </li>
            </a>
            <a href="/#projects">
              <li className="ml-10 text-sm uppercase  text-yellow-500 /">
                Projects
              </li>
            </a>
            <a href="/#contacts">
              <li className="ml-10 text-sm uppercase  text-yellow-500 /">
                Contact
              </li>
            </a>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: '#fff' }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {/* Overlay */}

      {/* sidebar */}
      {console.log(nav)}
      <div
        className={
          nav
            ? 'md:hidden fixed left-0 top-0 w-3/4 h-screen bg-gray-900 z-10'
            : 'hidden'
        }
      >
        <div className="flex justify-between items-center w-full h-16 px-3 2xl:px-16">
          <img
            src={logo}
            className="rounded-full shadow-md shadow-gray-400 h-16 w-16"
            alt="/"
          />
          <div
            style={{ color: '#fff' }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineClose size={25} />
          </div>
        </div>
        <ul className="flex flex-col justify-center items-center h-full">
          <a href="/" type="">
            <li className="ml-4 pb-2 text-sm uppercase text-yellow-500 /">
              Home <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
            </li>
          </a>
          <a href="/#about" type="" onClick={handleNav}>
            <li className="ml-4 pb-2 text-sm uppercase  text-yellow-500 /">
              About<FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
            </li>
          </a>
          <a href="/#skills">
            <li className="ml-4  pb-2 text-sm uppercase  text-yellow-500 /">
              Skills<FontAwesomeIcon icon={faTools}></FontAwesomeIcon>
            </li>
          </a>
          <a href="/#projects" onClick={handleNav}>
            <li className="ml-4  pb-2 text-sm uppercase  text-yellow-500 /">
              Projects
              <FontAwesomeIcon icon={faProjectDiagram}></FontAwesomeIcon>
            </li>
          </a>
          <a href="/#contacts" onClick={handleNav}>
            <li className="ml-4 pb-2 text-sm uppercase  text-yellow-500 /">
              Contact<FontAwesomeIcon icon={faContactCard}></FontAwesomeIcon>
            </li>
          </a>
        </ul>
      </div>
    </React.Fragment>
  )
}

export default Navbar
