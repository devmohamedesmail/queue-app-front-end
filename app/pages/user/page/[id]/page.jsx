'use client'

import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '@/app/context/DataContext'
import { useTranslation } from 'react-i18next'
import parse from 'html-react-parser'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import Mobile_Dock from '@/app/components/Mobile_Dock'
import Loader from '@/app/components/Loader'


function Page({ params }) {
    const { pages } = useContext(DataContext);
    const { i18n } = useTranslation();
    const [page, setPage] = useState(null)

    // const page = pages.find(p => p._id === params.id);


    useEffect(() => {
        if (pages && params.id) {
            const found = pages.find(p => p._id === params.id);
            setPage(found || null);
        }
    }, [])







    return (



        <div>
            <Navbar />
            {page && pages ? (
                <div className="container m-auto">
                    <h5 className='bg-gray-100 text-center font-bold text-2xl py-10'> {i18n.language === "ar" ? page.title_ar : page.title_en}</h5>
                    
                    {
                       i18n.language === "ar" ? <p className='text-right '>{parse(page.content_ar)}</p> : <p>{parse(page.content_en)}</p>
                    }
                </div>
            ) : (
                <p>loading....</p>
            )}


            <Footer />
            <Mobile_Dock />
        </div>



    );
}

export default Page;
