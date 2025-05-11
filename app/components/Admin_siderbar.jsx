import React, { useContext } from 'react'
import { PlaceContext } from '../context/PlaceContext'
import { api } from '@/app/config/api';
import Link from 'next/link';
import { IoChevronForwardSharp } from "react-icons/io5";

function Admin_siderbar({ isSidebarOpen, setIsSidebarOpen }) {


  const { settings } = useContext(PlaceContext)


  return (
    <>

      <aside
        className={`fixed md:static z-40 top-0 left-0 h-full w-60 bg-black p-4 transform transition-transform duration-300
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >

        <img src={`${api.baseUrl}uploads/${settings?.logo}`} className='w-18' alt="" />


        <ul>
          <li className='flex items-center justify-between gap-2 text-white p-2 hover:bg-gray-700 rounded-md cursor-pointer'>
            <Link href='/pages/admin/places' className='text-white'>Places</Link>
            <IoChevronForwardSharp />
          </li>
          <li className='flex items-center justify-between gap-2 text-white p-2 hover:bg-gray-700 rounded-md cursor-pointer'>
            <Link href='/pages/admin/users' className='text-white'>users sdf</Link>
            <IoChevronForwardSharp />
          </li>
          <li className='flex items-center justify-between gap-2 text-white p-2 hover:bg-gray-700 rounded-md cursor-pointer'>
            <Link href='/pages/admin/places' className='text-white'>Places</Link>
            <IoChevronForwardSharp />
          </li>

        </ul>









      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}


    </>
  )
}

export default Admin_siderbar