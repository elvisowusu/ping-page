import { useState } from 'react'
import logo from './assets/logo.svg'
import dashboard from './assets/illustration-dashboard.png'
import {BiLogoFacebook} from 'react-icons/bi'
import {BiLogoTwitter} from 'react-icons/bi'
import {FiInstagram} from 'react-icons/fi'
import './App.css'

function App() {

  return (
    <div className='flex flex-col justify-center items-center' >
      <img
        src={logo}
        alt="logo"
        className='h-4 mt-[4rem] mb-7'
      />
      <p className='text-[1.45rem]'>We are launching <span className='' >soon</span></p>
      <p className='text-sm'>Subscribe and get notified</p>
      <form className='flex flex-col'>
        <input 
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
