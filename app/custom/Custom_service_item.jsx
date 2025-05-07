import React from 'react'

export default function Custom_service_item({service}) {
  return (
    <div className='p-2 border border-primary flex flex-col justify-center items-center py-10 rounded-xl' >
        <p className='font-bold'>{service.nameEn}</p>
        <p className='font-bold'>{service.nameAr}</p>
    </div>
  )
}
