import React from 'react'
import { api } from '../config/api'

export default function Custom_place_item({place}) {
  return (
    <div className="overflow-hidden rounded-lg bg-base-100  shadow-sm">
      <img
          className='w-full'
          src={`${api.baseUrl}uploads/${place.image}`}
          alt={place.nameEn} />

      <div className="flex flex-col justify-center items-center p-4">
        <h2 className="card-title text-center">{place.nameEn}</h2>
        <p className='text-center'>{place.addressEn}</p>
       
      </div>
    </div>
  )
}
