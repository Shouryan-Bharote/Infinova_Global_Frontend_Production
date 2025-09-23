import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [icon, setIcon] = useState('menu')

  const handleClick = () => {
    setOpen(!open)
    setIcon(icon === 'menu' ? 'close' : 'menu')
  }

  return (
    <div className="outerNavDiv h-[15vh] w-[100vw] flex justify-center absolute top-0 left-0 z-50 ">
      {open ? (
        <div className="h-[100vh] w-[70vw] sm:w-[50vw] md:w-[35vw] lg:w-[25vw] bg-white menu z-50 absolute left-0 overflow-hidden onClickMenu">
          <div className="flex w-full bg-white logoDiv p-4 border-b">
            <ion-icon
              name={`${icon}-outline`}
              onClick={handleClick}
              className="close text-3xl cursor-pointer text-blue-500"
            ></ion-icon>
            <img src="/global.png" alt="" className="w-[60%] sm:w-[70%] md:w-[80%] ml-auto navbarImage" />
          </div>
          <ul className="w-full h-[85%] text-2xl sm:text-3xl font-medium flex flex-col gap-[2vh] menuList cursor-pointer px-4 py-6 bg-gray-100">
            <NavLink to="/eduventures">
              <li className="cursor-pointer text-left listItems firstItem text-gray-800 py-2" onClick={handleClick}>Eduventures</li>
            </NavLink>
            <NavLink to="/consultants">
              <li className="cursor-pointer listItems text-gray-800 py-2 " onClick={handleClick}>Consultants</li>
            </NavLink>
            <NavLink to="/technology">
              <li className="cursor-pointer listItems text-gray-800 py-2 " onClick={handleClick}>Technology</li>
            </NavLink>
            <NavLink to="/mission">
              <li className="cursor-pointer listItems text-gray-800 py-2 " onClick={handleClick}>Mission</li>
            </NavLink>
            <NavLink to="/vision">
              <li className="cursor-pointer listItems text-gray-800 py-2 " onClick={handleClick}>Vision</li>
            </NavLink>
            <NavLink to="/blog">
              <li className="cursor-pointer listItems text-gray-800 py-2 " onClick={handleClick}>Blog</li>
            </NavLink>
          </ul>
        </div>
      ) : null}

      <div className="innerNavDiv h-full w-[95%] flex justify-between items-center px-2 sm:px-4 md:px-8 ">
        <div className="menu  h-full flex items-center gap-2 sm:gap-4 w-full sm:w-[30%] md:w-[25%]">
          <ion-icon
            name={`${icon}-outline`}
            onClick={handleClick}
            className="text-3xl sm:text-4xl cursor-pointer hamburgerIcon"
          ></ion-icon>
          <NavLink to="/">
            <img
              src="/global.png"
              alt=""
              className="object-contain   md:w-[20vw] cursor-pointer globalIcon"
            />
          </NavLink>
        </div>
        <div className="navbarList hidden lg:block h-full w-[60%]">
          <ul className="flex h-full w-full items-center text-lg xl:text-xl text-white gap-[2vw] justify-center">
            <NavLink to="/about-us">
              <li className="cursor-pointer">About Us</li>
            </NavLink>
            <NavLink to="/careers">
              <li className="cursor-pointer">Careers</li>
            </NavLink>
            <NavLink to="/contact-us">
              <li className="cursor-pointer">Contact Us</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
