import React, { useState } from 'react'

function Login({handleLogin}) {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

    const submitHandler=(e)=>{
        e.preventDefault()
        handleLogin(email,password)
        console.log('Email is ',email)
        console.log('Password is ',password)
        setEmail('')
        setPassword('')

    }




  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col item-center justify-center'>
                <input
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)

                }}
                required className='border-2 border-emerald-600 py-3 text-white outline-none bg-transparent rounded-full text-xl px-5 placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                <input
                onChange={(e)=>{
                 setPassword(e.target.value)
                }}
                value={password}
                required className='border-2 border-emerald-600 py-3 mt-3 text-white outline-none bg-transparent rounded-full py-3 text-xl px-5 placeholder:text-gray-400' type="password" placeholder='Enter password' />
                <button className='mt-5 border-none bg-emerald-600 py-3 text-white outline-none  rounded-full text-xl px-5 placeholder:text-white'>Login</button>
            </form>

        </div>
    </div>
  )
}

export default Login