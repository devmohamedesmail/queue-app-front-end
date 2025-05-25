'use client'
import { AuthContext } from '@/app/context/AuthContext';
import Custom_page_title from '@/app/custom/Custom_page_title'
import React, { useContext, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import axios from 'axios';
import { api } from '@/app/config/api';
import Custom_input from '@/app/custom/Custom_input';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import Custom_button from '@/app/custom/Custom_button';
import { toast } from 'react-toastify';
function Employees() {
  const { t } = useTranslation();
  const { auth } = useContext(AuthContext);
  const [employees, setEmployees] = useState([]);




  const fetch_employees_for_place = async (placeId) => {
    try {
      const res = await axios.get(`${api.baseUrl}api/v1/subscriber/users/${placeId}`)
      setEmployees(res.data.data)
      console.log(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (auth?.user?.user?.placeId) {
      fetch_employees_for_place(auth.user.user.placeId)
    }
  }, [auth])


  const fromik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required(t('name-required')),
      email: Yup.string().email(t('invalid-email')).required(t('email-required')),
      password: Yup.string().required(t('password-required')),
    }),
    onSubmit: values => {
      try {
        const res = axios.post(`${api.baseUrl}api/v1/subscriber/add/user/${auth.user.user.placeId}`, {
          name: values.name,
          email: values.email,
          password: values.password,
        })
        // Optionally, close the modal here
        document.getElementById('my_modal_3').close();
        // Refresh employee list
        fetch_employees_for_place(auth.user.user.placeId);
        toast.success(t('added-success'));
      } catch (error) {
        toast.error(t('added-failed'));
        console.log(error)
      }
    },
  });



  return (
    <div>
      <Custom_page_title title={t('employees')} />







      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()}>{t('add-employee')}</button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div className='my-5'>
            <form onSubmit={fromik.handleSubmit}>


              <Custom_input name={'name'} label={t('name')} type="text" placeholder={t('name')} value={fromik.values.name} onChange={fromik.handleChange} error={fromik.errors.name} />
              <Custom_input name={'email'} label={t('email')} type="text" placeholder={t('email')} value={fromik.values.email} onChange={fromik.handleChange} error={fromik.errors.email} />
              <Custom_input name={'password'} label={t('password')} type="text" placeholder={t('password')} value={fromik.values.password} onChange={fromik.handleChange} error={fromik.errors.password} />

              <Custom_button title={t('save')} type="submit" />
            </form>
          </div>
        </div>
      </dialog>









      <div className="mt-6 space-y-4">
        {employees.length === 0 ? (
          <div>{t('no-employees')}</div>
        ) : (
          employees.map((emp) => (
            <div key={emp._id} className="p-4 border rounded shadow flex flex-col sm:flex-row sm:items-center border-gray-400 sm:justify-between">
              <div>
                <div><strong>{t('name')}:</strong> {emp.name}</div>
                <div><strong>{t('email')}:</strong> {emp.email}</div>
                <div><strong>{t('role')}:</strong> {emp.role}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Employees