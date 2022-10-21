import React from 'react'



const Navbar = () => {
  return (
    <React.Fragment>
    <div className="fixed w-full h-32 shadow-xl" id="Navbar">
      <div className="flex justify-between items-center w-full h-full px-3 2xl:px-16" >
        <img
          src=".."
          alt="logo"
          width={100}
          height={100}
        />
          <ul className='hidden md:flex'>
            <link href="#">
              <li className="ml-10 text-sm uppercase hover:border-b-2" >Home</li>
            </link>
            <link href="#">
              <li className="ml-10 text-sm uppercase hover:border-b-2" >About</li>
            </link>
            <link href="#">
              <li className="ml-10 text-sm uppercase hover:border-b-2" >Skills</li>
            </link>
            <link href="#">
              <li className="ml-10 text-sm uppercase hover:border-b-2" >Projects</li>
            </link>
            <link href="#">
              <li className="ml-10 text-sm uppercase hover:border-b-2" >Contact</li>
            </link>
          </ul>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Navbar;
