import React from 'react'
import me from '../../assets/me.jpg'



const Navbar = () => {
  return (
    <React.Fragment>
    <div className="w-full h-32 shadow-xl" id="Navbar">
      <div className="flex justify-between items-center w-full h-full px-3 2xl:px-16" >
        <img
          src={me}
          alt="logo"
          width={100}
          height={100}
        />
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
        </div>
    </div>
    </React.Fragment>
  )
}

export default Navbar;
