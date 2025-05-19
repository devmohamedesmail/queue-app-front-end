import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Custom_page_title({ title }) {
  const {t,i18n}=useTranslation()
  return (
    <div className={`flex items-center  gap-2 mb-4 ${i18n.language == 'ar' ? 'justify-end' : 'justify-start' } `}>
        <h6 className='font-bold text-xl '>{title}</h6>
    </div>
  )
}
