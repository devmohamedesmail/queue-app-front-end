'use client'
import Footer from '@/app/components/Footer'
import Mobile_Dock from '@/app/components/Mobile_Dock'
import Navbar from '@/app/components/Navbar'
import { api } from '@/app/config/api'
import { AuthContext } from '@/app/context/AuthContext'
import Custom_spinner from '@/app/custom/Custom_spinner'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

export default function page({ searchParams }) {
  const { auth } = useContext(AuthContext)
  const router = useRouter();
  const [loading, setLoading] = useState(false)
  const [waiting_list,setWaiting_list]=useState(null)
const {t}=useTranslation()



  const handle_book_now = async () => {

    try {
      if (auth) {
        try {
          setLoading(true)
          const res = await axios.post(`${api.baseUrl}api/v1/queues/book/new/queue/${auth.user.user._id}/${searchParams.placeId}/${searchParams.serviceId}`)
          console.log("res", res)
          if (res.status === 201) {
            setLoading(false)
            toast.success(t('queue-booked-success'))

          }
          setLoading(false)
        } catch (error) {
          console.log(error)
          setLoading(false)
        } finally {
          setLoading(false)
        }

      } else {
        router.push('/pages/auth/login')
      }
    } catch (error) {
      console.log(error)
    }

  }



  const fetch_waiting_queues = async () =>{
    try {
      const response = await axios.get(`${api.baseUrl}api/v1/queues/all/queue/${searchParams.placeId}/${searchParams.serviceId}`)
       setWaiting_list(response.data)
       console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }


useEffect(()=>{
  fetch_waiting_queues()
},[])





  return (
    <div>
      <Navbar />


      <div className='container m-auto px-5 flex flex-col justify-center items-center gap-5 py-10'>
        <div className='card w-full bg-base-100 shadow-xl p-3'>
          <div className='flex flex-col justify-between items-center'>
            <h1 className='text-primary font-bold text-3xl'>Waiting</h1>
            <h1>{waiting_list ? waiting_list.length : t('no-waiting')}</h1>
          </div>
          <div className='flex justify-between items-center my-10'>
            <p>Estaimating</p>
            <p>1000</p>
          </div>
          <div className='flex justify-center items-center my-10'>

            {loading ? <Custom_spinner /> : <button onClick={() => handle_book_now()} className='btn btn-neutral w-full'>Book now</button>}
          </div>
        </div>
      </div>



      <Footer />
      <Mobile_Dock />

    </div>
  )
}
