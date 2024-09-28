import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './../../assets/Logo.png'

function Footer() {

  return (
    <footer className='footer grid grid-cols-4 h-1/6 bg-red-300 px-60 py-10 box-border'>
        <div className="footer-info w-full h-full flex justify-center items-center">
            <div className="footer-logo flex justify-end items-center place-self-start">
                <img src={Logo} alt="Logo" className='w-3/5'/>
            </div>
        </div>

        <div className='footer-text place-self-center w-full h-full flex justify-center items-center place-items-center pr-10 border-solid border-r-2 border-red-950'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia facilis ratione, maiores eos hic
        </div>

        <div className="footer-social w-full h-5/6 flex flex-col justify-center items-center place-self-center gap-4">
            <div className="footer-social-1 w-full h-full flex justify-center items-center gap-4">
                <div className="img-1">
                    <img src="./../../../public/social/facebook-box-line.png" alt="" className='w-8'/>
                </div>
                <div className="img-2">
                    <img src="./../../../public/social/instagram-line.png" alt="" className='w-8'/>
                </div>
            </div>
            <div className="footer-social-2 w-full h-full flex justify-center items-center gap-4">
                <div className="img-3">
                    <img src="./../../../public/social/mail-line.png" alt="" className='w-8'/>
                </div>
                <div className="img-4">
                    <img src="./../../../public/social/twitter-x-line.png" alt="" className='w-8'/>
                </div>

            </div>
        </div>

        <div className="footer-links mt-2 w-1/2 h-5/6 flex flex-col justify-center gap-6 place-self-start">
            <div className="footer-links-1 w-full h-1/3 flex justify-between items-center">
                <NavLink
                to="/"
                className={({isActive}) => 
                    `${isActive ? "text-green-500" : "text-red-500"} text-center`
                }>
                    Home
                </NavLink>

                <NavLink 
                className={({isActive}) => 
                    `${isActive ? "text-red-500" : "text-green-500"} text-center`
                }>
                    About Us
                </NavLink>
            </div>

            <div className="footer-links-2 w-full h-1/3 flex justify-between items-center">
                <NavLink 
                className={({isActive}) => 
                    `${isActive ? "text-red-500" : "text-green-500"}`
                }>
                    Shop
                </NavLink>

                <NavLink 
                className={({isActive}) => 
                    `${isActive ? "text-red-500" : "text-green-500"}`
                }>
                    Contact Us
                </NavLink>
            </div>

        </div>

    </footer>
  )
}

export default Footer