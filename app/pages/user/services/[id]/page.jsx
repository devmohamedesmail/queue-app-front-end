'use client'
import React, { useEffect, useState } from 'react'
import { api } from '@/app/config/api';
import axios from 'axios';
import Navbar from '@/app/components/Navbar';
import Custom_service_item from '@/app/custom/Custom_service_item';
import Footer from '@/app/components/Footer';
import Mobile_Dock from '@/app/components/Mobile_Dock';
import Service_skeleton from '@/app/components/skeletons/Service_skeleton';
import { useTranslation } from 'react-i18next';
export default function page({ params }) {
    const { id } = params;
    const [services, setServices] = useState([]);
    const { t } = useTranslation()




    const fetch_place_services = async () => {
        try {
            const response = await axios.get(`${api.baseUrl}api/v1/services/place/services/${id}`);
            setServices(response.data.services);
        } catch (err) {
            console.log("Error", err);
        }
    }


    useEffect(() => {
        fetch_place_services();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="container m-auto px-5 my-10">
                <h2 className="text-center text-xl font-bold mb-5">{t('select-your-service')}</h2>
                {services && services.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {services.map((service, index) => (
                            <Custom_service_item key={index} service={service} />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Service_skeleton />
                        <Service_skeleton />
                        <Service_skeleton />
                        <Service_skeleton />
                        <Service_skeleton />
                        <Service_skeleton />
                    </div>
                )}
            </div>
            <Footer />
            <Mobile_Dock />
        </div>
    )
}
