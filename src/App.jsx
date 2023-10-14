import React from 'react'
import { useForm } from 'react-hook-form'
import logo from './assets/logo.svg'
import dashboard from './assets/illustration-dashboard.png'
import {BiLogoFacebook} from 'react-icons/bi'
import {BiLogoTwitter} from 'react-icons/bi'
import {FiInstagram} from 'react-icons/fi'
import './App.css'

function App() {

const {register, handleSubmit,errors} = useForm()

  return (
    <div className='flex flex-col justify-center items-center font-LibreFranklin font-medium' >
      <img
        src={logo}
        alt="logo"
        className='h-4 mt-[4rem] mb-7'
      />
      <p className='text-[1.3rem] text-colorGray'>We are launching <span className='font-extrabold text-VeryDarkBlue' >soon!</span></p>
      <p className='text-[0.7rem] mt-2 mb-6 font-light text-VeryDarkBlue'>Subscribe and get notified</p>
      <form className='flex flex-col'>
        <input
          className='placeholder:text-sm placeholder:text-PaleBlue border border-PaleBlue rounded-2xl w-[16rem] h-9 px-4 mb-2 focus:border-Colorblue outline-none' 
          placeholder='Your email address'
          type="email"
         />
        <input
          className='bg-Colorblue text-white text-xs rounded-2xl h-9 font-semibold mb-[4rem] shadow-md shadow-PaleBlue'
          value="Notify Me"
          type="submit"
        />
      </form>
      <div>
        <img src={dashboard} alt="" />
      </div>
      <div className='flex gap-2 mt-[6rem]'>
        <BiLogoFacebook className='rounded-full h-7 w-7 px-[0.2rem] border text-Colorblue border-PaleBlue hover:bg-Colorblue hover:text-white'/>
        <BiLogoTwitter className='rounded-full h-7 w-7 px-[0.3rem] border text-Colorblue border-PaleBlue hover:bg-Colorblue hover:text-white'/>
        <FiInstagram className='rounded-full h-7 w-7 px-[0.5rem] border text-Colorblue border-PaleBlue hover:bg-Colorblue hover:text-white'/>
      </div>
      <p className='text-[0.6rem] text-colorGray mt-7'>© Copyright Ping. All rights reserved</p>
    </div>
  ) 
}

export default App
