import React, { useContext } from 'react'
import { api } from '../config/api'
import Link from 'next/link'
import { CiLocationArrow1 } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa";
import { PlaceContext } from '../context/PlaceContext';
import { useTranslation } from 'react-i18next';

export default function Custom_place_item({ place }) {

  const {settings} = useContext(PlaceContext)
  const { t } = useTranslation();
  return (
    <div className="overflow-hidden rounded-lg bg-base-100  shadow-sm">

      {place.image ? (
        <img
          className='w-full'
          src={`${api.baseUrl}uploads/${place.image}`}
          alt={place.nameEn} />
      ) : (
        <img
          className='w-full'
          src={`${api.baseUrl}uploads/${settings.logo}`}
          alt={place.nameEn} />
       
      )}

      <div className="flex flex-col justify-center items-center p-4">
        <h2 className="card-title text-center text-sm">{place.nameEn}</h2>
        <p className='text-center text-xs '>{place.addressEn}</p>

      </div>

      <div className='w-full mt-3 flex justify-between items-center mb-2 px-1'>
        <Link className='h-10 mx-1 rounded w-full bg-black border flex justify-center items-center font-bold text-xs text-white' href={`/pages/user/services/${place._id}`} >{t('book-turn')}</Link>
        <Link className=' bg-green-600 h-10 w-10 rounded flex justify-center items-center' href={place.locationlink} > <FaLocationArrow color='white' /> </Link>
      </div>
    </div>
  )
}
