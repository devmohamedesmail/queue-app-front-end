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
      const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const { auth, setAuth, login, register, logout } = useContext(AuthContext)
    const [activeTab, setActiveTab] = useState('login')




    const handle_login_user = async () => {
        try {
            setLoading(true)
            const res = await login(email, password)
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


      const handle_register_user = async (e) => {
    
        try {
          setLoading(true)
          const res = await register(name, email, password)
          if (res.status === 201) {
            toast.success('✅ Registration successful');
    
            setName('')
            setEmail('')
            setPassword('')
          }
          setLoading(false)
    
        } catch (error) {
          setLoading(false)
    
        } finally {
          setLoading(false)
        }
    
    
      }
    





    return (
        <div>
            <Navbar />
            <div className='container m-auto px-5'>



                <div className='w-full md:1/2 lg:w-1/3 m-auto mt-10 p-5  shadow-lg rounded-lg'>
                    <div className='flex justify-center gap-5 my-10 bg-gray-200 py-2 px-2 rounded-lg'>
                        <button className={`px-5 py-2 flex-1 transition-colors ease-in-out duration-500 rounded-lg ${activeTab === 'login' ? 'bg-black text-white' : 'bg-white text-black'}`} onClick={() => setActiveTab('login')}>Login</button>
                        <button className={`px-5 py-2 flex-1 transition-colors ease-in-out duration-500 rounded-lg ${activeTab === 'register' ? 'bg-black text-white' : 'bg-white text-black'}`} onClick={() => setActiveTab('register')}>register</button>
                    </div>

                    <div className="text-center text-2xl font-semibold">
                        {activeTab === 'login' &&
                            <div className='  '>
                                <h1 className='text-xl font-bold text-center mb-3'>Login</h1>
                                <Custom_input type={"email"} value={email} onChange={(e) => setEmail(e.target.value)} label={"Email"} />
                                <Custom_input type={"password"} value={password} onChange={(e) => setPassword(e.target.value)} label={"Password"} />

                                {loading ? <Custom_spinner /> : <Custom_button title="Login" onClick={handle_login_user} />}
                               
                            </div>}
                        {activeTab === 'register' && 
                        
                        <div>
                                  <h1 className='text-xl font-bold text-center mb-3'>Register</h1>
                                  <Custom_input type={"text"} value={name} onChange={(e) => setName(e.target.value)} label={"Name"} />
                                  <Custom_input type={"email"} value={email} onChange={(e) => setEmail(e.target.value)} label={"Email"} />
                                  <Custom_input type={"password"} value={password} onChange={(e) => setPassword(e.target.value)} label={"Password"} />
                        
                        
                                  {loading ? <span className="loading loading-spinner loading-xs"></span> : <Custom_button title="Register" onClick={handle_register_user} />}    
                        </div>}
                    </div>

                </div>








            </div>
            <Footer />
            <Mobile_Dock />
        </div>
    )
}
