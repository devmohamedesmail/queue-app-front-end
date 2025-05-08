import Link from 'next/link'
import React from 'react'

export default function Custom_service_item({ service }) {
    return (
        <div className='p-2 border border-primary  py-10 rounded-xl'>

            <div className=' flex flex-col justify-center items-center ' >
                <p className='font-bold'>{service.nameEn}</p>
                <p className='font-bold'>{service.nameAr}</p>

            </div>
            <div className='flex justify-between items-center'>
                <p>clients </p>
                <p>100</p>
            </div>
            <div className='flex justify-between items-center'>
                <p>Estimating Time </p>
                <p>100</p>
                <p>{service.placeId}</p>
            </div>
            <Link href={{
                pathname: '/pages/user/waiting',
                query: { placeId: service.placeId, serviceId: service._id }
            }}>Book Queue</Link>
        </div>
    )
}
