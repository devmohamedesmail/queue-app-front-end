'use client'

import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '@/app/context/DataContext'
import { useTranslation } from 'react-i18next'
import parse from 'html-react-parser'

function Page({ params }) {
    const { pages } = useContext(DataContext);
    const [page, setPage] = useState(null);
    const { i18n } = useTranslation();

    const [isClient, setIsClient] = useState(false);

    // Ensure this runs only on client to avoid hydration mismatch
    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient && pages && params.id) {
            const found = pages.find(p => p._id === params.id);
            setPage(found || null);
        }
    }, [isClient, pages, params.id]);

    if (!isClient) return null; // avoid mismatch
    if (!page) return <div className="text-center p-10">Page not found</div>;

    const title = i18n.language === 'ar' ? page.title_ar : page.title_en;
    const content = i18n.language === 'ar' ? page.content_ar : page.content_en;

    return (
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <div className="prose max-w-none">
                {parse(content || '')}
            </div>
        </div>
    );
}

export default Page;
