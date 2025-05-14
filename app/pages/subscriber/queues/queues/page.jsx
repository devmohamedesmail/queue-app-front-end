'use client'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { api } from '@/app/config/api';
import axios from 'axios';
import Service_skeleton from '@/app/components/skeletons/Service_skeleton';
import { FaPlay } from "react-icons/fa";
import { TiCancel } from "react-icons/ti";

function page({ searchParams }) {
  const { t } = useTranslation();
  const [waitingList, setWaitingList] = useState(null)


  const fetch_all_waiting_list = async () => {
    try {
      const response = await axios.get(`${api.baseUrl}api/v1/queues/all/queue/${searchParams.placeId}/${searchParams.serviceId}`)
      console.log(response.data)
      setWaitingList(response.data)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    fetch_all_waiting_list()
  }, [])


const handle_active_queue = (item) =>{
  const audio = new Audio('/assets/sound.mp3') 
    audio.play()
}




  return (
    <div className="my-10">
      <h4 className="text-center font-bold text-xl">{t('waiting-list')}</h4>

      <div>
        {waitingList === null ? (
          <div className="grid grid-cols-1">
            <Service_skeleton />
            <Service_skeleton />
            <Service_skeleton />
            <Service_skeleton />
            <Service_skeleton />
          </div>
        ) : waitingList.length === 0 ? (
          <p className="text-center text-gray-500">{t('no-queues')}</p>
        ) : (
          waitingList.map((item, index) => (
            <div key={index} className="bg-white shadow p-4 rounded mb-3 flex justify-between items-center">
              <div className="flex flex-col items-center">
                <h5 className="font-bold"> Queue # - {item.queue}</h5>
                <p className={`${item.status === 'waiting' ? 'text-green-600' : 'text-red-600'}`}>{t('status')}: {item.status}</p>
              </div>
              <div className="flex items-center">
                <button onClick={() => handle_active_queue(item)} className='btn btn-gost bg-green-600'><FaPlay color='white' /></button>
                <button className='btn btn-gost bg-red-600'><TiCancel color="white" /></button>

              </div>
            </div>
          ))
        )}
      </div>

    </div>
  )
}

export default page