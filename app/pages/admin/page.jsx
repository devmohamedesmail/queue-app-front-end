'use client'
import { PlaceContext } from '../../context/PlaceContext'
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { MdPlace } from "react-icons/md";

function page() {
  const {t}=useTranslation();
  const {places}=useContext(PlaceContext)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
      <div className='bg-white shadow rounded-lg p-4'>
        <MdPlace size={30} />
        <div className="flex justify-between items-center">
           <h2 className='text-lg font-bold'>{t('places')}</h2>
           <p>{places ? places.length : 0}</p>
        </div>
      </div>
   
    </div>
  )
}

export default page