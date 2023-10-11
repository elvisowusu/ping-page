import { useState } from 'react'
import logo from './assets/logo.svg'
import dashboard from './assets/illustration-dashboard.png'
import './App.css'

function App() {

  return (
    <div className='flex flex-col justify-center items-center' >
      <img src={logo} alt="" />
      <h1>We are launching <span>soon</span></h1>
      <p>Subscribe and get notified</p>
      <form >
        <input 
          placeholder='Your email address'
          type="email"
         />
         <input className='bg-blue-600 text-white'
          value="Notify Me"
          type="submit"
           />
      </form>
      <div>
        <img src={dashboard} alt="" />
      </div>
      <div>

      </div>
      <p>Copyright Ping. All rights reserved</p>
    </div>
  )
}

export default App
