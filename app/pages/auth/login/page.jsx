'use client'
import Footer from '@/app/components/Footer'
import Mobile_Dock from '@/app/components/Mobile_Dock'
import Navbar from '@/app/components/Navbar'
import { AuthContext } from '@/app/context/AuthContext'
import Custom_button from '@/app/custom/Custom_button'
import Custom_input from '@/app/custom/Custom_input'
import Custom_spinner from '@/app/custom/Custom_spinner'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
export default function page() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading,setLoading] = useState(false)
    const {auth, setAuth, login, register, logout}=useContext(AuthContext)




    const handle_login_user = async () => {
        try {
            setLoading(true)
            const res = await login( email, password)
            console.log(res)
            if (res.status === 200) {
                toast.success('✅ Registration successful');
                setEmail('')
                setPassword('')
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }






    return (
        <div>
            <Navbar />
            <div className='container m-auto px-5'>
                <div className='flex flex-col justify-center h-screen  items-center   w-full md:w-96 mx-auto  '>
                    <h1 className='text-3xl font-bold text-center mb-3'>Login</h1>
                    <p className='text-center'>Welcome back! Please login to your account.</p>

                    <Custom_input type={"email"} value={email} onChange={(e) => setEmail(e.target.value)} label={"Email"} />
                    <Custom_input type={"password"} value={password} onChange={(e) => setPassword(e.target.value)} label={"Password"} />
                
                    {loading ? <Custom_spinner /> : <Custom_button title="Login" onClick={handle_login_user} />}
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
