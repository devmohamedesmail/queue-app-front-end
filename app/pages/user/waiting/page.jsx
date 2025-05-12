'use client'
import Footer from '@/app/components/Footer'
import Mobile_Dock from '@/app/components/Mobile_Dock'
import Navbar from '@/app/components/Navbar'
import React from 'react'

export default function page({ searchParams }) {
  console.log("searchParams", searchParams.placeId)
  console.log("searchParams", searchParams.serviceId)
  return (
    <div>
      <Navbar />


      <div className='container m-auto px-5 flex flex-col justify-center items-center gap-5 py-10'>
        <div className='card w-full bg-base-100 shadow-xl p-3'>
          <div className='flex flex-col justify-between items-center'>
            <h1 className='text-primary font-bold text-3xl'>Waiting</h1>
            <h1>10</h1>
          </div>
          <div className='flex justify-between items-center my-10'>
            <p>Estaimating</p>
            <p>1000</p>
          </div>
          <div className='flex justify-center items-center my-10'>
            <button className='btn btn-neutral w-full'>Book now</button>
          </div>
        </div>
      </div>



      <Footer />
      <Mobile_Dock />

    </div>
  )
}
