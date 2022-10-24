import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import logo from '../assets/ts-logo.png';



const Navbar = () => {
  const [nav, setNav] = useState(false);


    const handleNav = () => {
        setNav(!nav);
    }

  // useEffect(() => {
  //   const handleShadow = () => {
  //     if (window.scrollY >= 90) {
  //       setShadow(true);
  //     } else {
  //       setShadow(false);
  //     }
  //   };
  //   window.addEventListener('scroll', handleShadow);
  // }, []);

  return (
    <React.Fragment>
    <div className="w-full h-32 shadow-xl shadow-gray-400" id="Navbar">
      <div className="flex justify-between  items-center w-full h-full px-3 2xl:px-16" >
      <img
        src={logo}
        className='rounded-full shadow-md shadow-gray-400 h-16 w-16'
        alt='/' />

          <ul className='hidden md:flex'>
            <a href="/" type=''>
              <li className="ml-10 text-sm uppercase text-yellow-500 /" >Home</li>
            </a>
            <a href="/#about">
              <li className="ml-10 text-sm uppercase  text-yellow-500 /" >About</li>
            </a>
            <a href="/skills">
              <li className="ml-10 text-sm uppercase  text-yellow-500 /" >Skills</li>
            </a>
            <a href="/#projects">
              <li className="ml-10 text-sm uppercase  text-yellow-500 /" >Projects</li>
            </a>
            <a href="#/contacts">
              <li className="ml-10 text-sm uppercase  text-yellow-500 /" >Contact</li>
            </a>
          </ul>
              {/* Hamburger Icon */}
              <div
            style={{ color: '#fff' }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          Navbar ? 'md:hidden fixed left-0 top-0 w-full h-screen' : ''
        }
      ></div>
      {/* sidebar */}
      <div

        className={
          Navbar
            ? 'md:hidden fixed left-0 top-0 w-3/4 h-screen bg-gray-900 z-10'
            : 'md:hidden fixed left-0 top-0 w-3/4 h-screen bg-gray-900 z-10 -left-full'
        } >
        <div className='flex justify-between items-center w-full h-16 px-3 2xl:px-16'>
          <img
            src={logo}
            className='rounded-full shadow-md shadow-gray-400 h-16 w-16'
            alt='/' />
          <div
            style={{ color: '#fff' }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineClose size={25} />
          </div>
        </div>
        <ul className='flex flex-col justify-center items-center h-full'>
            <a href="/" type=''>
              <li className="ml-10 text-sm uppercase text-yellow-500 /" >Home</li>
            </a>
            <a href="/#about">
              <li className="ml-10 text-sm uppercase  text-yellow-500 /" >About</li>
            </a>
            <a href="/skills">
              <li className="ml-10 text-sm uppercase  text-yellow-500 /" >Skills</li>
            </a>
              <a href="/#projects">
                <li className="ml-10 text-sm uppercase  text-yellow-500 /" >Projects</li>
              </a>
              <a href="#/contacts">
                <li className="ml-10 text-sm uppercase  text-yellow-500 /" >Contact</li>
              </a>
          </ul>
    </React.Fragment>
  )
}

export default Navbar;
