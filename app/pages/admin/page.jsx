'use client'
import { PlaceContext } from '@/app/context/PlaceContext'
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'


function page() {
  const {t}=useTranslation();
  const {places}=useContext(PlaceContext)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
      <div className='bg-white shadow rounded-lg p-4'>
        <h2 className='text-lg font-bold'>{t('places')}</h2>
        {places ? places.length : 0}
      </div>
   
    </div>
  )
}

export default page