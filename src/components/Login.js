import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg"
        alt="logo"
        />
       </div>

        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white'>
            <h1 className='font-bold text-3xl py-4'>Sign In</h1>
            <input type='text' placeholder='Email Address' className='p-2 my-2 w-full'></input>
            <input type='password' placeholder='Password' className='p-2 my-2 w-full'></input>
            <button className='p-4 my-4 bg-red-700 w-full'>Sign In</button>
        </form>
    </div>
  )
}

export default Login