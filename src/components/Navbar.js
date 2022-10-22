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
              <li className="ml-10 text-sm uppercase /" >Home</li>
            </a>
            <a href="/">
              <li className="ml-10 text-sm uppercase /" >About</li>
            </a>
            <a href="/">
              <li className="ml-10 text-sm uppercase /" >Skills</li>
            </a>
            <a href="/">
              <li className="ml-10 text-sm uppercase /" >Projects</li>
            </a>
            <a href="/">
              <li className="ml-10 text-sm uppercase /" >Contact</li>
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
          Navbar ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      ></div>
    </React.Fragment>
  )
}

export default Navbar;
