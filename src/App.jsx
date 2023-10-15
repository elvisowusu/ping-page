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
    <div className='flex flex-col justify-center items-center font-LibreFranklin font-medium'>
      <img
        src={logo}
        alt="logo"
        className='h-4 sm:h-5 md:h-7 mt-[4rem] mb-7'
      />
      <p className='text-[1.3rem] sm:text-[1.7rem] md:text-[2.5rem] text-colorGray'>We are launching <span className='font-extrabold text-VeryDarkBlue' >soon!</span></p>
      <p className='text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] mt-1 mb-6 font-light text-VeryDarkBlue'>Subscribe and get notified</p>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col sm:flex-row sm:gap-3 md:gap-2'>
        <div>
        <input
          className={`text-sm placeholder:text-sm placeholder:text-PaleBlue border border-PaleBlue rounded-3xl w-[16rem] sm:w-[18rem]  md:w-[19rem] lg:w-[22rem] h-9 md:h-12 px-4 focus:border-Colorblue ${errors.email? 'border-LightRed focus:border-LightRed placeholder:text-black placeholder:font-semibold':''} outline-none sm:py-5 sm:px-5`}
          placeholder={`${errors.email? "example@email/com":"Your email address"}`}
          type="email"
          {...register("email")}
        />
        <p className='text-xs mb-2 text-LightRed italic text-left pl-5'>{errors.email?.message}</p>
        </div>
        <input
          className='cursor-pointer bg-Colorblue text-white text-xs rounded-3xl h-9 sm:h-10 md:h-12 font-semibold mb-[4rem] sm:w-[10rem] lg:w-[11rem] shadow-md md:shadow-lg lg:shadow-xl shadow-PaleBlue hover:border hover:border-Colorblue hover:text-Colorblue hover:bg-white sm:px-6 md:px-11'
          value="Notify Me"
          type="submit"
        />
      </form>
      <div className='w-[18rem] sm:w-[29rem] lg:w-[36rem]'>
        <img src={dashboard} alt="" />
      </div>
      <div className='flex gap-2 lg:gap-3 mt-[5rem]'>
        <BiLogoFacebook className='rounded-full h-7 w-7 px-[0.2rem] border text-Colorblue border-PaleBlue hover:bg-Colorblue hover:text-white cursor-pointer'/>
        <BiLogoTwitter className='rounded-full h-7 w-7 px-[0.3rem] border text-Colorblue border-PaleBlue hover:bg-Colorblue hover:text-white cursor-pointer'/>
        <PiInstagramLogoBold className='rounded-full h-7 w-7 px-[0.3rem] border text-Colorblue border-PaleBlue hover:bg-Colorblue hover:text-white cursor-pointer'/>
      </div>
      <p className='text-[0.6rem] text-colorGray mt-6 cursor-pointer'>© Copyright Ping. All rights reserved</p>
    </div>
  ) 
}

export default App
