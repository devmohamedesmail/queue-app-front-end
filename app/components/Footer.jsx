'use client'
import React, { useContext } from 'react'
import { PlaceContext } from '../context/PlaceContext'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { api } from '../config/api';


export default function Footer() {


    const {places, settings} = useContext(PlaceContext)


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
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>


            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
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
