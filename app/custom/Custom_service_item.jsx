import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Custom_service_item({ service }) {
    const { t } = useTranslation();
    return (
        <div className='p-2 border border-gray-300  py-5 rounded-xl hover:shadow-lg transition-all duration-300 ease-in-out'>

            <div className=' flex flex-col justify-center items-center ' >
                <p className='font-bold text-xl my-3'>{service.nameEn}</p>
                <p className='font-bold text-xl my-3'>{service.nameAr}</p>

            </div>


            <div className=' flex justify-center items-center p-2 rounded-lg mt-5'>
                <Link
                    className='bg-black text-white p-2 px-10 rounded-lg text-center font-bold  w-full'
                    href={{
                        pathname: '/pages/user/waiting',
                        query: { placeId: service.placeId, serviceId: service._id }
                    }}>{t('select-this-service')}</Link>
            </div>
        </div>
    )
}
