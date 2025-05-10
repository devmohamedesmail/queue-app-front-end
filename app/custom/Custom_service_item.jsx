import Link from 'next/link'
import React from 'react'

export default function Custom_service_item({ service }) {
    return (
        <div className='p-2 border border-gray-300  py-10 rounded-xl hover:shadow-lg transition-all duration-300 ease-in-out'>

            <div className=' flex flex-col justify-center items-center ' >
                <p className='font-bold'>{service.nameEn}</p>
                <p className='font-bold'>{service.nameAr}</p>

            </div>


         <div className=' flex justify-center items-center p-2 rounded-lg mt-5'>
         <Link
                className='bg-black text-white p-2 px-10 rounded-lg text-center  w-full'
                href={{
                    pathname: '/pages/user/waiting',
                    query: { placeId: service.placeId, serviceId: service._id }
                }}>Book Queue</Link>
         </div>
        </div>
    )
}
