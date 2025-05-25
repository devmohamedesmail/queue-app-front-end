'use client'
import { AuthContext } from '@/app/context/AuthContext';
import Custom_page_title from '@/app/custom/Custom_page_title'
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'

function Employees() {
  const { t } = useTranslation();
  const {auth}=useContext(AuthContext);
  console.log(auth);
  return (
    <div>
      <Custom_page_title title={t('employees')} />
    </div>
  )
}

export default Employees