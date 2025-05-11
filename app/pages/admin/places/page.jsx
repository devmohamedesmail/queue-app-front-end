'use client';
import Custom_button from '@/app/custom/Custom_button';
import Custom_input from '@/app/custom/Custom_input'
import Custom_page_title from '@/app/custom/Custom_page_title'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';



export default function page() {
  const { t } = useTranslation();
  const [nameEn, setNameEn] = useState('');
  const [nameAr, setNameAr] = useState('');
  const [addressEn, setAdressEn] = useState('');
  const [addressAr, setAdressAr] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [locationlink, setLocationlink] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [timeStart, setTimeStart] = useState('');
  const [timeClosed, setTimeClosed] = useState('');
  const [daysOfWork, setDaysOfWork] = useState('');
  const [moveTurn, setMoveTurn] = useState('');
  const [estimateTime, setEstimateTime] = useState('');
  return (
    <div>
      <Custom_page_title title="add places" />

      {/* place information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Custom_input value={nameEn} onChange={(e) => setNameEn(e.target.value)} label={t('name-en')} />
          <Custom_input value={addressEn} onChange={(e) => setAdressEn(e.target.value)} label={t('address-en')} />
          <Custom_input value={description} onChange={(e) => setDescription(e.target.value)} label={t('description')} />
        </div>
        <div>
          <Custom_input value={nameAr} onChange={(e) => setNameAr(e.target.value)} label={t('name-ar')} />
          <Custom_input value={addressAr} onChange={(e) => setAdressAr(e.target.value)} label={t('address-ar')} />
          
            <label className='flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-100 hover:border-gray-300'>
              <input className='hidden' type="file" onChange={(e) => setImage(e.target.files[0])} />
              <p>
              {t('select-image')}

              </p>
            </label>
        </div>
       
      </div>

      {/* location settings */}
      <Custom_input value={locationlink} onChange={(e) => setLocationlink(e.target.value)} label={t('location-link')} />
      <Custom_input value={lat} onChange={(e) => setLat(e.target.value)} label={t('latitude')} />
      <Custom_input value={locationlink} onChange={(e) => setLng(e.target.value)} label={t('longitude')} />
      <Custom_input value={timeStart} onChange={(e) => setTimeStart(e.target.value)} label={t('start-work')} />
      <Custom_input value={timeClosed} onChange={(e) => setTimeClosed(e.target.value)} label={t('close-work')} />
      <Custom_input value={daysOfWork} onChange={(e) => setDaysOfWork(e.target.value)} label={t('work-days')} />
      <Custom_input value={moveTurn} onChange={(e) => setMoveTurn(e.target.value)} label={t('move-turn')} />
      <Custom_input value={estimateTime} onChange={(e) => setEstimateTime(e.target.value)} label={t('estimated-time')} />






        <Custom_button title={t('save')} onClick={() => {}} />




 






    </div>
  )
}
