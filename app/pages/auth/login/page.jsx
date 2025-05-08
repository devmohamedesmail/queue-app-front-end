'use client'
import Footer from '@/app/components/Footer'
import Mobile_Dock from '@/app/components/Mobile_Dock'
import Navbar from '@/app/components/Navbar'
import Custom_button from '@/app/custom/Custom_button'
import Custom_input from '@/app/custom/Custom_input'
import Link from 'next/link'
import React, { useState } from 'react'

export default function page() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
            <Navbar />
            <div className='container m-auto px-5'>
                <div className='flex flex-col justify-center h-screen  items-center   w-full md:w-96 mx-auto  '>
                    <h1 className='text-3xl font-bold text-center'>Login</h1>
                    <p className='text-center'>Welcome back! Please login to your account.</p>

                    <Custom_input type={"email"} value={email} onChange={(e) => setEmail(e.target.value)} label={"Email"} />
                    <Custom_input type={"password"} value={password} onChange={(e) => setPassword(e.target.value)} label={"Password"} />
                    <Custom_button title="Login" />
                    <div className='my-5'>
                        <p className='text-center'>Don't have an account? <Link href="/pages/auth/register/" className='text-blue-500'>Register</Link></p>
                    </div>

                </div>
            </div>
            <Footer />
            <Mobile_Dock />
        </div>
    )
}
