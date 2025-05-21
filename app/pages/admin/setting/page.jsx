'use client'
import Custom_input from '@/app/custom/Custom_input';
import Custom_page_title from '@/app/custom/Custom_page_title'
import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { PlaceContext } from '@/app/context/PlaceContext';
import Custom_button from '@/app/custom/Custom_button';
import Custom_spinner from '@/app/custom/Custom_spinner';
import axios from 'axios';
import { api } from '@/app/config/api';
import { toast } from 'react-toastify';

function SettingPage() {
  const { t } = useTranslation();
  const { settings } = useContext(PlaceContext)
  const [loading, setLoading] = useState(false)
  const [logo, setLogo] = useState(null);








  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      nameEn: settings?.nameEn || '',
      nameAr: settings?.nameAr || '',
      descriptionEn: settings?.descriptionEn || '',
      descriptionAr: settings?.descriptionAr || '',
      address: settings?.address || '',
      email: settings?.email || '',
      phone: settings?.phone || '',
      logo: settings?.logo || '',
    },
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const formData = new FormData();
        formData.append("nameEn", values.nameEn);
        formData.append("nameAr", values.nameAr);
        formData.append("descriptionEn", values.descriptionEn);
        formData.append("descriptionAr", values.descriptionAr);
        formData.append("address", values.address);
        formData.append("email", values.email);
        formData.append("phone", values.phone);
        if (logo) {
          formData.append("logo", logo);
        }

        const res = await axios.post(`${api.baseUrl}api/v1/settings/update/settings`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });


        toast.success(t('added-success'));
      } catch (error) {
        console.log(error);

      } finally {
        setLoading(false);
      }
    }
  })



  return (
    <div>
      <Custom_page_title title={t('setting')} />

      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <Custom_input label={t('name-en')} value={formik.values.nameEn} name="nameEn" onChange={formik.handleChange} />
            <Custom_input label={t('name-ar')} value={formik.values.nameAr} name="nameAr" onChange={formik.handleChange} />
            <Custom_input label={t('description-en')} value={formik.values.descriptionEn} name="descriptionEn" onChange={formik.handleChange} />
            <Custom_input label={t('description-ar')} value={formik.values.descriptionAr} name="descriptionAr" onChange={formik.handleChange} />
            <Custom_input label={t('email')} value={formik.values.email} name="email" onChange={formik.handleChange} />
            <Custom_input label={t('phone')} value={formik.values.phone} name="phone" onChange={formik.handleChange} />
            <label htmlFor="logo" className='border border-dashed p-3 flex justify-center items-center flex-col py-10 my-5'>
              {settings?.logo && (
                <img src={`${api.baseUrl}${settings.logo}`} alt="" className="w-18 h-18" />
              )}
              <input id="logo" type='file' className='hidden' onChange={(e) => setLogo(e.target.files[0])} />
              <p className=''>{t('select-image')}</p>
            </label>







          </div>
          {loading ? <Custom_spinner /> : <Custom_button type="submit" title={t('update')} />}
        </form>
      </div>
    </div>
  )
}

export default SettingPage