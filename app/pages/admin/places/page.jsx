'use client';
import { api } from '@/app/config/api';
import Custom_button from '@/app/custom/Custom_button';
import Custom_input from '@/app/custom/Custom_input'
import Custom_page_title from '@/app/custom/Custom_page_title'
import axios from 'axios';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';


export default function page() {
  const { t } = useTranslation();
  const [image, setImage] = useState('');
  const [daysOfWork, setDaysOfWork] = useState([]);






  const toggleDay = (day) => {
    setDaysOfWork((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


  const formik = useFormik({
    initialValues: {
      nameEn: '',
      nameAr: '',
      addressEn: '',
      addressAr: '',
      description: '',
      locationlink: '',
      lat: '',
      lng: '',
      timeStart: '',
      timeClosed: '',
      moveTurn: false,
      estimateTime: '',
    },
    validationSchema: Yup.object({
      nameEn: Yup.string().required(t('required')),
      nameAr: Yup.string().required(t('required')),
      addressEn: Yup.string().required(t('required')),
      addressAr: Yup.string().required(t('required')),
      description: Yup.string().required(t('required')),
      lat: Yup.string().required(t('required')),
      lng: Yup.string().required(t('required')),
      timeStart: Yup.string().required(t('required')),
      timeClosed: Yup.string().required(t('required')),
      estimateTime: Yup.string().required(t('required')),
    }),
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
          formData.append(key, value);
        });
        formData.append('daysOfWork', JSON.stringify(daysOfWork));
        if (image) {
          formData.append('image', image);
        }

        const response = await axios.post(`${api.baseUrl}api/v1/places/add/new/place`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.status === 200) {
          console.log('Place added successfully', response.data);
        } else {
          console.error('Error adding place');
        }
      } catch (error) {
        console.error(error);
      }
    },
  });





  return (
    <div>
      <Custom_page_title title={t('create-new-place')} />


      <div className='flex justify-end items-center mb-5'>
        <Link href="/pages/admin/places/show" className='btn btn-primary'>{t('show-places')}</Link>
      </div>



      <form onSubmit={formik.handleSubmit}>
        <div className="tabs tabs-border">
          {/* Tab 1 - Place Info */}
          <input type="radio" name="my_tabs_2" className="tab flex-1" aria-label={t('place-information')} defaultChecked />
          <div className="tab-content border-base-300 bg-base-100 p-10">
            <Custom_input
              label={t('name-en')}
              name="nameEn"
              value={formik.values.nameEn}
              onChange={formik.handleChange}
              error={formik.touched.nameEn && formik.errors.nameEn}
            />
            <Custom_input
              label={t('name-ar')}
              name="nameAr"
              value={formik.values.nameAr}
              onChange={formik.handleChange}
              error={formik.touched.nameAr && formik.errors.nameAr}
            />
            <Custom_input
              label={t('address-en')}
              name="addressEn"
              value={formik.values.addressEn}
              onChange={formik.handleChange}
              error={formik.touched.addressEn && formik.errors.addressEn}
            />
            <Custom_input
              label={t('address-ar')}
              name="addressAr"
              value={formik.values.addressAr}
              onChange={formik.handleChange}
              error={formik.touched.addressAr && formik.errors.addressAr}
            />
            <Custom_input
              label={t('description')}
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={formik.touched.description && formik.errors.description}
            />
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-100 hover:border-gray-300">
              <input
                type="file"
                hidden
                onChange={(e) => setImage(e.target.files?.[0] || null)}
              />
              <p>{t('select-image')}</p>
            </label>
          </div>

          {/* Tab 2 - Location */}
          <input type="radio" name="my_tabs_2" className="tab flex-1" aria-label={t('place-location')} />
          <div className="tab-content border-base-300 bg-base-100 p-10">
            <Custom_input
              label={t('location-link')}
              name="locationlink"
              value={formik.values.locationlink}
              onChange={formik.handleChange}
            />
            <Custom_input
              label={t('latitude')}
              name="lat"
              value={formik.values.lat}
              onChange={formik.handleChange}
              error={formik.touched.lat && formik.errors.lat}
            />
            <Custom_input
              label={t('longitude')}
              name="lng"
              value={formik.values.lng}
              onChange={formik.handleChange}
              error={formik.touched.lng && formik.errors.lng}
            />
          </div>

          {/* Tab 3 - Settings */}
          <input type="radio" name="my_tabs_2" className="tab flex-1" aria-label={t('place-settings')} />
          <div className="tab-content border-base-300 bg-base-100 p-10">
            <Custom_input
              type="time"
              label={t('start-work')}
              name="timeStart"
              value={formik.values.timeStart}
              onChange={formik.handleChange}
              error={formik.touched.timeStart && formik.errors.timeStart}
            />
            <Custom_input
              type="time"
              label={t('close-work')}
              name="timeClosed"
              value={formik.values.timeClosed}
              onChange={formik.handleChange}
              error={formik.touched.timeClosed && formik.errors.timeClosed}
            />
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
                name="moveTurn"
                checked={formik.values.moveTurn}
                onChange={formik.handleChange}
              />
            </div>
            <Custom_input
              label={t('estimated-time')}
              name="estimateTime"
              value={formik.values.estimateTime}
              onChange={formik.handleChange}
              error={formik.touched.estimateTime && formik.errors.estimateTime}
            />
            <Custom_button title={t('save')} type="submit" />
          </div>
        </div>
      </form>






    </div>
  )
}
