import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Custom_service_item({ service , index}) {
    const { t, i18n } = useTranslation();
    return (
        <div
            className="bg-white border border-gray-100 shadow-xl rounded-2xl p-6 flex flex-col items-center transition-transform hover:scale-[1.03] hover:shadow-2xl duration-300"

        >
            <div className='mb-4'>
                <span className='text-4xl font-extrabold bg-second text-white rounded-full w-12 h-12 flex items-center justify-center'>{index+1}</span>
            </div>
            <div className="flex flex-col items-center w-full mb-4">
                <span className="text-2xl font-extrabold mb-1 text-center truncate w-full">
                    {i18n.language === 'ar' ? service.nameAr : service.nameEn}
                </span>
                {(service.descriptionEn || service.descriptionAr) && (
                    <span className="text-sm text-center w-full mb-2" style={{ color: 'var(--color-second)' }}>
                        {i18n.language === 'ar' ? service.descriptionAr : service.descriptionEn}
                    </span>
                )}
            </div>
            <div className="flex justify-center items-center w-full mt-4">
                <Link
                    className="px-8 py-4 rounded-lg bg-second text-white font-bold w-full text-center shadow transition border-none"
                    
                    href={{
                        pathname: '/pages/user/waiting',
                        query: { placeId: service.placeId, serviceId: service._id }
                    }}
                >
                    {t('select-this-service', 'Select this service')}
                </Link>
            </div>
        </div>
    )
}
