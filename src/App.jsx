import React from 'react'
import logo from './assets/logo.svg'
import dashboard from './assets/illustration-dashboard.png'
import {BiLogoFacebook} from 'react-icons/bi'
import {BiLogoTwitter} from 'react-icons/bi'
import {FiInstagram} from 'react-icons/fi'
import './App.css'

function App() {

  return (
    <div className='flex flex-col justify-center items-center font-LibreFranklin font-medium' >
      <img
        src={logo}
        alt="logo"
        className='h-4 mt-[4rem] mb-7'
      />
      <p className='text-[1.3rem] text-colorGray'>We are launching <span className='font-black text-VeryDarkBlue' >soon!</span></p>
      <p className='text-[0.7rem] mt-2 mb-6 font-medium'>Subscribe and get notified</p>
      <form className='flex flex-col'>
        <input
        className='placeholder:text-sm placeholder:text-PaleBlue border border-PaleBlue rounded-2xl w-[16rem] h-9 px-4 mb-2 focus:border-Colorblue outline-none' 
          placeholder='Your email address'
          type="email"
         />
        <input className='bg-Colorblue text-white text-xs rounded-2xl h-9 font-semibold'
          value="Notify Me"
          type="submit"
           />
      </form>
      <div>
        <img src={dashboard} alt="" />
      </div>
      <div className='flex'>
        <BiLogoFacebook className='rounded-full h-7 w-7 px-[0.4rem] border border-blue-700'/>
        <BiLogoTwitter className='rounded-full h-7 w-7 px-[0.4rem]'/>
        <FiInstagram className='rounded-full h-7 w-7 px-[0.5rem]'/>
      </div>
      <p className='text-[0.6rem]'>Copyright Ping. All rights reserved</p>
    </div>
  ) 
}

export default App
