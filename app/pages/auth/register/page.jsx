'use client'
import Custom_button from '@/app/custom/Custom_button'
import Custom_input from '@/app/custom/Custom_input'
import Link from 'next/link'
import React ,{ useState} from 'react'

export default function page() {
    const [name, setName] = useState('') 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  return (
    <div className='container m-auto px-5'>
        <div className='flex flex-col justify-center h-screen  items-center   w-full md:w-96 mx-auto  '>
            <h1 className='text-3xl font-bold text-center'>Register</h1>
            <p className='text-center'>Welcome back! Please login to your account.</p>
             <Custom_input type={"text"} value={name} onChange={(e) => setName(e.target.value)} label={"Name"} />
             <Custom_input type={"email"} value={email} onChange={(e) => setEmail(e.target.value)} label={"Email"} />
             <Custom_input type={"password"} value={password} onChange={(e) => setPassword(e.target.value)} label={"Password"} />
             <Custom_button title="Register" />
             <div className='my-5'>
             <p className='text-center'>I have an account? <Link href="/pages/auth/login/" className='text-blue-500'>Login</Link></p>
             </div>
                
        </div>
    </div>
  )
}
