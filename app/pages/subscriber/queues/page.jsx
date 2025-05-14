'use client'
import Service_skeleton from '@/app/components/skeletons/Service_skeleton'
import { AuthContext } from '@/app/context/AuthContext'
import { PlaceContext } from '@/app/context/PlaceContext'
import Link from 'next/link'
import React, { useContext, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function page() {
  const [place, setPlace] = useState(null)
  const { auth } = useContext(AuthContext)
  const { places } = useContext(PlaceContext)
  const { t } = useTranslation()

  useEffect(() => {

    if (auth?.user?.user?.placeId && places?.length) {
      const place = places.find((place) => place._id === auth.user.user.placeId);
      if (place) {
        setPlace(place);
      }
      console.log("place", place)
    }
  }, [auth, places])





  return (
    <div className='container mx-auto px-5 my-10'>
      <h5 className="text-center">{t('services')}</h5>
      <div className='my-10'>
        {place && place.services && place.services.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {place.services.map((service, index) => (
              <Link 
              
               href={{
                    pathname: '/pages/subscriber/queues/queues',
                    query: { placeId: place._id, serviceId: service._id }
                }}
              
              
               key={index} className="bg-white flex flex-col justify-center items-center shadow rounded-lg p-4 mb-4 py-10">
                <h2 className="text-lg font-bold">{service.nameEn}</h2>
                <p className="text-gray-600">{service.nameEn}</p>

              </Link>
            ))}
          </div>
        ) : (<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <Service_skeleton />
          <Service_skeleton />
          <Service_skeleton />
          <Service_skeleton />
          <Service_skeleton />
          <Service_skeleton />
          <Service_skeleton />
        </div>)}
      </div>
    </div>
  )
}

export default page