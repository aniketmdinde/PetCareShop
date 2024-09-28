import React from 'react'
import './Navbar.css'
import Logo from './../../assets/Logo.png'

const Navbar = () => {
  return (
    <nav className="navbar-container w-full h-1/4 grid grid-cols-[10fr_1fr] place-items-center pl-32 bg-red-300">
        <div className="navbar-content grid grid-cols-[5fr_1fr_5fr] place-items-center w-5/6">
          <div className="nav-items-container-1 w-1/2 flex justify-between items-center">
            <div className="navbar-items">Home</div>
            <div className="navbar-items">About us</div>
          </div>
          <div className="nav-logo w-full h-full flex justify-center items-center">
            <img src={Logo} className="" alt="Logo" />
            {/* <h1 className='web-name'>Meows and woofs</h1> */}
          </div>
          <div className="nav-items-container-2 w-1/2 flex justify-between items-center">
            <div className="navbar-items">Contact</div>
            <div className="navbar-items">Shop now</div>
          </div>
        </div>
        <div className="nav-signin-btn flex justify-center items-center col-span-1">
          <button className="signin-btn border-2 border-black rounded-lg px-2 py-1 bg-green-400">Sign-in</button>
        </div>
      
    </nav>
  )
}

export default Navbar