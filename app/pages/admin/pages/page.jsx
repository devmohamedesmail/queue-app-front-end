'use client'
export const dynamic = 'force-dynamic';


import { DataContext } from '@/app/context/DataContext'
import Custom_page_title from '@/app/custom/Custom_page_title'
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'

export default function page() {
    const { t } = useTranslation()
    const { pages } = useContext(DataContext)
    return (
        <div>
            <Custom_page_title title={t('pages')} />
            {pages && pages.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
                    {pages.map((page) => (
                        <div key={page._id} className='bg-white shadow rounded-lg p-4'>
                            
                            <div className="flex justify-between items-center">
                                <h2 className='text-lg font-bold'>{page.title_en}</h2>
                                <p>{page.title_ar}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className='flex items-center justify-center h-screen'>
                    <h1 className='text-2xl font-bold'>{t('no_pages')}</h1>
                </div>
            )}
        </div>
    )
}
