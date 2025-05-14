'use client'
import Footer from '@/app/components/Footer'
import Mobile_Dock from '@/app/components/Mobile_Dock'
import Navbar from '@/app/components/Navbar'
import { AuthContext } from '@/app/context/AuthContext'
import React, { useContext } from 'react'

function page() {
  const { auth } = useContext(AuthContext)
  return (
    <div>
      <Navbar />


        <div>
         {auth?.user?.user?.name}
         {auth?.user?.user?.email}
        </div>


      <Footer />
      <Mobile_Dock />
    </div>
  )
}

export default page