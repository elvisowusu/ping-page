import { useState } from 'react'
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
      <p className='text-[1.45rem] text-colorGray'>We are launching <span className='font-black text-VeryDarkBlue' >soon!</span></p>
      <p className='text-[0.8rem] mt-2 mb-6'>Subscribe and get notified</p>
      <form className='flex flex-col'>
        <input
        className='placeholder:text-sm border border-red-300 rounded-xl' 
          placeholder='Your email address'
          type="email"
         />
        <input className='bg-Colorblue text-white'
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
