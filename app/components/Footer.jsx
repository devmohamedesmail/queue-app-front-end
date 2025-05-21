'use client'
import React, { useContext } from 'react'
import { PlaceContext } from '../context/PlaceContext'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { api } from '../config/api';
import { DataContext } from '../context/DataContext';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';


export default function Footer() {
    const { places, settings } = useContext(PlaceContext)
    const { pages } = useContext(DataContext)
    const { t, i18n } = useTranslation();




    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 pb-40">
            <aside>
                <img src={`${api.baseUrl}uploads/${settings?.logo}`} alt={settings?.nameEn} className='w-18' />
                <p>
                    {settings?.descriptionEn} <br />
                    {settings?.descriptionAr}
                </p>
            </aside>
           
           


            <nav>
                <h6 className="footer-title">Legal</h6>
                {pages && pages.map((item, index) => (
                    <Link href={`/pages/user/page/${item._id}`}>{i18n.language === "ar" ? item.title_ar : item.title_en}</Link>
                ))}
            </nav>
            <nav>
                <h6 className="footer-title">Contact</h6>
                <a className="link link-hover flex items-center"> <MdOutlineMailOutline /> <p className='mx-1'>{settings?.email}</p></a>
                <a className="link link-hover flex items-center"><FaPhone /> <p className='mx-1'>{settings?.phone}</p></a>
                <a className="link link-hover flex items-center"><IoLocationOutline /> <p className='mx-1'>{settings?.address}</p> </a>
            </nav>
        </footer>
    )
}
