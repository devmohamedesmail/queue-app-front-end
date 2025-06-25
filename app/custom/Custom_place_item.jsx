import React, { useContext } from 'react'
import { api } from '../config/api'
import Link from 'next/link'
import { FaLocationArrow } from "react-icons/fa";
import { PlaceContext } from '../context/PlaceContext';
import { useTranslation } from 'react-i18next';
import { BsQrCode } from "react-icons/bs";


export default function Custom_place_item({ place }) {

  const { settings } = useContext(PlaceContext)
  const { t } = useTranslation();
  return (
    <div className="rounded-xl bg-white shadow-sm hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-200 flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          src={place.image ? `${place.image}` : `${api.baseUrl}uploads/${settings.logo}`}
          alt={place.nameEn}
        />
        <Link href={`/pages/user/${place._id}`} className="absolute top-2 right-2 bg-black rounded-full p-2">
          <BsQrCode color="white" size={22} />
        </Link>
      </div>
      <div className="flex flex-col items-center p-5">
        <h2 className="text-lg font-semibold text-gray-800 text-center mb-2 text-sm h-18">{place.nameEn}</h2>
        <p className="text-gray-500 text-sm text-center mb-4 text-xs h-18">{place.addressEn}</p>
       
        <div className="flex w-full gap-2">
          <Link
            className="flex-1 text-xs flex items-center justify-center gap-2 py-2 rounded-lg bg-gradient-to-r from-main to-gray-700 text-white font-semibold shadow hover:from-blue-600 hover:to-indigo-700 transition"
            href={`/pages/user/services/${place._id}`}
          >
            {t('select-this-place')}
          </Link>
          <Link
            className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-second to-orange-600 shadow hover:from-green-600 hover:to-emerald-700 transition"
            href={place.locationlink}
            target="_blank"
            rel="noopener noreferrer"
            title={t('location')}
          >
            <FaLocationArrow color="white" size={18} />
          </Link>
        </div>
        {/* <Link
          className="mt-4 w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow hover:from-purple-600 hover:to-pink-600 transition"
          href={`/pages/user/${place._id}`}
        >
          <span className='text-sm'>{t('scan-qrcode')}</span>
          <BsQrCode color="white" size={20} />
        </Link> */}
      </div>
    </div>
  )
}
