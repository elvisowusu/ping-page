import React from 'react'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import logo from './assets/logo.svg'
import dashboard from './assets/illustration-dashboard.png'
import {BiLogoFacebook} from 'react-icons/bi'
import {BiLogoTwitter} from 'react-icons/bi'
import {PiInstagramLogoBold} from 'react-icons/pi'
import './App.css'

function App() {
  const schema = yup.object().shape({
    email:yup
    .string()
    .email("Please provide a valid email address")
    .required(),
  })

  const {register, handleSubmit,formState:{errors}} = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit=(data)=>{
    console.log(data);
  }
  return (
    <div className='flex flex-col justify-center items-center font-LibreFranklin font-medium' >
      <img
        src={logo}
        alt="logo"
        className='h-4 mt-[4rem] mb-7'
      />
      <p className='text-[1.3rem] text-colorGray'>We are launching <span className='font-extrabold text-VeryDarkBlue' >soon!</span></p>
      <p className='text-[0.7rem] mt-2 mb-6 font-light text-VeryDarkBlue'>Subscribe and get notified</p>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
        <input
          className={`text-sm placeholder:text-sm placeholder:text-PaleBlue border border-PaleBlue rounded-2xl w-[16rem] h-9 px-4 focus:border-Colorblue ${errors.email? 'border-LightRed focus:border-LightRed placeholder:text-black placeholder:font-semibold':''} outline-none`}
          placeholder={`${errors.email? "example@email/com":"Your email address"}`}
          type="email"
          {...register("email")}
        />
        <p className='text-xs mb-2 text-LightRed italic'>{errors.email?.message}</p>
        <input
          className='bg-Colorblue text-white text-xs rounded-2xl h-9 font-semibold mb-[4rem] shadow-md shadow-PaleBlue hover:border hover:border-Colorblue hover:text-Colorblue hover:bg-white'
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
        <PiInstagramLogoBold className='rounded-full h-7 w-7 px-[0.3rem] border text-Colorblue border-PaleBlue hover:bg-Colorblue hover:text-white'/>
      </div>
      <p className='text-[0.6rem] text-colorGray mt-7'>© Copyright Ping. All rights reserved</p>
    </div>
  ) 
}

export default App
