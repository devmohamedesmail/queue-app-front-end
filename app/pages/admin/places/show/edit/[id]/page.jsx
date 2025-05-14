'use client'
import React, { useContext, useEffect, useState } from 'react'
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import Custom_input from '@/app/custom/Custom_input';
import Custom_button from '@/app/custom/Custom_button';
import Custom_page_title from '@/app/custom/Custom_page_title';
import Link from 'next/link';
import { FaPlus } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { PlaceContext } from '@/app/context/PlaceContext';


function page({ params }) {
    const { t } = useTranslation();
    const [image, setImage] = useState('');
    const [daysOfWork, setDaysOfWork] = useState([]);
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    const { places } = useContext(PlaceContext)
    const [place,setPlace]=useState(null)





    useEffect(() => {
        if (places && params.id) {
            const matchedPlace = places.find(p => p._id === params.id);
            setPlace(matchedPlace)
        }
    }, [places, params.id])







    const toggleDay = (day) => {
        setDaysOfWork((prev) =>
            prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
        );
    };

    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            nameEn: place?.nameEn || '',
            nameAr: place?.nameAr || '',    
            addressEn: place?.addressEn || '',
            addressAr: place?.addressAr || '',
            description: place?.description || '',
            locationlink: place?.locationlink || '',
            lat: place?.location?.lat,
            lng: place?.location?.lng,
            timeStart: place?.timeStart || '',
            timeClosed: place?.timeClosed || '',
            moveTurn: false,
            estimateTime: place?.estimateTime || '',
            serviceTitleEn: '',
            serviceTitleAr: '',
            serviceEstimatedTime: '',
        },
        validationSchema: Yup.object({
            nameEn: Yup.string().required(t('required')),
            nameAr: Yup.string().required(t('required')),
            addressEn: Yup.string().required(t('required')),
            addressAr: Yup.string().required(t('required')),
            description: Yup.string().required(t('required')),
            lat: Yup.string().required(t('required')),
            lng: Yup.string().required(t('required')),
            timeStart: Yup.string().required(t('required')),
            timeClosed: Yup.string().required(t('required')),
            estimateTime: Yup.string().required(t('required')),
        }),
        onSubmit: async (values) => {
            try {
                setLoading(true)
                const formData = new FormData();
                Object.entries(values).forEach(([key, value]) => {
                    formData.append(key, value);
                });
                formData.append('daysOfWork', JSON.stringify(daysOfWork));
                formData.append('services', JSON.stringify(services));
                if (image) {
                    formData.append('image', image);
                }

                const formDataObject = {};
                formData.forEach((value, key) => {
                    formDataObject[key] = value;
                });
                console.log('Form Data:', formDataObject);


                const response = await axios.post(`${api.baseUrl}api/v1/places/add/new/place`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                setLoading(false)
                if (response.status === 200) {
                    console.log('Place added successfully', response.data);
                    toast.success(t('added-success'));
                } else {
                    console.error('Error adding place');
                    toast.error(t('error'));
                }
            } catch (error) {
                setLoading(false)
                toast.error(t('error'));
            } finally {
                setLoading(false)
            }
        },
    });

    const handleAddService = () => {
        const { serviceTitleEn, serviceTitleAr, serviceEstimatedTime } = formik.values;


        if (!serviceTitleEn || !serviceTitleAr || !serviceEstimatedTime) return;

        setServices((prev) => [
            ...prev,
            {
                titleEn: serviceTitleEn,
                titleAr: serviceTitleAr,
                estimatedTime: serviceEstimatedTime,
            },
        ]);

        // Clear service fields
        formik.setFieldValue('serviceTitleEn', '');
        formik.setFieldValue('serviceTitleAr', '');
        formik.setFieldValue('serviceEstimatedTime', '');
    };

    const handleRemoveService = (index) => {
        setServices((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div>
            <Custom_page_title title={t('edit-place')} />

            <div className='flex justify-end items-center mb-5'>
                <Link href="/pages/admin/places/show" className='btn btn-primary'>{t('show-places')}</Link>
            </div>


            <form onSubmit={formik.handleSubmit}>
                <div className="tabs tabs-border">
                    {/* Tab 1 - Place Info */}
                    <input type="radio" name="my_tabs_2" className="tab flex-1" aria-label={t('place-information')} defaultChecked />
                    <div className="tab-content border-base-300 bg-base-100 p-10">
                        <Custom_input
                            label={t('name-en')}
                            name="nameEn"
                            value={formik.values.nameEn}
                            onChange={formik.handleChange}
                            error={formik.touched.nameEn && formik.errors.nameEn}
                        />
                        <Custom_input
                            label={t('name-ar')}
                            name="nameAr"
                            value={formik.values.nameAr}
                            onChange={formik.handleChange}
                            error={formik.touched.nameAr && formik.errors.nameAr}
                        />
                        <Custom_input
                            label={t('address-en')}
                            name="addressEn"
                            value={formik.values.addressEn}
                            onChange={formik.handleChange}
                            error={formik.touched.addressEn && formik.errors.addressEn}
                        />
                        <Custom_input
                            label={t('address-ar')}
                            name="addressAr"
                            value={formik.values.addressAr}
                            onChange={formik.handleChange}
                            error={formik.touched.addressAr && formik.errors.addressAr}
                        />
                        <Custom_input
                            label={t('description')}
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            error={formik.touched.description && formik.errors.description}
                        />
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-100 hover:border-gray-300">
                            <input
                                type="file"
                                hidden
                                onChange={(e) => setImage(e.target.files?.[0] || null)}
                            />
                            <p>{t('select-image')}</p>
                        </label>
                    </div>

                    {/* Tab 2 - Location */}
                    <input type="radio" name="my_tabs_2" className="tab flex-1" aria-label={t('place-location')} />
                    <div className="tab-content border-base-300 bg-base-100 p-10">
                        <Custom_input
                            label={t('location-link')}
                            name="locationlink"
                            value={formik.values.locationlink}
                            onChange={formik.handleChange}
                        />
                        <Custom_input
                            label={t('latitude')}
                            name="lat"
                            value={formik.values.lat}
                            onChange={formik.handleChange}
                            error={formik.touched.lat && formik.errors.lat}
                        />
                        <Custom_input
                            label={t('longitude')}
                            name="lng"
                            value={formik.values.lng}
                            onChange={formik.handleChange}
                            error={formik.touched.lng && formik.errors.lng}
                        />
                    </div>

                    {/* Tab 3 - Settings */}
                    <input type="radio" name="my_tabs_2" className="tab flex-1" aria-label={t('place-settings')} />
                    <div className="tab-content border-base-300 bg-base-100 p-10">
                        <Custom_input
                            type="time"
                            label={t('start-work')}
                            name="timeStart"
                            value={formik.values.timeStart}
                            onChange={formik.handleChange}
                            error={formik.touched.timeStart && formik.errors.timeStart}
                        />
                        <Custom_input
                            type="time"
                            label={t('close-work')}
                            name="timeClosed"
                            value={formik.values.timeClosed}
                            onChange={formik.handleChange}
                            error={formik.touched.timeClosed && formik.errors.timeClosed}
                        />
                        <div className="mb-4">
                            <label className="block font-semibold mb-2">{t('work-days')}</label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                {weekDays.map((day) => (
                                    <label key={day} className="inline-flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            checked={daysOfWork.includes(day)}
                                            onChange={() => toggleDay(day)}
                                            className="checkbox"
                                        />
                                        <span>{t(day.toLowerCase())}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 mb-4">
                            <label className="font-semibold">{t('move-turn')}</label>
                            <input
                                type="checkbox"
                                className="toggle"
                                name="moveTurn"
                                checked={formik.values.moveTurn}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <Custom_input
                            label={t('estimated-time')}
                            name="estimateTime"
                            value={formik.values.estimateTime}
                            onChange={formik.handleChange}
                            error={formik.touched.estimateTime && formik.errors.estimateTime}
                        />

                    </div>



                    {/* tab 4 - services */}
                    <input type="radio" name="my_tabs_2" className="tab flex-1" aria-label={t('place-services')} />
                    <div className="tab-content border-base-300 bg-base-100 p-10">

                        <div className='flex flex-col md:flex-row gap-2 mb-5'>
                            <Custom_input label={t('service-title-en')} name="serviceTitleEn" value={formik.values.serviceTitleEn} onChange={formik.handleChange} />
                            <Custom_input label={t('service-title-ar')} name="serviceTitleAr" value={formik.values.serviceTitleAr} onChange={formik.handleChange} />
                            <Custom_input label={t('estimated-time')} name="serviceEstimatedTime" value={formik.values.serviceEstimatedTime} onChange={formik.handleChange} />
                        </div>

                        <button type="button" onClick={handleAddService} className="btn btn-outline btn-neutral mb-5">
                            <FaPlus />
                        </button>


                        <ul className="mb-5 space-y-2">
                            {services.map((service, index) => (
                                <li key={index} className="p-2 bg-gray-100 rounded shadow flex justify-between items-center">
                                    <div className="flex-1 flex flex-col">
                                        <strong>{t('title-en')}: {service.titleEn}</strong>
                                        <strong>{t('title-ar')}: {service.titleAr} </strong>
                                        <strong>{t('estimated-time')}: {service.estimatedTime} </strong>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveService(index)}
                                        className="btn btn-sm btn-error"
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </li>
                            ))}
                        </ul>



                        {loading ? <div className="loading loading-spinner loading-lg"></div> : <Custom_button title={t('save')} type="submit" />}
                    </div>






                </div>
            </form>
        </div>
    )
}

export default page