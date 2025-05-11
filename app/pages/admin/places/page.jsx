'use client';
import { api } from '@/app/config/api';
import Custom_button from '@/app/custom/Custom_button';
import Custom_input from '@/app/custom/Custom_input'
import Custom_page_title from '@/app/custom/Custom_page_title'
import axios from 'axios';
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
  const [daysOfWork, setDaysOfWork] = useState([]);
  const [moveTurn, setMoveTurn] = useState(false);
  const [estimateTime, setEstimateTime] = useState('');





  const toggleDay = (day) => {
    setDaysOfWork((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];









  const handle_add_place = async () => {
    try {
      const formData = new FormData();
      formData.append('nameEn', nameEn);
      formData.append('nameAr', nameAr);
      formData.append('addressEn', addressEn);
      formData.append('addressAr', addressAr);
      formData.append('description', description);
      formData.append('image', image);
      formData.append('locationlink', locationlink);
      formData.append('lat', lat);
      formData.append('lng', lng);
      formData.append('timeStart', timeStart);
      formData.append('timeClosed', timeClosed);
      formData.append('daysOfWork', JSON.stringify(daysOfWork));
      formData.append('moveTurn', moveTurn.toString());
      formData.append('estimateTime', estimateTime);

      const response = await axios.post(`${api.baseUrl}api/v1/places/add/new/place`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200) {
        console.log('Place added successfully', response.data);
      } else {
        console.error('Error adding place');
      }
    } catch (error) {
      console.log(error);
    }
  }










  return (
    <div>
      <Custom_page_title title={t('create-new-place')} />




      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border">
        <input type="radio" name="my_tabs_2" className="tab flex-1" aria-label={t('place-information')} defaultChecked />
        <div className="tab-content border-base-300 bg-base-100 p-10">

          <Custom_input value={nameEn} onChange={(e) => setNameEn(e.target.value)} label={t('name-en')} />
          <Custom_input value={nameAr} onChange={(e) => setNameAr(e.target.value)} label={t('name-ar')} />

          <Custom_input value={addressEn} onChange={(e) => setAdressEn(e.target.value)} label={t('address-en')} />
          <Custom_input value={addressAr} onChange={(e) => setAdressAr(e.target.value)} label={t('address-ar')} />
          <Custom_input value={description} onChange={(e) => setDescription(e.target.value)} label={t('description')} />

          <label className='flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-100 hover:border-gray-300'>
            <input className='hidden' type="file" onChange={(e) => setImage(e.target.files[0])} />
            <p>
              {t('select-image')}

            </p>
          </label>

        </div>

        <input type="radio" name="my_tabs_2" className="tab flex-1" aria-label={t('place-location')} />
        <div className="tab-content border-base-300 bg-base-100 p-10">


          <Custom_input value={locationlink} onChange={(e) => setLocationlink(e.target.value)} label={t('location-link')} />
          <Custom_input value={lat} onChange={(e) => setLat(e.target.value)} label={t('latitude')} />
          <Custom_input value={lng} onChange={(e) => setLng(e.target.value)} label={t('longitude')} />



        </div>

        <input type="radio" name="my_tabs_2" className="tab flex-1" aria-label={t('place-settings')} />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          <Custom_input type={'time'} value={timeStart} onChange={(e) => setTimeStart(e.target.value)} label={t('start-work')} />
          <Custom_input type={'time'} value={timeClosed} onChange={(e) => setTimeClosed(e.target.value)} label={t('close-work')} />

          <div className="mb-4">
            <label className="block font-semibold mb-2">{t('work-days')}</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {weekDays.map((day) => (
                <label key={day} className="inline-flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={daysOfWork.includes(day)}
                    onChange={() => toggleDay(day)}
                    className="checkbox"
                  />
                  <span>{t(day.toLowerCase())}</span>
                </label>
              ))}
            </div>
          </div>


          <div className="flex items-center space-x-2 mb-4">
            <label className="font-semibold">{t('move-turn')}</label>
            <input
              type="checkbox"
              className="toggle"
              checked={moveTurn}
              onChange={(e) => setMoveTurn(e.target.checked)}
            />
          </div>



          <Custom_input value={estimateTime} onChange={(e) => setEstimateTime(e.target.value)} label={t('estimated-time')} />

          <Custom_button title={t('save')} onClick={handle_add_place} />

        </div>
      </div>














      {/* location settings */}








     











    </div>
  )
}
