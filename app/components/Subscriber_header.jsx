'use client'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaBars } from "react-icons/fa";

function Subscriber_header() {
    const { t } = useTranslation();
    return (
        <div className='flex justify-between items-center bg-gray-200 p-4'>
            <div className='flex-1'>
                <Link className='btn btn-primary mx-1 shadow-none' href="/pages/subscriber/queues" >{t('queues')}</Link>
                <Link className='btn btn-primary mx-1 shadow-none' href="/pages/subscriber/setting" >{t('setting')}</Link>
                <Link className='btn btn-primary mx-1 shadow-none' href="/pages/subscriber/statistics" >{t('statistics')}</Link>
            </div>


            <div className="drawer w-12 bg-blue-500">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="btn btn-primary drawer-button"><FaBars /></label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        <Link className='btn btn-primary mx-1 my-1 shadow-none' href="/pages/subscriber/queues" >{t('queues')}</Link>
                        <Link className='btn btn-primary mx-1 my-1 shadow-none' href="/pages/subscriber/setting" >{t('setting')}</Link>
                        <Link className='btn btn-primary mx-1 my-1 shadow-none' href="/pages/subscriber/statistics" >{t('statistics')}</Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Subscriber_header