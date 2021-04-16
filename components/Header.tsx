import React from "react"
import clsx from 'clsx'

const Header = ({ isToggle, moveToAbout, moveToTeam }) => (
  <header>
  <nav  className={clsx("w-full p-5 flex items-center fixed z-2 transition-all duration-500 ease-in-out", {"bg-gray-700 bg-opacity-95 " : isToggle})} id="menu-top">
    <div className="flex items-center justify-between lg:max-w-4xl md:max-w-3xl mx-auto">
      <a className="text-3xl mr-4 py-1 text-white" href="index.html">Leocf</a>
      <button type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className="flex justify-end items-center" id="navbarDefault">
        <ul className="flex">
          <li className="text-white uppercase font-medium text-sm ml-7 hover:text-blue-500"><a className="py-2 text-blue-500" href="#home">Home</a></li>
          <li className="text-white uppercase font-medium text-sm ml-7 hover:text-blue-500"><a className="py-2"  onClick={moveToAbout}>About</a></li>
          <li className="text-white uppercase font-medium text-sm ml-7 hover:text-blue-500"><a className="py-2" onClick={moveToTeam}>Team</a></li>
          <li className="text-white uppercase font-medium text-sm ml-7 hover:text-blue-500"><a className="py-2" href="#service">Service</a></li>
          <li className="text-white uppercase font-medium text-sm ml-7 hover:text-blue-500"><a className="py-2" href="#gallery">Work</a></li>
          <li className="text-white uppercase font-medium text-sm ml-7 hover:text-blue-500"><a className="py-2" href="#portfolio">Portfolio</a></li>
          <li className="text-white uppercase font-medium text-sm ml-7 hover:text-blue-500"><a className="py-2" href="#pricing">Pricing</a></li>
          <li className="text-white uppercase font-medium text-sm ml-7 hover:text-blue-500"><a className="py-2" href="#blog">Blog</a></li>
          <li className="text-white uppercase font-medium text-sm ml-7 hover:text-blue-500"><a className="py-2" href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
</header>
)

export default Header